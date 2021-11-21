import React, { useState, useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import FooterContact from '../FooterContact';
import Services from '../Services';
import Navbar from '../Navbar';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function Home() {
  const [loading, setLoading] = useState(true);
  const imgs = ["/images/home/1.jpg", "/images/home/2.jpg", "/images/home/3.jpg"]

  const override = css`
  display: block;
  margin: 0 auto;
  `;

  const cacheImages = async (images) => {
    const promises = await images.map(image => {
      return new Promise(function (resolve, reject) {
        const imgObj = new Image();

        imgObj.src = image;
        imgObj.onload = resolve();
        imgObj.onerror = reject();
      });
    });
    let imagess = await Promise.all(promises);
    setLoading(false);
  }
  useEffect(() => {
    cacheImages(imgs);  
  }, []);

  if (loading) {
    return (<ClipLoader loading={loading} css={override} size={150}/>)
  }
  else {
    return (
        <>
        <Navbar page="home" />
        <HeroSection imgs={imgs}/>
        <Cards />
        <Services />
        <FooterContact />
        <Footer />
        </>
    );
  }
}

export default Home;