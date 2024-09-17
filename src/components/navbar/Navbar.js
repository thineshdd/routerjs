// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing if necessary
import './Navbar.css'; // Make sure to link to your CSS file
const bettinglogo = "/assets/logo.svg";


function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
    // not = false
  };

  return (
    <>
      <header className="navbar">
        <div id="mvp-bot-nav-wrap" className="lft headerscroll scroll-up">
          <div className="mvp-main-box-cont">
            <div className="head_container">
              <div className="logo">
            
              <img src={bettinglogo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                
              </div>
              <div className="menu" id="myTopnav">
                <ul className="header-ul">
                 
                  <li className="header-li">

                  <Link to="/">
                  <span>Latest</span>
            </Link>
                    
                  </li>
                  <li className="header-li">
                  <Link to="/about">
                  <span>About</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/match">
                  <span>Match</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/dashboard">
                  <span>Dashboard</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/">
                  <span>Latests</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/">
                  <span>Latests</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/">
                  <span>Latesst</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/">
                  <span>Latest</span>
            </Link>
                  </li>
                  <li className="header-li">
                  <Link to="/">
                  <span>Latest</span>
            </Link>
                  </li>
                
                </ul>
              </div>
              <button className="icon" onClick={toggleSidebar}>
                    ☰
                  </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div id="mySidenav" className={`sidenav ${isSidebarOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>
          ×
        </button>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Request Quote</a>
        <a href="#">Contact</a>
        <p style={{ color: '#1c3664', textAlign: 'center' }}>Hubover © 2017</p>
      </div>
    </>
  );
}

export default Navbar;
