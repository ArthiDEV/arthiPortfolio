import React, { memo, useState, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';

const ProjectCard = memo(({ project, index, getCategoryGradient, getStatusColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Generate project screenshot placeholder
  const generateProjectImage = useCallback((projectTitle, index) => {
    // Simple project image placeholder - using a small, optimized SVG
    const colors = [
      ['#3b82f6', '#8b5cf6'],
      ['#10b981', '#3b82f6'],
      ['#8b5cf6', '#ec4899'],
      ['#f59e0b', '#ef4444'],
      ['#06b6d4', '#3b82f6'],
      ['#6366f1', '#8b5cf6'],
      ['#14b8a6', '#10b981']
    ];
    
    const [color1, color2] = colors[index % colors.length];
    
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color1};stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:${color2};stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill="url(#grad${index})"/>
        <circle cx="350" cy="50" r="30" fill="white" opacity="0.1"/>
        <circle cx="50" cy="200" r="20" fill="white" opacity="0.15"/>
        <rect x="50" y="50" width="300" height="8" rx="4" fill="white" opacity="0.2"/>
        <rect x="50" y="70" width="200" height="6" rx="3" fill="white" opacity="0.15"/>
        <rect x="50" y="90" width="250" height="6" rx="3" fill="white" opacity="0.1"/>
        <text x="200" y="140" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold" opacity="0.7">${projectTitle.split(' ').slice(0, 2).join(' ')}</text>
      </svg>
    `)}`;
  }, []);

  const projectImage = generateProjectImage(project.title, index);

  return (
    <div 
      className={`group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden transition-all duration-300 will-change-transform ${
        isHovered ? 'bg-dark-800/70 border-secondary-500/40 transform scale-[1.02]' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
        <OptimizedImage
          src={projectImage}
          alt={`${project.title} screenshot`}
          className="w-full h-full"
          width={400}
          height={250}
          priority={index < 2} // Prioritize first 2 project images
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay with badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20">
          <div className="absolute top-4 left-4 sm:left-6">
            <span className="bg-dark-900/90 backdrop-blur-sm text-light-200 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-light-500/30">
              {project.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 sm:right-6">
            <span className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold text-light-50 mb-3 transition-colors duration-300 ${
          isHovered ? 'text-secondary-400' : ''
        }`}>
          {project.title}
        </h3>
        
        {/* Truncated description for better performance */}
        <p className="text-light-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
          {project.description.length > 120 
            ? `${project.description.substring(0, 120)}...` 
            : project.description}
        </p>
        
        {/* Technologies - limit to 4 for better performance */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={`${project.id}-${techIndex}`} 
              className="bg-secondary-500/20 text-secondary-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-secondary-500/30 font-medium"
            >
              {tech.trim()}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-500/20 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-500/30 font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.link ? (
            <>
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 text-center bg-transparent border border-secondary-500 text-secondary-400 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-500 hover:text-white text-sm"
                aria-label={`View ${project.title} details`}
              >
                View Project
              </a>
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 bg-primary-500/20 border border-primary-500/30 text-primary-300 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white text-sm"
                aria-label={`Open ${project.title} in new tab`}
              >
                ↗
              </a>
            </>
          ) : (
            <div className="flex-1 text-center bg-gray-500/20 border border-gray-500/30 text-gray-400 py-2.5 rounded-lg font-semibold text-sm cursor-not-allowed">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;