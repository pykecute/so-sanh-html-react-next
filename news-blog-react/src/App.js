import React from 'react';
import './styles.css';

import Article from './components/Article';

const App = () => {
    const newsData = [
        { title: "Vi phạm nồng độ cồn, tài xế xe công nghệ bỏ luôn phương tiện.", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mRb8c.img?w=768&h=512&m=6&x=120&y=120&s=280&d=280" },
        { title: "Hai vợ chồng bị phạt 180 triệu đồng vì gây cháy rừng", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mQCXJ.img?w=768&h=576&m=6" },
        
    ];
    return (
        <div>
            <header>
                <h1>News Blog</h1>
            </header>
            <main>
                {newsData.map((news, index) => (
                    <Article key={index} title={news.title} image={news.image} />
                ))}
            </main>
            <footer>
                <p>&copy; 2024 News Blog</p>
            </footer>
        </div>
    );
}

export default App;
