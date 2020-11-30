import React, { useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
import Header from "./components/Header";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "exercise5-cd2f7.firebaseapp.com",
  databaseURL: "https://exercise5-cd2f7.firebaseio.com",
  projectId: "exercise5-cd2f7",
  storageBucket: "exercise5-cd2f7.appspot.com",
  messagingSenderId: "547318276189",
  appId: "1:547318276189:web:bff95e8bfd875eaee16db4",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  //const [userInformation, setUserInformation] = useState();

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  function LoginFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }

  function LogoutFunction(e) {}
  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR:", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }

  console.log({ loggedIn });

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction} />
        </Route>
        <Route exact path="/CreateAccount">
          <CreateAccount CreateAccountFunction={CreateAccountFunction} />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
