import React from 'react'
import './../css/Landing.css'
import { Animated } from "react-animated-css";


const Landing=() => {


  return (


    <div className="row">


      <div className="col-md-6">
        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
        <div className="left_sec">
          <h1 className='landing_heading'>LIVE TV</h1>
          <h1 className='landing_heading2'>FOR <span>EVERYONE</span></h1>
          <p className='landing_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut illum obcaecati accusamus eveniet quod minima, magni soluta porro laboriosam.</p>
          <button className='watch_btn btn mt-5'>WATCH NOW</button>
        </div>

        </Animated>

      </div>



      <div className="col-md-6 right_sec">

        <div className="corporate_img text-center">
          <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
            <img src={require( './../abc-01.png' )} className="img-fluid" alt="nothing" />
          </Animated>   
        </div>


      </div>

    </div>


  )
}

export default Landing