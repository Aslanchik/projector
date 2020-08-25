import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import ProjectSummary from "../projects/ProjectSummary";

class Dashboard extends Component {
  renderDashboard = () => {
    const { projects, notifications } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s10 m9">
            {projects
              ? projects.map((project) => (
                  <ProjectSummary key={project.id} project={project} />
                ))
              : null}
          </div>
          <div className="col s12 m2 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <>{this.renderDashboard()}</>;
  }
}

const mapStateToProps = (state) => {
  const { projects, notifications } = state.firestore.ordered;
  return {
    projects: projects,
    auth: state.firebase.auth,
    notifications: notifications,
  };
};

export default compose(
  // CONNECT TO FIRESTORE COLLECTION
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]),
  // CONNECT TO REDUX
  connect(mapStateToProps)
)(Dashboard);
