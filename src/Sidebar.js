/*Sidebar for homepage */



import React from 'react';
import './Sidebar.css';

/* The Sidebar component displays a vertical navigation menu with user profile, 
   main menu items, and footer options. It supports click actions for each menu item. */
const Sidebar = ({ onMenuItemClick }) => {
  // Array of main menu items with their unique ID, icon class, label, and optional active state
  const menuItems = [
    { id: 'home', icon: 'fa-home', label: 'Home', isActive: true },
    { id: 'files', icon: 'fa-file-alt', label: 'My files' },
    { id: 'generate', icon: 'fa-wand-magic-sparkles', label: 'Generate' },
    { id: 'shared', icon: 'fa-share-nodes', label: 'Shared with me' },
    { id: 'community', icon: 'fa-users', label: 'Community' },
    { id: 'tutorials', icon: 'fa-graduation-cap', label: 'Tutorials' },
    { id: 'library', icon: 'fa-book', label: 'Library' },
    { id: 'inbox', icon: 'fa-inbox', label: 'Inbox' }
  ];

  // Array of footer menu items with optional Discord-specific styling
  const footerItems = [
    { id: 'discord', icon: 'fab fa-discord', label: 'Join our Discord', isDiscord: true },
    { id: 'archive', icon: 'fa-box-archive', label: 'Archive' },
    { id: 'updates', icon: 'fa-arrows-rotate', label: 'Updates' },
    { id: 'help', icon: 'fa-circle-question', label: 'Help & Feedback' }
  ];

  return (
    <div className="sidebar">
      {/* User profile section at the top of the sidebar */}
      <div className="sidebar-profile">
        <div className="avatar">U</div> {/* Placeholder avatar with the initial "U" */}
        <span className="username">USER NAME</span> {/* Static username text */}
      </div>

      {/* Main menu section with a list of clickable items */}
      <nav className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id} // Unique key for React's list rendering
              className={`menu-item ${item.isActive ? 'active' : ''}`} // Conditional class for active state
              onClick={() => onMenuItemClick(item.label)} // Calls the provided function when clicked
            >
              <i className={`fas ${item.icon}`}></i> {/* Font Awesome icon */}
              <span>{item.label}</span> {/* Display label for the menu item */}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer section for additional links or actions */}
      <div className="sidebar-footer">
        <ul>
          {footerItems.map((item) => (
            <li
              key={item.id} // Unique key for React's list rendering
              className={`menu-item ${item.isDiscord ? 'discord' : ''}`} // Conditional class for Discord styling
              onClick={() => onMenuItemClick(item.label)} // Calls the provided function when clicked
            >
              <i className={item.isDiscord ? item.icon : `fas ${item.icon}`}></i> {/* Icon logic for Discord */}
              <span>{item.label}</span> {/* Display label for the footer item */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
