import React, { memo, useMemo } from 'react';
import ProjectCard from './ProjectCard';

const VirtualizedProjectList = memo(({ 
  projects, 
  getStatusColor, 
  getCategoryGradient
}) => {

  // Render only visible projects initially
  const visibleProjects = useMemo(() => {
    return projects.slice(0, Math.min(4, projects.length));
  }, [projects]);

  const remainingProjects = useMemo(() => {
    return projects.slice(4);
  }, [projects]);

  return (
    <>
      {/* Priority projects (first 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={`priority-${project.id}`}
            project={project}
            index={index}
            getCategoryGradient={getCategoryGradient}
            getStatusColor={getStatusColor}
          />
        ))}
      </div>
      
      {/* Remaining projects (lazy rendered) */}
      {remainingProjects.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {remainingProjects.map((project, index) => (
            <ProjectCard
              key={`lazy-${project.id}`}
              project={project}
              index={index + 4}
              getCategoryGradient={getCategoryGradient}
              getStatusColor={getStatusColor}
            />
          ))}
        </div>
      )}
    </>
  );
});

VirtualizedProjectList.displayName = 'VirtualizedProjectList';

export default VirtualizedProjectList;