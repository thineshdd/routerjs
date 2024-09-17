import React from 'react'
import './About.css';
import { flexdiv } from './Aboutdata';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';

import { Helmet } from 'react-helmet';

export default function About() {

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const navigation = useNavigate();

  return (

    <>

<Helmet>
        <title>About Page - My React App</title>
        <meta name="description" content="This is the home page of my React application, where you can find the latest updates and news." />
      </Helmet>
      <div className="home-page">
        <h1>  About page</h1>
      </div>

      <div className="food-gallery">
        {flexdiv.map((item) => (
          <div key={item._id} className="food-item">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: '200px', height: 'auto' }} />
            <p>{item.description}</p>
            <Link to="/match"> Match  </Link>
              <button onClick={() => navigation('/match')}>Go to Match</button>
          
          </div>
        ))}
      </div>


      <div className="tabs">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (


            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">  {tabs[activeTab].content}  </div>

      </div>



    </>

  );

}