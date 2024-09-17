import React, { useState } from 'react';

const TabComponent = ({ idPrefix }) => {
  const [activeTab, setActiveTab] = useState(`${idPrefix}home`); // Set the first tab as active by default

  return (
    <div className="tab-container">
      <ul className="tabs">
        <li
          className={`tab ${activeTab === `${idPrefix}home` ? 'active' : ''}`}
          onClick={() => setActiveTab(`${idPrefix}home`)}
        >
          Home
        </li>
        <li
          className={`tab ${activeTab === `${idPrefix}pricing` ? 'active' : ''}`}
          onClick={() => setActiveTab(`${idPrefix}pricing`)}
        >
          Pricing
        </li>
        <li
          className={`tab ${activeTab === `${idPrefix}about` ? 'active' : ''}`}
          onClick={() => setActiveTab(`${idPrefix}about`)}
        >
          About
        </li>
        <li
          className={`tab ${activeTab === `${idPrefix}news` ? 'active' : ''}`}
          onClick={() => setActiveTab(`${idPrefix}news`)}
        >
          News
        </li>
      </ul>

      <div className="tab-content-container">
        <div
          id={`${idPrefix}home`}
          className={`tab-content ${activeTab === `${idPrefix}home` ? 'active' : ''}`}
        >
          <h1>Home</h1>
          <p>This is the home</p>
        </div>
        <div
          id={`${idPrefix}pricing`}
          className={`tab-content ${activeTab === `${idPrefix}pricing` ? 'active' : ''}`}
        >
          <h1>Pricing</h1>
          <p>Some information on pricing</p>
        </div>
        <div
          id={`${idPrefix}about`}
          className={`tab-content ${activeTab === `${idPrefix}about` ? 'active' : ''}`}
        >
          <h1>About</h1>
          <p>Let me tell you about me</p>
        </div>
        <div
          id={`${idPrefix}news`}
          className={`tab-content ${activeTab === `${idPrefix}news` ? 'active' : ''}`}
        >
          <h1>News</h1>
          <p>News is great.</p>
        </div>
      </div>
    </div>
  );
};

const Tab = () => {
  return (
    <div>
    
    </div>
  );
};

export default Tab;
