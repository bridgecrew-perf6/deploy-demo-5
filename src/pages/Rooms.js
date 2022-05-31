import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import DoubleDelux from './DoubleDelux'
import FamilyDelux from './FamilyDelux'
function Rooms() {
  return (
    <div>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
      <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </Hero>
    <DoubleDelux/>
    <FamilyDelux/>
    </div>
  )
}

export default Rooms