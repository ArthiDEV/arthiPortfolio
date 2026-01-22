import React, { useEffect, useState } from 'react';

function MouseAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationId;
    
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a') || 
                           target.classList.contains('hover-effect');
      
      setIsHovering(isInteractive);
      

      
      // Add new trail point
      setTrails(prevTrails => {
        const newTrails = [...prevTrails, { 
          ...newPosition, 
          id: Date.now() + Math.random(),
          opacity: 1,
          size: isInteractive ? 1.5 : 1
        }];
        
        // Keep only last 12 trail points
        return newTrails.slice(-12);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Animate trail opacity decay
    const animateTrails = () => {
      setTrails(prevTrails => 
        prevTrails.map((trail, index) => ({
          ...trail,
          opacity: (index + 1) / prevTrails.length * 0.7
        })).filter(trail => trail.opacity > 0.05)
      );
      animationId = requestAnimationFrame(animateTrails);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animateTrails();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] hidden md:block">
      {/* Main cursor glow */}
      <div
        className={`absolute rounded-full transition-all duration-200 ease-out ${
          isHovering ? 'w-12 h-12' : 'w-8 h-8'
        }`}
        style={{
          left: mousePosition.x - (isHovering ? 24 : 16),
          top: mousePosition.y - (isHovering ? 24 : 16),
          background: isHovering 
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 100%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)',
          boxShadow: isHovering 
            ? '0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)'
            : '0 0 20px rgba(168, 85, 247, 0.2)',
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
      
      {/* Cursor trail */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${12 * trail.size}px`,
            height: `${12 * trail.size}px`,
            left: trail.x - (6 * trail.size),
            top: trail.y - (6 * trail.size),
            background: `radial-gradient(circle, rgba(168, 85, 247, ${trail.opacity * 0.6}) 0%, rgba(147, 51, 234, ${trail.opacity * 0.3}) 50%, transparent 100%)`,
            transform: `scale(${trail.opacity * trail.size})`,
          }}
        />
      ))}
      
      {/* Center dot */}
      <div
        className={`absolute rounded-full transition-all duration-150 ease-out ${
          isHovering ? 'w-3 h-3 bg-secondary-300' : 'w-2 h-2 bg-secondary-400'
        }`}
        style={{
          left: mousePosition.x - (isHovering ? 6 : 4),
          top: mousePosition.y - (isHovering ? 6 : 4),
          boxShadow: isHovering 
            ? '0 0 15px rgba(168, 85, 247, 0.8), 0 0 25px rgba(147, 51, 234, 0.4)'
            : '0 0 10px rgba(168, 85, 247, 0.6)',
          transform: isHovering ? 'scale(1.3)' : 'scale(1)',
        }}
      />
      
      {/* Pulse ring on hover */}
      {isHovering && (
        <div
          className="absolute rounded-full border-2 border-secondary-400 animate-pulse"
          style={{
            width: '40px',
            height: '40px',
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      )}
    </div>
  );
}

export default MouseAnimation;