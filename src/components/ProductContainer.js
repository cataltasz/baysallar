import React, { useEffect, useState } from 'react';
import ProductSlider from './ProductSlider';
import './product.css';
import { fetchPhotos } from './util/CloudinaryService';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function ProductContainer() {
    const types = [
      {tag: "mutfak", text: "Mutfak Dolapları"},
      {tag: "sedir", text: "Sedirler"},
      {tag: "yatak", text: "Yatak Odası Takımı"},
      {tag: "genc", text: "Genç Odası Takımı"},
      {tag: "Vestiyer", text: "Vestiyerler"},
      {tag: "banyo", text: "Banyo & Lavabo"},
      {tag: "diger", text: "Diğer Ürünler"},
    ]
    const [selected, setSelected] = useState(types[0].text);
    const [currImgs, setImgs] = useState([]);
    const [loading, setLoading] = useState(true);

    const onSelect = (type) => {
      setSelected(type.text);
      getImgs(type.tag);
    }
 

    async function getImgs(tag) {
      setLoading(true);
      let imgArr = await fetchPhotos("dmy3bfthr", tag);

      imgArr = imgArr.map(
          img => {return {width:img.width/2, height:img.height/2, src:"https://res.cloudinary.com/dmy3bfthr/image/upload/" + img.public_id}}
      );
      setImgs(imgArr);
      setLoading(false);
    }

    useEffect(() => {
      getImgs(types[0].tag);
    }, [])

    return (
        <div className="product-container">
          <h1>Ürünlerimiz</h1>
            <div className="type-container">
            
                {types.map(type => (<div className={(selected === type.text) ? "type selected" : "type"} key={type.text} onClick={() => onSelect(type)}>{type.text}</div>))}
            </div>
                         
            <div className="slider-container">  
              {loading ?           
                  <ClipLoader loading={loading} css={override} size={100}/> :
                  (currImgs.length < 1 ? 
                  ("Bu kategoride ürün yok!"):
                  (<ProductSlider imgs={currImgs}/>)
                 )
              }
            </div>
        </div>
    )
}
