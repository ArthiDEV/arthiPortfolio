import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './component/Sidebar';
import About from './component/About';
import Project from './component/Project';
import POC from './component/POC';
import Contact from './component/Contact';
import MouseAnimation from './component/MouseAnimation';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div className="relative w-full h-full">
      <AnimatePresence 
        mode="wait" 
        initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/poc" element={<POC />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route for invalid URLs - redirect to About */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen font-custom antialiased bg-dark-900 overflow-x-hidden">
        <Sidebar />
        <div className="relative flex-1 w-full lg:ml-80  min-h-screen overflow-y-auto overflow-x-hidden">
          <AnimatedRoutes />
          
          {/* Copyright - Horizontal after main content */}
          {/* <div className="w-full  flex justify-center py-4 sm:py-6 lg:py-8 px-2 sm:px-4">
            <p className="text-light-200 text-xs sm:text-sm lg:text-base font-medium px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-dark-800/90 backdrop-blur-md rounded-lg sm:rounded-xl border border-primary-500/30 text-center shadow-lg w-full max-w-4xl">
              Copyright © 2025 Arthi Harikrishnan • Template: <span className="text-secondary-300 font-semibold">Portfolio</span>
            </p>
          </div> */}
        </div>
        <MouseAnimation />
      </div>
    </Router>
  );
}

export default App;
