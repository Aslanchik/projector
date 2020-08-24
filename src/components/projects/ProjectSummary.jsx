import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { firstCharUppercase, determineTechStack } from "../../utils/pipes";
import { upVoteProject } from "../../store/actions/projectActions";
import { addUpVotedProject } from "../../store/actions/userActions";

const handleUpVote = (project, props) => {
  const upVotedProject = { ...project };
  upVotedProject.upVote++;
  if (!props.profile.upVoted.includes(project.id)) {
    props.upVoteProject(upVotedProject);
    props.addUpVotedProject(project.id);
  }
};

const renderUpVoteButton = (profile, project) => {
  if (profile.upVoted.includes(project.id)) return "favorite";
  else return "favorite_border";
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
    <div className="card project-summary hoverable">
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
                {props.profile.isLoaded &&
                  renderUpVoteButton(props.profile, project)}
              </i>{" "}
              {upVote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ firebase: { profile, auth } }) => {
  return {
    auth,
    profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upVoteProject: (project) => dispatch(upVoteProject(project)),
    addUpVotedProject: (projectId) => dispatch(addUpVotedProject(projectId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
