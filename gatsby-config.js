module.exports = {
  siteMetadata: {
    title: `ESQUIF`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `romanDevFront`,
    bio: `bloubiboulga`,
    authorImage: `https://img-19.ccm2.net/aJScABa_qBQwp4s7EtJ3qKh22Hg=/230x/8a4cb6424f40412a8c3f5ceaf6aac207/ccm-encyclopedia/5hHuBfsx-hires-s-.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: require(`./src/theme/antd.js`),
        // Needed to load antdesign less files
        javascriptEnabled: true,
      },
    },
    {
      resolve: `gatsby-plugin-antd`,
      options: {
        // Activate less files
        style: true,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
