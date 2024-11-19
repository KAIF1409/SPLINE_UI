/*Right Panel for canvas */


import React, { useState } from 'react';
import './RightPanel.css';

/* 
   The RightPanel component serves as a control panel for customizing 
   the viewport, frame settings, and scene properties of the canvas. 
   It includes toggles, dropdowns, and a color picker.
*/
const RightPanel = () => {
  // State to manage the auto-zoom toggle status
  const [autoZoom, setAutoZoom] = useState(false);

  return (
    <div className="right-panel">
      {/* Panel header with user badge and share button */}
      <div className="panel-header">
        <div className="user-badge">M</div> {/* Placeholder for user's initial */}
        <button className="share-button">Share</button> {/* Static share button */}
      </div>
      
      {/* Viewport section: Controls related to the camera view */}
      <div className="panel-section">
        <h3>Viewport</h3>
        <select className="select-input">
          <option>Personal Camera</option> {/* Dropdown with a single option */}
        </select>
      </div>
      
      {/* Frame section: Controls for size, auto-zoom, and screen UI */}
      <div className="panel-section">
        <h3>Frame</h3>

        {/* Responsive size dropdown */}
        <div className="option-row">
          <span>Size</span>
          <select className="select-input">
            <option>Responsive</option> {/* Dropdown for frame size */}
          </select>
        </div>

        {/* Auto Zoom toggle button */}
        <div className="option-row">
          <span>Auto Zoom</span>
          <button 
            className={`toggle-button ${autoZoom ? 'active' : ''}`} // Toggles active class based on state
            onClick={() => setAutoZoom(!autoZoom)} // Updates state when clicked
          >
            {autoZoom ? 'Yes' : 'No'} {/* Display state as 'Yes' or 'No' */}
          </button>
        </div>

        {/* Screen UI dropdown */}
        <div className="option-row">
          <span>Screen UI</span>
          <select className="select-input">
            <option>None</option> {/* Dropdown for screen UI */}
          </select>
        </div>
      </div>
      
      {/* Scene section: Controls for background color */}
      <div className="panel-section">
        <h3>Scene</h3>

        {/* Background color picker */}
        <div className="option-row">
          <span>BG Color</span>
          <div className="color-picker">
            {/* Color button, currently set to pink */}
            <button className="color-button pink"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
