import React, { useEffect, useState, useCallback, useRef } from 'react';
import ProductSlider from './ProductSlider';
import './product.css';
import { fetchPhotos } from './util/CloudinaryService';

// Curated high quality gallery fallback images for each category
const DEFAULT_CATEGORY_IMAGES = {
  mutfak: [
    { src: '/images/mutfak.jpg', title: 'Modern Ada Mutfak & Akrilik Dolaplar' },
    { src: '/images/home/1.jpg', title: 'Lake Boyalı Beyaz Klasik Mutfak' },
    { src: '/images/home/2.jpg', title: 'Ahşap Dokulu Antrasit Kulpsuz Mutfak' },
    { src: '/images/home/3.jpg', title: 'Doğal Ahşap & Mermer Tezgahlı Mutfak' },
    { src: '/images/daha.jpg', title: 'Kompakt Özel Ölçü Mutfak Tasarımı' }
  ],
  sedir: [
    { src: '/images/d.jpg', title: 'Geleneksel Şark Köşesi Ahşap Sedir' },
    { src: '/images/daha.jpg', title: 'Modern Minderli Sandıklı Sedir Takımı' },
    { src: '/images/home/2.jpg', title: 'Balkon & Teras İçin Masif Ahşap Sedir' }
  ],
  yatak: [
    { src: '/images/gardrop.jpg', title: 'Aynalı Sürgülü Gardırop & Yatak Odası' },
    { src: '/images/home/3.jpg', title: 'Aydınlatmalı Cam Kapaklı Giyinme Dolabı' },
    { src: '/images/daha.jpg', title: 'Özel Ölçü Karyola Başlığı & Komodin' },
    { src: '/images/home/1.jpg', title: 'Modern Şifonyer & Makyaj Masası' }
  ],
  genc: [
    { src: '/images/home/2.jpg', title: 'Çalışma Masalı Fonksiyonel Genç Odası' },
    { src: '/images/gardrop.jpg', title: 'Ranzalı & Bol Dolaplı Çocuk Odası' },
    { src: '/images/home/1.jpg', title: 'Kitaplıklı Genç Çalışma Ünitesi' }
  ],
  vestiyer: [
    { src: '/images/vestiyer.jpg', title: 'Aynalı & Gizli LED Işıklı Portmanto' },
    { src: '/images/daha.jpg', title: 'Gömme Giriş Vestiyer & Ayakkabılık' },
    { src: '/images/home/3.jpg', title: 'Oturma Alanlı Modern Koridor Dolabı' }
  ],
  banyo: [
    { src: '/images/daha.jpg', title: 'Asma Lavabo Dolabı & Aynalı Dolap' },
    { src: '/images/home/1.jpg', title: 'Çamaşır Makinesi Gizleme Dolabı' },
    { src: '/images/mutfak.jpg', title: 'Suya Dayanıklı Lake Banyo Mobilyası' }
  ],
  tv: [
    { src: '/images/tv.jpg', title: 'Ahşap Çıtalı LED Işıklı TV Ünitesi' },
    { src: '/images/home/2.jpg', title: 'Mermer Desenli & Raflı Duvar Paneli' },
    { src: '/images/home/3.jpg', title: 'Geniş Çekmeceli Modern TV Konsolu' }
  ],
  diger: [
    { src: '/images/d.jpg', title: 'Kişiye Özel Ahşap İç Oda Kapıları' },
    { src: '/images/mutfak.jpg', title: 'Ofis Çalışma Masası & Dosya Dolabı' },
    { src: '/images/gardrop.jpg', title: 'Özel Ölçü Kiler & Depolama Dolabı' }
  ]
};

const PRODUCT_CATEGORIES = [
  { tag: 'mutfak', text: 'Mutfak Dolapları', icon: 'fa-solid fa-kitchen-set' },
  { tag: 'yatak', text: 'Yatak Odası', icon: 'fa-solid fa-bed' },
  { tag: 'tv', text: 'TV Üniteleri', icon: 'fa-solid fa-tv' },
  { tag: 'vestiyer', text: 'Vestiyerler', icon: 'fa-solid fa-door-closed' },
  { tag: 'sedir', text: 'Sedir & Şark Köşesi', icon: 'fa-solid fa-couch' },
  { tag: 'banyo', text: 'Banyo Mobilyası', icon: 'fa-solid fa-bath' },
  { tag: 'genc', text: 'Genç Odası', icon: 'fa-solid fa-user-graduate' },
  { tag: 'diger', text: 'Özel Projeler', icon: 'fa-solid fa-shapes' }
];

