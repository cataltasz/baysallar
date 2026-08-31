import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent('Merhaba Baysallar Mobilya, bilgi almak istiyorum.');

  return (
    <footer className="footer-root" id="footer">
      <div className="container">
        {/* Main Footer 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & About */}
          <div className="footer-col footer-brand-col">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <i className="fa-solid fa-couch"></i>
              </div>
              <div className="footer-logo-text">
                <span className="brand-name">BAYSALLAR</span>
                <span className="brand-sub">Mobilya & Dekorasyon</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Konya Karatay Sanayi Sitesi'ndeki atölyemizde 30 yılı aşkın tecrübemizle eviniz ve iş yeriniz için 1. sınıf işçilikle özel ölçü mobilya üretiyoruz.
            </p>
            <div className="footer-badge-item">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Kalite & Müşteri Memnuniyeti Odaklı</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Hızlı Bağlantılar</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Anasayfa</Link></li>
              <li><Link to="/urunler">Ürünlerimiz & Galeri</Link></li>
              <li><Link to="/iletisim">Bize Ulaşın</Link></li>
              <li><a href="/#hizmetler">Hizmet Sürecimiz</a></li>
              <li><a href="/#hakkimizda">Hakkımızda & Tecrübemiz</a></li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="footer-col">
            <h3 className="footer-col-title">Ürün Kategorileri</h3>
            <ul className="footer-links-list">
              <li><Link to="/urunler">Mutfak Dolapları</Link></li>
              <li><Link to="/urunler">Yatak Odası & Gardırop</Link></li>
              <li><Link to="/urunler">TV Ünitesi & Duvar Paneli</Link></li>
              <li><Link to="/urunler">Vestiyer & Portmanto</Link></li>
              <li><Link to="/urunler">Banyo & Lavabo Dolabı</Link></li>
              <li><Link to="/urunler">Sedir & Şark Köşesi</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Location */}
          <div className="footer-col footer-contact-col">
            <h3 className="footer-col-title">İletişim & Konum</h3>
            <ul className="footer-contact-items">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Karatay Sanayi Sitesi Saraycık Sok. Ek Blokları D:124, Selçuklu / KONYA</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:05321758512">0532 175 85 12 (Emrullah Baysal)</a>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume"></i>
                <a href="tel:03322514278">0332 251 42 78 (Atölye)</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:baysallarmobilya@gmail.com">baysallarmobilya@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} <strong>Baysallar Mobilya & Dekorasyon</strong>. Tüm hakları saklıdır.
          </p>

          <div className="footer-social-icons">
            <a
              href={`https://wa.me/905321758512?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle wa"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com/baysallarmobilya42"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle ig"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/Baysallar-Mobilya-1413134405628504/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle fb"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="mailto:baysallarmobilya@gmail.com"
              className="social-circle mail"
              aria-label="E-Posta"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="tel:05321758512"
              className="social-circle phone"
              aria-label="Telefon"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
