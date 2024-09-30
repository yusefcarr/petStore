import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar-container">
      {/* Hamburger icon and logo */}
      <div className="left-section">
        <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <img src="./petstore/assets/Logo/Scales and Tails Reptile Emporium.png" alt="Logo" className="navbar-logo" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      {/* Account and Cart section */}
      <div className="right-section">
        <button className="account-button">Account</button>
        <div className="cart-icon">🛒</div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <Link to='./'>Home</Link>
          <Link to='./deals'>Deals</Link>
          <Link to='./about'>About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/services">Services</Link>
          <Link to="/rewards">Rewards</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
