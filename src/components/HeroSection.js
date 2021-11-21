import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useState,useEffect} from 'react';

function HeroSection(props) {

  const [img, setImg] = useState(props.imgs[0])
  let n = 1;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {

    const interval = setInterval(() => {
      setImg(props.imgs[n % props.imgs.length]);
      n += 1;
    }, 7000);
    
    return () => clearInterval(interval);
  };

  return (
    <div className='hero-container' id="anasayfa" style={{backgroundImage: "url("+img+")"}}>
      {
        props.imgs.map(i => (
          <img src={i} className="invisible"/> 
        ))
      }
      <div className='overlay'> </div>
      <h1 className='over'>Baysallar Mobilya</h1>
      <p className='over'>Evinizi birlikte oluşturalım!</p>
      <br/><span className="over" style={{fontSize:"18px",color:"white"}}> Her çeşit mobilya ihtiyacınız itina ile evinize uygun ölçülerle hazırlanır. </span>
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
          href="/iletisim"
        >
          Bize Ulaşın
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
