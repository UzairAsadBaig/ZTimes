import React, { useState, useEffect } from 'react'
import './counterComp/counterComp.css';
import { useGetWinnerQuery } from '../redux/nodeAPI';
import { useRef } from 'react';
import Resultbox from './Resultbox';







const CounterResult=() => {


  const [ nums1, setNums1 ]=useState( { num1: null, num2: null, num3: null, num4: null } );
  const [ nums2, setNums2 ]=useState( { num1: null, num2: null, num3: null, num4: null } );
  const [ nums3, setNums3 ]=useState( { num1: null, num2: null, num3: null, num4: null } );
  const [ nums4, setNums4 ]=useState( { num1: null, num2: null, num3: null, num4: null } );
  const [ nums5, setNums5 ]=useState( { num1: null, num2: null, num3: null, num4: null } );

  const announceWinner=( setNums, Nums ) => {

    new Promise( function ( resolve, reject ) {

      //Rolling the counter's first number
      let si=setInterval( () => {
        setRandom( {
          num1: Math.floor( Math.random()*10 ),
          num2: Math.floor( Math.random()*10 ),
          num3: Math.floor( Math.random()*10 ),
          num4: Math.floor( Math.random()*10 ),
        } );
      }, 1 );

      //Setting the result in counter
      setTimeout( () => {
        clearInterval( si );
        let mi=setInterval( () => {
          setRandom( {
            num1: Nums[0],
            num2: "-",
            num3: "-",
            num4: "-",
          } );
        }, 1 );
        return resolve( mi )
      }, 8000 );

    } ).then( function ( mi ) {
      //Setting the result in result box for first number
      setNums( ( n ) => { return { ...n, "num1": Nums[ 0 ] } } );

      return new Promise( ( resolve, reject ) => { // (*)
        setTimeout( () =>{
          clearInterval( mi );
          return resolve( 1 )}, 2000 );
      } );

    } ).then( function ( result ) {
      //Rolling the counter's Second number
      let si=setInterval( () => {
        setRandom( {
          num1:  Math.floor( Math.random()*10 ),
          num2: Math.floor( Math.random()*10 ),
          num3:  Math.floor( Math.random()*10 ),
          num4:  Math.floor( Math.random()*10 ),
        } );
      }, 1 );


      return new Promise( ( resolve, reject ) => { // (*)
        //Setting the result in counter
        setTimeout( () => {
          clearInterval( si );
          let mi=setInterval( () => {
            setRandom( {
              num1: "-",
              num2: Nums[1],
              num3: "-",
              num4: "-",
            } );
          }, 1 );
          return resolve( mi )
        }, 5000 );
      } );

    } ).then( function ( mi ) { // (**)


      setNums( ( n ) => { return { ...n, "num2": Nums[ 1 ] } } );

      return new Promise( ( resolve, reject ) => { // (*)
        setTimeout( () =>{
          clearInterval( mi );
          return resolve( 1 )}, 2000 );
      } );


    } ).then( function ( result ) {

      //Rolling the counter's third number
      let si=setInterval( () => {
        setRandom( {
          num1:  Math.floor( Math.random()*10 ),
          num2:  Math.floor( Math.random()*10 ),
          num3: Math.floor( Math.random()*10 ),
          num4:  Math.floor( Math.random()*10 ),
        } );
      }, 1 );


      return new Promise( ( resolve, reject ) => { // (*)
        //Setting the result in counter
        setTimeout( () => {
          clearInterval( si );
          let mi=setInterval( () => {
            setRandom( {
              num1: "-",
              num2: "-",
              num3: Nums[2],
              num4: "-",
            } );
          }, 1 );
          return resolve( mi )
        }, 5000 );
      } );

    } )
      .then( function ( mi ) {

        setNums( ( n ) => { return { ...n, "num3": Nums[ 2 ] } } );

        return new Promise( ( resolve, reject ) => { // (*)
          setTimeout( () =>{
            clearInterval( mi );
            return resolve( 1 )}, 2000 );
        } );

      } ).then( function ( result ) {

        //Rolling the counter's fourth number
        let si=setInterval( () => {
          setRandom( {
            num1:  Math.floor( Math.random()*10 ),
            num2:  Math.floor( Math.random()*10 ),
            num3: Math.floor( Math.random()*10 ),
            num4: Math.floor( Math.random()*10 ),
          } );
        }, 1 );


        return new Promise( ( resolve, reject ) => { // (*)
          //Setting the result in counter
          setTimeout( () => {
            clearInterval( si );
            let mi=setInterval( () => {
              setRandom( {
                num1: "-",
                num2: "-",
                num3: "-",
                num4: Nums[3],
              } );
            }, 1 );
            return resolve( mi )
          }, 5000 );
        } );

      } )
      .then( function ( mi ) {
        setNums( ( n ) => { return { ...n, "num4": Nums[ 3 ] } } );
        setTimeout( () => {
          clearInterval( mi );
          setRandom( {
            num1: "-",
            num2: "-",
            num3: "-",
            num4: "-",
          } );
        }, 2000 );

      } );

  };



  const runSimulation=( data ) => {

    // for ( let i=0; i<data.length; i++ ) {

    let Nums1=Object.values( data[ 0 ] );
    let Nums2=Object.values( data[ 1 ] );
    let Nums3=Object.values( data[ 2 ] );
    let Nums4=Object.values( data[ 3 ] );
    let Nums5=Object.values( data[ 4 ] );


    new Promise( function ( resolve, reject ) {
      return resolve( 1 )
    } ).then( function ( result ) {
      announceWinner( setNums1, Nums1 );
      return new Promise( ( resolve, reject ) => { // (*)
        setTimeout( () => resolve( 1 ), 34000 );
      } );

    } ).then( function ( result ) {
      announceWinner( setNums2, Nums2 );
      return new Promise( ( resolve, reject ) => { // (*)
        setTimeout( () => resolve( 1 ), 34000 );
      } );

    } ).then( function ( result ) {
      announceWinner( setNums3, Nums3 );
      return new Promise( ( resolve, reject ) => { // (*)
        setTimeout( () => resolve( 1 ), 34000 );
      } );

    } ).then( function ( result ) {
      announceWinner( setNums4, Nums4 );
      return new Promise( ( resolve, reject ) => { // (*)
        setTimeout( () => resolve( 1 ), 34000 );
      } );

    } ).then( function ( result ) {
      announceWinner( setNums5, Nums5 );
      // return new Promise( ( resolve, reject ) => { // (*)
      //   setTimeout( () => resolve( 1 ), 30000 );
      // } );

    } )









  }

  const welcomeRef=useRef( null );
  const counterRef=useRef( null );
  const winnerRef=useRef( null );


  const [ random, setRandom ]=useState( {
    num1: "-",
    num2: "-",
    num3: "-",
    num4: "-",
  } );



  const { data, isLoading, isSuccess, isError, refetch }=useGetWinnerQuery();


  console.log( !isLoading&&data );



















  // }, [] )

  // const data=[
  //   {
  //     "num1": 0,
  //     "num2": 1,
  //     "num3": 5,
  //     "num4": 9,
  //   },
  //   {
  //     "num1": 0,
  //     "num2": 1,
  //     "num3": 5,
  //     "num4": 9,
  //   },
  //   {
  //     "num1": 0,
  //     "num2": 1,
  //     "num3": 5,
  //     "num4": 9,
  //   },
  //   {
  //     "num1": 0,
  //     "num2": 1,
  //     "num3": 5,
  //     "num4": 9,
  //   },
  //   {
  //     "num1": 0,
  //     "num2": 1,
  //     "num3": 5,
  //     "num4": 9,
  //   },
  // ];
  useEffect( () => {
    !isLoading&&isSuccess&&runSimulation( data.data[ 0 ].winners );

    setTimeout( () => {

      welcomeRef.current.style.display='none';
      counterRef.current.style.display='inline-flex';
      winnerRef.current.style.display='inline-flex';

    }, 5000 );


  }, [ isLoading ] )




  return (

    <>

<h1 ref={welcomeRef}  data-aos="zoom-in" className=" text-center welcome_draw">Welcome to live draw</h1>
    
    
      {!isLoading&&<>
        <div  ref={counterRef} style={{display:'none'}}  className="counter row justify-content-center" data-aos="zoom-in">


          <div className="count">{random.num1}</div>
          <div className="count">{random.num2}</div>
          <div className="count">{random.num3}</div>
          <div className="count">{random.num4}</div>




          {/* cw&&cw.map( ( el, i ) => {
        return <>
        <h1 className='text-center' style={{ textDecoration: "underline" }}>Winner {cw?.length>1? i+1:""}</h1>
        <div className="count">{el.winner.num1}</div><div className="count">{el.winner.num2}</div><div className="count">{el.winner.num3}</div><div className="count">{el.winner.num4}</div>
        </>
      } )
    */}




        </div>


        <div ref={winnerRef} style={{display:'none'}}  >

          {/* <h1 className='text-center my-5'>Winners</h1> */}

          <div className="row text-center">

            {

              data.data[ 0 ]?.winners.length===1? <><h1 className='text-center mt-3'>Winner 1</h1><div className="col-12"><Resultbox num1={nums1.num1} num2={nums1.num2} num3={nums1.num3} num4={nums1.num4} /></div></>

                :

                <>
                  <h1 className='text-center mt-5'><u>Winner 1</u></h1>
                  <div className="col-12" key="1"><Resultbox label="Winner 1" num1={nums1.num1} num2={nums1.num2} num3={nums1.num3} num4={nums1.num4} /></div>
                  <h1 className='text-center mt-5'><u>Winner 2</u></h1>
                  <div className="col-3" key="2"><Resultbox label="Winner 2" num1={nums2.num1} num2={nums2.num2} num3={nums2.num3} num4={nums2.num4} /></div>
                  <div className="col-3" key="3"><Resultbox label="Winner 3" num1={nums3.num1} num2={nums3.num2} num3={nums3.num3} num4={nums3.num4} /></div>
                  <div className="col-3" key="4"><Resultbox label="Winner 4" num1={nums4.num1} num2={nums4.num2} num3={nums4.num3} num4={nums4.num4} /></div>
                  <div className="col-3" key="5"><Resultbox label="Winner 5" num1={nums5.num1} num2={nums5.num2} num3={nums5.num3} num4={nums5.num4} /></div>
                </>

            }



          </div>


        </div>
      </>}
    </>
  )
}

export default CounterResult