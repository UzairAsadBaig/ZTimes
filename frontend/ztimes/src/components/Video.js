import React, { useState } from "react";
import './../css/Video.css'
import ReactPlayer from "react-player";

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
      <div className="my-5">


        <video id="my-video" className="video-js vjs-theme-city vjx-matrix" width="60%" height="267px" controls preload="none" poster="https://wallpaperaccess.com/full/329583.jpg" data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
          <source src={require( './../video.mp4' )} type="video/mp4" />

          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
          </p>


        </video>

      </div>

      {/* <div className="mt-5">

        <video id="my_video_1" className="video-js vjs-default-skin  vjx-matrix" width="60%" height="267px" controls preload="none" poster="https://wallpaperaccess.com/full/329583.jpg" data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>


      </div> */}


    </>
  )

}