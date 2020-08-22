import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import ProjectList from "../projects/ProjectList";
import UserInfo from "./UserInfo";

class Profile extends Component {
  render() {
    const { profile, projects } = this.props;

    return (
      <div className="container">
        <div className="section col s12">
          <div className="row">
            <UserInfo profile={profile} />
            <div className="col s12 m7 offset-m1">
              <h4 className="center-align">My Projects</h4>
              <ProjectList projects={projects} />
            </div>
          </div>
        </div>
      </div>
    );
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
