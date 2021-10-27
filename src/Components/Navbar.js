import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {

    const data = useStaticQuery(graphql`
        query siteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }

    `);
    const { title } = data.site.siteMetadata;
    return (
        <nav>
            <h3>{title}</h3>
            <ul className="links">
                <li><Link to="/" style={{ color: 'inherit' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: 'inherit' }}>About</Link></li>
            </ul>
        </nav>
    )
}
