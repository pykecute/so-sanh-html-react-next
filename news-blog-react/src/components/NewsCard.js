import React from 'react';

const NewsCard = ({ news, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(news)}>
      <img src={news.image} alt={news.title} />
      <div className="card-content">
        <h3>{news.title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
