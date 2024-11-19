/* This is the content of the canvas, displaying the main workspace and its controls */

import React from 'react';
import './Workspace.css';

// The Workspace component renders the main 3D canvas area with interactive elements and controls.
const Workspace = () => {
  return (
    <div className="workspace">
      {/* The 3D room container representing the canvas */}
      <div className="room">
        <div className="room-container">
          {/* Structural elements of the 3D room */}
          {/* Left wall of the room */}
          <div className="wall wall-left"></div>
          {/* Right wall of the room */}
          <div className="wall wall-right"></div>
          {/* Floor of the room */}
          <div className="floor">
            {/* Rug placed on the floor */}
            <div className="rug"></div>
          </div>
          
          {/* Furniture elements within the room */}
          <div className="desk">
            {/* Laptop placed on the desk */}
            <div className="laptop"></div>
            {/* Lamp placed on the desk */}
            <div className="lamp"></div>
          </div>
          
          {/* Easel for displaying or painting */}
          <div className="easel">
            {/* Canvas mounted on the easel */}
            <div className="canvas"></div>
          </div>
          
          {/* Plant decoration in the room */}
          <div className="plant"></div>
          
          {/* Art pieces displayed on the walls */}
          <div className="wall-art wall-art-1"></div>
          <div className="wall-art wall-art-2"></div>
        </div>
      </div>
      
      {/* Control section for interacting with the canvas */}
      <div className="controls">
        {/* Reset button to reset the workspace */}
        <button className="control-button">Reset</button>
        {/* View controls to switch between different camera views */}
        <div className="view-controls">
          {/* Active button for the orthographic view */}
          <button className="view-button active">Orthographic</button>
          {/* Button to switch to the perspective view */}
          <button className="view-button">Perspective</button>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
