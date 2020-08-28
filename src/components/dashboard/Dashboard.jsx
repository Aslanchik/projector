import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import ProjectSummary from "../projects/ProjectSummary";

class Dashboard extends Component {
  renderProjects = () => {
    const { projects } = this.props;
    return (
      <>
        {projects.map((project, i) => (
          <div className="row">
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
              <ProjectSummary key={project.id} project={project} />
            </div>
          </div>
        ))}
      </>
    );
  };

  renderDashboard = () => {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <h4 className="center-align title col s10" data-aos="zoom-in">
          Top Voted Projects
        </h4>

        <div className="section">
          <div className="row">
            <div className="col s12">
              {projects ? (
                this.renderProjects()
              ) : (
                <div className="center-align">
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                      <div className="circle-clipper left">
                        <div className="circle"></div>
                      </div>
                      <div className="gap-patch">
                        <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
