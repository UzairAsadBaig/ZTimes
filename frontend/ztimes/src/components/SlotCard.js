import React from 'react'
import { Form, Select, Button ,Badge,Card, Tag} from 'antd';
import moment from 'moment';


export default function SlotCard(props) {
    const [form5] = Form.useForm();
    const { Option } = Select;


  return (
    <>
  
    <div className='w-50 my-4 mx-auto'>
  <Badge.Ribbon placement='start' color="#FF7E03" text={`Slot ${props.slot}`}>
          <Card data-aos="zoom-in-down" data-aos-duration="800" className='mx-auto' style={{ borderRadius: '7px' }}>
          <Tag color="default" className='px-5 py-2' style={{marginLeft:'19rem'}}>{moment().format(`dddd, MMMM Do YYYY`)} {props.timeSlot}</Tag>
  
    <h6 className='my-3'>Enter winner digits and time:</h6>
    <Form form={props.form} name="horizontal_login" onFinish={props.onFinish}>
      
  
  
      <div className='ps-2'>
  
        
  
  
  
    <div className='row'>
           <div className='col-2'><span>1st winner &nbsp; &nbsp;</span>
  </div>
           
           <div className='col-1'>         
        <Form.Item
          name={props.digit1}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
  
        </div>
  
  
        
        <div className='col-1 ms-3'>
  
        
         <Form.Item
          name={props.digit2}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
           <Select style={{ width: 50 }} allowClear>
           <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
  
        </div>
  
  
          <div className='col-1 ms-3'>
  
         <Form.Item
          name={props.digit3}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
           <Select  style={{ width: 50 }} allowClear>
           <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
        
        </div>
  
        
        <div className='col-1 ms-3'>
  
        
        <Form.Item
          name={props.digit4}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
           <Select style={{ width: 50 }} allowClear>
           <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
  
        </div>
    </div>
       
  
  <div className='row'>
    <div className='col-2'> <span>2nd winner &nbsp; &nbsp; &nbsp;</span> </div>
    <div className='col-1'>
    <Form.Item
          name={props.digit5}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div> <div className='col-1 ms-3'>
    <Form.Item
          name={props.digit6}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div> <div className='col-1 ms-3'>
    <Form.Item
          name={props.digit7}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div> <div className='col-1 ms-3'>
    <Form.Item
          name={props.digit8}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div>
    
  </div>
  
  
  <div className='row'>
    <div className='col-2'><span>3rd winner &nbsp; &nbsp; &nbsp;</span></div>
    <div className='col-1'>
    <Form.Item
          name={props.digit9}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit10}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit11}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit12}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div>
  </div>
  
  <div className='row'>
    <div className='col-2'><span>4th winner</span></div>
    <div className='col-1'>
    <Form.Item
          name={props.digit13}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit14}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit15}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit16}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div>
  
  </div>
  
  <div className='row'>
    <div className='col-2'><span>5th winner</span></div>
    <div className='col-1'>
    <Form.Item
          name={props.digit17}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit18}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit19}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div><div className='col-1 ms-3'>
    <Form.Item
          name={props.digit20}
          rules={[
            {
              required: true,
              message: 'required!',
            },
          ]}
        >
          
      <Select style={{ width: 50 }} allowClear>
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
        <Option value="7">7</Option>
        <Option value="8">8</Option>
        <Option value="9">9</Option>
      </Select>
        </Form.Item>
    </div>
  
  </div>
  
  <Form.Item shouldUpdate>
          {() => (
            <Button
            style={{color:'white', backgroundColor:'#FF7E03'}}
              htmlType="submit"
              disabled={
                !props.form.isFieldsTouched(true) ||
                !!props.form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
            Generate
            </Button>
          )}
        </Form.Item>
  
  
  
  
  
        </div>
  
  
  
      </Form>
  
    </Card></Badge.Ribbon>
    </div>
  
  </>
  )
}
