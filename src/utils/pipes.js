import React from "react";

export const firstCharUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

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

export default {
  firstCharUppercase,
  determineTechStack,
};
