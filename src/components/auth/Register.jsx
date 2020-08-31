import React, { Component } from "react";

import { connect } from "react-redux";
import { register } from "../../store/actions/authActions";
import Input from "../shared/Input";
import SubmitBtn from "../shared/SubmitBtn";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  renderRegisterForm = () => {
    return (
      <div className="section registerComp">
        <div className="row">
          <div className="col l1 offset-l1" data-aos="fade-right">
            <img
              className="registerLogo"
              src="/img/undraw_add_user_ipe3.svg"
              alt="register logo"
            />
          </div>
          <div className="col s12 l8 offset-l1" data-aos="fade-left">
            <form className=" container" onSubmit={this.handleSubmit}>
              <h4 className="title">Register</h4>
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">face</i>
                  <Input
                    type={"text"}
                    name={"firstName"}
                    title={"First Name"}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field col s6">
                  <Input
                    type={"text"}
                    name={"lastName"}
                    title={"Last Name"}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <Input
                      type={"email"}
                      name={"email"}
                      title={"Email"}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="input-field">
                    <i className="material-icons prefix">vpn_key</i>
                    <Input
                      type={"password"}
                      name={"password"}
                      title={"Password"}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="input-field">
                <SubmitBtn title={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <>{this.renderRegisterForm()}</>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(register(newUser)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
