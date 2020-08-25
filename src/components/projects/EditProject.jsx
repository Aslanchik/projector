import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { updateProject } from "../../store/actions/projectActions";
class EditProject extends Component {
  state = {
    ...this.props.project,
  };

  componentDidMount() {
    M.AutoInit();
    console.log(this.props.project);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(this.state);
    // CLOSE EDIT WINDOW
    document.querySelector(".closeBtn").click();
  };

  renderInput = (type, name, title, defaultValue, ...rest) => {
    if (type === "textarea") {
      return (
        <>
          <textarea
            {...rest}
            defaultValue={defaultValue}
            id={name}
            name={name}
            className="materialize-textarea"
            data-length="1024"
            onChange={this.handleChange}
          ></textarea>
          <label htmlFor={name} className="active">
            {title}
          </label>
        </>
      );
    }
    return (
      <>
        <input
          {...rest}
          defaultValue={defaultValue}
          type={type}
          id={name}
          name={name}
          onChange={this.handleChange}
        />
        <label htmlFor={name} className="active">
          {title}
        </label>
      </>
    );
  };

  render() {
    const {
      project: {
        title,
        category,
        description,
        techFrontend,
        techBackend,
        techDb,
        timeAmount,
        timeUnit,
      },
    } = this.props;
    return (
      <div className="section">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <span className="col s12 fieldTitle">General Information</span>
            <div className="input-field col s12 m5">
              {this.renderInput("text", "title", "Title", title)}
            </div>
            <div className="input-field col s12 m7">
              <select
                id="category"
                name="category"
                defaultValue={category}
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
                "Project Description",
                description
              )}
            </div>
            <span className="col s12 fieldTitle">Tech Stack</span>
            <div className="input-field col s12 m4">
              <select
                defaultValue={techFrontend}
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
                defaultValue={techBackend}
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
              <select
                id="techDb"
                defaultValue={techDb}
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Choose database
                </option>
                <option value="sql">SQL</option>
                <option value="mongodb">MongoDB</option>
                <option value="graphql">GraphQL</option>
              </select>
              <label>Database</label>
            </div>
            <span className="text-grey col s12 fieldTitle">Time Estimate</span>
            <div className="input-field col s3 m2">
              <label htmlFor="time" className="active">
                Amount
              </label>
              <input
                type="number"
                min="0"
                id="timeAmount"
                defaultValue={timeAmount}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s9 m10">
              <select
                id="timeUnit"
                defaultValue={timeUnit}
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
              <button type="submit" className="btn submitBtn">
                Save<i className="material-icons right">save</i>
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
    update: (project) => dispatch(updateProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(EditProject);
