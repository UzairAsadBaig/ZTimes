import React,{useEffect, useState} from 'react'
import './counterComp.css';
import { DatePicker} from 'antd';
import DrawTable from '../DrawTable';
import { useGetHistoryMutation } from '../../redux/nodeAPI';
import { defaultPrefixCls } from 'antd/lib/config-provider';
import Resultbox from '../Resultbox';



const { RangePicker } = DatePicker;





function convertTZ( date, tzString ) {
  return new Date( ( typeof date==="string"? new Date( date ):date ).toLocaleString( "en-US", { timeZone: tzString } ) );
}



export default function CounterComp() {

  const [ getHistory ]=useGetHistoryMutation();
  const [ tableData, setTableData ]=useState();
  let cd=new Date();
  // console.log( {
  //   start: new Date( cd.getFullYear(), cd.getMonth(), cd.getDate() ),
  //   end: new Date( new Date( Date.now()+( 1*24*60*60*1000 ) ) )
  // } );

  const defSet=async () => {
    const res=await getHistory( {
      start: new Date( cd.getFullYear(), cd.getMonth(), cd.getDate(), 0, 0, 0 ),
      end: new Date( new Date( Date.now()+( 1*24*60*60*1000 ) ) ),
    } );
    setTableData( res.data.data );
  }

  useEffect( () => {
    defSet();
  }, [] )

  // getHistory( {
  //   start: new Date( cd.getFullYear(), cd.getMonth(), cd.getDate() ),
  //   end: new Date( new Date( Date.now()+( 1*24*60*60*1000 ) ) )
  // } ).then( ( e ) => {
  //   console.log( e );
  // } )

  const onChange=async function ( v ) {
    console.log( v );

    if ( !v ) {
      setTableData( [] );
      return;
    }
    // const start=convertTZ( v[ 0 ]._d, 'Asia/Kolkata' );
    // const end=convertTZ( v[ 1 ]._d, 'Asia/Kolkata' );

    const start=new Date( v[ 0 ]._d.getFullYear(), v[ 0 ]._d.getMonth(), v[ 0 ]._d.getDate(), 0, 0, 0 )
    const end=new Date( v[ 1 ]._d.getFullYear(), v[ 1 ]._d.getMonth(), v[ 1 ]._d.getDate(), 0, 0, 0 )

    // const start=convertTZ( new Date( v[ 0 ]._d.getFullYear(), v[ 0 ]._d.getMonth(), v[ 0 ]._d.getDate(), 0, 0, 0 ), 'Asia/Kolkata' )
    // const end=convertTZ( new Date( v[ 1 ]._d.getFullYear(), v[ 1 ]._d.getMonth(), v[ 1 ]._d.getDate(), 0, 0, 0 ), 'Asia/Kolkata' )


    console.log( typeof start, start )
    console.log( typeof end, end )


    const range={ start, end };

    const res=await getHistory( range )
    // console.log( res.data.data )

    setTableData( res.data.data );
    // console.log( tableData )

  };



  return ( <>
    <div>
      <div className="container counter_container my-5">
        <div className="row">
          {/* <div className="col-3 announce_time">
            <p className='announce_time_text' data-aos="slide-right">Draw stop time</p>
            <p className="stop_time" data-aos="slide-right">{cw?.length>0? cw[ 0 ]?.date.toLocaleTimeString( [], { timeStyle: 'short' } ):defaultStartingTime+"*"}</p>
          </div> */}
        </div>

        <div className="draw_results">
          <p className="draw_result_text" data-aos="zoom-in">
            All draw results
          </p>
          <RangePicker className='RangePicker' placeholder={[ 'SELECT START DATE', 'SELECT END DATE' ]} onChange={onChange} style={{ height: "3.5rem", width: "37rem", marginBottom: '3rem', marginTop: '2rem', backgroundColor: '#ff7e03', color: 'white', outline: 'none', border: 'none' }} />
        </div>
      </div>


      {console.log( ">>>>>>>>", tableData )}
      <DrawTable tableData={tableData} />

    </div>



  </> )
}
