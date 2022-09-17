import React from 'react'
import player from '../Assets/Images/videoplayer.png'

const SeeVideos = () => {
  return (
    <div>
        <button className='see-video'><img src={player} alt='' className='image' /> See Video</button>
    </div>
  )
}

export default SeeVideos