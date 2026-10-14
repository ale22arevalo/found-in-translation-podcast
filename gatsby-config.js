/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Found in Translation Podcast`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 75,
          placeholder: `none`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    // Interview transcripts: one MDX file per episode in src/episodes,
    // turned into pages by gatsby-node.js
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `episodes`, path: `${__dirname}/src/episodes` },
    },
    // Photos used in the transcripts, looked up by path from the MDX files
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
  ],
}
