const js = require("@eslint/js")
const globals = require("globals")
const react = require("eslint-plugin-react")
const reactHooks = require("eslint-plugin-react-hooks")
const jsxA11y = require("eslint-plugin-jsx-a11y")

module.exports = [
  { ignores: ["public/", ".cache/", "node_modules/"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.js"],
    plugins: { "react-hooks": reactHooks },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Props are documented in comments; this is a small site, not a component library
      "react/prop-types": "off",
      // Transcripts are prose full of apostrophes and quotes, which JSX renders fine
      "react/no-unescaped-entities": "off",
      // Some transcript text contains deliberate non-breaking spaces
      "no-irregular-whitespace": ["error", { skipJSXText: true }],
    },
  },
]
