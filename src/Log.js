import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {  Form ,Button} from 'react-bootstrap';
import FooterContainer from "./FooterContainer";

firebase.initializeApp({
  apiKey: "AIzaSyChGrtgUiyF-Dng2HU6HuDsNXazOa-u6zc",
  authDomain: "auth-react-s.firebaseapp.com"
})

class Log extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
    {this.state.isSignedIn ? (

        
          <span className="reg">

          <img
          alt="profile picture"
          src={firebase.auth().currentUser.photoURL}
        />
          <h1>Welcome </h1>
          <h1>{firebase.auth().currentUser.displayName}</h1>

          <button onClick={() => firebase.auth().signOut()} class="btn btn-danger">Sign out!</button>
           
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}

      </div>
       
    )
  }
}

export default Log