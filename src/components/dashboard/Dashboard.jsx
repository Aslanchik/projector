import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  renderDashboard = () => {
    const { projects, notifications } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
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
  firestoreConnect(["projects", { collection: "notifications", limit: 3 }]),
  // CONNECT TO REDUX
  connect(mapStateToProps)
)(Dashboard);
