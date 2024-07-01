import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import ThemeProvider from './components/ThemeProvider';
import MonitorDashboard from './pages/MonitorDashboard';


function App() {
  return (
    <div>
      {/* <ThemeProvider> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/monitor-dashboard" element={<MonitorDashboard />} />
        </Routes>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
