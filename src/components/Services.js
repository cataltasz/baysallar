import React from 'react';
import './services.css';

export default function Services() {
  const serviceSteps = [
    {
      step: '01',
      icon: 'fa-solid fa-ruler-combined',
      title: 'Ücretsiz Keşif & Ölçüm',
      description: 'Evinize veya iş yerinize gelerek lazer metre ile mekanınıza tam uyacak hassas ölçüleri alıyoruz.'
    },
    {
      step: '02',
      icon: 'fa-solid fa-pen-ruler',
      title: '3D Tasarım & Modelleme',
      description: 'İmalata başlamadan önce renk ve malzeme seçenekleriyle mobilyanızı 3 boyutlu olarak projelendiriyoruz.'
    },
    {
      step: '03',
      icon: 'fa-solid fa-hammer',
      title: '1. Sınıf İmalat & İşçilik',
      description: 'Karatay Sanayi atölyemizde kaliteli MDF lam, frenli mekanizmalar ve 30 yıllık tecrübeyle üretiyoruz.'
    },
    {
      step: '04',
      icon: 'fa-solid fa-truck-fast',
      title: 'Temiz & Kusursuz Montaj',
      description: 'Belirlenen tarihte güvenle teslim ediyor, kendi uzman ekibimizle kusursuz ve titiz montaj yapıyoruz.'
    }
  ];

  return (
    <section className="services-section" id="hizmetler">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <i className="fa-solid fa-screwdriver-wrench"></i> Hizmet Standartlarımız
          </span>
          <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
          <p className="section-subtitle">
            İlk ölçümden anahtar teslim montaja kadar şeffaf, güvenilir ve yüksek kaliteli 4 aşamalı imalat sürecimiz.
          </p>
        </div>

        {/* Services / Process Grid */}
        <div className="services-grid">
          {serviceSteps.map((item, idx) => (
            <div className="service-card" key={item.step + idx}>
              <div className="service-step-num">{item.step}</div>
              <div className="service-icon-box">
                <i className={item.icon}></i>
              </div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
