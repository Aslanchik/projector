export const update = (updatedUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // Get profile of current user
    const profile = getState().firebase.profile;
    // Get uid of current user
    const uid = getState().firebase.auth.uid;

    firestore
      .collection("users")
      .doc(uid)
      .set({
        ...profile,
        ...updatedUser,
      })
      .then(() => {
        dispatch({ type: "UPDATE_USER", updatedUser });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_USER_ERR", err });
      });
  };
};
