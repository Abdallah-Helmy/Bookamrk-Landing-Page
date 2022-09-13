import React, { useState } from 'react';
import './Features.css';
import { links } from './data';
import { featuresData } from './data';

export const Features = () => {
  const [tabs, setTabs] = useState([featuresData[0]]);

  const addActiveClass = index => {
    links.forEach((link, ind) => {
      document.getElementById(`${ind}`).classList.remove('active');
    });

    links.forEach((link, ind) => {
      if (ind === index) {
        document.getElementById(`${index}`).classList.add('active');
      }
    });
  };

  const changeTabs = index => {
    const tabONclick = featuresData.filter((tab, ind) => {
      return ind === index;
    });
    setTabs([...tabONclick]);
  };

  return (
    <>
      <div id="features" className="features d-flex flex-column justify-content-center">
        <div className="info">
          <h2>features</h2>
          <p>Our aim to make it quick and easy for you to access your favourite websites. your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className="tabs m-auto">
          <ul className="d-flex justify-content-center p-0 m-auto">
            {links.map((link, index) => {
              return (
                <li
                  className={`me-5 mt-4 pb-3 mx-3 text-capitalize ${index === 0 ? 'active' : 'null'}`}
                  id={index}
                  key={index}
                  onClick={() => {
                    addActiveClass(index);
                    changeTabs(index);
                  }}
                >
                  <span className="m-auto">{link}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container justify-content-between links mt-5 d-flex align-items-center">
          {tabs.map((tab, index) => {
            const { id, img, header, text } = tab;
            return (
              <React.Fragment key={id}>
                <img src={img} alt="" />
                <div className="about w-75">
                  <h2 className="header">{header}</h2>
                  <p className="w-75">{text}</p>
                  <button className="btn text-capitalize">more info</button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
