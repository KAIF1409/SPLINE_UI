import React, { useState } from 'react';
import { Settings, Home, HelpCircle, Plus, ChevronDown } from 'lucide-react';
import './App.css';

const App = () => {
  const [showTopBar, setShowTopBar] = useState(false);
  const [showSidebarDropdown, setShowSidebarDropdown] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">LOGO</div>
        <nav className="sidebar-nav">
          <div className="sidebar-item" onClick={() => setShowSidebarDropdown(!showSidebarDropdown)}>
            <Home size={24} />
            <ChevronDown size={16} />
          </div>
          {showSidebarDropdown && (
            <div className="sidebar-dropdown">
              <a href="#">Home</a>
              <a href="#">Settings</a>
              <a href="#">Help</a>
            </div>
          )}
          <div className="sidebar-item">
            <Settings size={24} />
          </div>
          <div className="sidebar-item">
            <HelpCircle size={24} />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Wireframe Area */}
        <div className="wireframe">
          {/* Left Panel */}
          <div className="panel left-panel">
            <h3>Object list</h3>
            <div className="scene-list">
              <div>Scene</div>
              <div className="scene-item">Object 1</div>
              <div className="scene-item">Object 2</div>
              <div className="scene-item">Object 3</div>
            </div>
          </div>

          {/* Center Panel */}
          <div className="panel center-panel">
            <div className="controls">
              <button onClick={() => setShowTopBar(!showTopBar)}><Plus size={20} /></button>
              {[ '↓', '↺', '⟲','💬', '⏮', '▶', '⏭', '⏹'].map((icon, index) => (
                <button key={index}>{icon}</button>

              ))}
              <button className="export-btn">EXPORT</button>
            </div>
            {showTopBar && (
              <div className="top-bar">
                <input type="text" placeholder="Search..." className="search-input" />
                <select className="select-input">
                  <option>Object</option>
                </select>
                <select className="select-input">
                  <option>Asset</option>
                </select>
                <select className="select-input">
                  <option>Template</option>
                </select>
              </div>
            )}
            <div className="example-object">
              <div>Example object</div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="panel right-panel">
            <h3>Frame 1</h3>
            <div className="properties">
              <h4>Properties</h4>
              <div className="property">
                <div>Position</div>
                <div className="input-group">
                  <input type="text" placeholder="X" />
                  <input type="text" placeholder="Y" />
                  <input type="text" placeholder="Z" />
                </div>
              </div>
              <div className="property">
                <div>Rotation</div>
                <div className="input-group">
                  <input type="range" />
                  <input type="range" />
                  <input type="range" />
                </div>
              </div>
              <div className="property">
                <div>Scale</div>
                <div className="input-group">
                  <input type="range" placeholder="X" />
                  <input type="range" placeholder="Y" />
                  <input type="range" placeholder="Z" />
                </div>
              </div>
            </div>
            <div className="settings">
              <h4>Material settings</h4>
              <div className="settings-placeholder"></div>
            </div>
            <div className="settings">
              <h4>Lighting settings</h4>
              <div className="settings-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;