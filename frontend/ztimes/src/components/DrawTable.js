import React from 'react'
import { Table } from 'antd';
import './../css/DrawTable.css'
import Column from 'antd/lib/table/Column';



export default function DrawTable( props ) {


  function convertTZ( date, tzString ) {
    return new Date( ( typeof date==="string"? new Date( date ):date ).toLocaleString( "en-US", { timeZone: tzString } ) );
  }

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


  console.log( props.tableData&&props.tableData )

  const data=props.tableData? props.tableData.map( ( el, i ) => {

    return {

      key: i,
      time: new Date( el.date ).toLocaleString(),
      draw: `1st: ( ${el.winners[ 0 ].num1}${el.winners[ 0 ].num2}${el.winners[ 0 ].num2}${el.winners[ 0 ].num4} )

      ${el.winners.length>1? `- 2nd: ( ${el.winners[ 1 ].num1}${el.winners[ 1 ].num2}${el.winners[ 1 ].num2}${el.winners[ 1 ].num4}, ${el.winners[ 2 ].num1}${el.winners[ 2 ].num2}${el.winners[ 2 ].num2}${el.winners[ 2 ].num4}, ${el.winners[ 3 ].num1}${el.winners[ 3 ].num2}${el.winners[ 3 ].num2}${el.winners[ 3 ].num4}, ${el.winners[ 4 ].num1}${el.winners[ 4 ].num2}${el.winners[ 4 ].num2}${el.winners[ 4 ].num4} )`:''}
      `

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
