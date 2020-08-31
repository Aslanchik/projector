import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { firstCharUppercase } from "../../utils/pipes";
import {
  determineTechStack,
  determineCategory,
} from "../../services/projectService";
import { handleUpVote, renderUpVoteButton } from "../../services/upVoteService";
import { upVoteProject } from "../../store/actions/projectActions";
import { addUpVotedProject } from "../../store/actions/userActions";

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
    <div className="card projectSummary hoverable">
      <div className="card-content grey-text text-darken-3">
        <Link to={`/project/${id}`}>
          <h5 className="card-title">
            {firstCharUppercase(title)}{" "}
            <span className="techStack right">
              <p className="center-align fieldTitle ">Tech Stack</p>
              <span>
                {determineTechStack(techFrontend, techBackend, techDb)}
              </span>
            </span>
          </h5>
        </Link>

        <div className="row details">
          <div className="col s12 m3 category">
            <span className="fieldTitle">Category</span>
            <span>{determineCategory(category)}</span>
          </div>
          <div className="col s12 m4 timeEstimate">
            <span className="fieldTitle">Time Estimate</span>
            <span className="grey-text text-darken-2 valign-wrapper">
              <i className="material-icons alarmIcon left-align">alarm</i>{" "}
              {timeAmount}
              {"  "}
              {timeUnit}
            </span>
          </div>
        </div>

        <div className="card-action grey-text">
          <div>
            Posted by {firstCharUppercase(fname)} {firstCharUppercase(lname)}
            <p className="grey-text right valign-wrapper">
              <i
                className="material-icons green-text upVoteIcon"
                onClick={() => handleUpVote(project, props)}
              >
                {props.profile.isLoaded &&
                  renderUpVoteButton(props.profile, project)}
              </i>{" "}
              {project.upVote}
            </p>
          </div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
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
