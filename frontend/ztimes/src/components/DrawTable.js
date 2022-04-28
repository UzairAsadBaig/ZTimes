import React from 'react'
import { Table } from 'antd';
import './../css/DrawTable.css'
import Column from 'antd/lib/table/Column';



export default function DrawTable( props ) {

  const columns = [
   
    {
  

          title: 'Date and time',
          dataIndex: 'time',
          key: 'time',
          width: 50,
          align:'center'
        },
        {
          title: 'Draw',
          dataIndex: 'draw',
          key: 'draw',
          align:'center',
          width: 50,
        }, 
  ];


  const data=props.tableData? props.tableData.map( ( el, i ) => {

    return {
      key: i,
      time: new Date( el.date ).toLocaleString(),
      draw: el.winner.num1+el.winner.num2+el.winner.num3+el.winner.num4
    }

  } ):[];


  return (


    <>
      <div className='p-5' data-aos="zoom-in-right">
<Table className='my-5'  dataSource={data} columns={columns} pagination={false} >
  </Table>
    </div>
    
    
    </>
  )
}
