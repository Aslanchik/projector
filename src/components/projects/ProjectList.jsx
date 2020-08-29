import React from "react";

import ProjectSummary from "./ProjectSummary";
import Preloader from "../shared/Preloader";
import { filterAndSortProjects } from "../../services/projectService";

const ProjectList = ({ projects, searchParam, sortParam }) => {
  return (
    <div className="project-list section">
      {projects ? (
        filterAndSortProjects(projects, searchParam, sortParam).map(
          (project) => {
            return <ProjectSummary key={project.title} project={project} />;
          }
        )
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default ProjectList;
