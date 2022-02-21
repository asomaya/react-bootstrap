import React from 'react'
import p1 from './img/r.jpg'
import p2 from './img/k.jpg'
import p3 from './img/z.jpg'
import p4 from './img/h.jpg'
import p5 from './img/z.jpg'
import p6 from './img/n.jpg'

function Pro1() {
    return (
        <div class="container-lg  my-4 left">
        <h1 className='head'>our recomended trips</h1>
          <div class="row align-items-center my-4 ">
          <div class="col p-4">
          <div class="card">
          <img src={p1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn tripe" >descover</button>
  </div>
</div>
              </div>

              <div class="col p-4">
          <div class="card">
          <img  src={p2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn tripe" >descover</button>
  </div>
</div>
              </div>


              <div class="col p-4">
          <div class="card">
          <img  src={p3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn tripe" >descover</button>
  </div>
</div>
              </div>


              </div>
              </div>

    )
}


function Pro2() {
    return (
        <div class="container-lg  my-4 left">
        <h1 className='head'>our favorate trips</h1>
          <div class="row align-items-center my-4">
          <div class="col p-4">
          <div class="card">
          <img src={p4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn tripe" >descover</button>
  </div>
</div>
              </div>

              <div class="col p-4">
          <div class="card">
          <img  src={p5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn tripe" >descover</button>
  </div>
</div>
              </div>


              <div class="col p-4">
          <div class="card">
          <img  src={p6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn tripe" >descover</button>
  </div>
</div>
              </div>


              </div>
              </div>

    )
}


export {
  Pro1, 
  Pro2,
}
 
