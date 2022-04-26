import React,{useState} from 'react'
import './counterComp.css';
import { DatePicker} from 'antd';

const { RangePicker } = DatePicker;


export default function CounterComp() {
  const [placement, SetPlacement] = React.useState('topLeft');

  return (
    <div>
      <div className="container counter_container my-5">
        <div className="row">
          <div className="col-3 announce_time">
            <p className='announce_time_text'>Draw stop time</p>
            <p className="stop_time">10:00 am</p>
          </div>
        </div>
          <div className="counter">
              <div className="count">8</div>
              <div className="count">7</div>
              <div className="count">2</div>
              <div className="count">9</div>
        </div>
         <div className="draw_results">
           <p className="draw_result_text">
             All draw results
           </p>
           <RangePicker className='RangePicker' placeholder={['SELECT START DATE','SELECT END DATE']}   style={{ height: "3.5rem", width: "37rem",marginBottom:'3rem',marginTop:'2rem' ,backgroundColor:'#ff7e03',color:'white',outline:'none',border:'none'}}/>
         </div>
      </div>
      
    </div>
  )
}
