import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';


export default function Login() {
    const [creds, setCreds] = useState({email:'',password:''});
    const onFinish = (values) => {
        console.log('Success:', values);
        setCreds(values)
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <>
    <div className='container' style={{overflowY:'hidden'}}>
     <div className='w-25  mx-auto' style={{marginTop:'7rem' , paddingLeft:"5rem"}}>
         <img style={{width:"9rem"}} src={require('./../img/logo-01.png')} alt="" />
    </div>   
    <div className='w-50 px-5 pb-5 mx-auto' style={{marginTop:'5rem'}}>
{console.log(creds)}
     <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
            autoComplete="off"
            data-aos="zoom-in-down"
            data-aos-duration="700"
      >
      <Form.Item
        label="Email"
        name="email"
        
        rules={[{ required: true, message: 'Please enter valid email!', type:'email' }]}
        >
        <Input style={{width:'30rem' , marginLeft:'1.3rem'}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter password!' }]}
        >
        <Input.Password  style={{width:'30rem' }} />
      </Form.Item>


      <Form.Item className='text-center'>
        <Button style={{backgroundColor:"#FF7E03", color:'white'}} htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
          </div>
        </div>
    </>
  )
}
