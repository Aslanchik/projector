import React, { Component } from "react";

import { connect } from "react-redux";
import { register } from "../../store/actions/authActions";

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

  render() {
    const { authErr } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s10 offset-s1 center-align">
            <form className="registerForm" onSubmit={this.handleSubmit}>
              <h4 className="grey-text text-darken-3">Register</h4>
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">face</i>
                  <input
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
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
              <div className="input-field">
                <button className="btn submitBtn lighten-1 z-depth-0">
                  <i className="material-icons right">send</i>Register Now!
                </button>
                <div className="red-text center">
                  {authErr ? <p>{authErr}</p> : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authErr: state.auth.authErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(register(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
