import React from 'react'
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined ,NumberOutlined } from '@ant-design/icons';
import { Card ,DatePicker } from 'antd';
import { Select } from 'antd';





export default function Dashboard() {


    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Finish:', values);
        form.resetFields()
      };
    
      const { Option } = Select;

function onChangeDate(date, dateString) {
  console.log(date, dateString);
}
  return (
    <div style={{ overflowY:"hidden"}}>
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:' rgba(0,0,0,0.8)'}}>
      <div className="container">
        <a className="navbar-brand text-white" href="/"><img style={{width:'6rem', height:'3rem'}} src={require('./../img/logo-01.png')} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav_links text-white" href="/">Logout</a>
            </li>
          </ul>


        </div>
      </div>
    </nav> 



<div className='container p-5'  style={{ marginTop:'8rem'}}>
<div className='text-center mt-3 mb-5'> <h3>Announcement:</h3> </div>

        <Card data-aos="zoom-in-down" data-aos-duration="800" className='mx-auto px-4 py-2' style={{ width: 700, borderRadius: '7px' }}>
  <h6 className='my-3'>Enter winner digits and time:</h6>
  <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="digit1"
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
      </Form.Item> <Form.Item
        name="digit2"
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
       <Form.Item
        name="digit3"
        rules={[
          {
            required: true,
            message: 'required!',
          },
        ]}
      >
         <Select prefix={<UserOutlined className="site-form-item-icon" />} style={{ width: 50 }} allowClear>
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
      </Form.Item> <Form.Item
        name="digit4"
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
      <Form.Item  name="dateTime"
        rules={[
          {
            required: true,
            message: 'required!',
          },
        ]}>
      <DatePicker required showTime onChange={onChangeDate} />

      </Form.Item>
   
      <Form.Item shouldUpdate>
        {() => (
          <Button
          style={{color:'white', backgroundColor:'#FF7E03'}}
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
          Generate
          </Button>
        )}
      </Form.Item>
    </Form>

  </Card>
</div>

















    {/* <div className='container p-5' style={{ marginTop:'8rem'}}>
    <div className='text-center mt-3 mb-5'> <h3>Announcement:</h3> </div>






    <div className='slot1'>
    <h5>Slot 1</h5>
    <Form form={form} name="horizontal_login"  onFinish={onFinish}>
    <div className='row'>
        <div className='col-1'>
            <h6 className='ps-2 pt-1 pb-1 border'>
            Winner 1:
            </h6>
        </div>

    <div className='col-2'>

    <Form.Item name="username" rules={[{ required: true, message: 'Enter first lucky number!' }]}>
        <Input prefix={<NumberOutlined  className="site-form-item-icon"/>} placeholder="1st lucky number" />
      </Form.Item>
    </div>
    <div className='col-2'>

    <Form.Item name="username" rules={[{ required: true, message: 'Enter second lucky number!!' }]}>
        <Input prefix={<NumberOutlined className="site-form-item-icon" />} placeholder="2nd lucky number"/>
    </Form.Item>
    </div> 
    <div className='col-2'>

    <Form.Item name="username" rules={[{ required: true, message: 'Enter second lucky number!!' }]}>
        <Input prefix={<NumberOutlined className="site-form-item-icon" />} placeholder="2nd lucky number"/>
    </Form.Item>
    </div>
    <div className='col-2'>

    <Form.Item name="username" rules={[{ required: true, message: 'Enter second lucky number!!' }]}>
        <Input prefix={<NumberOutlined className="site-form-item-icon" />} placeholder="2nd lucky number"/>
    </Form.Item>
    </div>

    <div className='col-2'>
    <Form.Item shouldUpdate>
        {() => (
            <Button
            type="primary"
            htmlType="submit"
            disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
            >
            Log in
          </Button>
        )}
      </Form.Item>

    </div>
    </div>
    </Form> 
    </div>

    <div className='slot2'>
    <h5>Slot 2</h5>
    <Form form={form} name="horizontal_login" onFinish={onFinish} >
        <div className='row'>
            <div className='col-4'>
            <Form.Item name="username" rules={[{ required: true, message: 'Enter first lucky number!' }]}>
        <Input prefix={<NumberOutlined  className="site-form-item-icon"/>} placeholder="1st lucky number" />
      </Form.Item>

            </div>
            <div className='col-4'>
            <Form.Item name="username" rules={[{ required: true, message: 'Enter first lucky number!' }]}>
        <Input prefix={<NumberOutlined  className="site-form-item-icon"/>} placeholder="1st lucky number" />
      </Form.Item>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
            <Form.Item name="username" rules={[{ required: true, message: 'Enter first lucky number!' }]}>
        <Input prefix={<NumberOutlined  className="site-form-item-icon"/>} placeholder="1st lucky number" />
      </Form.Item>
            </div>
            <div className='col-4'>
            <Form.Item name="username" rules={[{ required: true, message: 'Enter first lucky number!' }]}>
        <Input prefix={<NumberOutlined  className="site-form-item-icon"/>} placeholder="1st lucky number" />
      </Form.Item>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
            <Form.Item shouldUpdate>
        {() => (
            <Button
            type="primary"
            htmlType="submit"
            disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
            >
            Log in
          </Button>
        )}
      </Form.Item>

            </div>
        </div>

    </Form>

    </div>

    
    </div> */}
    </div>
  )
}
