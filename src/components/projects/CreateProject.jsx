import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    category: "",
    description: "",
    tech: {
      frontend: "",
      backend: "",
      db: "",
    },
    estimatedTime: "",
  };

  componentDidMount() {
    M.AutoInit();
  }

  handleChange = (e) => {
    if ([e.target.id] === "tech") {
      const tech = [...this.state.tech];
      tech.push(e.target.value);
      console.log(tech);
      this.setState({ tech });
    }
    this.setState({ [e.target.id]: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  /* renderSelect = () =>{
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll("select");
      const instances = M.FormSelect.init(elems, options);
    });
  } */

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <select className="icons">
                <option value="" disabled selected>
                  Choose category
                </option>
                <option value="php" className="left">
                  E-Commerce
                </option>
                <option value="php" className="left">
                  CRM
                </option>
                <option value="php" className="left">
                  Progressive Web App
                </option>
                <option value="php" className="left">
                  Time Management
                </option>
                <option value="nodejs" className="left">
                  Project Planner
                </option>
                <option value="ruby" className="left">
                  Other
                </option>
              </select>
              <label>Backend</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="description">Project Description</label>
              <textarea
                id="description"
                className="materialize-textarea"
                data-length="120"
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4">
              <select className="icons">
                <option value="" disabled selected>
                  Choose frontend
                </option>
                <option value="vanilla">Vanilla</option>
                <option value="jquery">Jquery</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
              </select>
              <label>Frontend</label>
            </div>
            <div className="input-field col s12 m4">
              <select className="icons">
                <option value="" disabled selected>
                  Choose backend
                </option>
                <option value="php" className="left">
                  PHP
                </option>
                <option value="nodejs" className="left">
                  NodeJS
                </option>
                <option value="ruby" className="left">
                  Ruby
                </option>
              </select>
              <label>Backend</label>
            </div>
            <div className="input-field col s12 m4">
              <select className="icons">
                <option value="" disabled selected>
                  Choose database
                </option>
                <option value="sql" className="left">
                  SQL
                </option>
                <option value="mongodb" className="left">
                  MongoDB
                </option>
                <option value="graphql" className="left">
                  GraphQL
                </option>
              </select>
              <label>Database</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s-12">

            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button className="btn pink lighten-1 z-depth-0">
                Create Project!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
// mapDispatchToProps will always be the second param, the first one is mapStateToProps
export default connect(null, mapDispatchToProps)(CreateProject);
