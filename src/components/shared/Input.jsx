import React from "react";

const Input = ({ type, name, title, defaultValue, labelClass, ...rest }) => {
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
        ></textarea>
        <label htmlFor={name} className={labelClass}>
          {title}
        </label>
      </>
    );
  }
  return (
    <>
      <input
        defaultValue={defaultValue}
        type={type}
        id={name}
        name={name}
        {...rest}
      />
      <label htmlFor={name} className={labelClass}>
        {title}
      </label>
    </>
  );
};

export default Input;
