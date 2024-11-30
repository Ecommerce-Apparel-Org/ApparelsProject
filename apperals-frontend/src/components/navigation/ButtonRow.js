import React, { useState } from 'react';
import './ButtonRow.css';
/*import fashionImage from '../assets/A_black_background.jpg';*/
import { Link } from 'react-router-dom';

function ButtonRow() {
    const [showMenu, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu(!showMenu);
    };  

    return (
      <div className='container'>
        {/* title and button row horizontally next to each other*/}
        <div className="title-row" >
          <div className='title'>
            <p>Fashion Fusion</p>
          </div>
          <div className="button-row">
            <Link to="/page1">
              <button>Page 1</button>
            </Link>
            <Link to="/page2">
              <button>Page 2</button>
            </Link>
            <Link to="/page3">
              <button>Page 3</button>
            </Link>
            <Link to="/page4">
              <button>Page 4</button>
            </Link>
            <Link to="/page5">
              <button>Page 5</button>
            </Link>

            {/* only shows when screen shrinks */}
            <div className="hamburger-icon" onClick={toggleMenu}>
              &#9776; {/* Unicode for hamburger icon */}
            </div>
          </div>
        </div>

        {/* Mobile menu for hamburger */ }
        <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
          <Link to="/page1">
            <button>Page 1</button>
          </Link>
          <Link to="/page2">
            <button>Page 2</button>
          </Link>
          <Link to="/page3">
            <button>Page 3</button>
          </Link>
          <Link to="/page4">
            <button>Page 4</button>
          </Link>
          <Link to="/page5">
            <button>Page 5</button>
          </Link>
        </div>

        {/* container for background image under nav bar */ }
        <div class="image-container">
          {/* <img 
            src="{fashionImage}" 
            alt="Fashion image">
          </img> */}
          <div className="image-text">
            <p>Elevate Your Style</p>
          </div>
          <div className="image-text-two">
            <p>Discover your fashion identity with our curated collections.</p>
          </div>
          <button className="image-button">
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  export default ButtonRow
