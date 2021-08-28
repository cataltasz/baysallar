import React from 'react'
import './contact.css'

export default function ContactContainer() {
    return (
        <div className="ct-container">
            <div className="ct-overlay"></div>

            <div className="ct-bottom ct-over">
                <div className="ct-left">
                    <h2>İletişim</h2>
                    <div className="ct-item ct-over">
                        <div className="ct-item-logo ct-over">
                            <i class='fa fa-map-marker' aria-hidden={true}/>
                        </div>
                        
                        <div className="ct-item-detail ct-over">
                            <h3>Adres</h3>
                            <span><p>Karatay Sanayi Sitesi <br/>Saraycık Sok. Ek Blokları,<br/>D:124, 42100 Selçuklu/Konya </p></span>
                        </div>
                    </div>

                    <div className="ct-item ct-over">
                        <div className="ct-item-logo ct-over">
                            <i class='fa fa-phone' aria-hidden={true}/>
                        </div>
                        
                        <div className="ct-item-detail ct-over">
                            <h3>Telefon</h3>
                            <span><p>0555 555 55 55 - 0332 555 55 55</p></span>
                        </div>
                    </div>

                    <div className="ct-item ct-over">
                        <div className="ct-item-logo ct-over">
                            <i class='fa fa-envelope' aria-hidden={true}/>
                        </div>
                        
                        <div className="ct-item-detail ct-over">
                            <h3>Email</h3>
                            <a href="mailto:baysallarmobilya@gmail.com"><p>baysallarmobilya@gmail.com</p></a>
                        </div>
                    </div>

                </div>

                <div className="ct-right">
                    <h2>Sosyal Medya</h2>
                    <a href="https://wa.me/90555555555" className="ct-over" target="_blank">
                        <div className="ct-item ct-over">
                            <div className="ct-item-logo ct-over">
                                <i class='fab fa-facebook-f' aria-hidden={true}/>
                            </div>
                            
                            <div className="ct-item-detail ct-over">
                                <span><p>@baysallarmobilya</p></span>
                            </div>
                        </div>
                    </a>

                    <a href="https://wa.me/90555555555" className="ct-over" target="_blank">
                        <div className="ct-item ct-over">
                            <div className="ct-item-logo ct-over">
                                <i class='fab fa-instagram' aria-hidden={true}/>
                            </div>
                            
                            <div className="ct-item-detail ct-over">
                                <span>@baysallarmobilya</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://wa.me/90555555555" className="ct-over" target="_blank">
                        <div className="ct-item ct-over">
                            
                            <div className="ct-item-logo ct-over">
                                <i class='fab fa-whatsapp' aria-hidden={true}/>
                            </div>
                            
                            <div className="ct-item-detail ct-over">
                                <p>0555 555 55 55</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}
