import React from "react";

import ProjectSummary from "./ProjectSummary";

const filterProjects = (projects, searchParam) => {
  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(searchParam);
  });

  return filteredProjects;
};

const ProjectList = ({ projects, searchParam }) => {
  return (
    <div className="project-list section">
      {projects ? (
        filterProjects(projects, searchParam).map((project) => {
          return <ProjectSummary key={project.title} project={project} />;
        })
      ) : (
        <div className="center-align">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
