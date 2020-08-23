import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { firstCharUppercase, determineTechStack } from "../../utils/pipes";
import { upVoteProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { addUpVotedProject } from "../../store/actions/userActions";

const handleUpVote = (project, props) => {
  const upVotedProject = { ...project };
  upVotedProject.upVote++;
  props.upVoteProject(upVotedProject);
  props.addUpVotedProject(project.id);
};

const ProjectSummary = ({
  project,
  project: {
    id,
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
  ...props
}) => {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <Link to={`/project/${id}`}>
          <h5 className="card-title">
            {firstCharUppercase(title)}{" "}
            <span className="right">
              {determineTechStack(techFrontend, techBackend, techDb)}
            </span>
          </h5>
        </Link>
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
              <i
                className="material-icons green-text upVoteIcon"
                onClick={() => handleUpVote(project, props)}
              >
                favorite_border
              </i>{" "}
              {upVote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    upVoteProject: (project) => dispatch(upVoteProject(project)),
    addUpVotedProject: (projectId) => dispatch(addUpVotedProject(projectId)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectSummary);
