import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  renderDashboard = () => {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
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
  const { projects } = state.firestore.ordered;
  return {
    projects: projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  // CONNECT TO FIRESTORE COLLECTION
  firestoreConnect(["projects"]),
  // CONNECT TO REDUX
  connect(mapStateToProps)
)(Dashboard);
