import React, { useEffect } from 'react'
import './../css/Navbar.css'
import $ from "jquery";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Animated } from "react-animated-css";
import Player from './Music';
import Speech from 'react-speech';
import music from './../TYCLUF5-countdown.mp3';
import { useRef } from 'react';


const Navbar=() => {
  const location=useLocation();
  const audio = new Audio(music);

  const start = ()=>{
    console.log('audio starting!------------------',audio)
    audio.play();
  }

  const playRef= useRef(null)
  const changeNavbar=() => {
    $( document ).ready( function () {
      $( window ).scroll( function () {
        var scroll=$( window ).scrollTop();
        if ( scroll>10 ) {
          $( ".navbar" ).addClass( "shadow" );
        } else {
          $( ".navbar" ).removeClass( "shadow" );
        }
      } );
    } );
  };

  useEffect( () => {
    changeNavbar();
//     setTimeout(() => {
// start()
//     }, 7000);
  }, [] );



  return (


    <nav className="navbar navbar-expand-lg navbar-light navbar__bg fixed-top">

      <div className="container">
        <a className="navbar-brand text-black" href="/"><img style={{width:'6rem',height:'3rem'}} src={require( './../img/logo-01.png' )} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link nav_links fw-bold ${location.pathname.endsWith( "/" )? "nav_active":''}`} to="/">HOME</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link nav_links fw-bold ${location.pathname.endsWith( "live" )? "nav_active":''} `} to='/live'>LIVE TV</Link>
            </li>

            <li className="nav-item">
                <Link className={`nav-link nav_links fw-bold ${location.pathname.endsWith( "draw" )? "nav_active":''}`} to="/draw">DRAW</Link>
            </li> 
            {/* <li className='nav-item'>
              <button ref={playRef} onClick={start}>play</button>
            </li> */}
          </ul>
        </div>
        </div>

    </nav>
    

  )
}

export default Navbar