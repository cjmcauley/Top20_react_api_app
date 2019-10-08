import React from 'react';
import './SongDetail.css';

const SongDetail = ({song}) => {
  return (
    <div className="container">
    <img className="img" src={song['im:image'][2].label} alt="" />
      <div className="txt">
      <h3 className="title">
      {song['im:name'].label}
      </h3>
        <h3 className="artist">
        {song['im:artist'].label}
        </h3>
        <h3 className="label">
        {song.rights.label}
        </h3>
        <audio controls>
        <source src={song.link[1].attributes.href} />
        </audio>
      </div>
    </div>
  )
}

export default SongDetail;
