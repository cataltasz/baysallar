import React from 'react';
import Navbar from '../Navbar';
import ProductContainer from '../ProductContainer';
import FooterContact from '../FooterContact';
import Footer from '../Footer';

export default function Products() {
  return (
    <>
      <Navbar />
      <main>
        <ProductContainer />
        <FooterContact />
      </main>
      <Footer />
    </>
  );
}
