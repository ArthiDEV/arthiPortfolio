import React from 'react';
import PageTransition from './PageTransition';
import { SkeletonBox, SkeletonText, SkeletonCircle, SkeletonSkillCard } from './SkeletonLoader';

const AboutSkeleton = () => {
  return (
    <PageTransition>
      <div
        id="about-page"
        className="h-screen w-full bg-gradient-to-br from-dark-800 via-dark-900 to-black relative overflow-hidden overflow-x-hidden"
      >
        {/* Background Pattern with Enhanced Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-500/10 to-transparent animate-pulse" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        {/* Enhanced Copyright Text with Glow Effect */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gradient-to-r from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] w-64 h-8 rounded-lg border border-primary-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
          </div>
        </div>

        {/* Enhanced Fixed Background Rectangle Container */}
        <div className="absolute inset-2 sm:inset-4 lg:inset-6 bg-dark-800/40 backdrop-blur-md border border-primary-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Subtle animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 via-primary-500/5 to-secondary-500/10 opacity-50 animate-pulse rounded-2xl sm:rounded-3xl" />
          {/* Scrollable Content Inside Rectangle */}
          <div className="h-full overflow-y-auto overflow-x-hidden relative z-10">
            {/* Main Content */}
            <div className="relative z-10 pb-16">
              {/* Enhanced Hero Section Skeleton */}
              <section className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Enhanced Profile Image Skeleton */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-1">
                      <div className="relative group">
                        <div className="bg-gradient-to-br from-dark-700/40 via-dark-600/60 to-dark-700/40 bg-[length:200%_100%] w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl border-4 border-primary-500/30 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent translate-x-[-100%] animate-[shimmer_2.5s_infinite_linear]" />
                        </div>
                        {/* Enhanced decorative elements */}
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-secondary-500/30 rounded-full blur-xl animate-pulse" />
                        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-primary-500/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}} />
                        {/* Additional floating elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-secondary-400/50 rounded-full animate-ping" />
                        <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary-400/50 rounded-full animate-ping" style={{animationDelay: '1s'}} />
                      </div>
                    </div>

                    {/* Enhanced Text Content Skeleton */}
                    <div className="text-center lg:text-left order-2 lg:order-2 space-y-4">
                      <div className="space-y-3">
                        <SkeletonText className="h-8 lg:h-12" />
                        <SkeletonText className="h-6 lg:h-8 w-3/4" />
                      </div>
                      
                      <div className="space-y-4">
                        <SkeletonText lines={2} className="text-sm" />
                        <SkeletonText lines={3} className="text-xs" />
                      </div>

                      {/* Enhanced Action Button Skeleton */}
                      <div className="flex justify-center lg:justify-start pt-4">
                        <div className="bg-gradient-to-r from-secondary-600/30 via-secondary-500/50 to-secondary-600/30 bg-[length:200%_100%] w-40 h-12 rounded-lg border border-secondary-400/30 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/15 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Education Section Skeleton */}
              <section className="relative z-10 min-h-screen flex items-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-center mb-8 lg:mb-12">
                    <SkeletonText className="h-8 lg:h-12 max-w-md mx-auto" />
                  </div>
                  
                  <div className="space-y-6 lg:space-y-8">
                    {[1, 2].map((index) => (
                      <div
                        key={index}
                        className="group bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/30 transition-all duration-500 relative overflow-hidden"
                      >
                        {/* Subtle hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 lg:mb-4">
                            <div className="mb-3 lg:mb-0 flex-1">
                              <SkeletonText className="mb-2 lg:mb-3 h-6" />
                              <SkeletonText className="mb-3 h-5 w-4/5" />
                              <SkeletonText lines={2} />
                            </div>
                            <div className="lg:ml-6 flex flex-col items-start lg:items-end space-y-2">
                              <div className="bg-gradient-to-r from-secondary-600/20 via-secondary-500/30 to-secondary-600/20 w-24 h-7 rounded-full border border-secondary-400/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                              </div>
                              <div className="bg-gradient-to-r from-primary-600/20 via-primary-500/30 to-primary-600/20 w-20 h-6 rounded-full border border-primary-400/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative dot */}
                        <div className="absolute top-3 right-3 w-1 h-1 bg-secondary-400/40 rounded-full animate-pulse" style={{animationDelay: `${index * 0.5}s`}} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Enhanced Skills Section Skeleton */}
              <section className="relative z-10 min-h-screen flex items-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-center mb-8 lg:mb-12">
                    <SkeletonText className="h-8 lg:h-12 max-w-md mx-auto" />
                  </div>

                  {/* Enhanced Frontend Skills */}
                  <div className="mb-8 lg:mb-12">
                    <div className="text-center mb-4 lg:mb-6">
                      <SkeletonText className="h-6 lg:h-8 max-w-xs mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonSkillCard key={index} />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Backend Skills */}
                  <div className="mb-8 lg:mb-12">
                    <div className="text-center mb-4 lg:mb-6">
                      <SkeletonText className="h-6 lg:h-8 max-w-xs mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonSkillCard key={index} />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Database Skills */}
                  <div className="mb-8 lg:mb-12">
                    <div className="text-center mb-4 lg:mb-6">
                      <SkeletonText className="h-6 lg:h-8 max-w-xs mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonSkillCard key={index} />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced DevOps & Cloud Skills */}
                  <div className="mb-8 lg:mb-12">
                    <div className="text-center mb-4 lg:mb-6">
                      <SkeletonText className="h-6 lg:h-8 max-w-xs mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonSkillCard key={index} />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Tools & Platforms */}
                  <div className="mb-8 lg:mb-12">
                    <div className="text-center mb-4 lg:mb-6">
                      <SkeletonText className="h-6 lg:h-8 max-w-xs mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonSkillCard key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Certificate Section Skeleton */}
              <section className="relative z-10 min-h-screen flex items-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-center mb-8 lg:mb-12">
                    <SkeletonText className="h-8 lg:h-12 max-w-md mx-auto" />
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="group bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/30 transition-all duration-500 relative overflow-hidden">
                      {/* Header accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500/30 via-primary-500/50 to-secondary-500/30" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-primary-600/20 via-primary-500/30 to-primary-600/20 w-12 h-12 rounded-lg border border-primary-400/20 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/8 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                            </div>
                            <div>
                              <SkeletonText className="mb-1 h-6" />
                              <SkeletonText className="h-5 w-4/5" />
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="bg-gradient-to-r from-secondary-600/20 via-secondary-500/30 to-secondary-600/20 w-20 h-6 rounded-full border border-secondary-400/20 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                            </div>
                            <div className="bg-gradient-to-r from-primary-600/20 via-primary-500/30 to-primary-600/20 w-16 h-6 rounded-full border border-primary-400/20 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                            </div>
                          </div>
                        </div>
                        <SkeletonText lines={2} />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute bottom-3 right-3 w-2 h-2 bg-secondary-400/40 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Experience Section Skeleton */}
              <section className="relative z-10 min-h-screen flex items-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="text-center mb-8 lg:mb-12">
                    <SkeletonText className="h-8 lg:h-12 max-w-md mx-auto" />
                  </div>
                  
                  <div className="space-y-6 lg:space-y-8">
                    {[1, 2].map((index) => (
                      <div
                        key={index}
                        className="group bg-dark-800/40 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/30 transition-all duration-500 relative overflow-hidden"
                      >
                        {/* Side accent bar */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-secondary-500/50 via-primary-500/30 to-secondary-500/50" />
                        
                        <div className="relative z-10 ml-4">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3 lg:mb-4">
                            <div className="mb-3 lg:mb-0 flex-1">
                              <SkeletonText className="mb-2 lg:mb-3 h-6" />
                              <SkeletonText className="h-5 w-3/4" />
                            </div>
                            <div className="bg-gradient-to-r from-primary-600/20 via-primary-500/30 to-primary-600/20 w-24 h-8 rounded-full border border-primary-400/20 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite_linear]" />
                            </div>
                          </div>
                          <SkeletonText lines={2} />
                        </div>
                        
                        {/* Timeline dot */}
                        <div className="absolute left-[-4px] top-6 w-2 h-2 bg-secondary-400/60 rounded-full animate-pulse" style={{animationDelay: `${index * 0.3}s`}} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    
    </PageTransition>
  );
};

export default AboutSkeleton;