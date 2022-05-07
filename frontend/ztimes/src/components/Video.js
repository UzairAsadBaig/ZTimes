import React, { useState } from "react";
import './../css/Video.css'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import Clock from 'react-live-clock';

import ReactPlayer from "react-player";
import MajVideo from "./MajVideo";

export default function App() {

  const playerRef=React.useRef( null );

  return (
    <>
      <div data-aos="zoom-in video" >


        <img src={require( '../img/logo-01.png' )} className='vid_live_logo' alt="" />
        <Clock
          // format={'HH:mm:ss'}
          format={'hh:mm:ss a'}
          ticking={true}
          timezone={'Asia/Calcutta'} className='live_clock' />

        <div className="VIDEO_COMP_PARENT">

          <MajVideo />



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