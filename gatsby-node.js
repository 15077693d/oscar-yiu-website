/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // project
  const projectsResult = await graphql(
    `
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY年MM月DD日")
              category
              description
              Images
              url
              tags {
                class
                tag
              }
            }
            id
          }
        }
      }
    }
    `
  )

  if (projectsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return Promise.reject(projectsResult.errors)
  }
  let projectPagesData = []
  let projectsData = {
    tags: [],
    projects: []
  }

  let allTagSet = new Set()
  projectsResult.data.allMarkdownRemark.edges.forEach(item => {
    item.node.frontmatter.tags.forEach(
      tag => allTagSet.add(tag.tag)
    )
  })
  projectsData.tags = Array.from(allTagSet)
  projectsResult.data.allMarkdownRemark.edges.forEach(item => {
    let project = {}
    project.tagTexts = []
    item.node.frontmatter.tags.forEach(
      tag => project.tagTexts.push(tag.tag)
    )
    project.content = item.node.frontmatter.description
    project.title = item.node.frontmatter.title
    project.tags = item.node.frontmatter.tags
    project.images = item.node.frontmatter.Images
    project.url = item.node.frontmatter.url
    project.id = item.node.id
    projectsData.projects.push(project)
  })
  projectsData.tags.forEach(tag => {
    projectPagesData.push({
      path: tag,
      project: {
        tags: Array.from(allTagSet),
        projects: projectsData.projects.filter(project => project.tagTexts.includes(tag))
      }
    }
    )
  })

  const projectsTemplate = path.resolve('src/template/projectsTemplate.js')
  createPage({
    path: `projects`,
    component: projectsTemplate,
    context: projectsData
  })

  projectPagesData.forEach(page => {
    createPage({
      path: `projects/${page.path}`,
      component: projectsTemplate,
      context: page.project
    })
  })

  // blogs
  const blogsResult = await graphql(
    `
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog"}}}, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY年MM月DD日")
              category
              description
              tags {
                tag
              }
              thumbnail
            }
            id
          }
        }
      }
    }
    `
  )
  if (blogsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return Promise.reject(blogsResult.errors)
  }
  const blogsTemplate = path.resolve('src/template/blogsTemplate.js')
  const postPerPage = 4
  const totalPage = Math.floor(blogsResult.data.allMarkdownRemark.edges.length / postPerPage)
  let totalCategory = new Set()
  let totalTags = new Set()
  const data = blogsResult.data.allMarkdownRemark.edges
  let blogs = []
  for (let i = 0; i < data.length; i++) {
    let blog = {}
    blog.id = data[i].node.id
    blog.image = data[i].node.frontmatter.thumbnail
    blog.title = data[i].node.frontmatter.title
    blog.summary = data[i].node.frontmatter.description
    blog.category = data[i].node.frontmatter.category
    blog.tags = data[i].node.frontmatter.tags
    blog.tagTexts = data[i].node.frontmatter.tags.map(tag => tag.tag)
    blog.created_at = data[i].node.frontmatter.date
    blogs.push(blog)
    // add item to total
    totalCategory.add(blog.category)
    blog.tags.forEach(
      tag => totalTags.add(tag.tag)
    )
  }
  totalCategory = Array.from(totalCategory)
  totalTags = Array.from(totalTags)
  let blogPagesData = []
  for (let i = 0; i <= totalPage; i++) {
    blogPagesData.push({
      totalCategory: totalCategory,
      page: i,
      blogs: blogs.slice(i * postPerPage, (i + 1) * postPerPage),
      prevPage: i - 1 < 0 ? `/blogs/0` : `/blogs/${i - 1}`,
      nextPage: i + 1 > totalPage ? `/blogs/${totalPage}` : `/blogs/${1 + i}`
    })
  }

  blogPagesData.forEach(blogPageData => createPage({
    path: `blogs/${blogPageData.page}`,
    component: blogsTemplate,
    context: blogPageData
  }))

  totalCategory.forEach(
    category => {
      let categoryBlogs = blogs.filter(blog => blog.category === category)
      let categoryTotalPage = Math.floor(categoryBlogs.length / postPerPage)
      let categoryBlogPagesData = []
      for (let i = 0; i <= totalPage; i++) {
        categoryBlogPagesData.push({
          totalCategory: totalCategory,
          page: i,
          blogs: categoryBlogs.slice(i * postPerPage, (i + 1) * postPerPage),
          prevPage: i - 1 < 0 ? `/blogs/category/${category}/0` : `/blogs/category/${category}/${i - 1}`,
          nextPage: i + 1 > categoryTotalPage ? `/blogs/category/${category}/${categoryTotalPage}` : `/blogs/category/${category}/${1 + i}`
        })
      }
      categoryBlogPagesData.forEach(blogPageData => createPage({
        path: `blogs/category/${category}/${blogPageData.page}`,
        component: blogsTemplate,
        context: blogPageData
      }))
    }
  )
  totalTags.forEach(
    tag => {
      let tagBlogs = blogs.filter(blog => blog.tagTexts.includes(tag))
      let tagTotalPage = Math.floor(tagBlogs.length / postPerPage)
      let tagBlogPagesData = []
      for (let i = 0; i <= totalPage; i++) {
        tagBlogPagesData.push({
          totalCategory: totalCategory,
          page: i,
          blogs: tagBlogs.slice(i * postPerPage, (i + 1) * postPerPage),
          prevPage: i - 1 < 0 ? `/blogs/tag/${tag}/0` : `/blogs/tag/${tag}/${i - 1}`,
          nextPage: i + 1 > tagTotalPage ? `/blogs/tag/${tag}/${tagTotalPage}` : `/blogs/tag/${tag}/${1 + i}`
        })
      }
      tagBlogPagesData.forEach(blogPageData => createPage({
        path: `blogs/tag/${tag}/${blogPageData.page}`,
        component: blogsTemplate,
        context: blogPageData
      }))
    }
  )

  // blog
  const blogResult = await graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog"}}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            category
            description
            tags {
              tag
            }
          }
          id
          html
        }
      }
    }
  }
  `)
  const blogTemplate = path.resolve('src/template/blogTemplate.js')
  blogResult.data.allMarkdownRemark.edges.forEach(item => {
    const data = {
      title: item.node.frontmatter.title,
      category: item.node.frontmatter.category,
      tags: item.node.frontmatter.tags.map(tag=>tag.tag),
      created_at: item.node.frontmatter.date,
      tableOfContent: item.node.frontmatter.tableOfContent,
      content: item.node.html,
    }
    createPage({
      path: `blog/${item.node.id}`,
      component: blogTemplate,
      context: data
    })
  })
}