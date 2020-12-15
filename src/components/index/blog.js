import React from 'react';
import BlogCard from '../blog-card'
import { graphql, StaticQuery } from 'gatsby';
const BlogIndex = () => {
    return (
        <StaticQuery query={indexBlogQuery} render={({ allMarkdownRemark }) => {
            const data = allMarkdownRemark.edges
            let blogs = []
            for (let i=0; i<2;i++){
              let blog = {}
              blog.id=data[i].node.id
              blog.image=data[i].node.frontmatter.thumbnail
              blog.title=data[i].node.frontmatter.title
              blog.summary=data[i].node.frontmatter.description
              blog.category=data[i].node.frontmatter.category
              blog.tags=data[i].node.frontmatter.tags
              blog.created_at=data[i].node.frontmatter.date
              blogs.push(blog)
            }
            return blogs.map(blog => <BlogCard key={`blog_${blog.id}`} blog={blog} />) 
          }
          } />
    );
};

const indexBlogQuery = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog"}}}, limit: 2, sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          tags {
            tag
          }
          date(formatString: "YYYY年MM月DD日")
          category
          description
          thumbnail
        }
        fields {
          slug
        }
        id
      }
    }
  }
}

`

export default BlogIndex;