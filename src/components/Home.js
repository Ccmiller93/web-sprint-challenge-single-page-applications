import React from "react";
import {Link} from "react-router-dom";

export default function Home(props){
    return (
        <div className="home">
            <section className="pizza-delivery">
                <h1>We have the bestest pizza</h1>
                <Link to="/pizza">
                    <button>Order Here</button>
                </Link>
            </section>
        </div>
    )
} 