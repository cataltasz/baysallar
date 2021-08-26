import React from 'react';
//import {useState,useEffect} from 'react';

function CardItem(props) {
/*  const imgs = ["/images/img-1.jpg", "/images/img-2.jpg", "/images/img-3.jpg"]
  const [img, setImg] = useState("/images/img-2.jpg")
  let n = 0;


  useEffect(() => {
    const interval = setInterval(() => {
      setImg(imgs[n % imgs.length]);
    n += 1;
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
*/
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Ürün'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
