import React from 'react'

const ItemListContainer = ({greeting, slogan}) => {
    return (
        <div className="hero-container">
            <div className="hero-image"> 
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                <h1 className="greeting">{greeting}</h1>
                <h2 className="slogan">{slogan}</h2>
                <button className="hero-button">¡A brillar, mi amor!</button>
            </div>
        </div>
    )
}

export default ItemListContainer