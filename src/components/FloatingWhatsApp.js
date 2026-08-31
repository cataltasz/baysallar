import React from 'react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const phoneNumber = '905321758512';
  const defaultMessage = encodeURIComponent('Merhaba Baysallar Mobilya, özel mobilya tasarımı ve fiyat teklifi hakkında bilgi almak istiyorum.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="floating-actions" aria-label="Hızlı İletişim">
      <a 
        href="tel:05321758512" 
        className="floating-btn floating-phone" 
        title="Hemen Ara: 0532 175 85 12"
        aria-label="Telefon ile Ara"
      >
        <i className="fa-solid fa-phone"></i>
        <span className="floating-label">Hemen Ara</span>
      </a>

      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-whatsapp" 
        title="WhatsApp'tan Yazın"
        aria-label="WhatsApp İletişim"
      >
        <span className="whatsapp-pulse"></span>
        <i className="fa-brands fa-whatsapp"></i>
        <span className="floating-label">WhatsApp Hızlı Teklif</span>
      </a>
    </div>
  );
}
