import React from 'react';
import './AboutSection.css';
import Button from './Button';

export default function AboutSection() {
  return (
    <section className="about-section" id="hakkimizda">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image & Stats */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img 
                src="/images/mutfak.jpg" 
                alt="Baysallar Mobilya Atölye ve İmalat" 
                className="about-main-img"
              />
              <div className="about-experience-badge">
                <span className="exp-number">30+</span>
                <span className="exp-text">Yıllık Ustalık & Tecrübe</span>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="about-stats-row">
              <div className="stat-card">
                <span className="stat-val">1000+</span>
                <span className="stat-label">Mutlu Müşteri</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">%100</span>
                <span className="stat-label">Özel Ölçü İmalat</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">Konya</span>
                <span className="stat-label">Karatay Sanayi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="about-text-content">
            <span className="section-badge">
              <i className="fa-solid fa-gem"></i> Hakkımızda
            </span>
            <h2 className="about-title">
              Eviniz İçin Kalite, Estetik ve Fonksiyonelliği Buluşturuyoruz
            </h2>
            <p className="about-lead">
              <strong>Baysallar Mobilya & Dekorasyon</strong>, Konya Karatay Sanayi Sitesi'ndeki modern donanımlı atölyesinde, 30 yılı aşkın mesleki tecrübesiyle ev ve iş yerleriniz için kişiye özel mobilya çözümleri sunmaktadır.
            </p>
            <p className="about-paragraph">
              Standart fabrika ölçülerine bağlı kalmadan, evinizin mimari yapısına ve sizin zevkinize en uygun mutfak dolapları, gardıroplar, vestiyerler ve TV üniteleri üretiyoruz. Kaliteli MDF lam, dayanıklı aksesuarlar ve usta ellerden çıkan işçilik ile yaşam alanlarınıza değer katıyoruz.
            </p>

            {/* Check Features */}
            <ul className="about-checklist">
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <span><strong>Doğrudan İmalatçı Avantajı:</strong> Aracı olmadan doğrudan atölyeden kaliteli ve uygun fiyatlı üretim.</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <span><strong>Milimetrik Uyum:</strong> Evinize tam oturan, ölü alanları değerlendiren akıllı depolama tasarımları.</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <span><strong>1. Sınıf Aksesuarlar:</strong> Frenli kapak ve çekmece mekanizmalarıyla uzun ömürlü kullanım.</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <span><strong>Satış Sonrası Destek:</strong> Montajdan sonra da her zaman arkasında durduğumuz işçilik garantisi.</span>
              </li>
            </ul>

            <div className="about-action-row">
              <Button 
                buttonStyle="btn--primary" 
                buttonSize="btn--medium" 
                href="/iletisim"
                icon={<i className="fa-solid fa-comments"></i>}
              >
                Ücretsiz Keşif Randevusu Al
              </Button>
              <a href="tel:05321758512" className="about-call-link">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <small>Hemen Danışın</small>
                  <strong>0532 175 85 12</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
