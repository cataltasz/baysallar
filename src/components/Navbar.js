import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [bg, setBg] = useState("dark");

  const listenScrollEvent = e => {
    if (click){
      return;
    }

    if (window.scrollY > window.innerHeight - 70) {
      setBg("black" );
    } else {
      setBg("transparent");
    }
  };
  const handleClick = () => {
    setClick(!click);
    setBg("black" );
  };

  const closeMobileMenu = () => {
    setClick(false);
    if (window.screen.top > window.innerHeight - 70) {
      setBg("black");
    } else {
      setBg("transparent");
    }
  };


  window.addEventListener("scroll", listenScrollEvent);



  return (
    <>
      <nav className='navbar' style={{background: bg}}>
        <div className={click ? 'navbar-container active' : 'navbar-container'}>
          <a href='#anasayfa' className='navbar-logo' onClick={closeMobileMenu}>
            Baysallar Mobilya
            <i class='fab fa-typo3' />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#anasayfa' className='nav-links' onClick={closeMobileMenu}>
                Ana Sayfa
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#urunler'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ürünlerimiz
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#iletisim'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bize Ulaşın
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
