import React, { useState, useRef, useEffect } from 'react';
import './ButtonRow.css';
import { Link } from 'react-router-dom';
import FAQ from '../FAQMain/FAQComponent/FAQ'; // Import FAQ component

function ButtonRow() {
    const [showFAQ, setShowFAQ] = useState(false); // State to toggle FAQ visibility
    const faqRef = useRef(null); // Reference to the FAQ section

    // Scroll to the FAQ section when it's shown
    useEffect(() => {
        if (showFAQ && faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showFAQ]);

    return (
        <div className='container'>
            {/* title and button row */}
            <div className="title-row">
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
                    <button>Button 3</button>
                    <button onClick={() => setShowFAQ(!showFAQ)}>
                        {showFAQ ? 'Hide FAQ' : 'FAQ'}
                    </button>
                    <button>Button 5</button>
                </div>
            </div>

            <div className="image-container">
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

            {/* FAQ Component Inline */}
            {showFAQ && (
                <div ref={faqRef}>
                    <FAQ />
                </div>
            )}
        </div>
    );
}

export default ButtonRow;
