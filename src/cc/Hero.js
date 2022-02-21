import React from 'react'
import Nav from './Nav'
import Typed from 'react-typed'

function Hero() {
    return (
      <div className='cc'> 
           <Nav/>
           <div className='cont'>
             <h1>descover the world</h1>
             <h2>with us</h2>
<Typed
className='tt'
strings={["long distance", "Best price","Best options"]}
typeSpeed={40}
backSpeed={60}
loop
/>


</div>
<button type="button" className="btn  try">coontact us</button>
      </div>
    )
}

export default Hero
