import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

import {
  firstCharUppercase,
  determineTechStack,
  renderUpVoteButton,
} from "../../utils/pipes";
import { upVoteProject } from "../../store/actions/projectActions";
import { addUpVotedProject } from "../../store/actions/userActions";
import EditProject from "./EditProject";

class ProjectDetails extends Component {
  state = { edit: false };

  handleUpVote = (project, props) => {
    const upVotedProject = { ...project };
    upVotedProject.upVote++;
    if (!props.profile.upVoted.includes(project.id)) {
      props.upVoteProject(upVotedProject);
      props.addUpVotedProject(project.id);
    }
  };

  renderEditForm = (project) => {
    return <EditProject project={project} />;
  };

  render() {
    const { profile, project, auth } = this.props;
    return project ? (
      <div className="container section">
        <div className="card projectDetails" data-aos="zoom-in">
          <div className="card-content projectContent">
            <div className="card-title">
              <div className="techStack right">
                <p className=" center-align fieldTitle ">Tech Stack</p>
                <span>
                  {determineTechStack(
                    project.techFrontend,
                    project.techBackend,
                    project.techDb
                  )}
                </span>
              </div>
              <h3>{firstCharUppercase(project.title)}</h3>
            </div>
            <div className="projectDetailsTime">
              <div className="row">
                <div className="col s3 category">
                  <span className="fieldTitle">Category</span>
                  <span className="grey-text text-darken-2">
                    {project.category}
                  </span>
                </div>
                <div className="col s5 timeEstimate">
                  <span className="fieldTitle">Time Estimate</span>
                  <span className="grey-text text-darken-2 valign-wrapper">
                    <i className="material-icons alarmIcon">alarm</i>{" "}
                    <span className="">
                      {project.timeAmount}
                      {"  "}
                      {project.timeUnit}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 projectDetailsDescription">
                <span className="fieldTitle">Project Description</span>
                <p className="grey-text text-darken-2">{project.description}</p>
              </div>
            </div>
          </div>

          {auth.uid === project.authorId ? (
            <div className="center-align edit">
              <button
                className="btn waves-effect waves-light editBtn activator"
                onClick={() => {
                  this.setState({ edit: true });
                }}
              >
                <i className="material-icons  ">create</i>
              </button>
            </div>
          ) : null}
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {firstCharUppercase(project.authorFName)}{" "}
              {firstCharUppercase(project.authorLName)}
              <p className="grey-text right valign-wrapper">
                <i
                  className="material-icons green-text upVoteIcon"
                  onClick={() => this.handleUpVote(project, this.props)}
                >
                  {profile.isLoaded && renderUpVoteButton(profile, project)}
                </i>{" "}
                {project.upVote}
              </p>
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Edit Project<i className="material-icons right closeBtn">close</i>
            </span>
            {this.state.edit ? this.renderEditForm(project) : null}
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = ({
  firestore: {
    data: { project },
  },
  firebase: { profile, auth },
}) => {
  return {
    project,
    profile,
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upVoteProject: (project) => dispatch(upVoteProject(project)),
    addUpVotedProject: (projectId) => dispatch(addUpVotedProject(projectId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    { collection: "projects", doc: props.match.params.id, storeAs: "project" },
  ])
)(ProjectDetails);
