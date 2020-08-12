import React from "react";

const ProjectSummary = ({ title }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gret-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by Me</p>
        <p className="grey-text">3rd March, 2pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
