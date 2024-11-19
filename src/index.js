import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NewFile from './components/new_file'; // Import NewFile page
import reportWebVitals from './reportWebVitals';

// Dynamically add Font Awesome stylesheet link
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/UI_design" element={<App />} /> {/* Home page */}
        <Route path="/UI_design/new_file" element={<NewFile />} /> {/* New file page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
