import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import { useLoginMutation } from '../redux/nodeAPI';
import Cook from 'js-cookie';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [creds, setCreds] = useState({email:'',password:''});
    const onChange= ( event ) => {
      setCreds( { ...creds, [ event.target.name ]: event.target.value } )
    };
    const [login]=useLoginMutation();
    const {enqueueSnackbar}=useSnackbar();
    const navigate=useNavigate();
    const onFinish = async (values) => {
        const res=await login(values);
        console.log(res);
        if(res.data && res.data.status==='success'){
          Cook.set('JWT',res.data.token);        
          enqueueSnackbar( "Logged in successfully!", { variant: 'success' } );
        setTimeout(()=>{
          navigate('/admin/dashboard');
        },1700);
      }  else{
        enqueueSnackbar( "Incorrect email or password!", { variant: 'error' } );
      }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <>
    <div className='container' style={{overflowY:'hidden'}}>
     <div className='w-25  mx-auto' style={{marginTop:'10rem' , paddingLeft:"4rem"}}>
         <img style={{width:"12rem"}} src={require('./../img/logo-01.png')} alt="" />
    </div>   
    <div className='w-50 px-5 pb-5 mx-auto' style={{marginTop:'4rem'}}>
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
        <Input name='email' style={{width:'30rem' , marginLeft:'1.3rem'}} onChange={onChange}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter password!' }]}
        >
        <Input.Password name='password' style={{width:'30rem' }}  onChange={onChange}/>
      </Form.Item>


      <Form.Item className='text-center'>
        <Button style={{backgroundColor:"#FF7E03", color:'white',width:'12rem'}} htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
          </div>
        </div>
    </>
  )
}
