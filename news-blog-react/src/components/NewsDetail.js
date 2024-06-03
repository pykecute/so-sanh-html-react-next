import React from 'react';

const NewsDetail = ({ news, onBack }) => {
  return (
    <div className="news-detail">
      <button onClick={onBack}>Quay lại</button>
      <h2>{news.title}</h2>
      <img src={news.image} alt={news.title} />
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetail;
