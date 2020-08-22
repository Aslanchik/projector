import React from "react";

const Input = ({ type, name, title, ...rest }) => {
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

export default Input;
