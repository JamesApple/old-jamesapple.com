module.exports = {
  siteMetadata: {
    name: 'James Apple',
    siteUrl: `https://www.jamesapple.com`
  },
  plugins: [
    `gatsby-plugin-offline`,
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'James Apple',
        short_name: 'James Apple',
        description: 'Software Engineering Blog of James Apple',
        start_url: '/',
        background_color: 'white',
        theme_color: 'black',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: false,
              showCaptions: true,
              wrapperStyle: 'background-color: red;',
              withWebp: { quality: 80 }
            }
          },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>>',
              aliases: { ruby: 'rb' },
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },

          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `teal`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jamesapple.com',
        sitemap: 'https://www.jamesapple.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/icon.png'
      }
    }
  ]
}
