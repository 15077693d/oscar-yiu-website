import React from 'react';
import ProjectItem from '../project-item'
import { graphql, StaticQuery } from 'gatsby';
const ProjectIndex = () => {
    
    return (
        <StaticQuery query={indexProjectQuery} render={({ allMarkdownRemark }) => {
            const data = allMarkdownRemark.edges[0].node
            let project = {}
            project.content = data.frontmatter.description
            project.tags = data.frontmatter.tags
            project.title = data.frontmatter.title
            project.images = data.frontmatter.Images
            project.url = data.frontmatter.url
            return <ProjectItem project={project} haveBtn={true} />
          }
          } />
    );
};

const indexProjectQuery = graphql`
{
  allMarkdownRemark(limit: 1, filter: {frontmatter: {templateKey: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          title
          Images
          url
          tags {
            tag
            class
          }
          description
        }
        fields {
          slug
        }
      }
    }
  }
}
`

export default ProjectIndex;