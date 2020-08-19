import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import M from "materialize-css/dist/js/materialize.min.js";

import ProjectList from "./ProjectList";

class AllProjects extends Component {
  state = {};

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { projects } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s10">
            <div className="input-field">
              <i className="material-icons prefix">search</i>
              <input type="text" id="search" name="search" />
              <label htmlFor="search">Search</label>
            </div>
          </div>
          <div className="input-field col s2">
            <select>
              <option value="" disabled selected>
                Sort
              </option>
              <option value="1">Title</option>
              <option value="2">Category</option>
              <option value="3">Upvotes</option>
            </select>
          </div>
        </div>
        <div className="row">
          <ProjectList projects={projects} />
        </div>
      </div>
    );
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
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
  ]),
  // CONNECT TO REDUX
  connect(mapStateToProps)
)(AllProjects);
