import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`container ${isSticky ? "sticky" : ""}`}
        data-testid="navigation-bar"
      >
        <div className="title">Fashion Fusion</div>
        <div className="button-row">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/page1" className="nav-link">
            Page 1
          </Link>
          <Link to="/page2" className="nav-link">
            Page 2
          </Link>
        </div>
      </nav>
    </>
  );
}
