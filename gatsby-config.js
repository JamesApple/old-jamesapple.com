module.exports = {
  siteMetadata: {
    name: 'James Apple'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'post',
        path: `${__dirname}/posts`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`
  ]
}
