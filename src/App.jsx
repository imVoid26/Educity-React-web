import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
          <Title subtitle='Our Program' title='What We Offer'></Title>
          <Program></Program>
          <About setPlayState={setPlayState}></About>
          <Title subtitle='Gallery' title='Campus Photos'></Title>
          <Campus></Campus>
          <Title subtitle='Testimonials' title='What Student Says'></Title>
          <Testimonials></Testimonials>
          <Title subtitle='Contact Us' title='Get in Touch'></Title>
          <Contact></Contact>
          <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} ></VideoPlayer>
    </>
  )
}

export default App
