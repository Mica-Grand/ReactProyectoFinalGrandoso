import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({greeting, slogan}) => {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-image"> 
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <h1 className="greeting">{greeting}</h1>
                    <h2 className="slogan">{slogan}</h2>
                    <Link to={`/category/all`} >
                        <button className="hero-button">Let's shine!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home