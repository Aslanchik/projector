import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import M from "materialize-css/dist/js/materialize.min.js";

import ProjectList from "./ProjectList";
import Input from "../shared/Input";

class AllProjects extends Component {
  state = { searchParam: "" };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { projects } = this.props;
    const { searchParam } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s10">
            <div className="input-field">
              <i className="material-icons prefix">search</i>
              <Input
                type={"text"}
                name={"searchParam"}
                title={"Search project.."}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="input-field col s2">
            <select
              id="sortParam"
              name="sortParam"
              defaultValue=""
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Sort
              </option>
              <option value="title">Title</option>
              <option value="category">Category</option>
              <option value="upvotes">Upvotes</option>
            </select>
          </div>
        </div>
        {projects ? (
          <ProjectList projects={projects} searchParam={searchParam} />
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
    );
  }
}

const mapStateToProps = (state) => {
  const { projects } = state.firestore.ordered;
  return {
    projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  // CONNECT TO FIRESTORE COLLECTION
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }])
  // CONNECT TO REDUX
)(AllProjects);
