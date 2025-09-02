import React, { useState, useEffect } from "react";
import PageTransition from "./PageTransition";
import POCSkeleton from "./POCSkeleton";
import Copyright from "./Copyright";

function POC() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for POC data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second loading time

    return () => clearTimeout(timer);
  }, []);

  // Handle network issues or slow loading
  useEffect(() => {
    const handleOnline = () => {
      if (navigator.onLine) {
        setIsLoading(false);
      }
    };

    const handleOffline = () => {
      setIsLoading(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isLoading) {
    return <POCSkeleton />;
  }
  return (
    <PageTransition>
      <div
        id="poc-page"
        className="h-screen w-full bg-gradient-to-br from-dark-800 via-dark-900 to-black relative overflow-hidden overflow-x-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-500/10 to-transparent" />
        </div>

        {/* Fixed Background Rectangle Container */}
        <div className="absolute inset-x-2 top-16 bottom-2 sm:inset-x-4 sm:top-20 sm:bottom-4 lg:inset-8 bg-dark-800/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Scrollable Content Inside Rectangle */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {/* Main Content */}
            <div className="relative z-10 pb-16">
              <div className="relative z-10 p-3 sm:p-6 lg:p-12 max-w-6xl mx-auto pt-4 sm:pt-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-light-50 mb-6 sm:mb-8 lg:mb-12 text-center">
                  PROOF OF{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                    CONCEPTS
                  </span>
                </h1>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Banking Transactions Project */}
                  <div className="hover-effect group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-dark-800/70 hover:border-secondary-500/40">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-3 lg:mb-4 group-hover:text-secondary-400 transition-colors duration-300">
                          Banking Transactions System
                        </h3>
                        <p className="text-light-300 text-sm sm:text-base leading-relaxed mb-4">
                          Integrated{" "}
                          <span className="text-secondary-400 font-semibold">
                            GoCardless API
                          </span>{" "}
                          in a banking project to fetch and manage account
                          transactions. Enforced{" "}
                          <span className="text-secondary-400 font-semibold">
                            Supabase authentication
                          </span>{" "}
                          for user login and developed{" "}
                          <span className="text-secondary-400 font-semibold">
                            6 APIs
                          </span>{" "}
                          to retrieve detailed transaction data.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            GoCardless API
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Supabase
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            REST APIs
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Authentication
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between lg:justify-end lg:space-x-4">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                          Completed
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-secondary-400 ml-4 lg:ml-0">
                          🏦
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* E-commerce Shoes Website */}
                  <div className="hover-effect group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-dark-800/70 hover:border-secondary-500/40">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-3 lg:mb-4 group-hover:text-secondary-400 transition-colors duration-300">
                          E-commerce Shoes Website
                        </h3>
                        <p className="text-light-300 text-sm sm:text-base leading-relaxed mb-4">
                          Built an e-commerce shoe website with{" "}
                          <span className="text-secondary-400 font-semibold">
                            dynamic add-to-cart functionality
                          </span>{" "}
                          using React.js. Designed a{" "}
                          <span className="text-secondary-400 font-semibold">
                            responsive UI
                          </span>{" "}
                          and managed cart state efficiently for a seamless
                          shopping experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            React.js
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            E-commerce
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            State Management
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Responsive Design
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between lg:justify-end lg:space-x-4">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                          Completed
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-secondary-400 ml-4 lg:ml-0">
                          👟
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Freelance Projects Section Header */}
                  <div className="text-center py-4 sm:py-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-secondary-400 mb-2">
                      Freelance Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-purple mx-auto rounded-full"></div>
                  </div>

                  {/* Uma Hospital Website */}
                  <div className="hover-effect group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-dark-800/70 hover:border-secondary-500/40">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-3 lg:mb-4 group-hover:text-secondary-400 transition-colors duration-300">
                          Uma Hospital Website
                        </h3>
                        <p className="text-light-300 text-sm sm:text-base leading-relaxed mb-4">
                          Designed and developed a{" "}
                          <span className="text-secondary-400 font-semibold">
                            professional website
                          </span>{" "}
                          using WordPress, ensuring a{" "}
                          <span className="text-secondary-400 font-semibold">
                            clean layout
                          </span>
                          , user-friendly navigation, and{" "}
                          <span className="text-secondary-400 font-semibold">
                            responsive design
                          </span>{" "}
                          for optimal healthcare service presentation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            WordPress
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Healthcare
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Responsive Design
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Professional Layout
                          </span>
                        </div>
                        <a
                          href="https://umahospitals.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-effect inline-flex items-center space-x-2 bg-secondary-500/20 border border-secondary-500/30 text-secondary-400 py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-500 hover:text-white text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          <span>Visit Live Site</span>
                        </a>
                      </div>
                      <div className="flex items-center justify-between lg:justify-end lg:space-x-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                          Live Site
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-secondary-400 ml-4 lg:ml-0">
                          🏥
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* League Hotel Website */}
                  <div className="hover-effect group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-dark-800/70 hover:border-secondary-500/40">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-3 lg:mb-4 group-hover:text-secondary-400 transition-colors duration-300">
                          League Hotel Website
                        </h3>
                        <p className="text-light-300 text-sm sm:text-base leading-relaxed mb-4">
                          Built a{" "}
                          <span className="text-secondary-400 font-semibold">
                            modern and functional
                          </span>{" "}
                          WordPress website with an emphasis on{" "}
                          <span className="text-secondary-400 font-semibold">
                            visual appeal
                          </span>
                          , booking features, and{" "}
                          <span className="text-secondary-400 font-semibold">
                            mobile responsiveness
                          </span>{" "}
                          for enhanced guest experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            WordPress
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Hospitality
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Booking System
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Visual Design
                          </span>
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            Mobile Responsive
                          </span>
                        </div>
                        <a
                          href="https://leaguehotels.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-effect inline-flex items-center space-x-2 bg-secondary-500/20 border border-secondary-500/30 text-secondary-400 py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-500 hover:text-white text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          <span>Visit Live Site</span>
                        </a>
                      </div>
                      <div className="flex items-center justify-between lg:justify-end lg:space-x-4">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                          Live Site
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-secondary-400 ml-4 lg:ml-0">
                          🏨
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Component */}
        <Copyright />
      </div>
    </PageTransition>
  );
}

export default POC;
