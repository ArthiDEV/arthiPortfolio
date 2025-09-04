import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Performance monitoring function
function sendToAnalytics(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`${metric.name}: ${metric.value}`);
  }
  
  // In production, you would send this to your analytics service
  // Example: gtag('event', metric.name, { value: metric.value });
}

// Measure Core Web Vitals
function measureWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

// Performance observer for additional metrics
function observePerformance() {
  // Observe navigation timing
  if ('performance' in window && 'getEntriesByType' in performance) {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      console.log('Navigation Timing:');
      console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`);
      console.log(`Load Complete: ${navigation.loadEventEnd - navigation.loadEventStart}ms`);
    }
  }

  // Observe resource timing
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log(`LCP: ${entry.startTime}ms`);
        }
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          console.log(`Layout Shift: ${entry.value}`);
        }
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
  }
}

// Memory usage monitoring
function monitorMemory() {
  if ('memory' in performance) {
    const memory = performance.memory;
    console.log('Memory Usage:');
    console.log(`Used: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
    console.log(`Total: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
    console.log(`Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
  }
}

// Bundle size monitoring
function monitorBundleSize() {
  if ('performance' in window && 'getEntriesByType' in performance) {
    const resources = performance.getEntriesByType('resource');
    let totalSize = 0;
    
    resources.forEach((resource) => {
      if (resource.name.includes('.js') || resource.name.includes('.css')) {
        totalSize += resource.transferSize || 0;
      }
    });
    
    console.log(`Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB`);
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    // Wait for page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        measureWebVitals();
        observePerformance();
        monitorMemory();
        monitorBundleSize();
      }, 1000);
    });
  }
}

export default initPerformanceMonitoring;