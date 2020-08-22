import React from 'react';

import playerShape from '../../helpers/propTypes/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card text-center shadow player-card">
        <div className="card-header"><h5>{player.name}</h5></div>
        <img className="card-img w-50 shadow rounded-circle mt-3" src={player.imageUrl} alt="Player"></img>
        <div className="card-body">
          <p className="card-title">{player.position}</p>
        </div>
      </div>
    );
  }
}

export default Player;
