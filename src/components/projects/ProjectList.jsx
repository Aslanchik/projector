import React from "react";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects ? (
        projects.map((project) => {
          return <ProjectSummary project={project} key={project.id} />;
        })
      ) : (
        <div>No projects</div>
      )}
    </div>
  );
};

export default ProjectList;
