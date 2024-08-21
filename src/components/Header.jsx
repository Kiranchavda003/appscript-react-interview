import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="topStrip">
        <div className="stripItem">
          <img src=".\assets\upperlogo.png" alt="" className="stripIcon" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="stripItem">
          <img src=".\assets\upperlogo.png" alt="" className="stripIcon" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="stripItem">
          <img src=".\assets\upperlogo.png" alt="" className="stripIcon" />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div className="mainHeader">
        <img src=".\assets\logo.png" alt="Company Logo" className="logo" />
        <h1 className="companyName">LOGO</h1>
        <nav className="headerNav">
          <img src=".\assets\search.png" alt="Search" className="navIcon" />
          <img src=".\assets\like.png" alt="User Account" className="navIcon" />
          <img src=".\assets\cart.png" alt="Wishlist" className="navIcon" />
          <img src=".\assets\user.png" alt="Cart" className="navIcon" />
          <div className="languageSelector">
            <span>ENG</span>
            <img src=".\assets\expand.png" alt="" className="dropdownIcon" />
          </div>
        </nav>
     </div>
     <div><nav className="mainNav">
        <a href="#shop" className="navLink">SHOP</a>
        <a href="#skills" className="navLink">SKILLS</a>
        <a href="#stories" className="navLink">STORIES</a>
        <a href="#about" className="navLink">ABOUT</a>
        <a href="#contact" className="navLink">CONTACT US</a>
      </nav> </div> 
    </header>
  );
}

export default Header;
