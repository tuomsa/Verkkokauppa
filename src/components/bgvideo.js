import React from "react";
import bgVideo from './rockyslope1920.mp4'
import './bgVideo.css'


export default function Navbar() {

  return (
  <video autoPlay loop muted id="video">
  <source src={bgVideo} type='video/mp4'/>
  </video>
  )
}