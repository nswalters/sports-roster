import React from 'react';

import './AddPlayer.scss';

class AddPlayer extends React.Component {

  alert = () => alert(1);

  render() {
    return (
      <div className="card-columns">
        <div className="card blank-card"></div>
        <div className="card text-center add-player-card" onClick={this.alert}>
          <div className="card-header d-flex flex-nowrap justify-content-center">
            <h5 className="mx-auto mb-0">Add Player</h5>
          </div>
          <div className="my-3 add-player-card-button"> 
            <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.879px" height="122.88px" viewBox="0 0 122.879 122.88" enable-background="new 0 0 122.879 122.88"><g><path d="M17.995,17.995C29.992,5.999,45.716,0,61.439,0s31.448,5.999,43.445,17.995c11.996,11.997,17.994,27.721,17.994,43.444 c0,15.725-5.998,31.448-17.994,43.445c-11.997,11.996-27.722,17.995-43.445,17.995s-31.448-5.999-43.444-17.995 C5.998,92.888,0,77.164,0,61.439C0,45.716,5.998,29.992,17.995,17.995L17.995,17.995z M57.656,31.182 c0-1.84,1.492-3.332,3.333-3.332s3.333,1.492,3.333,3.332v27.383h27.383c1.84,0,3.332,1.492,3.332,3.332 c0,1.841-1.492,3.333-3.332,3.333H64.321v27.383c0,1.84-1.492,3.332-3.333,3.332s-3.333-1.492-3.333-3.332V65.229H30.273 c-1.84,0-3.333-1.492-3.333-3.333c0-1.84,1.492-3.332,3.333-3.332h27.383V31.182L57.656,31.182z M61.439,6.665 c-14.018,0-28.035,5.348-38.731,16.044C12.013,33.404,6.665,47.422,6.665,61.439c0,14.018,5.348,28.036,16.043,38.731 c10.696,10.696,24.713,16.044,38.731,16.044s28.035-5.348,38.731-16.044c10.695-10.695,16.044-24.714,16.044-38.731 c0-14.017-5.349-28.035-16.044-38.73C89.475,12.013,75.457,6.665,61.439,6.665L61.439,6.665z"></path></g></svg>
          </div>
        </div>
        <div className="card blank-card"></div>
      </div>
    );
  }
}

export default AddPlayer;
