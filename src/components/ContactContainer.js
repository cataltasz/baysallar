import React from 'react'
import './contact.css'

export default function ContactContainer() {
    return (
        <div className="ct-container">
            <h1>İletişim</h1>
            <div className="ct-bottom ">
                
                <div className="ct-item ">
                    <a className="ct-link" href="https://www.google.com/maps/place/Baysallar+Mobilya/@37.9146678,32.5068977,17z/data=!3m1!4b1!4m5!3m4!1s0x14d08f96c9ef21ff:0xf81af3312b112d00!8m2!3d37.9146636!4d32.5090864" target="_blank" rel="noopener noreferrer">
                        <div className="ct-item-logo " >
                            <i class='fa fa-map-marker' aria-hidden={true}/>
                        </div>
                    </a>
                    <h3>Adres</h3>
                    <span><p>Karatay Sanayi Sitesi <br/>Saraycık Sok. Ek Blokları,<br/>D:124, 42100 Selçuklu/Konya </p></span>
                </div>

                <div className="ct-item">
                    <div className="ct-item-logo ">
                        <i class='fa fa-phone' aria-hidden={true}/>
                    </div>
                    <h3>Telefon</h3>
                    <span><p>0532 175 85 12 <br/>0332 251 42 78</p></span>
                </div>

                <div className="ct-item ">
                    <div className="ct-item-logo ">
                        <i class='fa fa-envelope' aria-hidden={true}/>
                    </div>
                    <h3>Email</h3>
                    <a className="ct-link" href="mailto:baysallar_mobilya@hotmail.com"><p>baysallarmobilya@gmail.com</p></a>
                </div>

                <div className="ct-item ">
                        <h3>Sosyal Medya</h3>
                        <div className="ct-social">
                        <a href="https://www.facebook.com/Baysallar-Mobilya-1413134405628504/" className="ct-over ct-link" target="_blank" rel="noopener noreferrer">
                            <div className="ct-item-logo ">
                                <i class='fab fa-facebook-f' aria-hidden={true}/>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/baysallarmobilya42" className="ct-over ct-link" target="_blank" rel="noopener noreferrer">
                            <div className="ct-item-logo ">
                                <i class='fab fa-instagram' aria-hidden={true}/>
                            </div>
                        </a>

                        <a href="https://wa.me/905321758512" className="ct-over ct-link" target="_blank" rel="noopener noreferrer">
                            <div className="ct-item-logo ">
                                <i class='fab fa-whatsapp' aria-hidden={true}/>
                            </div>
                        </a>



                        </div>
                </div>
            </div>
        </div>
    )
}
