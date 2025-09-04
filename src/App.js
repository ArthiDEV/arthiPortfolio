import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './component/Sidebar';
import MouseAnimation from './component/MouseAnimation';
import ErrorBoundary from './component/ErrorBoundary';
import { initPerformanceMonitoring } from './utils/performanceMonitor';
import initPerformanceOptimizations from './utils/bundleOptimizer';
import { initNetworkOptimizations } from './utils/networkOptimizer';
import './App.css';

// Lazy load components for better performance
const About = lazy(() => import('./component/About'));
const Project = lazy(() => import('./component/Project'));
const POC = lazy(() => import('./component/POC'));
const Contact = lazy(() => import('./component/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-dark-900">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-secondary-500/20 border-b-secondary-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.75s' }}></div>
    </div>
  </div>
);

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
          <Route path="/home" element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          } />
          <Route path="/project" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Project />
            </Suspense>
          } />
          <Route path="/poc" element={
            <Suspense fallback={<LoadingSpinner />}>
              <POC />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          } />
          {/* Catch-all route for invalid URLs - redirect to About */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  // Initialize performance monitoring and optimizations
  useEffect(() => {
    // Use requestIdleCallback for non-critical initialization
    const initOptimizations = () => {
      initPerformanceMonitoring();
      initPerformanceOptimizations();
      initNetworkOptimizations();
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(initOptimizations);
    } else {
      setTimeout(initOptimizations, 100);
    }
  }, []);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
