import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

class EditProject extends Component {
  state = {
    title: this.props.project.title,
    category: this.props.project.category,
    description: this.props.project.description,
    techFrontend: this.props.project.techFrontend,
    techBackend: this.props.project.techBackend,
    techDb: this.props.project.techDb,
    timeAmount: this.props.project.timeAmount,
    timeUnit: this.props.project.timeUnit,
  };

  componentDidMount() {
    M.AutoInit();
  }

  renderInput = (type, name, title, ...rest) => {
    if (type === "textarea") {
      return (
        <>
          <textarea
            id={name}
            {...rest}
            name={name}
            className="materialize-textarea"
            data-length="120"
            onChange={this.handleChange}
          ></textarea>
          <label htmlFor={name}>{title}</label>
        </>
      );
    }
    return (
      <>
        <input
          type={type}
          id={name}
          name={name}
          {...rest}
          onChange={this.handleChange}
        />
        <label htmlFor={name}>{title}</label>
      </>
    );
  };

  render() {
    return (
      <div className="section">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m5">
              {this.renderInput("text", "title", "Title")}
            </div>
            <div className="input-field col s12 m7">
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
            <div className="input-field col s12">
              {this.renderInput(
                "textarea",
                "description",
                "Project Description"
              )}
            </div>
            <p className="col s12 fieldTitle">Tech Stack</p>
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
            <p className="text-grey col s12 fieldTitle">Time Estimate</p>
            <div className="input-field col s3 m2">
              <label htmlFor="time">Amount</label>
              <input
                type="number"
                min="0"
                id="timeAmount"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s9 m4">
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
            <div className="input-field col s12 center-align">
              <button type="submit" className="btn submitBtn z-depth-0">
                Submit Edit <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProject;
