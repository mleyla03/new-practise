import React from 'react'
import Style from "./index.module.css"
import Hero from '../Hero'
import Card from '../Card'
import Servers from '../Servers'
const Home = () => {
  return (
    <>
     <div className={Style.home} >
     <div className={Style.news}>
      <p>OPENNING ON 21ST FEBRUARY, 2018</p>
      <h1>Exhibition on Modern Era</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</p>
      <button>Get Started</button>
     </div>
   </div>
   <Hero/>
   <Card/>
   <Servers/>
    </>
  )
}

export default Home