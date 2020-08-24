import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import M from "materialize-css/dist/js/materialize.min.js";

import ProjectList from "./ProjectList";
import Input from "../shared/Input";

class AllProjects extends Component {
  state = {
    projects: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    M.AutoInit();
  }

  filterByInput = (e) => {
    const projects = [...this.props.projects];
    const searchParam = e.target.value;
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchParam)
    );
    this.setState({ projects: filteredProjects });
  };

  render() {
    const { projects } = this.props;
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
                onChange={(e) => {
                  this.filterByInput(e);
                }}
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
        <ProjectList projects={projects} />
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
