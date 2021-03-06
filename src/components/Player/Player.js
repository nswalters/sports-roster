import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propTypes/playerShape';

import EditPlayerForm from '../EditPlayerForm/EditPlayerForm';
import playerData from '../../helpers/data/playerData';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    updatePlayers: PropTypes.func.isRequired
  }

  state = {
    isEditPlayerFormShowing: false,
  }

  toggleEditPlayerForm = () => {
    this.setState(prevState => ({ isEditPlayerFormShowing: !prevState.isEditPlayerFormShowing }));
  };

  deletePlayer = (playerId, updatePlayers=this.props.updatePlayers) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        updatePlayers();
      })
      .catch((err) => console.error('Delete player failed: ', err));
  }

  editPlayer = (playerId, newPlayerObj, updatePlayers=this.props.updatePlayers) => {
    playerData.updatePlayer(playerId, newPlayerObj)
      .then(() => {
        updatePlayers();
      })
      .catch((err) => console.error('Could not update player: ', err));
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player } = this.props;
    this.deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card text-center player-card">
        <div className="card-header d-flex flex-nowrap justify-content-center">
          <button type="button" className="close" onClick={this.toggleEditPlayerForm} title="Edit Player"><svg className="text-warning edit-player-button" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 121.96"><g><path d="M107.73,1.31c-0.96-0.89-2.06-1.37-3.29-1.3c-1.23,0-2.33,0.48-3.22,1.44l-7.27,7.54l20.36,19.67l7.33-7.68 c0.89-0.89,1.23-2.06,1.23-3.29c0-1.23-0.48-2.4-1.37-3.22L107.73,1.31L107.73,1.31L107.73,1.31z M8.35,5.09h50.2v13.04H14.58 c-0.42,0-0.81,0.18-1.09,0.46c-0.28,0.28-0.46,0.67-0.46,1.09v87.71c0,0.42,0.18,0.81,0.46,1.09c0.28,0.28,0.67,0.46,1.09,0.46 h87.71c0.42,0,0.81-0.18,1.09-0.46c0.28-0.28,0.46-0.67,0.46-1.09V65.1h13.04v48.51c0,2.31-0.95,4.38-2.46,5.89 c-1.51,1.51-3.61,2.46-5.89,2.46H8.35c-2.32,0-4.38-0.95-5.89-2.46C0.95,118,0,115.89,0,113.61V13.44c0-2.32,0.95-4.38,2.46-5.89 C3.96,6.04,6.07,5.09,8.35,5.09L8.35,5.09z M69.62,75.07c-2.67,0.89-5.42,1.71-8.09,2.61c-2.67,0.89-5.35,1.78-8.09,2.67 c-6.38,2.06-9.87,3.22-10.63,3.43c-0.75,0.21-0.27-2.74,1.3-8.91l5.07-19.4l0.42-0.43l20.02,20.02L69.62,75.07L69.62,75.07 L69.62,75.07z M57.01,47.34L88.44,14.7l20.36,19.6L77.02,67.35L57.01,47.34L57.01,47.34z"></path></g></svg></button>
          <h5 className="ml-auto mb-0">{player.name}</h5>
          <button type="button" onClick={this.deletePlayerEvent} className="close ml-auto text-danger delete-player-button" aria-label="Delete Player" title="Delete Player">&times;</button>
        </div>
        {this.state.isEditPlayerFormShowing ? <EditPlayerForm player={player} updatePlayers={this.props.updatePlayers} toggleEditPlayerForm={this.toggleEditPlayerForm} /> : ''}
        <img className="card-img w-50 shadow rounded-circle mt-3 mx-auto" src={player.imageUrl} alt="Player"></img>
        <div className="card-body">
          <p className="card-title">{player.position}</p>
        </div>
      </div>
    );
  }
}

export default Player;
