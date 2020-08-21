import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }

  render() {
    const { isAuthed } = this.props;

    return (
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-0 h1 text-light">Sports Roster</span>
        <Auth isAuthed={isAuthed} />
      </nav>
    );
  }
}

export default Navbar;
