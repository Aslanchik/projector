import {
  successSwal,
  successToast,
  errorSwal,
} from "../../services/alertService";
import { firstCharUppercase } from "../../utils/pipes";

const initState = {
  authErr: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      errorSwal("Incorrect Email or Password", "/img/undraw_cancel.svg");
      return {
        ...state,
        authErr: "Login Failed!",
      };
    case "LOGIN_SUCCESS":
      successToast(`Welcome back!`);
      return {
        ...state,
        authErr: null,
      };
    case "LOGOUT_SUCCESS":
      return state;
    case "REGISTER_SUCC":
      successSwal(
        `Welcome, ${firstCharUppercase(action.firstName)}!`,
        "/img/undraw_welcome_cats_thqn.svg"
      );
      return {
        ...state,
        authErr: null,
      };
    case "REGISTER_ERR":
      errorSwal(`${action.err.message}`, "/img/undraw_cancel.svg");
      return {
        ...state,
        authErr: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
