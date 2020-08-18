import React from "react";

export const firstCharUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const determineTechStack = (front, back, db) => {
  const techStack = [];
  switch (front) {
    case "react":
      techStack.push("devicon-react-original colored");
      break;
    case "angular":
      techStack.push("devicon-angularjs-plain colored");
      break;
    case "vue":
      techStack.push("devicon-vuejs-plain colored");
      break;
    case "jquery":
      techStack.push("devicon-jquery-plain colored");
      break;
    case "ember":
      techStack.push("devicon-ember-original-wordmark colored");
      break;
    default:
      techStack.push("devicon-javascript-plain colored");
      break;
  }
  switch (back) {
    case "php":
      techStack.push("devicon-php-plain colored");
      break;
    case "ruby":
      techStack.push("devicon-ruby-plain colored");
      break;
    case "java":
      techStack.push("devicon-java-plain colored");
      break;
    case "python":
      techStack.push("devicon-python-plain colored");
      break;
    case "rust":
      techStack.push("devicon-rust-plain colored");
      break;
    default:
      techStack.push("devicon-nodejs-plain colored");
      break;
  }
  switch (db) {
    case "mongodb":
      techStack.push("devicon-mongodb-plain-wordmark colored");
      break;
    case "graphql":
      techStack.push("fas fa-project-diagram");
      break;
    default:
      techStack.push("devicon-mysql-plain colored");
      break;
  }
  return techStack.map((item) => <i key={item} className={item}></i>);
};

export default {
  firstCharUppercase,
  determineTechStack,
};
