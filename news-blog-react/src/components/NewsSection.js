import React from 'react';
import newsData from '../data/newsData';

const NewsSection = ({ category, onNewsClick }) => {
  const categoryData = newsData[category];

  const handleNewsClick = (news) => {
    if (onNewsClick) {
      onNewsClick(news);
    }
  };

  return (
    <section className="news-section">
      <h2>{category === 'domestic' ? 'Tin trong nước' : category === 'international' ? 'Tin ngoài nước' : 'Tin thể thao'}</h2>
      <div className="news-cards">
        {categoryData.map((news, index) => (
          <div className="card" key={index} onClick={() => handleNewsClick(news)}>
            <img src={news.image} alt={news.title} />
            <div className="card-content">
              <h3>{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
