import Link from 'next/link';

const Header = () => (
  <header>
    <h1>News Blog</h1>
    <nav className="menu">
      <ul>
        <li><Link href="/">Trang chủ</Link></li>
        <li><Link href="/domestic">Tin trong nước</Link></li>
        <li><Link href="/international">Tin ngoài nước</Link></li>
        <li><Link href="/sports">Tin thể thao</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
