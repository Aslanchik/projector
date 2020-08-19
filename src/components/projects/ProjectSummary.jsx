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
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">
          {firstCharUppercase(title)}{" "}
          <span className="right">
            {determineTechStack(techFrontend, techBackend, techDb)}
          </span>
        </h5>
        <div className="row">
          <div className="col s3 grey-text text-darken-2">
            <span>{category}</span>
          </div>
          <div className="col s5 grey-text valign-wrapper">
            <i className="material-icons alarmIcon left-align">alarm</i>{" "}
            {timeAmount}
            {"  "}
            {timeUnit}
          </div>
        </div>
        <div className="card-action">
          <div>
            <p className="grey-text left">
              {moment(createdAt.toDate()).calendar()} -{" "}
              <span>
                {firstCharUppercase(fname)} {firstCharUppercase(lname)}
              </span>
            </p>
            <p className="grey-text right valign-wrapper">
              <i className="material-icons green-text upVoteIcon">favorite</i>{" "}
              {upVote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
