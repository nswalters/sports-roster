import React from 'react'

class AddPlayerForm extends React.Component {
  render() {
    return(
      <div className="card text-center player-card">
        <div className="card-header d-flex flex-nowrap justify-content-center">
          <h5 className="mb-0">New Player Details</h5>
        </div>
        <form className="mx-4 mt-3">
          <div className="form-group">
            <input type="text" className="form-control form-control-sm" id="playerName" placeholder="Player Name (First Last)" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-sm" id="playerPosition" placeholder="Player Position" />
          </div>
          <div className="form-group mb-2">
            <input type="text" className="form-control form-control-sm" id="playerImageUrl" placeholder="Image URL (https:// ...)" />
          </div>
          <button type="submit" className="btn btn-success disabled mt-1 mb-2" disabled>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
