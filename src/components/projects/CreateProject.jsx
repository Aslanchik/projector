import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { createProject } from "../../store/actions/projectActions";
import Input from "../shared/Input";
import SubmitBtn from "../shared/SubmitBtn";

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

  render() {
    return (
      <div className="section createProject">
        <div className="row">
          <div className="col l2 offset-l1" data-aos="fade-right">
            <img
              src="/img/undraw_create_project.svg"
              alt="create new project logo"
            />
          </div>
          <div className=" col m12 l9" data-aos="fade-left">
            <form className="container" onSubmit={this.handleSubmit}>
              <div className="row">
                <h4 className="title">Create New Project</h4>
                <span className="col s12 fieldTitle">General Information</span>
                <div className="input-field col s12 m5">
                  <Input
                    type={"text"}
                    name={"title"}
                    title={"Title"}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field col s12 m7">
                  <select
                    id="category"
                    name="category"
                    defaultValue=""
                    onChange={this.handleChange}
                  >
                    <option value="" disabled className="default">
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
                  <Input
                    type={"textarea"}
                    name={"description"}
                    title={"Project Description"}
                    onChange={this.handleChange}
                  />
                </div>
                <span className="col s12 fieldTitle">Tech Stack</span>
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
                  <select
                    id="techDb"
                    defaultValue=""
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
                <span className="col s12 fieldTitle">Time Estimate</span>
                <div className="input-field col s3 m2">
                  <Input
                    type={"number"}
                    name={"timeAmount"}
                    title={"Amount"}
                    onChange={this.handleChange}
                    min={"0"}
                  />
                </div>
                <div className="input-field col s9 m10">
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
                <div className="input-field col s12">
                  <SubmitBtn title={"Create project"} />
                </div>
              </div>
            </form>
          </div>
        </div>
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
