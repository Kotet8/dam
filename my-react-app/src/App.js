import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './Homepage/homepage';
import PhotoDetails from './Homepage/PhotoDetails/photodetails';
import LandingPage from './LandingPage/landingpage'; 

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/photodetails" element={<PhotoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
