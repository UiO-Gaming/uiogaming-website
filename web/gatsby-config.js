module.exports = {
  pathPrefix: `uiogaming-website`,
  siteMetadata: {
    title: `UiO Gaming`,
    description: `En hobbyforening som ønsker skape et sosialt miljø rundt gaming og E-sport på UiO`,
    author: `LBlend`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `mmqlu667`,
        dataset: `production`,
        graphqlTag: `default`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UiO Gaming`,
        short_name: `UiO Gaming`,
        start_url: `/`,
        background_color: `#171520`,
        theme_color: `#E2231A`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
