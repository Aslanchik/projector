import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

import { firstCharUppercase, determineTechStack } from "../../utils/pipes";

const ProjectDetails = (props) => {
  const { project } = props;
  console.log(project);
  return project ? (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content grey-text text-darken-3">
          <h6 className="card-title">
            {firstCharUppercase(project.title)}
            <span className="right">
              {determineTechStack(
                project.techFrontend,
                project.techBackend,
                project.techDb
              )}
            </span>
          </h6>
          <p>{project.description}</p>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFName} {project.authorLName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container center">No such project!</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.firestore.data.project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: "projects", doc: props.match.params.id, storeAs: "project" },
  ])
)(ProjectDetails);
