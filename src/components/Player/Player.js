import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propTypes/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card text-center shadow player-card">
        <div className="card-header d-flex flex-nowrap justify-content-center">
          <h5 className="ml-auto mb-0">{player.name}</h5>
          <button type="button" onClick={this.deletePlayerEvent} className="close ml-auto text-danger delete-player-button" aria-label="Delete Player">&times;</button>
        </div>
        <img className="card-img w-50 shadow rounded-circle mt-3" src={player.imageUrl} alt="Player"></img>
        <div className="card-body">
          <p className="card-title">{player.position}</p>
        </div>
      </div>
    );
  }
}

export default Player;
