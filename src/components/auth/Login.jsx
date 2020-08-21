import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../store/actions/authActions";

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
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3 center-align">
            <form className="loginForm" onSubmit={this.handleSubmit}>
              <h4 className="grey-text text-darken-3">Log In</h4>
              <div className="row">
                <div className="col s12">
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="input-field">
                    <i className="material-icons prefix">vpn_key</i>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="input-field">
                    <button className="btn submitBtn lighten-1 z-depth-0">
                      <i className="material-icons right">send</i>Login
                    </button>
                    <div className="red-text center">{this.props.authErr}</div>
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
    authErr: state.auth.authErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
