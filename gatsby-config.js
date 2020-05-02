module.exports = {
  siteMetadata: {
    title: `Simplify`,
    description: `At Simplify we want to make information easily accessible. Find out how!`,
    author: `@simplify`,
    keywords: [`Simplify`],
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us19.list-manage.com/subscribe/post?u=073d88372b3dfefa149f29c20&amp;id=ea9f108c59",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simplify`,
        short_name: `Simplify`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
