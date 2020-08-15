import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const ProjectDetails = (props) => {
  const { project } = props;

  return project ? (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}-</span>
          <p>{project.content}</p>
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
