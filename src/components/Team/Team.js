import React from 'react';

import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('Could not get players!', err));
  }

  render() {
    const { players } = this.state;

    const playerCards = players.map((player) => <Player key={player.id} player={ player } />);

    return (
      <div className="card-columns">
        {playerCards}
      </div>
    )
  }
}

export default Team;
