import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import NewsDetail from './components/NewsDetail';

function App() {
  const [domesticVisible, setDomesticVisible] = useState(true);
  const [internationalVisible, setInternationalVisible] = useState(true);
  const [sportsVisible, setSportsVisible] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath === '/domestic.html') {
      setDomesticVisible(true);
      setInternationalVisible(false);
      setSportsVisible(false);
    } else if (currentPath === '/international.html') {
      setDomesticVisible(false);
      setInternationalVisible(true);
      setSportsVisible(false);
    } else if (currentPath === '/sports.html') {
      setDomesticVisible(false);
      setInternationalVisible(false);
      setSportsVisible(true);
    } else {
      setDomesticVisible(true);
      setInternationalVisible(true);
      setSportsVisible(true);
    }
  }, [currentPath]);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleBackClick = () => {
    setSelectedNews(null);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {selectedNews ? (
          <NewsDetail news={selectedNews} onBack={handleBackClick} />
        ) : (
          <>
            {domesticVisible && <NewsSection category="domestic" onNewsClick={handleNewsClick} />}
            {internationalVisible && <NewsSection category="international" onNewsClick={handleNewsClick} />}
            {sportsVisible && <NewsSection category="sports" onNewsClick={handleNewsClick} />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
