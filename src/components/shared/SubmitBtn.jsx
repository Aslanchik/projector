import React from "react";

const SubmitBtn = ({ title, icon = "send", ...rest }) => {
  return (
    <button {...rest} className="btn submitBtn lighten-1 z-depth-0">
      <i className="material-icons right">{icon}</i>
      {title}
    </button>
  );
};

export default SubmitBtn;
