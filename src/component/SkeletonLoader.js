import React from 'react';

// Enhanced shimmer animation keyframes
const shimmerAnimation = {
  animation: 'shimmer 2s infinite linear',
};

// Base skeleton components with enhanced design
export const SkeletonBox = ({ className = "" }) => (
  <div 
    className={`bg-gradient-to-r from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] rounded-lg relative overflow-hidden ${className}`}
    style={shimmerAnimation}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
  </div>
);

export const SkeletonText = ({ className = "", lines = 1 }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div 
        key={index} 
        className={`bg-gradient-to-r from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] rounded-md h-4 relative overflow-hidden ${
          index === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
        }`}
        style={{
          ...shimmerAnimation,
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
      </div>
    ))}
  </div>
);

export const SkeletonCircle = ({ className = "" }) => (
  <div 
    className={`bg-gradient-to-r from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] rounded-full relative overflow-hidden ${className}`}
    style={shimmerAnimation}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
  </div>
);

export const SkeletonButton = ({ className = "" }) => (
  <div 
    className={`bg-gradient-to-r from-secondary-600/30 via-secondary-500/50 to-secondary-600/30 bg-[length:200%_100%] rounded-lg h-10 w-32 relative overflow-hidden border border-secondary-500/20 ${className}`}
    style={shimmerAnimation}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
  </div>
);

// Enhanced skill card skeleton for About page
export const SkeletonSkillCard = () => (
  <div className="group bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-xl p-3 sm:p-4 hover:border-secondary-500/30 transition-all duration-500 relative overflow-hidden">
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 via-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <SkeletonCircle className="w-8 h-8 mx-auto mb-3 border border-primary-400/20" />
      <SkeletonText className="h-3" />
    </div>
    
    {/* Animated background dots */}
    <div className="absolute top-2 right-2 w-1 h-1 bg-secondary-400/30 rounded-full animate-pulse" />
    <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
  </div>
);

// Enhanced project card skeleton for Project page
export const SkeletonProjectCard = () => (
  <div className="group bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden hover:border-secondary-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-secondary-500/10 relative">
    {/* Animated border glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary-500/20 via-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
    
    <div className="relative z-10">
      {/* Header gradient skeleton with enhanced animation */}
      <div className="h-24 sm:h-32 bg-gradient-to-r from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/5 to-transparent translate-x-[-100%] animate-[shimmer_2.5s_infinite_linear]" />
        
        <div className="absolute top-4 left-4 sm:left-6">
          <SkeletonBox className="w-20 h-6 rounded-full border border-secondary-400/20" />
        </div>
        <div className="absolute top-4 right-4 sm:right-6">
          <SkeletonBox className="w-16 h-6 rounded-full border border-primary-400/20" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-6 left-1/2 w-1 h-1 bg-secondary-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-6 right-1/3 w-1 h-1 bg-primary-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}} />
      </div>
      
      {/* Content skeleton */}
      <div className="p-4 sm:p-6 lg:p-8">
        <SkeletonText className="mb-3 lg:mb-4 h-6" />
        <SkeletonText lines={3} className="mb-4 lg:mb-6" />
        
        {/* Technologies skeleton with staggered animation */}
        <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-primary-600/20 via-primary-500/30 to-primary-600/20 w-16 h-6 rounded-full border border-primary-400/20 relative overflow-hidden"
              style={{
                ...shimmerAnimation,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
            </div>
          ))}
        </div>
        
        {/* Buttons skeleton */}
        <div className="flex gap-3">
          <SkeletonButton className="flex-1 h-12" />
          <SkeletonBox className="w-12 h-12 rounded-lg border border-secondary-400/20" />
        </div>
      </div>
    </div>
  </div>
);

// Enhanced POC item skeleton
export const SkeletonPOCItem = () => (
  <div className="group bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/30 transition-all duration-700 relative overflow-hidden">
    {/* Subtle glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
        <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
          <SkeletonText className="mb-3 lg:mb-4 h-7" />
          <SkeletonText lines={3} className="mb-4" />
          
          {/* Tags skeleton with enhanced styling */}
          <div className="flex flex-wrap gap-2 mb-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-secondary-600/20 via-secondary-500/30 to-secondary-600/20 w-20 h-6 rounded-full border border-secondary-400/20 relative overflow-hidden"
                style={{
                  ...shimmerAnimation,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/8 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between lg:justify-end lg:space-x-4">
          <SkeletonBox className="w-20 h-8 rounded-full border border-primary-400/20" />
          <SkeletonCircle className="w-8 h-8 border border-secondary-400/20" />
        </div>
      </div>
    </div>
    
    {/* Corner decoration */}
    <div className="absolute top-2 right-2 w-2 h-2 bg-secondary-400/30 rounded-full animate-pulse" />
  </div>
);

// Enhanced contact form skeleton
export const SkeletonContactForm = () => (
  <div className="bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
    {/* Form header glow */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500/30 via-primary-500/50 to-secondary-500/30" />
    
    <SkeletonText className="mb-4 lg:mb-6 h-6" />
    
    <div className="space-y-4 lg:space-y-6">
      {/* Form fields skeleton with enhanced styling */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] w-full rounded-lg border border-primary-400/10 relative overflow-hidden ${
            index === 3 ? 'h-24' : 'h-12'
          }`}
          style={{
            ...shimmerAnimation,
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/5 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
        </div>
      ))}
      
      {/* Submit button skeleton with special styling */}
      <div className="bg-gradient-to-r from-secondary-600/30 via-secondary-500/50 to-secondary-600/30 bg-[length:200%_100%] w-full h-12 rounded-lg border border-secondary-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 via-transparent to-secondary-500/10 animate-pulse" />
      </div>
    </div>
  </div>
);

// Enhanced contact info skeleton
export const SkeletonContactInfo = () => (
  <div className="bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
    {/* Header accent */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500/30 via-secondary-500/50 to-primary-500/30" />
    
    <SkeletonText className="mb-4 lg:mb-6 h-6" />
    
    <div className="space-y-4 lg:space-y-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-3 sm:space-x-4 group">
          <div 
            className="bg-gradient-to-br from-primary-600/20 via-primary-500/30 to-primary-600/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0 border border-primary-400/20 relative overflow-hidden"
            style={{
              ...shimmerAnimation,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/8 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
          </div>
          <div className="flex-1">
            <SkeletonText className="mb-2 h-4" />
            <SkeletonText className="w-3/4 h-3" />
          </div>
        </div>
      ))}
    </div>
    
    {/* Decorative elements */}
    <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-400/40 rounded-full animate-ping" />
  </div>
);

const SkeletonComponents = {
  SkeletonBox,
  SkeletonText,
  SkeletonCircle,
  SkeletonButton,
  SkeletonSkillCard,
  SkeletonProjectCard,
  SkeletonPOCItem,
  SkeletonContactForm,
  SkeletonContactInfo
};

export default SkeletonComponents;