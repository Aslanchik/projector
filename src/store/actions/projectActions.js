export const createProject = (project) => {
  // HALT ACTION AND RETURN A FUNCTION
  return (dispatch, getState) => {
    // MAKE ASYNC CALL TO DB

    // CONTINUE DISPATCH
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
