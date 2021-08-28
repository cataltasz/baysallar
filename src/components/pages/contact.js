import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactContainer from '../ContactContainer';

export default function Contact() {
    return (
        <>
            <Navbar page="home" />
            <div>
                <ContactContainer /> 
                <Footer />
            </div>
        </>
    )
}
