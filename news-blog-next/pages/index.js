import Head from 'next/head';
import Article from '../components/Article';
import styles from '../styles/Home.module.css';
import NewsCard from '../components/NewsCard';
export default function Home() {
    const newsData = [
        { title: "Vi phạm nồng độ cồn, tài xế xe công nghệ bỏ luôn phương tiện.", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mRb8c.img?w=768&h=512&m=6&x=120&y=120&s=280&d=280" },
        { title: "Hai vợ chồng bị phạt 180 triệu đồng vì gây cháy rừng", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mQCXJ.img?w=768&h=576&m=6" },
        
    ];
    return (
        <div className={styles.container}>
            <Head>
                <title>News Blog - NextJS</title>
            </Head>
            <header className={styles.header}>
                <h1>News Blog</h1>
            </header>
            <main className={styles.main}>
                {newsData.map((news, index) => (
                    <NewsCard key={index} title={news.title} image={news.image} />
                ))}
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 News Blog</p>
            </footer>
        </div>
    );
}
