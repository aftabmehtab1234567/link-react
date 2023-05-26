import React from "react";
import services from './services.css';
import card3 from '../image/card3.png';
import card2 from '../image/card2.png';
import card1 from '../image/card1.png';

const Services = () => {
  return (
    <>
    <div className="text-center mt-5 fs-1 fw-bold text-white">Services</div>
    <div className="card-group container mt-5">
  <div className="card cabile ">
    <img src={card3} className="card-img-top" alt="..."/>
    <div className="card-body bg">
      <h5 className="card-title text-white text-center">Finance Consulting</h5>
      <p className="card-text text-white">DO IT FOR ME LLC offers Finance Consulting services to Merchants, Lenders/Funders/Investors, and other businesses seeking expert guidance on financial matters.</p>
     <div className="text-center " ><button type="button" className="btn btn-grad mt-5 fs-2">Read more</button></div>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card cabile col-sm-12 col-md-4 col-xs-12 col-lg-4">
    <img src={card2} className="card-img-top" alt="..."/>
    <div className="card-body bg">
      <h5 className="card-title text-white text-center">Business Consulting</h5>
      <p className="card-text text-white">DO IT FOR ME LLC provides Business Consulting to Merchants, Lenders/Funders/Investors, and other businesses.</p>
      <div className="text-center mt-5" ><button type="button" className="btn btn-grad mt-5 fs-2">Read more</button></div>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card cabile col-sm-12 col-md-4 col-xs-12 col-lg-4">
    <img src={card1} className="card-img-top" alt="..."/>
    <div className="card-body bg">
      <h5 className="card-title  text-white text-center">Full IT Services</h5>
      <p className="card-text text-white">We are a full-service IT company offering a range of services, including software development, web design, and IT support.</p>
      <div className="text-center mt-5" ><button type="button" className="btn btn-grad mt-5 fs-2">Read more</button></div>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</>
  )
}

export default Services