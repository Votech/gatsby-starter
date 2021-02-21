// Configure your site here

module.exports = {
  siteMetadata: {
    title: `Gatsby starter`,
    Description: `Gatsby starter for fast setup`,
    author: `Wojciech Mietlinski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
}
