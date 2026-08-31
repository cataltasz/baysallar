import React from 'react';
import './footerContact.css';
import Button from './Button';

export default function FooterContact() {
  const whatsappMessage = encodeURIComponent('Merhaba Baysallar Mobilya, evim için özel ölçü mobilya fiyatı almak istiyorum.');

  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <span className="cta-banner-badge">
              <i className="fa-solid fa-sparkles"></i> Ücretsiz Keşif & Projelendirme
            </span>
            <h2 className="cta-banner-title">
              Evinize Özel Mobilyayı Birlikte Tasarlayalım
            </h2>
            <p className="cta-banner-desc">
              Konya Karatay Sanayi atölyemizde 30 yıllık tecrübemizle hayalinizdeki mutfak, yatak odası, vestiyer ve TV ünitelerini üretiyoruz.
            </p>
          </div>

          <div className="cta-banner-actions">
            <Button
              buttonStyle="btn--accent"
              buttonSize="btn--large"
              href={`https://wa.me/905321758512?text=${whatsappMessage}`}
              target="_blank"
              icon={<i className="fa-brands fa-whatsapp"></i>}
            >
              WhatsApp'tan Teklif Al
            </Button>

            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              href="tel:05321758512"
              icon={<i className="fa-solid fa-phone"></i>}
            >
              0532 175 85 12
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
