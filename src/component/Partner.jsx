import React from 'react'
import partner1 from '../image/partner1.png';
import partner2 from '../image/partner2.png';
import partner3 from '../image/partner3.png';
import partner4 from '../image/partner4.png';
import partner5 from '../image/partner5.png';

const Partner = () => {
  return (
    <div className="container text-center mt-5">
  <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col cabile col-sm-12 col-xs-12">
      <div className="p-3"><img src={partner1}/></div>
    </div>
    <div className="col cabile  col-sm-12 col-xs-12">
      <div className="p-3"><img src={partner2}/></div>
    </div>
    <div className="col cabile  col-sm-12 col-xs-12">
      <div className="p-3"><img src={partner3}/></div>
    </div>
    <div className="col cabile  col-sm-12 col-xs-12">
      <div className="p-3"><img src={partner4}/></div>
    </div>
    <div className="col cabile  col-sm-12 col-xs-12">
      <div className="p-3"><img src={partner5}/></div>
    </div>
    </div>
    </div>
  )
}

export default Partner