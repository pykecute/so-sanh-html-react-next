document.addEventListener('DOMContentLoaded', () => {
    const domesticNewsContainer = document.getElementById('domestic-news-cards');
    const internationalNewsContainer = document.getElementById('international-news-cards');
    const sportsNewsContainer = document.getElementById('sports-news-cards');

    const newsData = {
        domestic: [
            { title: "Vi phạm nồng độ cồn, tài xế xe công nghệ bỏ luôn phương tiện.", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mRb8c.img?w=768&h=512&m=6&x=120&y=120&s=280&d=280", content: "Nội dung tin tức số 1", showContent: false },
            { title: "Hai vợ chồng bị phạt 180 triệu đồng vì gây cháy rừng", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mQCXJ.img?w=768&h=576&m=6", content: "Nội dung tin tức số 2", showContent: false },
            { title: "Người dân kéo nhau đến ngân hàng rút tiền tiết kiệm trước hạn", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mXj2x.img?w=768&h=576&m=6", content: "Nội dung tin tức số 3", showContent: false }
        ],
        international: [
            { title: "Căng thẳng giữa Mỹ và Trung Quốc tăng cao", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mZ6bC.img?w=768&h=512&m=6", content: "Nội dung tin tức số 4", showContent: false },
            { title: "Cháy rừng khủng khiếp tại Úc", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1n1g9J.img?w=768&h=576&m=6", content: "Nội dung tin tức số 5" , showContent: false},
            { title: "Brexit và tác động đến kinh tế Anh", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1n3k5K.img?w=768&h=576&m=6", content: "Nội dung tin tức số 6" , showContent: false}
        ],
        sports: [
            { title: "Messi lập hat-trick trong trận đấu với Real Madrid", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1n5k9D.img?w=768&h=512&m=6", content: "Nội dung tin tức số 7" , showContent: false},
            { title: "Olympic Tokyo diễn ra thành công rực rỡ", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1n7g3L.img?w=768&h=576&m=6", content: "Nội dung tin tức số 8" , showContent: false},
            { title: "Đội tuyển Việt Nam vô địch AFF Cup", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1n9k7N.img?w=768&h=576&m=6", content: "Nội dung tin tức số 9" , showContent: false}
        ]
    };

    function createNewsCards(newsArray, container) {
        newsArray.forEach((news, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = news.image;
            image.alt = news.title;

            const title = document.createElement('h3');
            title.textContent = news.title;

            const content = document.createElement('p');
            content.textContent = news.content;

            const detailButton = document.createElement('a');
            detailButton.href = `detail.html?index=${index}`;
            detailButton.textContent = "Xem chi tiết";

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(content);
            card.appendChild(detailButton);

            container.appendChild(card);
        });
    }

    function loadNews(sectionId, newsArray) {
        const container = document.getElementById(sectionId);
        if (container) {
            createNewsCards(newsArray, container);
        }
    }

    function showContent(index) {
        // Tìm kiếm tin tức tương ứng trong dữ liệu
        const newsCategory = currentPath.replace('.html', '').substring(1);
        const news = newsData[newsCategory][index];
    
        // Cập nhật trạng thái hiển thị của nội dung
        news.showContent = true;
    
        // Hiển thị nội dung tin tức
        const newsDetailContainer = document.getElementById('news-detail');
        if (newsDetailContainer) {
            const newsDetailHTML = `
                <h2>${news.title}</h2>
                <img src="${news.image}" alt="${news.title}">
                <p>${news.content}</p>
            `;
            newsDetailContainer.innerHTML = newsDetailHTML;
        }
    }
    
    loadNews('domestic-news-cards', newsData.domestic);
    loadNews('international-news-cards', newsData.international);
    loadNews('sports-news-cards', newsData.sports);
});
