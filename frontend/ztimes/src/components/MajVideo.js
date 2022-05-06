import React, { useState, useEffect } from 'react'

const MajVideo=() => {

  const [ vid, setVid ]=useState( null )


  useEffect( () => {

    setVid( 1 )

  }, [] )

  return (


    <video id="my-video" className="video-js vjs-theme-city vjx-matrix" controls preload="none" poster="https://wallpaperaccess.com/full/329583.jpg" data-setup='{ "aspectRatio":"16:9", "playbackRates": [1, 1.5, 2] }'>
      <source src={require( './../video.mp4' )} type="video/mp4" />
      <p className="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
      </p>


    </video>
  )
}

export default MajVideo