import { Link } from 'gatsby';
import React from 'react';
import Layout from '../Components/Layout.js';
import * as styles from '../Styles/home.module.css';

const IndexPage = () => {
  document.title = "First!";
  return (
    <Layout>
      <section className={styles.main}>
        <h1>Welcome to gatsby!</h1>
        <Link to="/about" className={styles.button}>Read More</Link>
      </section>
    </Layout>

  )
}
export default IndexPage;

