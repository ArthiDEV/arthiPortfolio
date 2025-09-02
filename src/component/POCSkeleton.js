import React from 'react';
import PageTransition from './PageTransition';
import { SkeletonBox, SkeletonText, SkeletonPOCItem } from './SkeletonLoader';

const POCSkeleton = () => {
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
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-dark-800/30 backdrop-blur-sm border border-primary-500/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Scrollable Content Inside Rectangle */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {/* Main Content */}
            <div className="relative z-10 pb-16">
              <div className="relative z-10 p-4 sm:p-6 lg:p-12 max-w-6xl mx-auto">
                {/* Title Skeleton */}
                <div className="mb-8 lg:mb-12 text-center">
                  <SkeletonText className="h-12 mx-auto max-w-lg" />
                </div>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* POC Items Skeleton */}
                  {Array.from({ length: 2 }).map((_, index) => (
                    <SkeletonPOCItem key={index} />
                  ))}

                  {/* Freelance Projects Section Header Skeleton */}
                  <div className="text-center py-4 sm:py-6">
                    <SkeletonText className="h-8 mx-auto max-w-xs mb-2" />
                    <SkeletonBox className="w-24 h-1 mx-auto rounded-full" />
                  </div>

                  {/* Freelance POC Items Skeleton */}
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                        <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                          <SkeletonText className="mb-3 lg:mb-4 h-6" />
                          <SkeletonText lines={3} className="mb-4" />
                          
                          {/* Tags skeleton */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {Array.from({ length: 4 }).map((_, tagIndex) => (
                              <SkeletonBox key={tagIndex} className="w-20 h-6 rounded-full" />
                            ))}
                          </div>
                          
                          {/* Link button skeleton */}
                          <SkeletonBox className="w-32 h-10 rounded-lg" />
                        </div>
                        
                        <div className="flex items-center justify-between lg:justify-end lg:space-x-4">
                          <SkeletonBox className="w-20 h-8 rounded-full" />
                          <SkeletonBox className="w-8 h-8 rounded ml-4 lg:ml-0" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Text on Main Background */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-5">
          <SkeletonBox className="w-64 h-8 rounded-lg" />
        </div>
      </div>
    </PageTransition>
  );
};

export default POCSkeleton;