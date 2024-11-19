/* This is the toolbar for the canvas, providing various tools and controls for user interaction */

import React from 'react';
import './Toolbar.css';

// The Toolbar component renders the canvas's top bar with tools, zoom controls, and export options.
const Toolbar = () => {
  return (
    <div className="toolbar">
      {/* Left section of the toolbar containing primary tool buttons */}
      <div className="toolbar-left">
        {/* Button for adding new elements to the canvas */}
        <button className="tool-button">+</button>
        {/* Button for quick actions or utilities */}
        <button className="tool-button">⚡</button>
        {/* Button for creating rectangular shapes */}
        <button className="tool-button">□</button>
        {/* Button for creating circular shapes */}
        <button className="tool-button">○</button>
        {/* Button for adding text elements */}
        <button className="tool-button">T</button>
        {/* Button for rotating elements */}
        <button className="tool-button">⟲</button>
        {/* Button for accessing a timer or timeline feature */}
        <button className="tool-button">🕒</button>
        {/* Button for linking or grouping elements */}
        <button className="tool-button">🔗</button>
      </div>
      
      {/* Center section of the toolbar, typically for selection or specific options */}
      <div className="toolbar-center">
        {/* Active button for dropdown actions or menu */}
        <button className="tool-button active">▼</button>
      </div>
      
      {/* Right section of the toolbar for zoom controls and export options */}
      <div className="toolbar-right">
        {/* Displays the current zoom level of the canvas */}
        <span className="zoom-level">100%</span>
        {/* Button for exporting the canvas content */}
        <button className="export-button">Export</button>
        {/* Button for starting or running an action */}
        <button className="tool-button">▶</button>
      </div>
    </div>
  );
};

export default Toolbar;
