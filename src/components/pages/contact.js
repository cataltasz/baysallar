import React from 'react';
import Navbar from '../Navbar';
import ContactContainer from '../ContactContainer';
import Footer from '../Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContainer />
      </main>
      <Footer />
    </>
  );
}
