import React from 'react'
import './../css/Mobile.css'


const MobileAPP=() => {
  return (

    <><div className="mt-5" id="mobile_app_sec">

      <div className="row">

        <div className="col-md-7">



          <img src={require( './../mobile.png' )} className="img-fluid" alt="" />

        </div>


        <div className="col-md-5 pt-4 text-center">

          <div className="mobile_app_desc">
            <h1 className='mobile_app_heading'>MOBILE APP</h1>
            <h3 className='mobile_app_heading2'>LOREM IPSUM</h3>
            <p className='mobile_app_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium debitis nesciunt impedit aliquam libero molestiae vel porro? Eveniet ipsa ut ipsum pariatur aperiam suscipit esse eligendi culpa debitis laudantium tempora ducimus ratione, natus, quaerat commodi quod, dolores dolore cum molestias accusantium mollitia. Facere earum placeat doloremque tempore, sed veniam.di culpa debitis laudantium tempora ducimus ratione, natus, quaerat commodi quod, dolores dolore cum molestias accusantium mollitia. Facere earum placeat doloremque tempore, sed veniam.di culpa debitis laudantium tempora ducimus ratione, natus, quaerat commodi quod, dolores dolore.</p>

          </div>
        </div>


      </div>

    </div>

      <div className='row my-3'>

        <div className="col-md-6 text-end pe-5">
          <button className='btn live_tv_btn'>LIVE TV</button>
        </div>

        <div className="col-md-6 ps-5">
          <button className='btn draw_btn'>DRAW</button>
        </div>

      </div>

    </>

  )
}

export default MobileAPP