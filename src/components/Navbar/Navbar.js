import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../Auth/Auth';

import './Navbar.scss';

class Navbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }

  render() {
    const { isAuthed } = this.props;

    return (
      <nav className="navbar navbar-light myNavbar">
        <span className="navbar-brand mb-0 h1 text-light">
          <svg className="text-white roster-logo mr-3" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 114.46 122.88"><g><path d="M24.72,31.9H3.28C2.7,43.69,3.45,54.95,8.07,63.17c4.36,7.76,12.33,12.89,26.2,13.28c-1.58-1.94-3.09-4.23-4.42-6.99 c-8.33-1.12-13.16-4.57-15.93-9.75c-2.77-5.17-3.36-11.93-3.36-19.78c0-0.86,0.7-1.56,1.56-1.56h12.6V31.9L24.72,31.9z M56.88,33.47l3.88,9.45l10.2,0.77l-7.81,6.62l2.42,9.92l-8.69-5.38l-8.69,5.38l2.42-9.92l-7.81-6.62L53,42.92L56.88,33.47 L56.88,33.47z M1.8,28.78h22.91v-5.84h-3.14c-1.9,0-3.62-0.78-4.87-2.03l-0.01-0.01c-1.25-1.25-2.03-2.97-2.03-4.87v-3.89 c-1.22-0.24-2.32-0.84-3.17-1.69c-1.11-1.11-1.8-2.64-1.8-4.33V3.38c0-0.93,0.38-1.78,0.99-2.39C11.31,0.38,12.16,0,13.09,0h87.58 c0.93,0,1.78,0.38,2.39,0.99c0.61,0.61,0.99,1.46,0.99,2.39v2.75c0,1.69-0.69,3.22-1.8,4.33c-0.85,0.85-1.95,1.45-3.17,1.69v3.89 c0,1.89-0.78,3.62-2.03,4.87l-0.01,0.01c-1.25,1.25-2.97,2.03-4.87,2.03h-3.14v5.84h23.62c0.86,0,1.56,0.7,1.56,1.56l0,0.02 c0.72,12.8,0,25.18-5.21,34.35c-5.28,9.3-15.01,15.22-32.18,14.85c-1.63,1.47-3.28,2.72-4.83,3.91c-5.42,4.14-9.5,7.26-6.33,16.82 h4.74c1.89,0,3.61,0.77,4.86,2.02c1.25,1.25,2.02,2.97,2.02,4.86v2.77h0.68c1.86,0,3.56,0.76,4.79,1.99l0,0 c1.23,1.23,1.99,2.92,1.99,4.79v4.6c0,0.86-0.7,1.56-1.56,1.56H30.57c-0.86,0-1.56-0.7-1.56-1.56v-4.6c0-1.86,0.76-3.55,1.99-4.78 l0.01-0.01c1.23-1.23,2.92-1.99,4.78-1.99h0.68v-2.77c0-1.89,0.77-3.61,2.02-4.85l0.01-0.01c1.25-1.24,2.97-2.02,4.85-2.02h5.33 c2.83-9.02-0.88-11.94-6.01-15.98c-1.74-1.37-3.64-2.86-5.55-4.74c-16.97,0.28-26.57-5.63-31.77-14.88 C0.2,55.52-0.48,43.16,0.24,30.37l0-0.02C0.24,29.48,0.94,28.78,1.8,28.78L1.8,28.78z M51.93,100.29H62.4 c-3.32-10.87,1.44-14.5,7.71-19.29c6.88-5.25,15.82-12.07,15.82-34.51V22.98H27.83v22.9c0.38,8.71,1.84,15.16,3.85,20.1 c1.99,4.88,4.55,8.29,7.17,10.94c1.91,1.94,3.91,3.51,5.74,4.95C50.56,86.56,54.91,89.99,51.93,100.29L51.93,100.29z M64.57,103.41 H43.35c-1.04,0-1.98,0.42-2.66,1.1l-0.01,0.01c-0.68,0.68-1.1,1.62-1.1,2.66v2.77h34.58v-2.77c0-1.03-0.42-1.97-1.11-2.66 c-0.68-0.68-1.62-1.11-2.66-1.11H64.57L64.57,103.41z M75.73,113.06H35.79c-1.01,0-1.93,0.41-2.59,1.07l-0.01,0.01 c-0.66,0.66-1.07,1.58-1.07,2.59v3.04h49.5v-3.04c0-1.01-0.41-1.92-1.08-2.59v-0.01c-0.66-0.66-1.58-1.07-2.59-1.07H75.73 L75.73,113.06z M89.05,38.37h13.75c0.86,0,1.56,0.7,1.56,1.56c0,7.87-0.71,14.65-3.61,19.82c-2.89,5.14-7.82,8.57-16.14,9.7 c-1.38,2.79-2.98,5.07-4.68,7.01c13.93-0.37,21.96-5.5,26.38-13.27c4.67-8.22,5.45-19.49,4.88-31.28H89.05V38.37L89.05,38.37z M101.23,41.49H89.05v5c0,8.31-1.16,14.62-2.98,19.56c6.08-1.2,9.78-3.93,11.97-7.83C100.42,53.96,101.14,48.21,101.23,41.49 L101.23,41.49z M24.72,41.49H13.68c0.08,6.73,0.69,12.49,2.97,16.75c2.09,3.9,5.68,6.63,11.73,7.82 c-1.93-5.11-3.3-11.61-3.67-20.12l0-0.07h-0.01V41.49L24.72,41.49z M100.67,3.12H13.09c-0.07,0-0.14,0.03-0.19,0.08 c-0.05,0.05-0.08,0.11-0.08,0.19v2.75c0,0.83,0.34,1.58,0.89,2.13c0.55,0.55,1.3,0.89,2.13,0.89h82.08c0.83,0,1.58-0.34,2.13-0.89 c0.55-0.55,0.89-1.3,0.89-2.13V3.38c0-0.07-0.03-0.14-0.08-0.19C100.81,3.15,100.74,3.12,100.67,3.12L100.67,3.12z M95.97,12.27 H17.8v3.78c0,1.04,0.42,1.99,1.11,2.67c0.69,0.68,1.63,1.11,2.67,1.11h70.61c1.04,0,1.99-0.42,2.67-1.11 c0.68-0.69,1.11-1.63,1.11-2.67V12.27L95.97,12.27z"></path></g></svg>
          Sports Roster
        </span>
        <Auth isAuthed={isAuthed} />
      </nav>
    );
  }
}

export default Navbar;
