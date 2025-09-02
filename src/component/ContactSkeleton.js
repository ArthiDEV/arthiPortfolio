import React from 'react';
import PageTransition from './PageTransition';
import { SkeletonBox, SkeletonText, SkeletonContactForm, SkeletonContactInfo } from './SkeletonLoader';

const ContactSkeleton = () => {
  return (
    <PageTransition>
      <div id="contact-page" className="h-screen w-full bg-gradient-to-br from-dark-800 via-dark-900 to-black relative overflow-hidden overflow-x-hidden">
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
                  <SkeletonText className="h-12 mx-auto max-w-md" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                  {/* Contact Information Section */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Contact Information */}
                    <SkeletonContactInfo />

                    {/* Social Links */}
                    <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-4 sm:p-6 lg:p-8">
                      <SkeletonText className="mb-4 lg:mb-6 h-6" />
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <SkeletonBox className="h-10 w-24 rounded-lg" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <SkeletonContactForm />
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

export default ContactSkeleton;