import React from "react";
import partnerimg from '../image/partnerimg.png';

const Companies = () => {
  return (
    <>
   <div className="container px-4  mt-5">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 fs-1 text-white fw-bold">The Companies We<br/> Build
     <p className="fs-6 fw-light">We build more than 30 companies worldwide including WorldModelHunt, BragSocial,<br/> Laymenlitigation,  and more.  </p>
     <button type="button" className="btn btn-grad mt-5 fs-2">View more</button>
     </div>
    </div>
    <div className="col">
      <div className="p-3"><img src={partnerimg} width="330px"/></div>
    </div>
  </div>
</div>
    </>
  )
}

export default Companies