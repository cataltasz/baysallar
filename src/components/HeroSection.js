import React, { useState, useEffect } from 'react';
import Button from './Button';
import './HeroSection.css';

function HeroSection({ imgs }) {
  const imagesList = imgs && imgs.length > 0 
    ? imgs 
    : ['/images/home/1.jpg', '/images/home/2.jpg', '/images/home/3.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesList.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [imagesList.length]);

  const whatsappMessage = encodeURIComponent('Merhaba Baysallar Mobilya, özel mobilya tasarımı ve fiyat teklifi almak istiyorum.');

  return (
    <section className="hero-section" id="anasayfa">
      {/* Background Slideshow with Cross-Fade */}
      <div className="hero-bg-wrapper">
        {imagesList.map((imgSrc, idx) => (
          <div
            key={imgSrc + idx}
            className={`hero-bg-slide ${idx === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imgSrc})` }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Dark Vignette Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-content container">
        <div className="hero-badge">
          <i className="fa-solid fa-medal"></i>
          <span>Konya Karatay Sanayi • 30+ Yıllık Tecrübe</span>
        </div>

        <h1 className="hero-title">
          Hayalinizdeki Yaşam Alanlarını <span className="hero-highlight">Birlikte Tasarlayalım</span>
        </h1>

        <p className="hero-description">
          Mutfak dolaplarından yatak odalarına, vestiyerden TV ünitelerine kadar evinize özel ölçülerle, birinci sınıf malzeme ve kusursuz işçilikle üretiyoruz.
        </p>

        {/* Feature Pills */}
        <div className="hero-features">
          <div className="hero-feature-item">
            <i className="fa-solid fa-ruler-combined"></i>
            <span>Ücretsiz Keşif & 3D Çizim</span>
          </div>
          <div className="hero-feature-item">
            <i className="fa-solid fa-tree"></i>
            <span>1. Sınıf MDF & Masif</span>
          </div>
          <div className="hero-feature-item">
            <i className="fa-solid fa-truck-fast"></i>
            <span>Ücretsiz Montaj & Teslimat</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <Button
            buttonStyle="btn--accent"
            buttonSize="btn--large"
            href="/urunler"
            icon={<i className="fa-solid fa-couch"></i>}
          >
            Ürün Çeşitlerimizi Keşfet
          </Button>

          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            href={`https://wa.me/905321758512?text=${whatsappMessage}`}
            target="_blank"
            icon={<i className="fa-brands fa-whatsapp"></i>}
          >
            WhatsApp'tan Teklif Al
          </Button>
        </div>

        {/* Slider Navigation Dots */}
        <div className="hero-dots">
          {imagesList.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slayt ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
