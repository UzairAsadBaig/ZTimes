import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MobileAPP from "./components/MobileAPP";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CardComp from './components/cardComponent/cardComp';
import CounterComp from './components/counterComp/counterComp';
import 'antd/dist/antd.css';
import Video from "./components/Video";
import Footer from './components/Footer'
import Login from "./components/Login";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect , useRef } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import CounterResult from "./components/CounterResult";








function convertTZ( date, tzString ) {
  return new Date( ( typeof date==="string"? new Date( date ):date ).toLocaleString( "en-US", { timeZone: tzString } ) );
}
function App() {
  const [ currTime, setCurrTime ]=useState( convertTZ(new Date(),'Asia/Kolkata').toLocaleTimeString( [], { timeStyle: 'short' }) )

  useEffect( () => {
    Aos.init( { duration: 2000, offset: 50, once: true } );

    setInterval( () => {
      const currentInd=convertTZ(new Date(),'Asia/Kolkata').toLocaleTimeString( [], { timeStyle: 'short' });
      setCurrTime( currentInd) ;

    }, 2000 );
    

  }, [] )

  const slot1=[ "6:10 PM", "6:11 PM", "6:12 PM" ];

  return (
    <>
      {/* <Navbar /> */}
      {/* <Landing /> */}
    <Routes>


<Route exact path="/" element={
          <>
            <Navbar />
            <Landing key="1" />
      <MobileAPP />
            {/* <CardComp /> */}
            <Footer/>
      </>
      }/>

<Route exact path="/draw" element={
      <>
            <Navbar />
            <Landing key="2" />
<CounterComp />
<Footer/>

      </>
      }/>


        {console.log( currTime==='3:55 PM' )}
        {console.log( currTime )}


<Route exact path="/live" element={
  <>
            <Navbar />
            <Landing key="3" />
            {/* <CounterResult/> */}
            {!slot1.includes( currTime )? <>
           
              <CounterResult /></>:<Video />}
  <Footer/>
  </>
} />

<Route exact path="/dashboard" element={
<Dashboard/>
} />
  
  <Route exact path="/admin/login" element={<Login/>}/>

        <Route exact path="/admin/dashboard" element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
        } />

    </Routes>

    </>
  )
}

export default App;
