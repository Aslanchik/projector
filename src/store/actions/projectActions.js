export const createProject = (project) => {
  // HALT ACTION AND RETURN A FUNCTION
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // GET REF TO FIRESTORE
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // GET REF TO PROJECTS COLLECTION
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFName: profile.firstName,
        authorLName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
        upVote: 0,
      })
      .then(() => {
        // CONTINUE DISPATCH
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const upVoteProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    /* const profile = getState().firebase.profile; */
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .doc(project.id)
      .set({
        ...project,
      })
      .then(() => {
        dispatch({ type: "UPVOTE_PROJECT_SUCC", project });
      })
      .catch((err) => {
        dispatch({ type: "UPVOTE_PROJECT_ERR", err });
      });
  };
};
