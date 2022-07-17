import React from 'react'
import './HeroSection.scss'
import '../../styles/App.scss'
import video from '../HeroSection/bgVideo.mp4'
import { motion } from 'framer-motion/dist/framer-motion'

function VideoSection() {
	
  return (
	<section className='hs-container'>
	<video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

	  <h1 class="glitch">
    	<span aria-hidden="true">Погрузись в атмосферу MEGA</span>
    	Погрузись в атмосферу MEGA
    	<span aria-hidden="true">Погрузись в атмосферу MEGA</span>
  	</h1>
		
	</section>
	
  )
}

export default VideoSection;