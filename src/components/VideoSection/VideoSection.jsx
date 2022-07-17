import React from 'react'
import './VideoSection.scss'
import '../../styles/App.scss'
import video from '../VideoSection/bgVideo.mp4'

function VideoSection() {
  return (
	<div className='vs-container'>
	<video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
		<h1>Погрузись в атмосферу <br/> MEGA</h1>
	</div>
	
  )
}

export default VideoSection;