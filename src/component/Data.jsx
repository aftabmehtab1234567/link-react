import React from 'react'
import data from './data.css';
import cable from '../image/cable.png';
import cable2 from '../image/cable2.png';
import cable3 from '../image/cable3.png';

const Data = () => {
  return (
    <div className="container ">
    <div className="row gx-5">
      <div className="col mt-5 focus">
       <div className=" fs-1 text-white fw-bold mt-5">DIFM focuses on its services<br/> on major keywords
       <p className="fs-6 mt-5 fw-light">Data, Investments, Finance, and Marketing. Contact us to enquire about how our think tank can help your
        business grow, in a shorter period being a less expensive solution provider to your business growth – DIFM.LLC. Finance and IT 
        Solutions provider.</p>
        <button type="button" className="btn btn-grad
        mt-5 fs-2">Get Started</button>
       </div>
      </div>
      <div className="col mt-5">
        <div className="cabile">
        <div className=" d-flex"><div className="cable "><img src={cable}/></div><span className="fs-4 text-white fw-bold">Data<p className="fs-6 fw-light">We help manage, analyze, and visualize your data to gain insights and make
         informed decisions.</p></span>
        </div>
        </div>
        <div className="cabile">
        <div className=" d-flex"><div class="cable "><img src={cable2}/></div><span class="fs-4 text-white fw-bold">Investments<p class="fs-6 fw-light">Maximize returns and minimize risks with our investment strategies and portfolio management.</p></span>
        </div>
        </div>
        <div class="cabile">
        <div class=" d-flex"><div class="cable "><img src={cable3}/></div><span class="fs-4 text-white fw-bold">Finance<p class="fs-6 fw-light">Our financial experts assist with planning, budgeting, forecasting, tax compliance, and M&A advice.</p></span>
        </div>
        </div>
        <div class="cabile">
        <div class=" d-flex"><div class="cable "><img src={cable3}/></div><span class="fs-4 text-white fw-bold">Marketing<p class="fs-6 fw-light">Drive results with our marketing services, including strategy, content creation, and social media management.</p></span>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Data