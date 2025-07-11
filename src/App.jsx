import React,{ useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'



const App = () => {
  const[playState,setPlayState]=useState(false);
  
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Program' title='What we offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallary' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subtitle='Contact us' title='GET IN TOUCH'/>
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  )
}

export default App
