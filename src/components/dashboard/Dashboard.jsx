import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import ProjectSummary from "../projects/ProjectSummary";
import Preloader from "../shared/Preloader";

class Dashboard extends Component {
  renderProjects = () => {
    const { projects } = this.props;
    return (
      <>
        {projects.map((project, i) => (
          <div className="row" key={project.id}>
            <h3
              className={`col s1 center-align placement${i + 1}`}
              data-aos="fade-left"
              data-aos-duration="500"
            >
              {i + 1}
            </h3>
            <div
              className="col s11"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <ProjectSummary project={project} />
            </div>
          </div>
        ))}
      </>
    );
  };

  renderDashboard = () => {
    const { projects } = this.props;
    return (
      <div className="dashboard">
        <h4 className="center-align title col s10" data-aos="zoom-in">
          Top Voted Projects
        </h4>

        <div className="section">
          <div className="row hide-on-small-only">
            <div className="col s12 l10 offset-l1">
              {projects ? this.renderProjects() : <Preloader />}
            </div>
          </div>
          <div className="row container show-on-small hide-on-med-and-up">
            <div className="col s12 l10 offset-l1">
              {projects ? this.renderProjects() : <Preloader />}
            </div>
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
    { collection: "projects", limit: 3, orderBy: ["upVote", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]),
  // CONNECT TO REDUX
  connect(mapStateToProps)
)(Dashboard);
