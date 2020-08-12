import React from "react";

const ProjectDetails = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            aliquid sunt eos magni ab fugit tempora iure iusto deleniti, saepe
            laborum impedit distinctio quia cupiditate at inventore quas sed
            ipsam? Sint, maiores similique quae magni possimus mollitia rem vel
            animi dicta porro dolores doloremque quasi, quas numquam, maxime
            illo assumenda.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Me</div>
            <div>3rd of March, 2PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
