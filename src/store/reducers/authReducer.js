const initState = {
  authErr: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login err");
      return {
        ...state,
        authErr: "Login Failed!",
      };
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authErr: null,
      };
    case "LOGOUT_SUCCESS":
      console.log("Logout Success");
      return state;
    case "REGISTER_SUCC":
      console.log("Register Success");
      return {
        ...state,
        authErr: null,
      };
    case "REGISTER_ERR":
      console.log("register error");
      return {
        ...state,
        authErr: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
