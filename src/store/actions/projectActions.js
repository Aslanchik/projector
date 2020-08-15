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
