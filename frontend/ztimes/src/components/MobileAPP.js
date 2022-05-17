import React, { useEffect } from 'react'
import './../css/Mobile.css'
import { Link } from 'react-router-dom';

const MobileAPP=() => {



  return (

    <>
    <div className='mobile__app'>

      <div className="mt-5" id="mobile_app_sec">

      <div className="row">

        <div className="col-md-7">



            <img src={require( './../mobile.png' )} data-aos="fade-right" className="img-fluid" alt="" />

        </div>


        <div className="col-md-5 pt-4 text-center">

            <div className="mobile_app_desc" data-aos="fade-left"  >
            <h1 className='mobile_app_heading'>MOBILE APP</h1>
            <h3 className='mobile_app_heading2'>LOREM IPSUM</h3>
            <p className='mobile_app_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium debitis nesciunt impedit aliquam libero molestiae vel porro? Eveniet ipsa ut ipsum pariatur aperiam suscipit esse eligendi culpa debitis laudantium tempora ducimus ratione, natus, quaerat commodi quod, dolores dolore cum molestias accusantium mollitia. Facere earum placeat doloremque tempore, sed veniam.di culpa debitis laudantium tempora ducimus ratione, natus, quaerat commodi quod, dolores dolore cum molestias accusantium mollitia. Facere earum placeat doloremque tempore, sed veniam.di culpa debitis laudantium tempora ducimus ratione, natus, quaerat commodi quod, dolores dolore.</p>

          </div>
        </div>


      </div>

    </div>

      <div className='row my-3'>

        <div className="col-md-6 text-center text-sm-end pe-sm-5 live__tv__div">
          <Link to="/live">
            <div className='icon__1'>
              <img src={require('./../tv.png')} alt="" />
            </div>
          <button className='btn live_tv_btn' data-aos="fade">LIVE TV</button>
          </Link>
        </div>

        <div className="col-md-6 text-center ps-sm-5 results__div">
          <Link to="/draw">
            <div className='icon__2'>
              <img style={{width:"7.5rem"}} src={require('./../lowin.png')} alt="" />
            </div>
          <button className='btn draw_btn' data-aos="fade" >Results</button>
          </Link>
        </div>

      </div>
      </div>


    </>

  )
}

export default MobileAPP