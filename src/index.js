import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "@fortawesome/fontawesome-free";

import * as serviceWorker from "./serviceWorker";
import "./styles/main.scss";
import App from "./App";
import store from "./store/store";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="center">
        {" "}
        <p>Loading Projector...</p>
      </div>
    );
  return children;
}

ReactDOM.render(
  // APPLY REDUX STORE THAT WAS CREATED TO THE APPLICATION
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
