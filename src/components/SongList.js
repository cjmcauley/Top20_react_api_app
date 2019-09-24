import React from 'react';
import SongDetail from './SongDetail.js'
import './SongList.css';


const SongList = (props) => {
  const songs = props.songs.map((song, index) => {
    return (
      <li key={index} >
      <SongDetail key={index} song={song}>
      </SongDetail>
      </li>
    )
  })
  return (
    <>
    <ol>
    {songs}
    </ol>
    </>
  )
}

export default SongList;
