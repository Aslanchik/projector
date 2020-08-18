import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    category: "",
    description: "",
    techFrontend: "",
    techBackend: "",
    techDb: "",
    timeAmount: null,
    timeUnit: "",
  };

  componentDidMount() {
    M.AutoInit();
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  renderInput = (type, name, title, ...rest) => {
    if (type === "textarea") {
      return (
        <>
          <label htmlFor={name}>{title}</label>
          <textarea
            id={name}
            {...rest}
            name={name}
            className="materialize-textarea"
            data-length="120"
            onChange={this.handleChange}
          ></textarea>
        </>
      );
    }
    return (
      <>
        <label htmlFor={name}>{title}</label>
        <input
          type={type}
          id={name}
          name={name}
          {...rest}
          onChange={this.handleChange}
        />
      </>
    );
  };

  render() {
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
          <h4 className="grey-text text-darken-3">Create New Project</h4>
          <div className="row">
            <div className="input-field col s12">
              {this.renderInput("text", "title", "Title")}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <select
                id="category"
                name="category"
                defaultValue=""
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Choose category
                </option>
                <option value="e-commerce">E-Commerce</option>
                <option value="crm">CRM</option>
                <option value="pwa">Progressive Web App</option>
                <option value="timeManagement">Time Management</option>
                <option value="projectPlan">Project Planner</option>
                <option value="other">Other</option>
              </select>
              <label>Category</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {this.renderInput(
                "textarea",
                "description",
                "Project Description"
              )}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4">
              <select
                defaultValue=""
                id="techFrontend"
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Choose frontend
                </option>
                <option value="vanilla">Vanilla</option>
                <option value="jquery">Jquery</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="ember">Ember</option>
              </select>
              <label>Frontend</label>
            </div>
            <div className="input-field col s12 m4">
              <select
                id="techBackend"
                defaultValue=""
                onChange={this.handleChange}
              >
                <option value="" disabled className="grey-text">
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
                <option value="java" className="left">
                  Java
                </option>
                <option value="python" className="left">
                  Python
                </option>
                <option value="rust" className="left">
                  Rust
                </option>
              </select>
              <label>Backend</label>
            </div>
            <div className="input-field col s12 m4">
              <select id="techDb" defaultValue="" onChange={this.handleChange}>
                <option value="" disabled>
                  Choose database
                </option>
                <option value="sql">SQL</option>
                <option value="mongodb">MongoDB</option>
                <option value="graphql">GraphQL</option>
              </select>
              <label>Database</label>
            </div>
          </div>
          <div className="row">
            <p className="text-grey">Time Estimate</p>
            <div className="input-field col s3 m2">
              <label htmlFor="time">Amount</label>
              <input
                type="number"
                min="0"
                id="timeAmount"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6 m4">
              <select
                id="timeUnit"
                defaultValue=""
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Time unit
                </option>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
              </select>
              <label>Time Unit</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <button className="btn submitBtn z-depth-0">
                Create Project <i class="material-icons right">send</i>
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
