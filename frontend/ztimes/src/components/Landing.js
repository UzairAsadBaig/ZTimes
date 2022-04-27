import React from 'react'
import './../css/Landing.css'



const Landing=() => {
  return (


    <div className="row">

      <div className="col-md-6">
        <div className="left_sec">
          <h1 className='landing_heading'>LIVE TV</h1>
          <h1 className='landing_heading2'>FOR <span>EVERYONE</span></h1>
          <p className='landing_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut illum obcaecati accusamus eveniet quod minima, magni soluta porro laboriosam.</p>
          <button className='watch_btn btn'>WATCH NOW</button>
        </div>

      </div>


      <div className="col-md-6 right_sec">

        <div className="corporate_img text-center">
          <img src={require( './../abc-01.png' )} className="img-fluid" alt="nothing" />
        </div>


      </div>

    </div>


  )
}

export default Landing