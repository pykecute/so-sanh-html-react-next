import React from 'react';
import { newsData } from '../../data/newsData';
import { useRouter } from 'next/router';

const NewsDetailPage = ({ selectedNews }) => {
  const router = useRouter();

  if (!selectedNews) {
    return <div>Tin tức không tồn tại</div>;
  }

  return (
    <div>
      <h1>{selectedNews.title}</h1>
      <img src={selectedNews.image} alt={selectedNews.title} />
      <p>{selectedNews.content}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  let selectedNews = null;
  for (const category in newsData) {
    selectedNews = newsData[category].find(news => news.id === parseInt(id));
    if (selectedNews) {
      break;
    }
  }

  return { props: { selectedNews } };
}

export default NewsDetailPage;
