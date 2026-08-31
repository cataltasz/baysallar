import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function ProductSlider({ imgs, categoryName }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Zoom & Pan State for Lightbox
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const mediaHolderRef = useRef(null);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    resetZoom();
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    resetZoom();
    setViewerIsOpen(false);
  };

  const nextImage = useCallback(() => {
    resetZoom();
    setCurrentImageIndex((prev) => (prev + 1) % imgs.length);
  }, [imgs.length, resetZoom]);

  const prevImage = useCallback(() => {
    resetZoom();
    setCurrentImageIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  }, [imgs.length, resetZoom]);

  // Zoom in / out functions
  const zoomIn = () => {
    setScale((prev) => Math.min(3.5, Number((prev + 0.3).toFixed(2))));
  };

  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(1, Number((prev - 0.3).toFixed(2)));
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Mouse wheel zoom handler on image holder
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomSpeed = 0.2;
    if (e.deltaY < 0) {
      // Zoom IN
      setScale((prev) => Math.min(3.5, Number((prev + zoomSpeed).toFixed(2))));
    } else {
      // Zoom OUT
      setScale((prev) => {
        const next = Math.max(1, Number((prev - zoomSpeed).toFixed(2)));
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Double click to toggle zoom (1x -> 2x -> 1x)
  const handleDoubleClick = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  // Mouse drag handlers for panning when zoomed
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach non-passive wheel event listener to allow preventDefault
  useEffect(() => {
    const holder = mediaHolderRef.current;
    if (holder && viewerIsOpen) {
      holder.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        holder.removeEventListener('wheel', handleWheel);
      };
    }
  }, [viewerIsOpen, scale]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!viewerIsOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key === '0') resetZoom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewerIsOpen, nextImage, prevImage, resetZoom]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (viewerIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [viewerIsOpen]);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(imgs.length, prev + 8));
  };

  const currentPhoto = imgs[currentImageIndex] || {};
  const currentPhotoTitle = currentPhoto.title || `${categoryName} Özel Tasarım Model`;
  const whatsappQuery = encodeURIComponent(
    `Merhaba Baysallar Mobilya, "${currentPhotoTitle}" (${categoryName}) modeli hakkında fiyat ve ölçü bilgisi almak istiyorum.`
  );

  return (
    <div className="product-gallery-wrapper">
      {/* Product Image Grid */}
      <div className="gallery-grid">
        {imgs.slice(0, visibleCount).map((item, index) => (
          <div 
            className="gallery-card" 
            key={item.src + index}
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-card-img-wrap">
              <img
                src={item.src}
                alt={item.title || `${categoryName} Model ${index + 1}`}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <div className="gallery-zoom-btn">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
                <span className="gallery-overlay-hint">Büyüt & İncele</span>
              </div>
            </div>
            <div className="gallery-card-info">
              <h4 className="gallery-card-title">{item.title || `${categoryName} Model ${index + 1}`}</h4>
              <span className="gallery-card-badge">{categoryName}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < imgs.length && (
        <div className="gallery-load-more">
          <button className="gallery-more-btn" onClick={showMore}>
            <i className="fa-solid fa-plus"></i>
            <span>Daha Fazla Göster ({imgs.length - visibleCount} Model Daha)</span>
          </button>
        </div>
      )}

      {/* Custom Modern Lightbox Modal with Wheel Zoom */}
      {viewerIsOpen && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Lightbox Header */}
            <div className="lightbox-header">
              <div className="lightbox-title-group">
                <span className="lightbox-category">{categoryName}</span>
                <h3 className="lightbox-title">{currentPhotoTitle}</h3>
              </div>

              {/* Lightbox Zoom Controls & Close */}
              <div className="lightbox-header-actions">
                <div className="lightbox-zoom-toolbar">
                  <button 
                    className="zoom-btn" 
                    onClick={zoomOut} 
                    disabled={scale <= 1}
                    title="Uzaklaştır (-)"
                    aria-label="Uzaklaştır"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="zoom-level-badge" title="Mevcut Yakınlaştırma">
                    {Math.round(scale * 100)}%
                  </span>
                  <button 
                    className="zoom-btn" 
                    onClick={zoomIn} 
                    disabled={scale >= 3.5}
                    title="Yakınlaştır (+)"
                    aria-label="Yakınlaştır"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  {scale > 1 && (
                    <button 
                      className="zoom-reset-btn" 
                      onClick={resetZoom}
                      title="Sıfırla"
                    >
                      <i className="fa-solid fa-rotate-left"></i> Sıfırla
                    </button>
                  )}
                </div>

                <button 
                  className="lightbox-close-btn" 
                  onClick={closeLightbox}
                  aria-label="Kapat"
                  title="Kapat (Esc)"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* Lightbox Main Image & Navigation */}
            <div 
              className={`lightbox-media-wrap ${scale > 1 ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
              ref={mediaHolderRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Prev Button */}
              <button 
                className="lightbox-nav-btn prev" 
                onClick={prevImage}
                aria-label="Önceki Görsel"
                title="Önceki (Sol Ok)"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              {/* Image Holder with Transform Scale & Pan */}
              <div 
                className="lightbox-image-holder"
                onDoubleClick={handleDoubleClick}
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhotoTitle}
                  className="lightbox-main-img"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                    cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                  }}
                  draggable={false}
                />
              </div>

              {/* Next Button */}
              <button 
                className="lightbox-nav-btn next" 
                onClick={nextImage}
                aria-label="Sonraki Görsel"
                title="Sonraki (Sağ Ok)"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              {/* Zoom Scroll Hint Badge */}
              <div className="lightbox-scroll-hint">
                <i className="fa-solid fa-arrows-up-down"></i>
                <span>Fare tekerleği (scroll) ile yakınlaştırın • Çift tıkla büyütün</span>
              </div>
            </div>

            {/* Lightbox Footer Actions */}
            <div className="lightbox-footer">
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {imgs.length} Model
              </div>

              <a
                href={`https://wa.me/905321758512?text=${whatsappQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lightbox-wa-action"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Bu Modeli WhatsApp'tan Sor</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}