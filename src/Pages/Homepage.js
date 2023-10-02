import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import ContentData from '../Data/ContentData'
import "../Style/hero.css"

const Homepage = () => {
  return (
    <div>
      <NavBar/>
      {ContentData.map(data =>{ return <Hero data={data}/>})}
    </div>
  )
}

export default Homepage
