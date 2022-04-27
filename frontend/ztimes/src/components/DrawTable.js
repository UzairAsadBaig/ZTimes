import React from 'react'
import { Table } from 'antd';
import './../css/DrawTable.css'
import Column from 'antd/lib/table/Column';
export default function DrawTable() {

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
  
  const data = [
    {
      key: '1',
      time: 'John Brown',
      draw: 32,
    
    },
    {
      key: '2',
      time: 'Jim Green',
      draw: 42,
    }, {
      key: '3',
      time: 'Jim Green',
      draw: 42,
    }, {
      key: '4',
      time: 'Jim Green',
      draw: 42,
    }, {
      key: '5',
      time: 'Jim Green',
      draw: 42,
    },
  
  ];


  return (


    <>
      <div className='p-5' data-aos="zoom-in-right">
<Table className='my-5'  dataSource={data} columns={columns} pagination={false} >
  </Table>
    </div>
    
    
    </>
  )
}
