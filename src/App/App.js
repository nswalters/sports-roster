import React from 'react';
import './App.scss';

import Navbar from '../components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h2>INSIDE APP COMPONENT</h2>
      </div>
    );
  }
}

export default App;
