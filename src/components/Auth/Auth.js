import React from 'react';

class Auth extends React.Component {
  state = {
    authed: false,
  }

  render() {
    const { authed } = this.state;

    const authBasedComponent = () => {
      if (authed) {
        return (
          <button className="btn btn-danger ml-auto">Logout</button>
        )
      }
      return (
        <button className="btn btn-warning ml-auto">Login</button>
      )
    }

    return (
      <div>
        { authBasedComponent() }
      </div>
    );
  }
}

export default Auth;
