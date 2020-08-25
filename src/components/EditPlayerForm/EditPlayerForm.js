import React from 'react'
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propTypes/playerShape';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

import './EditPlayerForm.scss';

class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formPlayerNameValue: this.props.player.name ,
      formPlayerPositionValue: this.props.player.position,
      formPlayerImageUrlValue: this.props.player.imageUrl 
    }

    this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
    this.handleChangePlayerPosition = this.handleChangePlayerPosition.bind(this);
    this.handleChangePlayerImageUrl = this.handleChangePlayerImageUrl.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  // player={player} updatePlayers={this.props.updatePlayers} toggleEditPlayerForm={this.toggleEditPlayerForm}

  static propTypes = {
    player: playerShape.playerShape,
    updatePlayers: PropTypes.func.isRequired,
    toggleEditPlayerForm: PropTypes.func.isRequired
  }

  handleChangePlayerName(event) {
    this.setState({formPlayerNameValue: event.target.value});
  }

  handleChangePlayerPosition(event) {
    this.setState({formPlayerPositionValue: event.target.value});
  }

  handleChangePlayerImageUrl(event) {
    this.setState({formPlayerImageUrlValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { toggleEditPlayerForm, updatePlayers } = this.props;
    
    let newPlayerObj = {};
    newPlayerObj['imageUrl'] = this.state.formPlayerImageUrlValue;
    newPlayerObj['name'] = this.state.formPlayerNameValue;
    newPlayerObj['position'] = this.state.formPlayerPositionValue;
    newPlayerObj['uid'] = authData.getUid();

    const { player } = this.props

    playerData.updatePlayer(player.id, newPlayerObj)
      .then(() => {
        updatePlayers();
        toggleEditPlayerForm();
      })
      .catch((err) => console.error('Could not update player: ', err));
  }

  render() {
    const {formPlayerNameValue, formPlayerPositionValue, formPlayerImageUrlValue} = this.state;

    return(
      <div className="card text-center player-card edit-player-card">
        <div className="card-header d-flex flex-nowrap justify-content-center">
          <h5 className="mb-0">Edit Player Details</h5>
        </div>
        <form className="mx-4 mt-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control form-control-sm" value={formPlayerNameValue} onChange={this.handleChangePlayerName}
                   id="playerName" placeholder="Player Name (First Last)" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-sm" value={formPlayerPositionValue} onChange={this.handleChangePlayerPosition}
                   id="playerPosition" placeholder="Player Position" />
          </div>
          <div className="form-group mb-2">
            <input type="text" className="form-control form-control-sm" value={formPlayerImageUrlValue} onChange={this.handleChangePlayerImageUrl}
                   id="playerImageUrl" placeholder="Image URL (https:// ...)" />
          </div>
          <button type="submit" className="btn btn-success mt-1 mb-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
