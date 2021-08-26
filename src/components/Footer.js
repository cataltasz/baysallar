import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id="iletisim">
      <h1>İletişim</h1>
      <div className="contact-container">
        <section className="address">
          <div className="address-wrap">
            <h3>Adres</h3>
            <span>
            <br/>Karatay Sanayi Sitesi Saraycık Sok. Ek Blokları,<br/>D:124, 42100 Selçuklu/Konya <p></p>
            </span>

            <div className="address-link" >
              <a href="https://www.google.com/maps/place/Baysallar+Mobilya/@37.9146678,32.5068977,17z/data=!3m1!4b1!4m5!3m4!1s0x14d08f96c9ef21ff:0xf81af3312b112d00!8m2!3d37.9146636!4d32.5090864" target="_blank">
                <i class='fa fa-map-marker'/>
                &ensp;Google Maps'te aç
              </a>
            </div>
          </div>
        </section>
        <section className="tel">
          <div className="tel-wrap">
            <h3>Telefon</h3>
            <span>
            <br/><a href="tel:05555555555">0555 555 5555&ensp;<i class='fa fa-phone'/></a><p/>
            <a href="tel:05555555555">0332 555 5555&ensp;<i class='fa fa-phone'/><br/></a>
            </span>
          </div>
        </section>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href='#anasayfa' className='social-logo'>
              Baysallar Mobilya
              <i class='fab fa-typo3' />
            </a>
          </div>
          <small class='website-rights'>Baysallar Mobilya © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://wa.me/905423831876'
              aria-label='WhatsApp'
            >
              <i class='fab fa-whatsapp' />
            </a>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/Baysallar-Mobilya-1413134405628504/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link email'
              href='mailto:baysallarmobilya@gmail.com'
              aria-label='Email'
            >
              <i class='fa fa-envelope' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
