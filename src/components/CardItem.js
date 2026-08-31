import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, title, description, badge, path }) {
  return (
    <div className="category-card">
      <Link className="category-card-link" to={path || '/urunler'}>
        <div className="category-card-image-wrap">
          <img
            className="category-card-img"
            alt={title || 'Baysallar Mobilya Ürün'}
            src={src}
            loading="lazy"
          />
          <div className="category-card-overlay" />
          {badge && <span className="category-card-badge">{badge}</span>}
        </div>

        <div className="category-card-content">
          <div className="category-card-header">
            <h3 className="category-card-title">{title}</h3>
            <span className="category-card-arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
          {description && <p className="category-card-desc">{description}</p>}
          <span className="category-card-action">Modelleri İncele</span>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;
