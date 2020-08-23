const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;

    case "UPVOTE_PROJECT_SUCC":
      console.log("project upvoted successfully", action.project);
      return state;
    case "UPVOTE_PROJECT_ERR":
      console.log("project upvote errrrrr", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
