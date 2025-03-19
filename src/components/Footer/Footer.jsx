import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  const [menu, setMenu] = useState("home");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenu("home");
  };
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/*  <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
                  <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Deals</a>
                  <a href='#about' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>about us</a>
                  <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a> */}
            {/* <img src={assets.logo} alt="" /> */}
            <p>"Let your dreams take flight." 🛫💙</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="#" onClick={scrollToTop} className={`${menu === "home" ? "active" : ""}`}>Home</a></li>
                <li><a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Deals</a></li>
                <li><a href='#about' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>about us</a></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@QuickDelivery.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
