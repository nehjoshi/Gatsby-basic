import React from 'react'
import Navbar from './Navbar'
import "../Styles/global.css";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Gatsby Copyright 2021</p>
            </footer>
        </div>
    )
}
