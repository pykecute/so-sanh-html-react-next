import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>News Blog</h1>
      <nav className="menu">
        <ul>
          <li><a href="index.html">Trang chủ</a></li>
          <li><a href="domestic.html">Tin trong nước</a></li>
          <li><a href="international.html">Tin ngoài nước</a></li>
          <li><a href="sports.html">Tin thể thao</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
