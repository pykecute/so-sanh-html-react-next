import React from 'react';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <NewsSection category="domestic" />
        <NewsSection category="international" />
        <NewsSection category="sports" />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
