import React from 'react'
import Layout from '../Components/Layout'
import * as styles from "../Styles/about.module.css";
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function About({ data }) {
    const image = getImage(data.file);
    return (
        <Layout>
            <div className={ styles.about }>
                <h1>This is about Gatsby JS!</h1><br/>
                <p>Gasby is a wonderful frontend solution for speed, SEO and ease of accessibility!</p><br/>
                {/* <img src="/logo.svg" alt="The gatsby logo" style={{maxWidth: '20%'}}></img> */}
                <GatsbyImage image={image} alt="The gatsby logo"/>
            </div>
        </Layout>
    )
}
export const aboutQuery = graphql`
query MyQuery {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED) 
      }
    }
  }  
`