import React from "react";

import ProjectSummary from "./ProjectSummary";

const sortProjects = (projects, sortParam) => {
  if (sortParam === "title") {
    console.log("title");
    return projects.sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      else return 0;
    });
  } else if (sortParam === "category") {
    console.log("category");
    return projects.sort((a, b) => {
      let categoryA = a.category.toUpperCase();
      let categoryB = b.category.toUpperCase();
      if (categoryA < categoryB) return -1;
      if (categoryA > categoryB) return 1;
      else return 0;
    });
  } else if (sortParam === "upvotes") {
    console.log(projects);
    return projects.sort((a, b) => {
      if (a.upVote < b.upVote) return 1;
      if (a.upVote > b.upVote) return -1;
      else return 0;
    });
  } else return projects;
};

const filterProjects = (projects, searchParam) => {
  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(searchParam);
  });
  return filteredProjects;
};

const filterAndSortProjects = (projects, searchParam, sortParam) => {
  return sortProjects(filterProjects(projects, searchParam), sortParam);
};

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
