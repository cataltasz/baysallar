import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [click, setClick] = useState(false);
  console.log(document.body.scrollTop);
  const [bg, setBg] = useState((document.body.scrollTop < window.innerHeight - 70 && props.page === "home") ? "transparent" : "black");
  let initial = props.page === "home" ? "" : "./../";
  const listenScrollEvent = e => {
    if (props.page !== "home"){
      setBg("black");
      return;
    }
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
  useEffect(() => {
    if (props.page === "home"){
      window.addEventListener("scroll", listenScrollEvent);
      setBg("transparent");
      initial = "";
    } else {
      window.removeEventListener("scroll", listenScrollEvent);
      setBg("black");
      initial = "./../";
    }
  }, [])
  
  return (
    <>
      <nav className='navbar' style={{background: bg}}>
        <div className={click ? 'navbar-container active' : 'navbar-container'}>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            Baysallar Mobilya
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Ana Sayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/urunler"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ürünlerimiz
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to={initial + "/iletisim"}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bize Ulaşın
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
