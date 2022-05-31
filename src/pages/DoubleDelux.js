import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import DoubledeluxInfo from './DoubledeluxInfo'
import Doubldlx from '../images/room-8.jpeg'
function DoubleDelux() {
  return (
    <div className="single-room">
        <img className="single-room-images" src={Doubldlx}/>
        <DoubledeluxInfo/>
      </div>
  )
}

export default DoubleDelux