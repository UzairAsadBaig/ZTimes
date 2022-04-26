import React from 'react'
import { Table, Tag, Space } from 'antd';
import './../css/DrawTable.css'
export default function DrawTable() {
    const { Column, ColumnGroup } = Table;



    const data = [
        {
          key: '1',
          draw: '2230',
          time:'20'
        },

      ];

  return (


    <>
    <div>

<Table dataSource={data} >
  <ColumnGroup title="Date" style={{"backgroundColor":'blue'}}  >
      <Column title="Time" dataIndex="time" align='center' key="time" />
      <Column title="Draw" dataIndex="draw" align='center' key="draw" />
  </ColumnGroup>
  </Table>
    </div>
    
    
    </>
  )
}
