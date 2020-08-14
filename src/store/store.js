import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";

import rootReducer from "./reducers/rootReducer";
import firebaseConfig from "../config/fbConfig";

// CREATE STORE
const store = createStore(
  // MAIN REDUCER
  rootReducer,
  //   STORE ENHANCERS
  compose(
    // ENHANCE STORE WITH THUNK MIDDLEWARE AND ADD FIREBASE AND FIRESTORE AS ARGUMENTS
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // REDUX BINDINGS FOR FIRESTORE
    reduxFirestore(firebase, firebaseConfig)
  )
);

export default store;
