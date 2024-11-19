import React from 'react';
import Sidebar from './Sidebar'; // Sidebar component for navigation
import TopBar from './TopBar';   // TopBar component for header functionality
import './App.css';             // Styling for the App component

/* 
   App Component:
   This serves as the main layout for the homepage, including the sidebar, top bar, 
   and a central content area. It provides navigation and functionality for opening 
   a new file UI in a separate tab.
*/
const App = () => {
  // Function to handle the "New File" button click in the top bar
  const handleNewFileClick = () => {
    window.open('/UI_design/new_file', '_blank'); // Opens the New File UI in a new browser tab
  };

  return (
    <div className="app">
      {/* Sidebar for navigation options */}
      <Sidebar />

      {/* Main content area */}
      <div className="main-content">
        {/* TopBar with a callback for the New File button */}
        <TopBar onNewFileClick={handleNewFileClick} />

        {/* Central area for additional homepage content */}
        <div className="content-area">
          <div className="scene-placeholder">Content Area</div>
        </div>
      </div>
    </div>
  );
};

export default App;
