// Network optimization utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/static/css/main.css', as: 'style' },
    { href: '/static/js/bundle.js', as: 'script' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    link.onload = () => console.log(`Preloaded: ${resource.href}`);
    document.head.appendChild(link);
  });
};

// Prefetch next page resources
export const prefetchNextPageResources = () => {
  const nextPageResources = [
    '/project',
    '/poc',
    '/contact'
  ];

  nextPageResources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Optimize external links
export const optimizeExternalLinks = () => {
  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
  
  externalLinks.forEach(link => {
    // Add security attributes
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
    
    // Add prefetch for important external resources
    if (link.href.includes('github.com') || link.href.includes('linkedin.com')) {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'dns-prefetch';
      prefetchLink.href = new URL(link.href).origin;
      document.head.appendChild(prefetchLink);
    }
  });
};

// Connection optimization
export const optimizeConnections = () => {
  // Add preconnect for external domains
  const externalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Resource compression detection
export const checkCompressionSupport = () => {
  const compressionSupport = {
    gzip: false,
    brotli: false,
    webp: false,
    avif: false
  };

  // Check Accept-Encoding header support
  if (typeof fetch !== 'undefined') {
    const headers = new Headers();
    const acceptEncoding = headers.get('Accept-Encoding') || '';
    compressionSupport.gzip = acceptEncoding.includes('gzip');
    compressionSupport.brotli = acceptEncoding.includes('br');
  }

  // Check image format support
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  // WebP support
  compressionSupport.webp = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

  // AVIF support (basic check)
  const avifSupport = document.createElement('img');
  avifSupport.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
  avifSupport.onload = () => { compressionSupport.avif = true; };
  avifSupport.onerror = () => { compressionSupport.avif = false; };

  return compressionSupport;
};

// Network performance monitoring
export const monitorNetworkPerformance = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    console.log('Network Info:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    });

    // Adapt based on connection quality
    if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      // Reduce image quality, defer non-critical resources
      document.documentElement.classList.add('low-bandwidth');
    }
  }
};

// Critical request chain optimization
export const optimizeCriticalRequestChain = () => {
  // Inline critical CSS to reduce render-blocking requests
  const criticalCSS = `
    .fade-in { animation: fade-in 0.5s ease-out forwards; }
    .hover-effect { will-change: transform; transform: translateZ(0); }
    .transition-all { transition-property: transform, opacity, background-color, border-color; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);

  // Defer non-critical CSS
  const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
  nonCriticalCSS.forEach(link => {
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
  });
};

// Initialize all network optimizations
export const initNetworkOptimizations = () => {
  preloadCriticalResources();
  optimizeConnections();
  monitorNetworkPerformance();
  optimizeCriticalRequestChain();
  
  // Defer non-critical optimizations
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      prefetchNextPageResources();
      optimizeExternalLinks();
    });
  } else {
    setTimeout(() => {
      prefetchNextPageResources();
      optimizeExternalLinks();
    }, 1000);
  }

  console.log('Network optimizations initialized');
};

const networkOptimizer = {
  preloadCriticalResources,
  prefetchNextPageResources,
  optimizeExternalLinks,
  optimizeConnections,
  checkCompressionSupport,
  monitorNetworkPerformance,
  optimizeCriticalRequestChain,
  initNetworkOptimizations
};

export default networkOptimizer;