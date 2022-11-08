import React from "react";
import bgVideo from '../imgVid/Rockyslope1920.mp4'
import '../styles/bgVideo.css'


export default function Navbar() {

  return (
  <video autoPlay loop muted id="video">
  <source src={bgVideo} type='video/mp4'/>
  </video>
  )
}