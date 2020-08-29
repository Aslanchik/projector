import { successToast } from "../../services/alertService";

const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      successToast("Profile Updated Successfully!");
      return state;
    case "UPDATE_USER_ERR":
      return state;
    case "UPDATE_UPVOTES_USER_SUCC":
      return state;
    case "UPDATE_UPVOTES_USER_ERR":
      return state;
    default:
      return state;
  }
};

export default userReducer;
