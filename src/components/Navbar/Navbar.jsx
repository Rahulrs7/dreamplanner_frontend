import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Sample food data (Replace with API data if needed)
  // const foodItems = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Sandwich"];

  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = foodItems.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm(""); // Reset search input when toggled
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/search/${suggestion.toLowerCase()}`);
    setShowSearch(false);
    setSearchTerm("");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="Logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Deals</a>
        <a href='#about' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>about us</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="search-container">
          <img src={assets.search_icon} alt="Search" onClick={handleSearchClick} className="search-icon" />
          {showSearch && (
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {suggestions.length > 0 && (
                <ul className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="Orders" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="Logout" /> <p>Logout</p></li> 
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;