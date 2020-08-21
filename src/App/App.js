import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import fbConnection from '../helpers/data/connection';
import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';

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

    const loadComponentIfAuthed = (component) => {
      if (this.state.isAuthed) {
        return component;
      }
      return null;
    }

    return (
      <div className="App">
        <Navbar isAuthed={this.state.isAuthed} />
        <h1>Welcome to the Sports Roster!</h1>
        {loadComponentIfAuthed(<Team />)}
      </div>
    );
  }
}

export default App;
