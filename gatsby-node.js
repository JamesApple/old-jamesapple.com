const path = require('path')
const { NODE_ENV } = process.env
const IS_PROD = NODE_ENV !== 'development'
const POSTS_PER_PAGE = 6


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
    .then(query => (query.errors ? Promise.reject(query.errors) : query))
    .then(query => query.data.allMarkdownRemark.edges.map(e => e.node))
    .then(posts => {
      createPostPages(posts, createPage)
      createPaginatedPostListingPages(posts, createPage)
      createTagListingPages(posts, createPage)
    })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}

const pageCount = posts => Math.ceil(posts.length / POSTS_PER_PAGE)
const pagePath = (prefix, index) => (index === 0 ? prefix : `${prefix}/${index + 1}`)
const isLive = post => (IS_PROD ? !post.frontmatter.draft : true)

function createPostPages(posts, createPage) {
  posts.forEach(post => {
    if (isLive(post)) {
      createPage({
        path: post.frontmatter.path,
        component: path.resolve(`src/templates/postTemplate.tsx`),
        context: {}
      })
    }
  })
}

function createPaginatedPostListingPages(posts, createPage) {
  const livePosts = posts.filter(isLive)

  Array.from({ length: pageCount(livePosts) }).forEach((_, pageNumber) => {
    createPage({
      path: pagePath('/posts', pageNumber),
      component: path.resolve(`src/templates/postListTemplate.tsx`),
      context: {
        limit: POSTS_PER_PAGE,
        skip: pageNumber * POSTS_PER_PAGE,
        pageCount: pageCount(livePosts),
        currentPage: pageNumber + 1
      }
    })
  })
}

function createPaginatedTagListingPage(tag, taggedPosts, createPage) {
  const numPages = pageCount(taggedPosts)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/tags/${tag}` : `/tags/${tag}/${i + 1}`,
      component: path.resolve(`src/templates/postListTagTemplate.tsx`),
      context: {
        tag: tag,
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        pageCount: numPages,
        currentPage: i + 1
      }
    })
  })
}

function createTagListingPages(posts, createPage) {
  const livePosts = posts.filter(isLive)

  let tags = {}
  livePosts.forEach(post => {
    const newTags = post.frontmatter.tags
    if (newTags) {
      newTags.forEach(tag => (tags[tag] = tag))
    }
  })

  Object.values(tags).forEach(tag => {
    taggedPosts = livePosts.filter(post => post.frontmatter.tags.includes(tag))
    createPaginatedTagListingPage(tag, taggedPosts, createPage)
  })
}

