import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

class Auth extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
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
    const { isAuthed } = this.props;

    const authButton = () => {
      if (isAuthed) {
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
        { authButton() }
      </div>
    );
  }
}

export default Auth;
