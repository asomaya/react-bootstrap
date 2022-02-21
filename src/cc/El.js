import React from 'react'

function El() {
    return (
        <div class="container-lg margin py-3 ">
          <h1>plan for the next trip</h1>
              <div class="row align-items-start">
                  <div class="col-6 col-sm-3">
                  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="city" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn bg-dark btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
                  </div>
                

                  <div class="col-6 col-sm-3">
                  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="airport" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn bg-dark  btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
                  </div>


                  <div class="col-6 col-sm-3">
                  <div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label class="input-group-text bg-dark" for="inputGroupSelect02">No</label>
</div>
                  </div>



                </div>


                <div class="row">
    <div class="col-sm-5 col-md-6">

    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="go date" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn bg-dark btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>



    </div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="back date" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn bg-dark btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div></div>
  </div>


  <div class="row">
    <div class="col-md-6 offset-md-3">

    <div class="input-group">
  
  <span class="input-group-text bg-dark">$</span>
  <span class="input-group-text bg-dark">0.00</span>
</div>

    </div>
  </div>






  </div>




          

    )
}

export default El
