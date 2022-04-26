import React from 'react'
import { Table, Tag, Space } from 'antd';

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
<Table dataSource={data}>
  <ColumnGroup title="Date">
      <Column title="Time" dataIndex="time" key="time" />
      <Column title="Draw" dataIndex="draw" key="draw" />
  </ColumnGroup>
  
   

  
   
  </Table>
    
    
    </>
  )
}
