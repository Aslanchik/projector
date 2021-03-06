import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import UserInfo from "./UserInfo";
import ProjectSummary from "../projects/ProjectSummary";

class Profile extends Component {
  renderProjects = (projects) => {
    return (
      <>
        {projects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </>
    );
  };

  render() {
    const { profile, projects } = this.props;

    return projects ? (
      <div className="container profile">
        <div className="section">
          <div className="row">
            <div data-aos="fade-right">
              <UserInfo profile={profile} />
            </div>
            <div className="col s12 m8" data-aos="fade-left">
              <h4 className="center-align title">My Projects</h4>
              {this.renderProjects(projects)}
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = ({
  firebase: { auth, profile },
  firestore: {
    ordered: { projects },
  },
}) => {
  return {
    projects,
    auth,
    profile,
  };
};

export default compose(
  // CONNECT TO REDUX
  connect(mapStateToProps),
  // CONNECT TO FIRESTORE COLLECTION
  firestoreConnect((props) => [
    {
      // Declare which collection
      collection: "projects",
      // Query specific projects
      where: [["authorId", "==", props.auth.uid]],
      // Order them by which one was created most recently
      orderBy: ["createdAt", "desc"],
    },
  ])
)(Profile);
