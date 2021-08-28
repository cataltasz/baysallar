import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id="iletisim">

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
