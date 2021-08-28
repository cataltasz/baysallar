import React, { useState } from 'react';
import ProductSlider from './ProductSlider';
import './product.css';


export default function ProductContainer() {
    const types = ["Mutfak Dolabı", "Vestiyer", "Yatak Odası Takımı"];
    const [selected, setSelected] = useState(types[0]);
    const imgs = {
        "Mutfak Dolabı": [
            {
                src: "/images/mutfak.jpg",
                width: 4,
                height: 3
              },
              {
                src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
                width: 1,
                height: 1
              },
              {
                src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
                width: 3,
                height: 4
              },
              {
                src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
                width: 3,
                height: 4
              },
              {
                src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
                width: 3,
                height: 4
              },],
        "Vestiyer":[
            {
                src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
                width: 3,
                height: 4
              },
              {
                src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
                width: 3,
                height: 4
              },],
        "Yatak Odası Takımı": [
              {
                src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
                width: 4,
                height: 3
              },
              {
                src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
                width: 3,
                height: 4
              },
              {
                src: "https://source.unsplash.com/PpOHJezOalU/800x599",
                width: 4,
                height: 3
              },
              {
                src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
                width: 4,
                height: 3
              }],
        };
    console.log("aaa")
    return (
        <div className="product-container">
          <h1>Ürünlerimiz</h1>
            <div className="type-container">
            
                {types.map(type => (<div className={(selected === type) ? "type selected" : "type"} key={type} onClick={() => setSelected(type)}>{type}</div>))}
            </div>
            <div className="slider-container">
                <ProductSlider imgs={imgs[selected]}/>
            </div>
        </div>
    )
}
