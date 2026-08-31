import React, { useState } from 'react';
import './contact.css';

export default function ContactContainer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Mutfak Dolabı',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Lütfen adınızı ve telefon numaranızı giriniz.');
      return;
    }

    const text = encodeURIComponent(
      `Merhaba Baysallar Mobilya,\n\n*İsim:* ${formData.name}\n*Telefon:* ${formData.phone}\n*İlgilenilen Kategori:* ${formData.category}\n*Mesaj / Ölçü Notu:* ${formData.message || 'Özel teklif almak istiyorum.'}`
    );

    window.open(`https://wa.me/905321758512?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page-wrapper">
      {/* Contact Page Hero Header */}
      <section className="contact-page-hero">
        <div className="container">
          <span className="section-badge">
            <i className="fa-solid fa-headset"></i> İletişim & Konum
          </span>
          <h1 className="contact-page-title">Bize Ulaşın & Keşif İsteyin</h1>
          <p className="contact-page-subtitle">
            Eviniz için özel mobilya projenizi birlikte planlayalım. Konya Karatay Sanayi atölyemize uğrayabilir veya telefon/WhatsApp üzerinden hemen teklif alabilirsiniz.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Content */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Direct Info Cards */}
            <div className="contact-info-col">
              <h2 className="contact-block-title">İletişim Bilgilerimiz</h2>
              <p className="contact-block-desc">
                Sorularınız, ölçü ve keşif talepleriniz için aşağıdaki iletişim kanallarından bize dilediğiniz zaman ulaşabilirsiniz.
              </p>

              <div className="contact-cards-list">
                {/* Phone Card */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-card-details">
                    <h4>Telefon Numaralarımız</h4>
                    <div className="contact-card-links">
                      <a href="tel:05321758512"><strong>0532 175 85 12</strong> (M. Emrullah Baysal)</a>
                      <a href="tel:03322514278"><strong>0332 251 42 78</strong> (Atölye)</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="contact-card-item highlight-wa">
                  <div className="contact-card-icon wa">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="contact-card-details">
                    <h4>WhatsApp Hızlı Danışma</h4>
                    <p>Çizim veya örnek fotoğraflarınızı WhatsApp üzerinden gönderip anında yaklaşık fiyat alabilirsiniz.</p>
                    <a
                      href="https://wa.me/905321758512"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-wa-btn"
                    >
                      <i className="fa-brands fa-whatsapp"></i> WhatsApp'ta Sohbet Başlat
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-card-details">
                    <h4>Atölye & İmalat Adresi</h4>
                    <p>Karatay Sanayi Sitesi Saraycık Sok. Ek Blokları D:124, 42100 Selçuklu / KONYA</p>
                    <a
                      href="https://www.google.com/maps/place/Baysallar+Mobilya/@37.9146678,32.5068977,17z/data=!3m1!4b1!4m5!3m4!1s0x14d08f96c9ef21ff:0xf81af3312b112d00!8m2!3d37.9146636!4d32.5090864"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-link-btn"
                    >
                      <i className="fa-solid fa-diamond-turn-right"></i> Google Haritalar'da Yol Tarifi Al
                    </a>
                  </div>
                </div>

                {/* Email & Hours */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="contact-card-details">
                    <h4>Çalışma Saatleri & E-Posta</h4>
                    <p><strong>Pzt - Cmt:</strong> 08:30 - 19:00 | <strong>Pazar:</strong> Randevu ile</p>
                    <a href="mailto:baysallarmobilya@gmail.com" className="email-link">
                      <i className="fa-solid fa-envelope"></i> baysallarmobilya@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="contact-social-box">
                <h4>Sosyal Medyada Bizi Takip Edin:</h4>
                <div className="social-links-row">
                  <a
                    href="https://instagram.com/baysallarmobilya42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn instagram"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/Baysallar-Mobilya-1413134405628504/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn facebook"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Quote Form */}
            <div className="contact-form-col">
              <div className="form-card">
                <div className="form-card-header">
                  <span className="form-badge">Hızlı Teklif</span>
                  <h3>Fiyat & Keşif Formu</h3>
                  <p>Bilgilerinizi doldurun, projeniz için en kısa sürede size geri dönüş yapalım.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <div className="form-group">
                    <label htmlFor="name">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefon Numaranız *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Örn: 05xx xxx xx xx"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">İlgilendiğiniz Mobilya Türü</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="Mutfak Dolabı">Mutfak Dolabı</option>
                      <option value="Yatak Odası & Gardırop">Yatak Odası & Gardırop</option>
                      <option value="TV Ünitesi & Duvar Paneli">TV Ünitesi & Duvar Paneli</option>
                      <option value="Vestiyer & Portmanto">Vestiyer & Portmanto</option>
                      <option value="Banyo & Lavabo Dolabı">Banyo & Lavabo Dolabı</option>
                      <option value="Sedir & Şark Köşesi">Sedir & Şark Köşesi</option>
                      <option value="Genç Odası">Genç Odası</option>
                      <option value="Komple Ev Mobilyası">Komple Ev / Daire Mobilyası</option>
                      <option value="Diğer Özel Proje">Diğer Özel Tasarım / Proje</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mesajınız / Mekan Ölçü Notu</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Mobilyanın özellikleri, yaklaşık ölçüleri veya sormak istedikleriniz..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp İle Teklif İste</span>
                  </button>

                  <p className="form-privacy-note">
                    <i className="fa-solid fa-lock"></i> Bilgileriniz yalnızca fiyat teklifi ve iletişim amacıyla kullanılır.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Section */}
          <div className="contact-map-section">
            <div className="map-card-header">
              <div className="map-header-info">
                <h3><i className="fa-solid fa-map-location-dot"></i> Atölye Konumumuz</h3>
                <p>Karatay Sanayi Sitesi, Saraycık Sokak Ek Blokları No:124 Selçuklu / KONYA</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Baysallar+Mobilya/@37.9146678,32.5068977,17z/data=!3m1!4b1!4m5!3m4!1s0x14d08f96c9ef21ff:0xf81af3312b112d00!8m2!3d37.9146636!4d32.5090864"
                target="_blank"
                rel="noopener noreferrer"
                className="map-nav-btn"
              >
                <i className="fa-solid fa-location-arrow"></i> Navigasyonu Başlat
              </a>
            </div>
            <div className="map-iframe-wrapper">
              <iframe
                title="Baysallar Mobilya Konum Haritası"
                src="https://maps.google.com/maps?q=Baysallar%20Mobilya,%20Karatay%20Sanayi%20Sitesi,%20Konya&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
