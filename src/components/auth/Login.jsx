import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../store/actions/authActions";
import Input from "../shared/Input";
import SubmitBtn from "../shared/SubmitBtn";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  renderForm = () => {
    return (
      <div className="section loginComp">
        <div className="row">
          <div className="col l2 offset-l1" data-aos="fade-right">
            <img
              className="loginLogo"
              src="/img/undraw_Login_re_4vu2.svg"
              alt="login logo"
            />
          </div>
          <div className="col s12 l7 offset-l1" data-aos="fade-left">
            <form
              className=" container  loginForm"
              onSubmit={this.handleSubmit}
            >
              <h4 className="title">Log In</h4>
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
              <div className="row">
                <div className="col s12">
                  <div className="input-field">
                    <SubmitBtn title={"Submit"} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <>{this.renderForm()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
