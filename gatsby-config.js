module.exports = {
  siteMetadata: {
    name: 'JamesApple.com',
    tagline: 'Real cool stuff'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'post',
        path: `${__dirname}/posts`
      }
    },
    `gatsby-transformer-remark`
  ]
}
