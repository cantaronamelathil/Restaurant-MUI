import React from 'react'
import Welcome from '../../Pages/Welcome/Welcome';
import Partner from '../../Pages/Partner/Partner';
import Booking from '../../Pages/Booking/Booking';
import Dishes from '../../Pages/Dishes/Dishes';
import Ambiance from '../../Pages/Ambiance/Ambiance';
import Delivery from '../../Pages/Delivery/Delivery';
import About from '../../Pages/About/About';

function Home() {
  return (
    <>

   <Welcome/>
   <Partner/>
   <Booking/>
   <Dishes/>
   <Ambiance/>
   <Delivery/>
   <About/>
    </>
  )
}

export default Home
