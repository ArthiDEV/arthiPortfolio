import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  placeholder = 'blur',
  width,
  height,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad && onLoad();
  };

  const handleError = () => {
    setHasError(true);
    onError && onError();
  };

  // Generate WebP and fallback sources
  const generateSources = (imagePath) => {
    if (!imagePath) return [];
    
    const basePath = imagePath.replace(/\.[^/.]+$/, '');
    const extension = imagePath.split('.').pop().toLowerCase();
    
    const sources = [];
    
    // Add WebP source if not already WebP
    if (extension !== 'webp') {
      sources.push({
        srcSet: `${basePath}.webp`,
        type: 'image/webp'
      });
    }
    
    // Add AVIF source for even better compression
    if (extension !== 'avif') {
      sources.push({
        srcSet: `${basePath}.avif`,
        type: 'image/avif'
      });
    }
    
    return sources;
  };

  const sources = generateSources(src);

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 animate-pulse flex items-center justify-center"
          style={{ 
            backdropFilter: 'blur(10px)',
            background: placeholder === 'blur' 
              ? 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))' 
              : '#1f2937'
          }}
        >
          {placeholder === 'blur' && (
            <div className="text-light-200/60 text-lg font-semibold">
              {alt ? alt.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2) : 'IMG'}
            </div>
          )}
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center">
          <div className="text-white text-2xl font-bold">
            {alt ? alt.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2) : 'IMG'}
          </div>
        </div>
      )}

      {/* Actual image */}
      {(isInView || priority) && (
        <picture>
          {sources.map((source, index) => (
            <source 
              key={index}
              srcSet={source.srcSet} 
              type={source.type}
              sizes={sizes}
            />
          ))}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;