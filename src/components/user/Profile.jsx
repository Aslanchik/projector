import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import ProjectList from "../projects/ProjectList";
import UserInfo from "./UserInfo";

class Profile extends Component {
  render() {
    const { profile, projects } = this.props;
    console.log(projects);
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
  firestore: { ordered },
}) => {
  return {
    projects: ordered.projects,
    auth,
    profile,
  };
};

export default compose(
  // CONNECT TO FIRESTORE COLLECTION

  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "projects",
      where: [["authorId", "==", props.auth.uid]],
      orderBy: ["createdAt", "desc"],
    },
  ])
  // CONNECT TO REDUX
)(Profile);
