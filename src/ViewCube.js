import React, { useState } from 'react';
import './ViewCube.css';

const ViewCube = () => {
  const [viewMode, setViewMode] = useState('Orthographic'); // Manage the state for perspective switch

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'Orthographic' ? 'Perspective' : 'Orthographic'));
  };

  return (
    <div className="view-cube-container">
      <div className="view-cube">
        <div className="main-section">
          <button className="side-button">Reset</button>
          <div className="gizmo-container">
            <div className="background"></div>
            {/* The canvas could be used for rendering a 3D scene or any graphical element */}
            <canvas width="90" height="90"></canvas>
          </div>
          <button className="side-button">Isometric</button>
        </div>

        <div className="perspective-switch">
          <div
            className={`switch ${viewMode === 'Orthographic' ? 'selected' : ''}`}
            onClick={toggleViewMode}
          >
            Orthographic
            <div className="outline" style={{ visibility: viewMode === 'Orthographic' ? 'visible' : 'hidden' }}></div>
          </div>

          <div
            className={`switch ${viewMode === 'Perspective' ? 'selected' : ''}`}
            onClick={toggleViewMode}
          >
            Perspective
            <div className="outline" style={{ visibility: viewMode === 'Perspective' ? 'visible' : 'hidden' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCube;
