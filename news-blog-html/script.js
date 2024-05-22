document.addEventListener('DOMContentLoaded', () => {
    const newsCardsContainer = document.getElementById('news-cards');
    
    const newsData = [
        { title: "Vi phạm nồng độ cồn, tài xế xe công nghệ bỏ luôn phương tiện.", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mRb8c.img?w=768&h=512&m=6&x=120&y=120&s=280&d=280" },
        { title: "Hai vợ chồng bị phạt 180 triệu đồng vì gây cháy rừng", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mQCXJ.img?w=768&h=576&m=6" },
        
    ];
    let newsCardHTML = '';
    newsData.forEach(news => {
        newsCardHTML += `
            <div class="card">
                <img src="${news.image}" alt="News Image">
                <div class="card-content">
                    <h2>${news.title}</h2>
                </div>
            </div>
        `;
    });
    
    newsCardsContainer.innerHTML = newsCardHTML;
});