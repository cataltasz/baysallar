import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id="anasayfa">
      <div className='overlay'> </div>
      <h1 className='over'>Mobilya - Dekorasyon</h1>
      <p className='over'>Evinizi birlikte oluşturalım!</p>
      <div className='over hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          href="#urunler"
        >
          Ürün Çeşitleri
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          href="#iletisim"
        >
          Bize Ulaşın
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
