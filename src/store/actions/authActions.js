export const login = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const register = ({ email, password, firstName, lastName }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        return firestore
          .collection("users")
          .doc(user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            initials: firstName[0] + lastName[0],
            avatarUrl: "",
            aboutMe: "",
            upVoted: [],
          });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCC", firstName });
      })
      .catch((err) => {
        dispatch({ type: "REGISTER_ERR", err });
      });
  };
};
