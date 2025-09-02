import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll spy functionality
 * Automatically detects which section is currently visible
 * @param {Array} sectionIds - Array of section IDs to watch
 * @param {number} offset - Offset from top for detection (default: 100)
 * @returns {string} - Currently active section ID
 */
export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the current section
      let currentSection = sectionIds[0];
      
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

/**
 * Smooth scroll to a specific section
 * @param {string} sectionId - ID of the section to scroll to
 * @param {number} offset - Offset from top (default: 0)
 */
export const scrollToSection = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};