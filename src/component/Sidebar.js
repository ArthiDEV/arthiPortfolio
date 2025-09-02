import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoArthi from "../assets/profile/logo_arthi_1.png";

function Sidebar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false); // Prevent rapid clicking

  // Scroll spy functionality - Fixed approach for Certificate detection
  useEffect(() => {
  if (location.pathname !== "/home") return;

  const scrollContainer = document.querySelector(".h-full.overflow-y-auto");
  if (!scrollContainer) return;

  const handleScroll = () => {
    const scrollPosition = scrollContainer.scrollTop;
    let currentSection = "about";

    const sections = [
      { id: "about", element: document.getElementById("about") },
      { id: "education", element: document.getElementById("education") },
      { id: "skills", element: document.getElementById("skills") },
      { id: "certificate", element: document.getElementById("certificate") },
      { id: "experience", element: document.getElementById("experience") }
    ];

    const validSections = sections.filter((s) => s.element);

    for (let i = validSections.length - 1; i >= 0; i--) {
      const section = validSections[i];
      const sectionTop = section.element.offsetTop;
      const sectionHeight = section.element.offsetHeight;

      if (
        scrollPosition >= sectionTop - 200 &&
        scrollPosition < sectionTop + sectionHeight - 200
      ) {
        currentSection = section.id;
        break;
      }
    }

    setActiveSection(currentSection);
  };

  scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Run once on mount

  return () => scrollContainer.removeEventListener("scroll", handleScroll);
}, [location.pathname]);



  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-sidebar")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent swipe gestures from opening menu
  useEffect(() => {
    const preventSwipeMenu = (e) => {
      // Prevent swipe gestures on the edge of the screen
      if (e.touches && e.touches[0] && e.touches[0].clientX < 50) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", preventSwipeMenu, { passive: false });
    document.addEventListener("touchmove", preventSwipeMenu, { passive: false });
    
    return () => {
      document.removeEventListener("touchstart", preventSwipeMenu);
      document.removeEventListener("touchmove", preventSwipeMenu);
    };
  }, []);

  // Handle Home/About link click
  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    // Always scroll to top when Home is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset active section to education (first section)
    setActiveSection("about");
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Immediately update active section for better user feedback
      setActiveSection(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle mobile menu - simplified with debouncing for reliable single-click behavior
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prevent rapid clicking
    if (isToggling) {
      console.log("Toggle in progress, ignoring click");
      return;
    }
    
    setIsToggling(true);
    console.log("Hamburger clicked, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(prev => !prev);
    
    // Reset toggle lock after a short delay
    // setTimeout(() => {
    // }, 300);
    setIsToggling(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div
        className="lg:hidden fixed top-4 left-4 z-[100]"
        style={{ zIndex: 100 }}
      >
        <button
          onClick={toggleMobileMenu}
          disabled={isToggling}
          className={`hover-effect bg-dark-800/90 backdrop-blur-sm border-2 rounded-lg p-4 text-light-50 hover:bg-dark-700/90 transition-all duration-300 shadow-xl cursor-pointer min-w-[52px] min-h-[52px] flex items-center justify-center ${
            isMobileMenuOpen
              ? "border-secondary-400 bg-secondary-600/20"
              : "border-primary-500/30"
          } ${
            isToggling ? "opacity-70 cursor-wait" : ""
          }`}
          aria-label="Toggle mobile menu"
          style={{
            zIndex: 100,
            pointerEvents: isToggling ? "none" : "auto",
            touchAction: "manipulation", // Prevent double-tap zoom and enable fast tap
            userSelect: "none", // Prevent text selection
            WebkitUserSelect: "none",
          }}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Debug indicator */}
        <div className="absolute -bottom-8 left-0 text-xs text-light-200 bg-dark-800/90 px-2 py-1 rounded">
          {isMobileMenuOpen ? "OPEN" : "CLOSED"}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          onClick={() => {
            console.log("Overlay clicked, closing menu");
            setIsMobileMenuOpen(false);
          }}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`mobile-sidebar w-80 md:w-72 lg:w-80 h-screen bg-dark-900/95 lg:bg-dark-900 backdrop-blur-sm fixed left-0 top-0 py-6 lg:py-8 px-4 lg:px-6 shadow-2xl z-[70] transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          touchAction: "pan-y", // Only allow vertical scrolling, prevent horizontal swipes
          overscrollBehavior: "contain", // Prevent scroll chaining
        }}
      >
        {/* Logo/Brand */}
        <div className="mb-8 lg:mb-12 mt-12 lg:mt-0">
          <div className="relative group">
            {/* Logo Container with Gradient Background */}
            <div className="bg-gradient-to-br from-secondary-500 via-purple-600 to-primary-600 p-[2px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-dark-800/90 backdrop-blur-sm rounded-xl px-4 lg:px-6 hover:bg-dark-800/70 transition-all duration-300">
                <div className="flex items-center justify-center">
                  <img 
                    src={logoArthi} 
                    alt="Arthi Harikrishnan Logo" 
                    className="w-20  h-20 lg:w-24 lg:h-24 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* <h2 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-purple-400 to-primary-400 text-xl lg:text-2xl font-bold tracking-wider text-center" 
                    style={{display: 'none'}}
                  >
                    AH
                  </h2> */}
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 via-purple-600/20 to-primary-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="list-none p-0 m-0 space-y-2">
          <li>
            <NavLink
              to="/home"
              onClick={handleAboutClick}
              className={({ isActive }) =>
                `hover-effect group flex items-center space-x-3 lg:space-x-4 text-light-200 no-underline py-3 lg:py-4 px-4 lg:px-6 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg hover:bg-secondary-600/10 hover:text-light-50 active:bg-secondary-600/20 touch-manipulation ${
                  isActive
                    ? "bg-secondary-500/20 text-secondary-200 border-l-4 border-secondary-400 shadow-lg"
                    : ""
                }`
              }
            >
              <svg
                className="w-5 h-5 lg:w-5 lg:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="lg:inline">Home</span>
            </NavLink>

            {/* Sub-menu for About page sections */}
            {location.pathname === "/home" && (
              <ul className="ml-4 lg:ml-6 mt-2 space-y-1 border-l-2 border-primary-500/20 pl-3 lg:pl-4">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={`w-full text-left py-2 px-2 lg:px-3 text-xs lg:text-sm font-medium transition-all duration-300 rounded-md hover:bg-secondary-600/10 hover:text-light-50 relative ${
                      activeSection === "about"
                        ? "bg-secondary-500/20 text-secondary-300 border-l-2 border-secondary-400"
                        : "text-light-300"
                    }`}
                  >
                    About
                    {activeSection === "about" && (
                      <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("education")}
                    className={`w-full text-left py-2 px-2 lg:px-3 text-xs lg:text-sm font-medium transition-all duration-300 rounded-md hover:bg-secondary-600/10 hover:text-light-50 relative ${
                      activeSection === "education"
                        ? "bg-secondary-500/20 text-secondary-300 border-l-2 border-secondary-400"
                        : "text-light-300"
                    }`}
                  >
                    Education
                    {activeSection === "education" && (
                      <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className={`w-full text-left py-2 px-2 lg:px-3 text-xs lg:text-sm font-medium transition-all duration-300 rounded-md hover:bg-secondary-600/10 hover:text-light-50 relative ${
                      activeSection === "skills"
                        ? "bg-secondary-500/20 text-secondary-300 border-l-2 border-secondary-400"
                        : "text-light-300"
                    }`}
                  >
                    Skills
                    {activeSection === "skills" && (
                      <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("certificate")}
                    className={`w-full text-left py-2 px-2 lg:px-3 text-xs lg:text-sm font-medium transition-all duration-300 rounded-md hover:bg-secondary-600/10 hover:text-light-50 relative ${
                      activeSection === "certificate"
                        ? "bg-secondary-500/20 text-secondary-300 border-l-2 border-secondary-400"
                        : "text-light-300"
                    }`}
                  >
                    Certificate
                    {activeSection === "certificate" && (
                      <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className={`w-full text-left py-2 px-2 lg:px-3 text-xs lg:text-sm font-medium transition-all duration-300 rounded-md hover:bg-secondary-600/10 hover:text-light-50 relative ${
                      activeSection === "experience"
                        ? "bg-secondary-500/20 text-secondary-300 border-l-2 border-secondary-400"
                        : "text-light-300"
                    }`}
                  >
                    Experience
                    {activeSection === "experience" && (
                      <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
                    )}
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `hover-effect group flex items-center space-x-3 lg:space-x-4 text-light-200 no-underline py-3 lg:py-4 px-4 lg:px-6 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg hover:bg-secondary-600/10 hover:text-light-50 active:bg-secondary-600/20 touch-manipulation ${
                  isActive
                    ? "bg-secondary-500/20 text-secondary-200 border-l-4 border-secondary-400 shadow-lg"
                    : ""
                }`
              }
            >
              <svg
                className="w-5 h-5 lg:w-5 lg:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="lg:inline">Work</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/poc"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `hover-effect group flex items-center space-x-3 lg:space-x-4 text-light-200 no-underline py-3 lg:py-4 px-4 lg:px-6 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg hover:bg-secondary-600/10 hover:text-light-50 active:bg-secondary-600/20 touch-manipulation ${
                  isActive
                    ? "bg-secondary-500/20 text-secondary-200 border-l-4 border-secondary-400 shadow-lg"
                    : ""
                }`
              }
            >
              <svg
                className="w-5 h-5 lg:w-5 lg:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 6.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
              </svg>
              <span className="lg:inline">POC</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `hover-effect group flex items-center space-x-3 lg:space-x-4 text-light-200 no-underline py-3 lg:py-4 px-4 lg:px-6 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg hover:bg-secondary-600/10 hover:text-light-50 active:bg-secondary-600/20 touch-manipulation ${
                  isActive
                    ? "bg-secondary-500/20 text-secondary-200 border-l-4 border-secondary-400 shadow-lg"
                    : ""
                }`
              }
            >
              <svg
                className="w-5 h-5 lg:w-5 lg:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="lg:inline">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
