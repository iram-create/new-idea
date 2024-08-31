import React from 'react';
import Navbar from './components/Navbarrr'
import Landing from './components/Landing';
import Marqee from './components/Marqee';
import About11 from './components/About11';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
function App() {
 

const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <div className='w-full h-screen bg-white'>
      <Navbar />
      <Landing/>
      <Marqee/>
      <About11/>
      <Eyes/>
      <Featured/>
     <Cards/>
     <Footer/>
    </div>
    
  )
}

export default App