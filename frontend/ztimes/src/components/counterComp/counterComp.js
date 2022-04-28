import React,{useEffect, useState} from 'react'
import './counterComp.css';
import { DatePicker} from 'antd';
import DrawTable from '../DrawTable';
import { useGetWinnerQuery } from '../../redux/nodeAPI';
import { setAnnouncements, setCounterFlag } from '../../redux/announcementSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetHistoryMutation } from '../../redux/nodeAPI';


const { RangePicker } = DatePicker;




let tableData=null;

function convertTZ( date, tzString ) {
  return new Date( ( typeof date==="string"? new Date( date ):date ).toLocaleString( "en-US", { timeZone: tzString } ) );
}




export default function CounterComp() {


  let winners;
  const minute=2;
  const defaultStartingTime='10:00 AM'


  const [ getHistory ]=useGetHistoryMutation();

  const { data, isLoading, isSuccess }=useGetWinnerQuery();

  const dispatch=useDispatch();
  const [ cw, setCurrentWinners ]=useState( [] )

  const cf=useSelector( ( state ) => state.announcement.counterFlag );
  // const cw=useSelector( ( state ) => state.announcement.currentWinners );


  const onChange=async function ( v ) {
    console.log( v );

    if ( !v ) {
      return;
    }
    const start=v[ 0 ]._d;
    const end=v[ 1 ]._d;

    // console.log( typeof start, start )
    // console.log( typeof end, end )

    const range={ start, end };

    const res=await getHistory( range )
    console.log( res )

    tableData=res.data.data;


  };



  let counterFlag=true;


  if(data && !isLoading && isSuccess){
    // dispatch( setAnnouncements( data.data ) );
    // console.log( "=>", data.data )
    counterFlag=data?.counterFlag;

    dispatch( setCounterFlag( counterFlag ) );

    winners=data.data.map( el => {
      return {

        date: convertTZ( el.date, "Asia/Karachi" ),
        winner: el.winner,


      }
    } )

    console.log( winners )

    // dispatch( setCurrentWinners( winners ) );




    // console.log( winners.filter( el => el.date>new Date() ) )



  }
  // const ann=useSelector( ( state ) => state.announcement.announcements );
  // console.log( ann );


  const [random, setRandom] = React.useState({
    num1:0,
    num2:1,
    num3:7,
    num4:5,
  });
  
  useEffect( () => {
    setInterval( function () {
      setRandom( {
        num1: Math.floor( Math.random()*10 ),
        num2: Math.floor( Math.random()*10 ),
        num3: Math.floor( Math.random()*10 ),
        num4: Math.floor( Math.random()*10 ),
      } );
      setCurrentWinners( winners );

      // console.log( new Date().toLocaleTimeString( [], { timeStyle: 'short' } ), nextTime )
      // console.log('oooo');

    }, 1 );




  }, [ winners ] )


  // useEffect( () => {
  //   setNextTime( winners?.length>0&&winners.filter( el => el?.date>new Date() )[ 0 ]?.date.toLocaleTimeString( [], { timeStyle: 'short' } ) );

  //   setNextWinner( winners?.length>0&&winners.filter( el => el?.date>new Date() )[ 0 ]?.winner )

  // }, [ winners ] );




  return ( <>
    {!isLoading&&<div>
      <div className="container counter_container my-5">
        <div className="row">
          <div className="col-3 announce_time">
            <p className='announce_time_text' data-aos="slide-right">Draw stop time</p>
            <p className="stop_time" data-aos="slide-right">{cw?.length>0? cw[ 0 ]?.date.toLocaleTimeString( [], { timeStyle: 'short' } ):defaultStartingTime+"*"}</p>
          </div>
        </div>
        <div className="counter row justify-content-center" data-aos="zoom-in">
          {
            cf===true?
              <>
                <div className="count">{random.num1}</div><div className="count">{random.num2}</div><div className="count">{random.num3}</div><div className="count">{random.num4}</div>
              </>
              :
              <>

                {
                  cw&&cw.map( ( el, i ) => {
                    return <>
                      <h1 className='text-center' style={{ textDecoration: "underline" }}>Winner {cw?.length>1? i+1:""}</h1>
                      <div className="count">{el.winner.num1}</div><div className="count">{el.winner.num2}</div><div className="count">{el.winner.num3}</div><div className="count">{el.winner.num4}</div>
                    </>
                  } )
                }


              </>


          }


        </div>
        <div className="draw_results">
          <p className="draw_result_text" data-aos="zoom-in">
            All draw results
          </p>
          <RangePicker className='RangePicker' placeholder={[ 'SELECT START DATE', 'SELECT END DATE' ]} onChange={onChange} style={{ height: "3.5rem", width: "37rem", marginBottom: '3rem', marginTop: '2rem', backgroundColor: '#ff7e03', color: 'white', outline: 'none', border: 'none' }} />
        </div>
      </div>


      {/* Table */}
      <DrawTable tableData={tableData} />
    </div>
    }


  </> )
}
