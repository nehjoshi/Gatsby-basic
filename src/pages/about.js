import React from 'react'
import Layout from '../Components/Layout'
import * as styles from "../Styles/about.module.css";

export default function about() {
    return (
        <Layout>
            <div className={ styles.about }>
                <h1>This is about Gatsby JS!</h1><br/>
                <p>Gasby is a wonderful frontend solution for speed, SEO and ease of accessibility!</p><br/>
                <img src="/logo.svg" alt="The gatsby logo" style={{maxWidth: '20%'}}></img>
            </div>
        </Layout>
    )
}
