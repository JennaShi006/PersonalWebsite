import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/NavBar';
import AboutPage from '../src/Pages/AboutPage';
import Resume from '../src/Pages/Resume';
import Singapore from '../src/Pages/Singapore';
import Internship from '../src/Pages/Internship';
import Skills from '../src/Pages/Skills'; // Assuming you have a Skills page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

