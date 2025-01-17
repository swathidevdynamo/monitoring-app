import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>
);
