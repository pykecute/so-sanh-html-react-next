import React, { useState } from 'react';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import NewsDetail from '../components/NewsDetail';

const DomesticPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleBackClick = () => {
    setSelectedNews(null);
  };

  return (
    <div>
      <Header />
      <main>
        {selectedNews ? (
          <NewsDetail news={selectedNews} onBackClick={handleBackClick} />
        ) : (
          <NewsSection category="domestic" onNewsClick={handleNewsClick} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DomesticPage;
