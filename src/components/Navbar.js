import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [click]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const whatsappMessage = encodeURIComponent("Merhaba Baysallar Mobilya, mobilya yaptırmak istiyorum, fiyat teklifi alabilir miyim?");

  return (
    <>
      {/* Top Contact Bar */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <span className="topbar-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Karatay Sanayi Sitesi, Selçuklu / KONYA</span>
            </span>
            <span className="topbar-item d-none-mobile">
              <i className="fa-solid fa-clock"></i>
              <span>Pzt - Cmt: 08:30 - 19:00</span>
            </span>
          </div>

          <div className="topbar-right">
            <a href="tel:05321758512" className="topbar-link">
              <i className="fa-solid fa-phone"></i>
              <span>0532 175 85 12</span>
            </a>
            <a href="tel:03322514278" className="topbar-link d-none-mobile">
              <i className="fa-solid fa-phone-volume"></i>
              <span>0332 251 42 78</span>
            </a>
            <a 
              href={`https://wa.me/905321758512?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-wa-badge"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp Teklif</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="logo-icon-wrapper">
              <i className="fa-solid fa-couch"></i>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">BAYSALLAR</span>
              <span className="logo-subtitle">Mobilya & Dekorasyon</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu">
            <Link 
              to="/" 
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Anasayfa
            </Link>
            <Link 
              to="/urunler" 
              className={`nav-link ${isActive("/urunler") ? "active" : ""}`}
            >
              Ürünlerimiz
            </Link>
            <Link 
              to="/iletisim" 
              className={`nav-link ${isActive("/iletisim") ? "active" : ""}`}
            >
              İletişim
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="navbar-cta-group">
            <a 
              href={`https://wa.me/905321758512?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-cta-btn"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Hızlı Teklif Al</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className={`hamburger-btn ${click ? "open" : ""}`} 
            onClick={handleClick}
            aria-label={click ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={click}
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-drawer-overlay ${click ? "active" : ""}`} 
        onClick={closeMobileMenu}
      />
      
      <aside className={`mobile-drawer ${click ? "open" : ""}`}>
        <div className="drawer-header">
          <Link to="/" className="drawer-logo" onClick={closeMobileMenu}>
            <div className="logo-icon-wrapper small">
              <i className="fa-solid fa-couch"></i>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">BAYSALLAR</span>
              <span className="logo-subtitle">Mobilya & Dekorasyon</span>
            </div>
          </Link>
          <button 
            className="drawer-close-btn" 
            onClick={closeMobileMenu}
            aria-label="Kapat"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="drawer-body">
          <ul className="drawer-nav-list">
            <li>
              <Link 
                to="/" 
                className={`drawer-nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-house"></i>
                <span>Anasayfa</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/urunler" 
                className={`drawer-nav-link ${isActive("/urunler") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-layer-group"></i>
                <span>Ürünlerimiz</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/iletisim" 
                className={`drawer-nav-link ${isActive("/iletisim") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-phone-volume"></i>
                <span>Bize Ulaşın</span>
              </Link>
            </li>
          </ul>

          <div className="drawer-contact-section">
            <h4 className="drawer-section-title">Hızlı İletişim</h4>
            <a href="tel:05321758512" className="drawer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>0532 175 85 12</strong>
                <small>Hemen Ara (M. Emrullah Baysal)</small>
              </div>
            </a>
            <a href="tel:03322514278" className="drawer-contact-item">
              <i className="fa-solid fa-phone-office fa-phone"></i>
              <div>
                <strong>0332 251 42 78</strong>
                <small>Atölye / Sabit Hat</small>
              </div>
            </a>
            <a 
              href={`https://wa.me/905321758512?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="drawer-wa-btn"
              onClick={closeMobileMenu}
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp Teklif Hattı</span>
            </a>
          </div>

          <div className="drawer-footer-info">
            <p><i className="fa-solid fa-location-dot"></i> Karatay Sanayi Sitesi Saraycık Sok. Ek Blokları No:124 Selçuklu / KONYA</p>
          </div>
        </div>
      </aside>
    </>
  );
}
