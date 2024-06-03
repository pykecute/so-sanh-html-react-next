const NewsDetail = ({ news }) => (
    <div className="news-detail">
      <img src={news.image} alt={news.title} />
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
  
  export default NewsDetail;
  