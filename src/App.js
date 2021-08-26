import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <HeroSection />
        <Cards />
        <Services />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
