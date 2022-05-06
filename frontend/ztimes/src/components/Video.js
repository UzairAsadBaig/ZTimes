import React, { useState } from "react";
import './../css/Video.css'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import Clock from 'react-live-clock';


export default function App() {
  // const [ videoFilePath, setVideoFilePath ]=useState( null );

  // const handleVideoUpload=( event ) => {
  //   const [ file ]=event.target.files;
  //   console.log( file );
  //   setVideoFilePath( URL.createObjectURL( file ) );
  //   console.log( URL.createObjectURL( file ) )
  // };

  // return (
  //   <>
  //     <input type="file" onChange={handleVideoUpload} />
  //     <ReactPlayer url={videoFilePath} width="100%" height="100%" controls />
  //   </>
  // );


  return (
    <>
      <div data-aos="zoom-in" >


        <img src={require( '../img/logo-01.png' )} className='vid_live_logo' alt="" />
        <Clock
          // format={'HH:mm:ss'}
          format={'hh:mm:ss a'}
          ticking={true}
          timezone={'Asia/Calcutta'} className='live_clock' />

      <div className="my-5">


          <video id="my-video" className="video-js vjs-theme-city vjx-matrix" width="60%" height="267px" controls preload="none" poster="https://wallpaperaccess.com/full/329583.jpg" data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
            <source src={require( './../video.mp4' )} type="video/mp4" />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
          </p>


        </video>


          <div>
            <div style={{ height: 100 }} className="marquee_div">
              <Marquee velocity={25}>
                {times( 1, Number ).map( id => (


                  <span className="marquee_line">The result will be drawn at 12:30 PM, 2:30 PM, 5:30 PM, 8:30 PM, 11:30 PM according to Indian Standard Time </span>


                ) )}
              </Marquee>
            </div>

            <div style={{ height: 0.7*60 }} />


          </div>



        </div>

      </div>

      {/* <div className="mt-5">

        <video id="my_video_1" className="video-js vjs-default-skin  vjx-matrix" width="100%" height="267px" controls poster="https://wallpaperaccess.com/full/329583.jpg" data-setup='{ "aspectRatio":"840:267", "playbackRates": [1, 1.5, 2] }'>
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>


      </div> */}


    </>
  )

}