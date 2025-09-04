import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PageTransition from './PageTransition';
import ProjectSkeleton from './ProjectSkeleton';
import Copyright from './Copyright';
import { Link } from 'react-router-dom';

function Project() {
  const [isLoading, setIsLoading] = useState(true);

  // Memoize project data to prevent re-renders
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Tank-Cleaning CRM",
      description: "Developed and deployed a custom tank-cleaning CRM managing employee and customer records with offer management. Integrated WhatsApp API notifications, reducing customer follow-up delays by 60% and improving booking confirmation rates by 35%.",
      status: "Delivered",
      category: "CRM System",
      technologies: ["React", "Firebase", "WhatsApp API"]
    },
    {
      id: 2,
      title: "AWE HR Management System",
      description: "Expanded a scalable HR management system with a dynamic data visualization dashboard, reducing HR data retrieval time from 5 minutes to under 30 seconds. Built RESTful APIs and integrated Amazon S3 for file storage.",
      status: "Completed",
      category: "Management System",
      technologies: ["AWS", "RESTful API", "EC2","S3","Lambda","CloudFormation","EventBridge"," React","GraphQL"],
      link:"https://adininworks.co/"
    },
    {
      id: 3,
      title: "B2V Employee",
      description: "Enhanced a responsive employee dashboard UI using Next.js, improving page load speed by 35% and reducing user navigation errors by 20%. Implemented modules for leave application, employee management, leave tracking, and reporting.",
      status: "Live",
      category: "Dashboard",
      technologies: ["Next.js", "Firebase", "Responsive UI","React","Restful API","context API"],
      link:"https://b2vtech.com/"
    },
    {
      id: 4,
      title: "HR360e",
      description: "Created a single-page website with smooth scroll navigation, increasing average session duration by 15% and boosting user engagement rates by 25%. Designed a clean, responsive UI with optimized performance and Firebase hosting.",
      status: "Live",
      category: "Website",
      technologies: ["HTML/CSS", "JavaScript", "Firebase"],
      link:"https://product.cloudbeestech.com/"
    },
    {
      id: 5,
      title: "Senthurvelavangroups",
      description: "Developed a responsive and SEO-friendly web application using React.js. Focused on creating a modern, mobile-first UI with smooth performance and accessibility in mind. Implemented best SEO practices such as semantic HTML, meta optimization, and structured content to improve search visibility.",
      status: "Completed",
      category: "Website",
      technologies: ["React.js", "SEO", "Responsive Design","Firebase"],
      link:"https://senthurvelavangroups.com/"
    },
    {
      id: 6,
      title: "Cloud Staffing Service",
      description: "Built a dynamic and responsive staffing service platform using React.js, ensuring seamless performance across devices with a mobile-first approach. Applied SEO strategies, including optimized metadata, structured markup, and accessible design practices, to enhance search rankings and user reach.",
      status: "Live",
      category: "Website",
      technologies: ["React.js", "Firebase Hosting", "SEO"],
      link:"https://cloudstaffingservice.in/"
    },
    {
      id: 7,
      title: "Cloudbees Tech",
      description: "Improved the CBT website user experience with React.js, leading to a 40% drop in bounce rate and a 25% increase in course completion rates. Built the third version using Next.js to leverage server-side rendering, improved routing, and better SEO.",
      status: "Version 3.0",
      category: "Website",
      technologies: ["React.js", "Next.js", "SSR","Firebase"],
      link:"https://cloudbeestech.com/"
    }
  ], []);

  // Memoize gradient array to prevent re-computation
  const gradients = useMemo(() => [
    'from-blue-500/30 to-purple-500/30',
    'from-green-500/30 to-blue-500/30',
    'from-purple-500/30 to-pink-500/30',
    'from-orange-500/30 to-red-500/30',
    'from-cyan-500/30 to-blue-500/30',
    'from-indigo-500/30 to-purple-500/30',
    'from-teal-500/30 to-green-500/30'
  ], []);

  // Optimized loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  // Handle network issues or slow loading - optimized
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

  // Memoized functions
  const getStatusColor = useCallback((status) => {
    switch (status.toLowerCase()) {
      case 'live':
      case 'delivered':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'in production':
      case 'completed':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'version 3.0':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  }, []);

  const getCategoryGradient = useCallback((index) => {
    return gradients[index % gradients.length];
  }, [gradients]);

  if (isLoading) {
    return <ProjectSkeleton />;
  }

  return (
    <PageTransition>
      <div id="project-page" className="h-screen w-full bg-gradient-to-br from-dark-800 via-dark-900 to-black relative overflow-hidden overflow-x-hidden">
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
              <div className="relative z-10 p-3 sm:p-6 lg:p-12 max-w-7xl mx-auto pt-4 sm:pt-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-light-50 mb-6 sm:mb-8 lg:mb-12 text-center">
                  MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">WORK</span>
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {projects.map((project, index) => (
                    <div key={project.id} className="hover-effect group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-dark-800/70 hover:border-secondary-500/40 hover:transform hover:scale-[1.02]">
                      {/* Project Header with Gradient */}
                      <div className={`h-24 sm:h-32 bg-gradient-to-br ${getCategoryGradient(index)} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-4 left-4 sm:left-6">
                          <span className="bg-dark-900/70 backdrop-blur-sm text-light-200 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-light-500/30">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 sm:right-6">
                          <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        {/* Decorative Pattern */}
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full transform translate-x-8 translate-y-8" />
                        <div className="absolute bottom-4 right-8 w-12 h-12 bg-white/10 rounded-full" />
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-4 sm:p-6 lg:p-8">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-light-50 mb-3 lg:mb-4 group-hover:text-secondary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-light-300 text-sm sm:text-base leading-relaxed mb-4 lg:mb-6 line-clamp-4">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-secondary-500/20 text-secondary-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-secondary-500/30 font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <a href={project.link}  
                          target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-transparent border border-secondary-500 text-secondary-400 py-2.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-500 hover:text-white text-sm sm:text-base">
                            View Details
                          </a>
                          <a href={project.link}  
                          target="_blank" rel="noopener noreferrer" className="px-4 lg:px-6 bg-primary-500/20 border border-primary-500/30 text-primary-300 py-2.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white text-sm sm:text-base">
                            ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Project;