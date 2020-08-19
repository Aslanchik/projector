import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { firstCharUppercase } from "../../utils/pipes";
import ProjectList from "../projects/ProjectList";

class Profile extends Component {
  render() {
    const {
      profile: { firstName, lastName, isLoaded },
      projects,
    } = this.props;

    return (
      <div className="container">
        <div className="section col s12">
          <div className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png" />
                  <span className="card-title" style={{ color: "#171738" }}>
                    {isLoaded && firstCharUppercase(firstName)}{" "}
                    {isLoaded && firstCharUppercase(lastName)}
                  </span>
                  <a className="btn-large btn-floating halfway-fab waves-effect waves-light editBtn">
                    <i className="material-icons">create</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </div>

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
  // CONNECT TO FIRESTORE COLLECTION
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
  ]),
  // CONNECT TO REDUX
  connect(mapStateToProps)
)(Profile);
