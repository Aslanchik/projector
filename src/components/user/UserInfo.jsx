import React, { Component } from "react";

import { firstCharUppercase } from "../../utils/pipes";

class UserInfo extends Component {
  state = {
    aboutMe: "",
    avatarUrl: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
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

          <span className="card-title" style={{ color: "#171738" }}>
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
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            Edit Profile<i class="material-icons right">close</i>
          </span>
          <div className="input-group col s12">
            {this.renderInput("text", "avatarUrl", "Avatar Url")}
          </div>
          <div className="input-group col s12">
            {this.renderInput(
              "textarea",
              "aboutMe",
              "Something about yourself.."
            )}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className="col s12 m4">{this.renderUserCard()}</div>;
  }
}

export default UserInfo;
