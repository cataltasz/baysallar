import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id="iletisim">

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <a href='/' className='social-logo'>
              Baysallar Mobilya
            </a>
          </div>
          <small className='website-rights'>Baysallar Mobilya © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://wa.me/905321758512'
              aria-label='WhatsApp'
              target='_blank'
              rel="noopener noreferrer"
            >
              <i className='fab fa-whatsapp' />
            </a>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/Baysallar-Mobilya-1413134405628504/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://instagram.com/baysallarmobilya42'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link email'
              href='mailto:baysallar_mobilya@hotmail.com'
              aria-label='Email'
            >
              <i className='fa fa-envelope' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
