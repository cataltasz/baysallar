import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Services from '../Services';
import Navbar from '../Navbar';
import FooterContact from '../FooterContact';

function Home() {
  return (
    <>
      <Navbar page="home" />
      <HeroSection />
      <Cards />
      <Services />
      <FooterContact />
      <Footer />
    </>
  );
}

export default Home;