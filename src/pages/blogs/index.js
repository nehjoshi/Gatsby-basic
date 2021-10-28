import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../Components/Layout';
import * as styles from "../../Styles/projects.module.css";

export default function Notes({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const desc = data.websiteInfo.siteMetadata.description;

  return (
    <Layout>
      <h1 className={styles.heading}>Blogs</h1>
      <div className={styles.projects}>{projects.map(project => (
        <div className={styles.project}>
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <h3>{project.frontmatter.title}</h3>
          </Link>
          <h4>Tech Stack: {project.frontmatter.stack}</h4>
        </div>
      ))}</div>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{desc}</p>
    </Layout>
  )
}
export const query = graphql`
query projectQuery {
  projects :
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
      }
    }
  }
  
  websiteInfo: site {
    siteMetadata {
      description
    }
  }
}

`