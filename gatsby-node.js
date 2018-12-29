const path = require('path')

const { NODE_ENV } = process.env
const isProd = NODE_ENV !== 'development'
const postsPerPage = 6

const createPostPages = (res, createPage) => {
  const postTemplate = path.resolve(`src/templates/postTemplate.tsx`)
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // Hide drafts
    if (isProd && node.frontmatter.draft) return
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {}
    })
  })
}

const createPaginatedPostListingPages = (res, createPage) => {
  const postListTemplate = path.resolve(`src/templates/postListTemplate.tsx`)
  const posts = res.data.allMarkdownRemark.edges
  const livePosts = isProd ? posts.filter(({ node }) => node.frontmatter.draft) : posts
  const numPages = Math.ceil(livePosts.length / postsPerPage)

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

const createPaginatedTagListingPage = (tag, taggedPosts, createPage) => {
  const numPages = Math.ceil(taggedPosts.length / postsPerPage)
  const postListTemplate = path.resolve(`src/templates/postListTagTemplate.tsx`)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/tags/${tag}` : `/tags/${tag}/${i + 1}`,
      component: postListTemplate,
      context: {
        tag: tag,
        limit: postsPerPage,
        skip: i * postsPerPage,
        pageCount: numPages,
        currentPage: i + 1
      }
    })
  })
}

const createTagListingPages = (res, createPage) => {
  const posts = res.data.allMarkdownRemark.edges
  const livePosts = isProd ? posts.filter(({ node }) => node.frontmatter.draft) : posts

  let tags = {}
  posts.forEach(post => {
    const newTags = post.node.frontmatter.tags
    if (newTags) {
      newTags.forEach(tag => (tags[tag] = tag))
    }
  })

  console.log(tags)

  Object.values(tags).forEach(tag => {
    taggedPosts = livePosts.filter(post => post.node.frontmatter.tags.includes(tag))
    createPaginatedTagListingPage(tag, taggedPosts, createPage)
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
              draft
              tags
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
    .then(res => {
      createTagListingPages(res, createPage)
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
