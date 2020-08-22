export const update = (updatedUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;

    firestore
      .collection("users")
      .doc(uid)
      .set({
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
