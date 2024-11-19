/* This is the upward bar for the homepage */

import React, { useState, useEffect } from 'react';
import './Toolbar.css';

// The TopBar component is the main toolbar for the homepage, providing navigation and actions.
const TopBar = ({ onNewFileClick }) => {
  // State to track whether the import menu is open or not.
  const [isImportMenuOpen, setIsImportMenuOpen] = useState(false);

  // Toggles the visibility of the import menu.
  const toggleImportMenu = () => setIsImportMenuOpen((prev) => !prev);

  // Handles clicks outside the toolbar to close the import menu if it's open.
  const handleClickOutside = (event) => {
    if (
      !event.target.closest('.toolbar-button') &&
      !event.target.closest('.import-dialog')
    ) {
      setIsImportMenuOpen(false);
    }
  };

  // Adds and cleans up the event listener for detecting clicks outside the menu.
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Options for importable file types displayed in the Import menu.
  const importOptions = [
    { icon: 'play', title: 'Video', format: 'MP4', lightning: true, type: 'video' },
    { icon: 'hand-rock', title: '3D Model', format: 'GLTF, STL, FBX, OBJ', type: '3d' },
    { icon: 'volume-up', title: 'Sound', format: 'MP3, WAV', type: 'sound' },
    { icon: 'bezier-curve', title: 'Vector', format: 'SVG', type: 'vector' },
    { icon: 'image', title: 'Image', format: 'JPG, PNG', type: 'image' },
    { icon: 'cube', title: 'Spline', format: '.spline.scene', type: 'spline' },
    { icon: 'asterisk', title: 'Gaussian Splat', format: 'PLY', type: 'splat' },
  ];

  // AI generation options displayed in the Import menu.
  const aiOptions = [
    { icon: 'cube', title: 'AI 3D Generation', badge: 'AI Add-on', type: 'ai-3d' },
    { icon: 'layer-group', title: 'AI Texture', badge: 'AI Add-on', type: 'ai-texture' },
  ];

  return (
    <div className="toolbar">
      {/* Left section of the toolbar for basic navigation */}
      <div className="toolbar-left">
        {/* Button to navigate to the homepage */}
        <button className="toolbar-button home-button">
          <i className="fas fa-home"></i> Home
        </button>
        {/* Button to create a new folder */}
        <button className="toolbar-button new-folder-button">
          <i className="fas fa-folder-plus"></i> New Folder
        </button>
      </div>

      {/* Center section of the toolbar containing the search bar */}
      <div className="toolbar-center">
        <div className="search-container">
          {/* Search icon */}
          <i className="fas fa-search search-icon"></i>
          {/* Input field for searching */}
          <input type="text" className="toolbar-search" placeholder="            Search" />
        </div>
      </div>

      {/* Right section of the toolbar for advanced actions */}
      <div className="toolbar-right">
        {/* Button to open the Import menu */}
        <button className="toolbar-button import-button" onClick={toggleImportMenu}>
          <i className="fas fa-upload"></i> Import
        </button>

        {/* Conditional rendering of the Import menu */}
        {isImportMenuOpen && (
          <div className="import-dialog">
            <h3>Import or Drag & Drop</h3>
            {/* Grid layout for displaying import options */}
            <div className="import-grid">
              {importOptions.map((option, index) => (
                <div key={index} className="import-card" data-type={option.type}>
                  {/* Icon for the import option */}
                  <i className={`fas fa-${option.icon}`}></i>
                  <div className="import-card-content">
                    <span className="import-title">
                      {option.title}
                      {/* Lightning bolt icon for options with fast processing */}
                      {option.lightning && <i className="fas fa-bolt lightning"></i>}
                    </span>
                    {/* Supported file formats for the import option */}
                    <span className="import-format">{option.format}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider between import and AI generation options */}
            <div className="import-divider">
              <span>or... Generate it!</span>
            </div>

            {/* Grid layout for displaying AI generation options */}
            <div className="ai-grid">
              {aiOptions.map((option, index) => (
                <div key={index} className="import-card" data-type={option.type}>
                  {/* Icon for the AI generation option */}
                  <i className={`fas fa-${option.icon}`}></i>
                  <div className="import-card-content">
                    <span className="import-title">{option.title}</span>
                    {/* Badge indicating an AI Add-on */}
                    <span className="ai-badge">{option.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Button for generating new content */}
        <button className="toolbar-button generate-button">
          <i className="fas fa-wand-magic-sparkles"></i> Generate
        </button>
        
        {/* Button to open NewFile in a new window */}
        <button
          className="toolbar-button new-file-button"
          onClick={onNewFileClick}
        >
          <i className="fas fa-plus"></i> New File
        </button>
      </div>
    </div>
  );
};

export default TopBar;
