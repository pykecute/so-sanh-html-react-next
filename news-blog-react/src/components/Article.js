import React from 'react';

const Article = ({ title, image }) => {
    return (
        <article>
            <div className="card">
            <img src={image} alt="News Image"/>
            
            <div className="card-content">
            <h2>{title}</h2>
            </div>
        </div>
        </article>
    );
}

export default Article;
