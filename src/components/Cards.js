import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const publicUrl = process.env.PUBLIC_URL || '';
  const categories = [
    {
      src: publicUrl + '/images/mutfak.jpg',
      title: 'Mutfak Dolapları',
      description: 'Akrilik, lake, membran ve masif kapaklı modern & ergonomik mutfak çözümleri.',
      badge: 'Popüler',
      path: '/urunler'
    },
    {
      src: publicUrl + '/images/gardrop.jpg',
      title: 'Yatak Odası Takımları',
      description: 'Geniş depolama alanlı sürgülü/kapaklı gardıroplar, şifonyer ve özel ölçü karyolalar.',
      badge: 'Özel Ölçü',
      path: '/urunler'
    },
    {
      src: publicUrl + '/images/tv.jpg',
      title: 'TV Ünitesi & Duvar Panelleri',
      description: 'Salonunuza şıklık katan modern LED aydınlatmalı ve ahşap çıtalı TV üniteleri.',
      badge: 'Modern',
      path: '/urunler'
    },
    {
      src: publicUrl + '/images/vestiyer.jpg',
      title: 'Vestiyer & Portmanto',
      description: 'Antre ve koridorlarınıza tam uyumlu, bol raflı ve aynalı fonksiyonel vestiyerler.',
      badge: 'Kullanışlı',
      path: '/urunler'
    },
    {
      src: publicUrl + '/images/daha.jpg',
      title: 'Banyo & Lavabo Dolapları',
      description: 'Suya ve neme dayanıklı lake & ahşap banyo dolabı ve çamaşır makinesi kabinleri.',
      badge: 'Dayanıklı',
      path: '/urunler'
    },
    {
      src: publicUrl + '/images/d.jpg',
      title: 'Sedir, Şark Köşesi & Özel Projeler',
      description: 'Geleneksel şark köşesi sedirleri, ofis mobilyaları, giyinme odaları ve kapı imalatı.',
      badge: 'Kişiye Özel',
      path: '/urunler'
    }
  ];

  return (
    <section className="categories-section" id="urunler">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <i className="fa-solid fa-layer-group"></i> Ürün Gruplarımız
          </span>
          <h2 className="section-title">Evinizin Her Köşesine Özel Mobilya</h2>
          <p className="section-subtitle">
            Konya Karatay Sanayi atölyemizde yüksek kalite standartlarında, mekanınıza özel milimetrik ölçülerle ürettiğimiz temel ürün gruplarımız.
          </p>
        </div>

        {/* Categories Responsive Grid */}
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <CardItem
              key={cat.title + idx}
              src={cat.src}
              title={cat.title}
              description={cat.description}
              badge={cat.badge}
              path={cat.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
