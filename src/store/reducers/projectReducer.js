import { successToast } from "../../services/alertService";

const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      successToast("New Project Created!");
      return state;
    case "CREATE_PROJECT_ERROR":
      return state;

    case "UPVOTE_PROJECT_SUCC":
      return state;
    case "UPVOTE_PROJECT_ERR":
      return state;
    case "UPDATE_PROJECT_SUCC":
      successToast("Project Updated Successfully!");
      return state;
    case "UPDATE_PROJECT_ERR":
      return state;
    default:
      return state;
  }
};

export default projectReducer;
