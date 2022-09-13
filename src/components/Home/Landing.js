import React, { useState } from 'react';
import logo from '../../logo-bookmark.svg';
import landingimg from '../../illustration-hero.svg';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const Landing = () => {
  const [scroll, setScroll] = useState(false);
  const [scrolltoUp, setScrolltoUp] = useState(false);
  const [toggle, setToggle] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    if (window.scrollY >= 300) {
      setScrolltoUp(true);
    } else {
      setScrolltoUp(false);
    }
  };

  return (
    <>
      <nav className={`nav ${scroll ? 'showShadow' : ''}`}>
        <div className="container" id="home">
          <nav className="navbar d-flex align-items-center ">
            <a href="#Home">
              <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
            </a>
            <ul className="d-flex align-items-center m-0">
              <li>
                <a className="navbar-brand text-uppercase fs-6" href="#features">
                  features
                </a>
              </li>
              <li>
                <a className="navbar-brand text-uppercase fs-6" href="#extensions">
                  pricing
                </a>
              </li>
              <li>
                <a className="navbar-brand text-uppercase fs-6" href="#contact">
                  contact
                </a>
              </li>
              <li>
                <a className="btn login-btn" href="#contact">
                  login
                </a>
              </li>
            </ul>
            <div className={toggle ? 'menu-bar toggle' : 'menu-bar'} onClick={() => setToggle(!toggle)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={toggle ? 'hidden-menu show' : 'hidden-menu'}>
              <ul className="d-flex align-items-center m-0">
                <li>
                  <a className="navbar-brand text-uppercase fs-6" href="#features" onClick={() => setToggle(!toggle)}>
                    features
                  </a>
                </li>
                <li>
                  <a className="navbar-brand text-uppercase fs-6" href="#extensions" onClick={() => setToggle(!toggle)}>
                    pricing
                  </a>
                </li>
                <li>
                  <a className="navbar-brand text-uppercase fs-6" href="#contact" onClick={() => setToggle(!toggle)}>
                    contact
                  </a>
                </li>
                <li>
                  <a className="btn login-btn" href="#contact" onClick={() => setToggle(!toggle)}>
                    login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
      <div className="container">
        <div className="landing d-flex justify-content-between align-items-center" id="Home">
          <div className="left-sec">
            <h1>a simple bookmark manager</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa in doloremque illum sit earum, quos sequi pariatur dolor voluptate voluptatum.</p>
            <button className="btn get-chrome-btn">get it on chrome</button>
            <button className="btn get-fire-btn">get it on firefox</button>
          </div>
          <div className="right-sec">
            <img src={landingimg} alt="landingimg" />
          </div>
        </div>
      </div>

      <div
        className={`${scrolltoUp ? 'hidden up' : 'hidden'}`}
        onClick={() => {
          window.scrollTo(0, 0);
          setToggle(false);
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </>
  );
};
