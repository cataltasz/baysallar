import React from 'react'
import './services.css';

export default function Services() {
    return (
        <div className="services" id="hizmetler">
            <h1>Hizmetlerimiz</h1>
        <div className="services-container">
            <div className="service-item">
                <div className="service-item-wrapper">
                <i class="fas fa-shipping-fast"></i>
                <span>Ücretsiz Teslimat</span>
                </div>
            </div>
            <div className="service-item">
            <div className="service-item-wrapper">
                <i class="fas fa-tools"></i>
                <span>Ücretsiz Montaj</span>
                </div>
            </div>
            <div className="service-item">
            <div className="service-item-wrapper">
                <i class="fas fa-ruler"></i>
                <span>Size Özel Tasarım</span>
                </div>
            </div>
        </div>
        </div>

    )
}
