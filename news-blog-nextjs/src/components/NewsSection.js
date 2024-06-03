import Link from 'next/link';
import newsData from '../data/newsData';

const NewsSection = ({ category }) => {
  const categoryData = newsData[category];

  return (
    <section className="news-section">
      <h2>{category === 'domestic' ? 'Tin trong nước' : (category === 'international' ? 'Tin ngoài nước' : 'Tin thể thao')}</h2>
      <div className="news-cards">
        {categoryData.map((news) => (
          <div className="card" key={news.id}>
            <Link href={`/newsDetail/${news.id}`}>
              <div>
                <img src={news.image} alt={news.title} />
                <div className="card-content">
                  <h3>{news.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
