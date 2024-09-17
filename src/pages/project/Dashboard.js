// Dashboard.js
import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Project1 from './Project1';
import Project2 from './Project2';
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="Project1">Overview</Link>
          </li>
          <li>
            <Link to="project2">Settings</Link>
          </li>
      
        </ul>
      </nav>
      {/* Outlet renders the nested route components */}
      <Outlet />
      <Routes>
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
      
      </Routes>
    </div>
  );
};

export default Dashboard;
