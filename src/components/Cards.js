import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id="urunler">
      <h1>Ürünlerimiz</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mutfak.jpg'
              text='Mutfak Dolapları'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/gardrop.jpg'
              text='Yatak Odası Takımları'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/tv.jpg'
              text='TV Ünitesi'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/vestiyer.jpg'
              text='Vestiyer'
              label='Adventure'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
