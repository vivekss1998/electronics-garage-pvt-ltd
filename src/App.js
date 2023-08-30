// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './frontend/Home';
import Repairers from './frontend/components/Repairers';
import Profile from './frontend/components/Profile'; // Import Profile component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repairers" element={<Repairers />} />
        <Route path="/repairers/:repairerId" element={<Profile />} /> {/* Add Profile route */}
      </Routes>
    </Router>
  );
}

export default App;
