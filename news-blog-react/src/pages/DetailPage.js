import React from 'react';
import Header from '../components/Header';
import NewsDetail from '../components/NewsDetail';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom'; // Thêm dòng này nếu sử dụng React Router

function DetailPage() {
  // Lấy id của tin tức từ URL nếu sử dụng React Router
  // const { id } = useParams(); 

  // Lấy dữ liệu tin tức từ API hoặc data
  const news = {
    id: 1,
    title: "Tiêu đề tin tức",
    image: "url_hinh_anh.jpg",
    content: "Nội dung tin tức chi tiết..."
  };

  return (
    <div>
      <Header />
      <main>
        <NewsDetail news={news} />
      </main>
      <Footer />
    </div>
  );
}

export default DetailPage;
