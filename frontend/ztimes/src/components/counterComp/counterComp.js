import React,{useEffect, useState} from 'react'
import './counterComp.css';
import { DatePicker} from 'antd';

const { RangePicker } = DatePicker;

const onChange=function(v){
   console.log(v);
};


export default function CounterComp() {
  const [random, setRandom] = React.useState({
    num1:0,
    num2:1,
    num3:7,
    num4:5,
  });
  
  useEffect(()=>{
    setInterval(function(){   
      setRandom({
        num1:Math.floor(Math.random() * 10),
        num2:Math.floor(Math.random() * 10),
        num3:Math.floor(Math.random() * 10),
        num4:Math.floor(Math.random() * 10),
      });
      // console.log('oooo');
   }, 800);
  },[])

  return (
    <div>
      <div className="container counter_container my-5">
        <div className="row">
          <div className="col-3 announce_time">
            <p className='announce_time_text' data-aos="slide-right">Draw stop time</p>
            <p className="stop_time" data-aos="slide-right">10:00 am</p>
          </div>
        </div>
        <div className="counter row justify-content-center" data-aos="zoom-in">
              <div className="count">{random.num1}</div>
              <div className="count">{random.num2}</div>
              <div className="count">{random.num3}</div>
              <div className="count">{random.num4}</div>
        </div>
         <div className="draw_results">
          <p className="draw_result_text" data-aos="zoom-in">
             All draw results
           </p>
          <RangePicker className='RangePicker' data-aos="zoom-in" placeholder={[ 'SELECT START DATE', 'SELECT END DATE' ]} onChange={onChange} style={{ height: "3.5rem", width: "37rem", marginBottom: '3rem', marginTop: '2rem', backgroundColor: '#ff7e03', color: 'white', outline: 'none', border: 'none' }} />
         </div>
      </div>
      
    </div>
  )
}
