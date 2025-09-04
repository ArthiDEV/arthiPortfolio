// Bundle analyzer utility for development

// Function to analyze bundle size and performance
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    // Measure bundle size
    const measureBundleSize = () => {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      
      scripts.forEach(script => {
        if (script.src && script.src.includes('static/js')) {
          // Estimate size from response headers or use performance API
          if ('performance' in window) {
            const entries = performance.getEntriesByType('resource');
            const entry = entries.find(e => e.name === script.src);
            if (entry) {
              totalSize += entry.transferSize || 0;
            }
          }
        }
      });
      
      console.log(`📦 Total JS Bundle Size: ${(totalSize / 1024).toFixed(2)} KB`);
    };

    // Measure unused JavaScript
    const measureUnusedJS = async () => {
      if ('coverage' in window && window.coverage) {
        const coverage = await window.coverage.stopJSCoverage();
        let totalBytes = 0;
        let usedBytes = 0;
        
        coverage.forEach(entry => {
          totalBytes += entry.text.length;
          entry.ranges.forEach(range => {
            usedBytes += range.end - range.start;
          });
        });
        
        const unusedBytes = totalBytes - usedBytes;
        const unusedPercentage = (unusedBytes / totalBytes) * 100;
        
        console.log(`🗑️ Unused JavaScript: ${(unusedBytes / 1024).toFixed(2)} KB (${unusedPercentage.toFixed(1)}%)`);
      }
    };

    // Analyze third-party scripts
    const analyzeThirdPartyScripts = () => {
      const scripts = document.querySelectorAll('script[src]');
      const thirdPartyScripts = [];
      const currentOrigin = window.location.origin;
      
      scripts.forEach(script => {
        if (script.src && !script.src.startsWith(currentOrigin)) {
          thirdPartyScripts.push(script.src);
        }
      });
      
      if (thirdPartyScripts.length > 0) {
        console.log('🌐 Third-party scripts detected:', thirdPartyScripts);
      } else {
        console.log('✅ No third-party scripts found');
      }
    };

    // Run analysis after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        measureBundleSize();
        measureUnusedJS();
        analyzeThirdPartyScripts();
      }, 1000);
    });
  }
};

// Function to optimize images dynamically
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Add loading=\"lazy\" if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding=\"async\" for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Optimize image dimensions
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
      const observer = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const { width, height } = entry.contentRect;
          if (width && height) {
            img.setAttribute('width', Math.round(width));
            img.setAttribute('height', Math.round(height));
            observer.unobserve(img);
          }
        });
      });
      observer.observe(img);
    }
  });
};

// Function to preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/static/css/main.css', as: 'style' },
    { href: '/static/js/main.js', as: 'script' }
  ];
  
  criticalResources.forEach(resource => {
    const existingLink = document.querySelector('link[href="' + resource.href + '"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    }
  });
};

// Initialize optimization functions
export const initPerformanceOptimizations = () => {
  analyzeBundleSize();
  
  // Run image optimization after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeImages);
  } else {
    optimizeImages();
  }
  
  preloadCriticalResources();
};

export default initPerformanceOptimizations;