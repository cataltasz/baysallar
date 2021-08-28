import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useState,useEffect} from 'react';

function HeroSection() {

  const imgs = ["/images/home/1.jpg", "/images/home/2.jpg", "/images/home/3.jpg"]
  const [img, setImg] = useState("/images/home/1.jpg")
  let n = 0;


  useEffect(() => {
    const interval = setInterval(() => {
      setImg(imgs[n % imgs.length]);
    n += 1;
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-container' id="anasayfa" style={{backgroundImage: "url("+img+")"}}>
      <div className='overlay'> </div>
      <h1 className='over'>Mobilya - Dekorasyon</h1>
      <p className='over'>Evinizi birlikte oluşturalım!</p>
      <div className='over hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          href="/urunler"
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
