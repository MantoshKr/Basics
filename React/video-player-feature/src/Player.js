import React from 'react'
import video from './assets/brave.mkv'

function Player() {
  return (
    <div>
    <video src={video} autoPlay loop controls />
    </div>
  )
}

export default Player

