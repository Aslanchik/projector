import React from "react";
import moment from "moment";

import { firstCharUppercase, determineTechStack } from "../../utils/pipes";

const ProjectSummary = ({
  project: {
    title,
    authorFName: fname,
    authorLName: lname,
    createdAt,
    category,
    description,
    techBackend,
    techFrontend,
    techDb,
    timeAmount,
    timeUnit,
    upVote,
  },
}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">
          {firstCharUppercase(title)}{" "}
          <span className="right">
            {determineTechStack(techFrontend, techBackend, techDb)}
          </span>
        </h5>
        <div className="row">
          <div className="col s1 grey-text text-darken-2">
            <span>{category}</span>
          </div>
          <div className="col s3 grey-text text-align-center">
            <span class="material-icons">alarm</span> {timeAmount} {timeUnit}
          </div>
        </div>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
