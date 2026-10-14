// Runs axe-core against every page of the built site (public/) and fails if it
// finds any accessibility violations. Usage: npm run build && npm run test:a11y
const http = require("http")
const fs = require("fs")
const path = require("path")
const { chromium } = require("playwright")

const ROOT = path.join(__dirname, "..", "public")
const AXE = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8")
const WIDTHS = [1440, 390]

// Every built page: public/index.html, public/tim/index.html, ..., plus 404.html
const pages = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && fs.existsSync(path.join(ROOT, entry.name, "index.html")))
  .filter(entry => !["page-data", "static", "fonts", "dev-404-page"].includes(entry.name))
  .map(entry => `/${entry.name}/`)
pages.unshift("/")
pages.push("/404.html")

const server = http.createServer((req, res) => {
  let file = path.join(ROOT, decodeURIComponent(req.url.split("?")[0]))
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html")
  if (!fs.existsSync(file)) {
    res.statusCode = 404
    return res.end()
  }
  fs.createReadStream(file).pipe(res)
})

server.listen(0, async () => {
  const { port } = server.address()
  const browser = await chromium.launch()
  let failures = 0

  for (const width of WIDTHS) {
    for (const page of pages) {
      const tab = await browser.newPage({ viewport: { width, height: 900 } })
      await tab.goto(`http://localhost:${port}${page}`, { waitUntil: "networkidle" })
      // Reveal fade-in transcript text so contrast is checked on its final colors
      await tab.addStyleTag({ content: ".js .p-wrapper *, .fade * { opacity: 1 !important; animation: none !important; }" })
      await tab.addScriptTag({ content: AXE })
      const { violations } = await tab.evaluate(() => window.axe.run(document))
      for (const violation of violations) {
        failures += violation.nodes.length
        console.log(`✗ ${page} @${width}px  ${violation.id}: ${violation.help}`)
        violation.nodes.slice(0, 3).forEach(node => console.log(`    ${node.target.join(" ")}`))
      }
      await tab.close()
    }
  }

  await browser.close()
  server.close()
  console.log(failures ? `\n${failures} accessibility problem(s) found` : `✓ No accessibility violations on ${pages.length} pages at ${WIDTHS.join("px and ")}px`)
  process.exit(failures ? 1 : 0)
})
