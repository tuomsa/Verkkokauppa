import React from "react";
import bgVideo from './beach2560.mp4'
import './bgVideo.css'


export default function Navbar() {

  return (
  <video autoPlay loop muted id="video">
  <source src={bgVideo} type='video/mp4'/>
  </video>
  )
}