const path = require('path')

const createPostPages = (res, createPage) => {
  const postTemplate = path.resolve(`src/templates/postTemplate.tsx`)
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {}
    })
  })
}

const createPaginatedPostListingPages = (res, createPage) => {
  const postListTemplate = path.resolve(`src/templates/postListTemplate.tsx`)
  const postsPerPage = 6
  const posts = res.data.allMarkdownRemark.edges
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/posts' : `/posts/${i + 1}`,
      component: postListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pageCount: numPages,
        currentPage: i + 1
      }
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
    .then(res => {
      if (res.errors) return Promise.reject(res.errors)
      return res
    })
    .then(res => {
      createPostPages(res, createPage)
      return res
    })
    .then(res => {
      createPaginatedPostListingPages(res, createPage)
      return res
    })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}
