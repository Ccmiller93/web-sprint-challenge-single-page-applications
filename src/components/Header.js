import React from "react";

export default function Header(props){
    return (
        <header>
            <h1 className="logo">LAMBDA EATS</h1>
            <ul className="links">
                <a href="/">
                    <li><h2>Home</h2></li>
                </a>
                <a href="/help">
                    <li><h2>Help</h2></li>
                </a>
            </ul>
        </header>
    )
} 