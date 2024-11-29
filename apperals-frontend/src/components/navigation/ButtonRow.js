import React from 'react';
import './ButtonRow.css';
/*import fashionImage from '../assets/A_black_background.jpg';*/
import { Link } from 'react-router-dom';

function ButtonRow() {
    return (
      <div className='container'>
        {/* title and button row */}
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
          </div>
        </div>

        <div class="image-container">
          {/* <img 
            src="{fashionImage}" 
            alt="Fashion image">
          </img> */}
          <div className="image-text">
            <p>Elevate Your Style</p>
          </div>
          <button className="image-button">
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  export default ButtonRow
