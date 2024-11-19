/* This is the sidebar panel for the canvas, which is located on the left side */

import React from 'react';
import './Sidebar.css';

// The Sidebar component provides navigation and options for interacting with the canvas.
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Header section of the sidebar */}
      <div className="sidebar-header">
        {/* Button to navigate back to the previous screen */}
        <button className="back-button">←</button>
        {/* Title displayed in the sidebar header */}
        <h2>Mini Room - Art - Copy</h2>
      </div>
      
      {/* Tabs for switching between different content categories */}
      <div className="sidebar-tabs">
        {/* Default active tab showing "Objects" */}
        <button className="tab active">Objects</button>
        {/* Tab to switch to the "Assets" section */}
        <button className="tab">Assets</button>
      </div>
      
      {/* Main content section of the sidebar */}
      <div className="sidebar-content">
        {/* Search bar for filtering items in the sidebar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        
        {/* List of items displayed in the sidebar */}
        <div className="sidebar-items">
          {/* Each item represents a canvas element or property */}
          <div className="item">
            {/* Icon representing the type of item */}
            <span className="icon">💡</span>
            {/* Name of the item */}
            <span>Directional Light</span>
          </div>
          <div className="item">
            <span className="icon">🏗️</span>
            <span>Walls</span>
          </div>
          <div className="item">
            <span className="icon">🎮</span>
            <span>Controls</span>
          </div>
          <div className="item">
            <span className="icon">📷</span>
            <span>Camera 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
