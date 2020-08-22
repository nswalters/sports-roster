import React from 'react';

import AddPlayer from '../AddPlayer/AddPlayer';
import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  updatePlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('Could not get players!', err));
  }

  componentDidMount() {
    this.updatePlayers();
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.updatePlayers();
      })
      .catch((err) => console.error('Delete player failed: ', err));
  }

  render() {
    const { players } = this.state;

    const playerCards = players.map((player) => <Player key={player.id} player={ player } deletePlayer={this.deletePlayer} />);

    return (
      <div>
        <h1 className="font-weight-bold mt-5 mb-3">Meet Your Team</h1>
        <img className="mx-auto team-logo"src="https://www-league.nhlstatic.com/nhl.com/builds/site-core/b1904568bcb2fbac5e1943f4bbcc4a888f9cd027_1596505987/images/logos/team/current/team-18-dark.svg" alt="Team Logo"></img>
        <h3 className="font-weight-bold my-3">The Nashville Predators</h3>
        <h6 className="mt-2 mb-3">They call Bridgestone Arena their home.</h6>
        <small className="team-notes">2017 Stanley Cup Finalists</small>
        <div className="container mt-5">
          <div className="card-columns">
            {playerCards}
          </div>
          <AddPlayer />
        </div>
      </div>
    )
  }
}

export default Team;
