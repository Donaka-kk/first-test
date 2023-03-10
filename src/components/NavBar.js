import React,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {Button} from "./Button";

function NavBar() {
  const [click , setClick ]=useState(false);
  const handleClick=()=>setClick(!click);
  const closeMobileMenu = ()=>{setClick(false)};

  const [button , setButton]=useState(true);
  const showButton= () =>{
    if(window.innerWidth<=960){
      setButton(false);
    }else{
      setButton(true);
    }
  }
  useEffect(()=>{
    showButton()
  },[]);
  window.addEventListener('resize',showButton);

  return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  TRVL <i className="fab fa-typo3" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ?'fas fa-times' :'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                  <Link to="/" className='nav-link' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to="/Services" className='nav-link' onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to="/Products" className='nav-link' onClick={closeMobileMenu}>
                    Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to="/sign-up" className='sign-upLink' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
          </div>
    </nav>
    </>
  )

}

export default NavBar
