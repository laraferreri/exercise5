import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
import Header from "./components/Header";

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
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/CreateAccount">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
