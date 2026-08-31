import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Services from '../Services';
import AboutSection from '../AboutSection';
import FooterContact from '../FooterContact';
import Footer from '../Footer';

function Home() {
  const heroImages = [
    '/images/home/1.jpg',
    '/images/home/2.jpg',
    '/images/home/3.jpg'
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection imgs={heroImages} />
        <Cards />
        <Services />
        <AboutSection />
        <FooterContact />
      </main>
      <Footer />
    </>
  );
}

export default Home;