import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../../helpers/data/connection';

fbConnection();

class Auth extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.state;

    const authButtonComponent = () => {
      if (authed) {
        return (
          <button className="btn btn-danger ml-auto" onClick={this.logoutClickEvent}>Logout</button>
        )
      }
      return (
        <button className="btn btn-warning ml-auto" onClick={this.loginClickEvent}>Login</button>
      )
    }

    return (
      <div>
        { authButtonComponent() }
      </div>
    );
  }
}

export default Auth;
