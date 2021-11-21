import React from 'react'
import './footerContact.css';

export default function FooterContact() {
    return (
        <div className="footer-contact">
            <div className="contact-container">
                <section className="address">
                <div className="address-wrap">
                    <h3>Adres</h3>
                    <span>
                    <br/>Karatay Sanayi Sitesi Saraycık Sok. Ek Blokları,<br/>D:124, 42100 Selçuklu/Konya <p></p>
                    </span>
                    <a href="https://www.google.com/maps/place/Baysallar+Mobilya/@37.9146678,32.5068977,17z/data=!3m1!4b1!4m5!3m4!1s0x14d08f96c9ef21ff:0xf81af3312b112d00!8m2!3d37.9146636!4d32.5090864" target="_blank" rel="noopener noreferrer">
                        <div className="address-link" >
                        
                            <i class='fa fa-map-marker'/>
                            &ensp;Google Maps'te aç
                    
                        </div>
                    </a>
                </div>
                </section>
                <section className="tel">
                <div className="tel-wrap">
                    <h3>Telefon</h3>
                    <span>
                    <br/><a href="tel:05321758512">0532 175 8512&ensp;<i class='fa fa-phone'/></a><p/>
                    <a href="tel:03322514278">0332 251 4278&ensp;<i class='fa fa-phone'/><br/></a>
                    </span>
                </div>
                </section>
            </div>
        </div>
    )
}
