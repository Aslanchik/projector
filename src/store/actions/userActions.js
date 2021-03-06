import * as firebase from "firebase/app";

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
        firstName: profile.firstName,
        lastName: profile.lastName,
        initials: profile.initials,
        upVoted: profile.upVoted,
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

export const addUpVotedProject = (projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;

    firestore
      .collection("users")
      .doc(uid)
      .set(
        { upVoted: firebase.firestore.FieldValue.arrayUnion(projectId) },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "UPDATE_UPVOTES_USER_SUCC", uid });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_UPVOTES_USER_ERR", err });
      });
  };
};
