import React from "react";

export const determineTechStack = (front, back, db) => {
  const techStack = [];
  switch (front) {
    case "react":
      techStack.push("devI devicon-react-original colored");
      break;
    case "angular":
      techStack.push("devI devicon-angularjs-plain colored");
      break;
    case "vue":
      techStack.push("devI devicon-vuejs-plain colored");
      break;
    case "jquery":
      techStack.push("devI devicon-jquery-plain colored");
      break;
    case "ember":
      techStack.push("devI devicon-ember-original-wordmark colored");
      break;
    default:
      techStack.push("devI devicon-javascript-plain colored");
      break;
  }
  switch (back) {
    case "php":
      techStack.push("devI devicon-php-plain colored");
      break;
    case "ruby":
      techStack.push("devI devicon-ruby-plain colored");
      break;
    case "java":
      techStack.push(" devI devicon-java-plain colored");
      break;
    case "python":
      techStack.push("devI devicon-python-plain colored");
      break;
    case "rust":
      techStack.push("devI devicon-rust-plain colored");
      break;
    default:
      techStack.push(" devI devicon-nodejs-plain colored");
      break;
  }
  switch (db) {
    case "mongodb":
      techStack.push("devI devicon-mongodb-plain-wordmark colored");
      break;
    case "graphql":
      techStack.push(" devI fas fa-project-diagram");
      break;
    default:
      techStack.push("devI devicon-mysql-plain colored");
      break;
  }
  return techStack.map((item) => <i key={item} className={item}></i>);
};

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

export const filterAndSortProjects = (projects, searchParam, sortParam) => {
  return sortProjects(filterProjects(projects, searchParam), sortParam);
};
export default {
  determineTechStack,
  filterAndSortProjects,
};
