// MainLayout.js
// This component serves as the primary layout for the application, containing the sidebar and top bar components.

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const MainLayout = () => {
  // State to control the visibility of the TopBar component
  const [showTopBar, setShowTopBar] = useState(false);

  /**
   * Handles the logic when a menu item is clicked in the Sidebar.
   * @param {string} menuItem - The name of the clicked menu item.
   */
  const handleMenuItemClick = (menuItem) => {
    // Show the TopBar if the clicked menu item is 'Home' or 'My files'
    if (menuItem === 'Home' || menuItem === 'My files') {
      setShowTopBar(true);
    } else {
      // Hide the TopBar for other menu items
      setShowTopBar(false);
    }
  };

  return (
    <div className="main-layout">
      {/* Sidebar component with a prop to handle menu item clicks */}
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      
      {/* Conditionally render the TopBar component based on the state */}
      {showTopBar && <TopBar />}
      
      {/* Placeholder for other components or layout elements */}
      {/* Additional content can be added here to extend the main layout */}
    </div>
  );
};

export default MainLayout;