export default function ProductContainer() {
  const [selectedType, setSelectedType] = useState(PRODUCT_CATEGORIES[0]);
  const [currImgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Horizontal scroll arrows state for category slider
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const tabsScrollRef = useRef(null);

  const checkScrollLimits = useCallback(() => {
    const el = tabsScrollRef.current;
    if (el) {
      const hasLeft = el.scrollLeft > 10;
      const hasRight = el.scrollLeft < (el.scrollWidth - el.clientWidth - 15);
      setCanScrollLeft(hasLeft);
      setCanScrollRight(hasRight);
    }
  }, []);

  useEffect(() => {
    const el = tabsScrollRef.current;
    if (el) {
      checkScrollLimits();
      el.addEventListener('scroll', checkScrollLimits, { passive: true });
      window.addEventListener('resize', checkScrollLimits);
      return () => {
        el.removeEventListener('scroll', checkScrollLimits);
        window.removeEventListener('resize', checkScrollLimits);
      };
    }
  }, [checkScrollLimits]);

  const scrollTabs = (direction) => {
    if (tabsScrollRef.current) {
      const amount = direction === 'left' ? -260 : 260;
      tabsScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const getImgs = useCallback(async (typeObj) => {
    setLoading(true);
    const tag = typeObj.tag.toLowerCase();
    const defaultList = DEFAULT_CATEGORY_IMAGES[tag] || DEFAULT_CATEGORY_IMAGES.mutfak;

    try {
      const fetched = await fetchPhotos('dmy3bfthr', tag);
      if (fetched && Array.isArray(fetched) && fetched.length > 0) {
        const cloudinaryList = fetched.map((img, idx) => ({
          width: img.width / 2,
          height: img.height / 2,
          src: `https://res.cloudinary.com/dmy3bfthr/image/upload/${img.public_id}`,
          title: `${typeObj.text} Model ${idx + 1}`
        }));
        // Merge fetched and curated defaults
        setImgs([...cloudinaryList, ...defaultList]);
      } else {
        setImgs(defaultList);
      }
    } catch (err) {
      console.log('Cloudinary fetch notice, using local showcase images:', err);
      setImgs(defaultList);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getImgs(PRODUCT_CATEGORIES[0]);
  }, [getImgs]);

  const onSelect = (typeObj) => {
    setSelectedType(typeObj);
    getImgs(typeObj);
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Baysallar Mobilya, ${selectedType.text} kategorisindeki modelleriniz için özel ölçü ve fiyat teklifi almak istiyorum.`
  );

  return (
    <div className="product-page-wrapper">
      {/* Page Hero Header */}
      <section className="product-page-hero">
        <div className="container">
          <span className="section-badge">
            <i className="fa-solid fa-couch"></i> Ürün Portföyümüz
          </span>
          <h1 className="product-page-title">Özel İmalat Mobilya Kataloğu</h1>
          <p className="product-page-subtitle">
            Konya Karatay Sanayi atölyemizde ürettiğimiz örnek işlerimizi inceleyin. Beğendiğiniz model veya kendi özel çiziminiz için hemen fiyat teklifi alın.
          </p>
        </div>
      </section>

      {/* Category Tabs & Gallery */}
      <section className="product-catalog-section">
        <div className="container">
          {/* Scrollable Category Filter Tabs with Clear Arrows and Fades */}
          <div className="category-slider-wrapper">
            <div className="category-slider-header">
              <span className="category-slider-hint">
                <i className="fa-solid fa-hand-pointer"></i> Kategorileri kaydırarak tüm modelleri inceleyin:
              </span>
              <div className="category-arrows-group">
                <button
                  type="button"
                  className={`category-nav-arrow left ${canScrollLeft ? 'active' : 'disabled'}`}
                  onClick={() => scrollTabs('left')}
                  aria-label="Önceki Kategoriler"
                  title="Sola Kaydır"
                  disabled={!canScrollLeft}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className={`category-nav-arrow right ${canScrollRight ? 'active pulse' : 'disabled'}`}
                  onClick={() => scrollTabs('right')}
                  aria-label="Sonraki Kategoriler"
                  title="Sağa Kaydır"
                  disabled={!canScrollRight}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className={`category-tabs-container ${canScrollLeft ? 'has-left-fade' : ''} ${canScrollRight ? 'has-right-fade' : ''}`}>
              {/* Left Scroll Trigger Button */}
              {canScrollLeft && (
                <button
                  type="button"
                  className="category-floating-arrow left"
                  onClick={() => scrollTabs('left')}
                  aria-label="Sola Kaydır"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              )}

              <div className="category-tabs-scroll" ref={tabsScrollRef}>
                {PRODUCT_CATEGORIES.map((type) => {
                  const isSelected = selectedType.tag === type.tag;
                  return (
                    <button
                      className={`category-tab-btn ${isSelected ? 'active' : ''}`}
                      key={type.tag}
                      onClick={() => onSelect(type)}
                      type="button"
                    >
                      <i className={type.icon}></i>
                      <span>{type.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Scroll Trigger Button */}
              {canScrollRight && (
                <button
                  type="button"
                  className="category-floating-arrow right"
                  onClick={() => scrollTabs('right')}
                  aria-label="Sağa Kaydır"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              )}
            </div>
          </div>

          {/* Active Category Meta Bar */}
          <div className="category-meta-bar">
            <div className="category-meta-info">
              <h2>{selectedType.text}</h2>
              <span>({currImgs.length} Model Listeleniyor)</span>
            </div>
            <a
              href={`https://wa.me/905321758512?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="category-ask-btn"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Bu Kategori İçin Teklif İste</span>
            </a>
          </div>

          {/* Gallery Content Area */}
          <div className="catalog-content-area">
            {loading ? (
              <div className="gallery-loader">
                <div className="spinner-border" />
                <p>Modeller yükleniyor...</p>
              </div>
            ) : currImgs.length < 1 ? (
              <div className="gallery-empty">
                <i className="fa-solid fa-images"></i>
                <p>Bu kategoride henüz görsel bulunmuyor.</p>
              </div>
            ) : (
              <ProductSlider imgs={currImgs} categoryName={selectedType.text} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
