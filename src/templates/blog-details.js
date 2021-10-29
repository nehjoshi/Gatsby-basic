import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../Components/Layout'
import { graphql } from 'gatsby';
import * as styles from '../Styles/details.module.css';

export default function BlogDetails({ data }) {
    const { html } = data.markdownRemark;
    const { title, stack, thumb } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.heading}>{title}</h1>
                <h4 className={styles.techstack}>{stack}</h4>
                <div className={styles.image}>
                    <GatsbyImage image={getImage(thumb)} />
                </div>

                <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
            </div>
        </Layout>
    )
}
export const query = graphql`
query projectQuery1($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        thumb {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 400)
          }
        }
      }
    }
  }
  
`