import React from 'react';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-0 h1 text-light">Navbar</span>
        <Auth />
      </nav>
    );
  }
}

export default Navbar;
