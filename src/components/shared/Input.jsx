import React from "react";

const Input = ({ type, name, title, defaultValue, ...rest }) => {
  if (type === "textarea") {
    return (
      <>
        <textarea
          id={name}
          {...rest}
          defaultValue={defaultValue}
          name={name}
          className="materialize-textarea"
          data-length="120"
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
        defaultValue={defaultValue}
        name={name}
        {...rest}
      />
      <label htmlFor={name}>{title}</label>
    </>
  );
};

export default Input;
