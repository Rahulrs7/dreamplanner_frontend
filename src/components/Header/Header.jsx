import React, { useState, useEffect } from "react";
import "./Header.css";

const images = [
  
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

const subheadings = [
  "Discover Our Story and Mission",
  "Tailored Travel Experiences Just for You",
  "We’re Here to Help You Plan Your Next Adventure!",
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSubheading, setCurrentSubheading] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setCurrentSubheading((prev) => (prev + 1) % subheadings.length);
        setFade(true);
      }, 500); // Sync with fade-out time
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [menu, setMenu] = useState("");

  return (
    <div className="header" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="header-contents">
        <h2>Get in Touch</h2>
        <p className={fade ? "fade-in" : "fade-out"}>{subheadings[currentSubheading]}</p>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>
          <button>View Deals</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
