import React from 'react'

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

class AddPlayerForm extends React.Component {
  state = {
    formPlayerNameValue: '',
    formPlayerPositionValue: '',
    formPlayerImageUrlValue: ''
  }

  handleChangePlayerName = (event) => {
    this.setState({formPlayerNameValue: event.target.value});
  }

  handleChangePlayerPosition = (event) => {
    this.setState({formPlayerPositionValue: event.target.value});
  }

  handleChangePlayerImageUrl = (event) => {
    this.setState({formPlayerImageUrlValue: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {toggleNewPlayerForm, updatePlayers} = this.props;
    
    let newPlayerObj = {};
    newPlayerObj['imageUrl'] = this.state.formPlayerImageUrlValue;
    newPlayerObj['name'] = this.state.formPlayerNameValue;
    newPlayerObj['position'] = this.state.formPlayerPositionValue;
    newPlayerObj['uid'] = authData.getUid();

    playerData.addPlayer(newPlayerObj)
    .then(() => {
      updatePlayers();
      toggleNewPlayerForm();
    })
    .catch((err) => console.error('Could not add player: ', err));
  }

  scrollToEnd = () => {
    this.end.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToEnd();
  }

  render() {
    const {formPlayerNameValue, formPlayerPositionValue, formPlayerImageUrlValue} = this.state;

    return(
      <div className="card text-center player-card" ref={(node) => this.end = node}>
        <div className="card-header d-flex flex-nowrap justify-content-center">
          <h5 className="mb-0">New Player Details</h5>
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
