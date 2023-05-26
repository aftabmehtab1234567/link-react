import React from 'react'
import coma from '../image/coma.png';
import testimonial from '../image/testimonial.png';
const Aboutus = () => {
  return (
    <>
    <div className="container overflow-hidden mt-5 ">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 text-white fs-1 fw-bold ">What people are saying<br/> about us</div>
    </div>
    <div className="col">
      <div className="p-3 fs-6">DO IT FOR ME LLC is an innovative business operations team that leverages global expertise and insight to drive excellence for our clients</div>
    </div>
  </div>
</div>
<div className="container overflow-hidden text-center mt-5 ">
  <div className="row gx-5">
    <div className="col-md-4 col-sm-12 col-xs-12 cabile">
     <div className="p-3 mt-5 "><img src={coma}/>
     <div className="mt-5">DO IT FOR ME LLC provided a cost-effective IT solution that transformed our lending business</div>
     <div className="p-3 mt-5 text-white fs-6 "><img src={testimonial} alt="" />Khasish Sachdeva</div>
     </div>
    </div>
    <div className="col-md-4 col-sm-12 col-xs-12 cabile">
      <div className="p-3"><div className="p-3"><img src={coma}/>
     <div className="mt-5">DO IT FOR ME LLC provided a cost-effective IT solution that transformed our lending business</div>
     <div className="p-3 mt-5 text-white fs-6"><img src={testimonial} alt="" />Khasish Sachdeva</div>
     </div>
     </div>
    </div>
    <div className="col-md-4 col-sm-12 col-xs-12 cabile">
      <div className="p-3">
      <div className="p-3"><img src={coma}/>
     <div className="mt-5">DO IT FOR ME LLC provided a cost-effective IT solution that transformed our lending business</div>
     <div className="p-3 mt-5 text-white fs-6  "><img src={testimonial} alt="" />Khasish Sachdeva</div>
     </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Aboutus