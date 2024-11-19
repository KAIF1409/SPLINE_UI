/* This is the React application for the canvas, combining components like Sidebar, Toolbar, Workspace, and RightPanel */

import React from 'react';
import Sidebar from './Sidebar'; // Sidebar component for navigation or tool selection
import Workspace from './Workspace'; // Workspace component, representing the main canvas area
import RightPanel from './RightPanel'; // RightPanel component for additional settings or tools
import Toolbar from './Toolbar'; // Toolbar component for tool options
import './new_file.css'; // CSS file for styling the NewFile layout

const NewFile = () => {
  return (
    <div className="new_file">
      {/* Sidebar component on the left for navigation or element selection */}
      <Sidebar />
      
      {/* Main content area that includes the Toolbar and Workspace */}
      <div className="main-content">
        {/* Toolbar component at the top for tool options */}
        <Toolbar />
        {/* Workspace component as the central canvas */}
        <Workspace />
      </div>
      
      {/* RightPanel component on the right for additional settings or utilities */}
      <RightPanel />
    </div>
  );
};

export default NewFile;
