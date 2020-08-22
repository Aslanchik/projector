import React, { Component } from "react";
import { connect } from "react-redux";

import { firstCharUppercase } from "../../utils/pipes";
import { update } from "../../store/actions/userActions";

class UserInfo extends Component {
  state = {
    aboutMe: "",
    avatarUrl: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(this.state);
    this.props.history.push("/");
  };

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

  renderUserCard = () => {
    const {
      profile: { aboutMe, avatarUrl, firstName, isLoaded, lastName },
    } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          {avatarUrl ? (
            <img src={avatarUrl} alt="my avatar" />
          ) : (
            <img
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
              alt="placeholder avatar"
            />
          )}

          <span className="card-title nameTitle">
            {isLoaded && firstCharUppercase(firstName)}{" "}
            {isLoaded && firstCharUppercase(lastName)}
          </span>
          <button className="btn btn-floating halfway-fab waves-effect waves-light editBtn activator">
            <i className="material-icons  ">create</i>
          </button>
        </div>
        <div className="card-content">
          {aboutMe ? <p>{aboutMe}</p> : <p>Write something about yourself!</p>}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Edit Profile<i className="material-icons right">close</i>
          </span>
          <div className="editForm">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s12">
                {this.renderInput("text", "avatarUrl", "Avatar Url")}
              </div>

              <div className="input-field col s12">
                {this.renderInput(
                  "textarea",
                  "aboutMe",
                  "Something about yourself.."
                )}
              </div>

              <div className="input-field col s12">
                <button type="submit" className="btn submitBtn z-depth-0">
                  Save<i className="material-icons right">save</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className="col s12 m4">{this.renderUserCard()}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (updatedUser) => dispatch(update(updatedUser)),
  };
};

export default connect(null, mapDispatchToProps)(UserInfo);
