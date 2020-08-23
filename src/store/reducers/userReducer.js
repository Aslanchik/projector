const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      console.log("updated user successfully", action.updatedUser);
      return state;
    case "UPDATE_USER_UPDATE":
      console.log("update user failed", action.err);
      return state;
    case "UPDATE_UPVOTES_USER_SUCC":
      console.log("user upvotes updated successfully", action.userId);
      return state;
    case "UPDATE_UPVOTES_USER_ERR":
      console.log("user upvotes save err", action.err);
      return state;
    default:
      return state;
  }
};

export default userReducer;
