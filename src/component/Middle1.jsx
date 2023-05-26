import React from 'react'
import Fill from '../image/Fill.png';
import image1 from '../image/image1.svg';
import Arrow from '../image/Arrow.png';
import "./Middle1.css"; 
const Middle1 = () => {
  return (
    <div class="container px-4 middle mt ">
  <div class="row gx-5">
    <div class="col ">
     <div class="p-3"><button type="button" class="btn btn-#272727 text-white"><img src={Fill} alt="" />Do it for me.LLC</button></div>
     <div class="text-white fs-1 fw-bold ">The Next<span class="border-info text-info fw-light fs-3 get">GET Started<img src={Arrow}/></span></div>
     <div class=" fs-1 fw-bold" id="gen">Generation</div>
     <div class="text-white fs-1 fw-bold ">Data,Investment,Finance,and<br /> Service Provider</div>
     <p class="mt-5 ">The company specializes in solution providing to problems in the Lending industry, whether<br/> it be backend operations resource management or providing a working IT solution to lenders<br/> in the US.</p>
    </div>
    <div class="col ">
    <div class="p-3"><img src={image1} width="400px"/></div>
    </div>
  </div>
</div>

  )
}

export default Middle1