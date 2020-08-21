import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Navbar from '../components/Navbar/Navbar';
import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    isAuthed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isAuthed: true });
      } else {
        this.setState({ isAuthed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <Navbar isAuthed={this.state.isAuthed} />
        <h2>INSIDE APP COMPONENT</h2>
      </div>
    );
  }
}

export default App;
