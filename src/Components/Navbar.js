import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h3>Gatsby!</h3>
            <ul className="links">
                <li><Link to="/" style={{color: 'inherit'}}>Home</Link></li>
                <li><Link to="/about" style={{color: 'inherit'}}>About</Link></li>
            </ul>
        </nav>
    )
}
