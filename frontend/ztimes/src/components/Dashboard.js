import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined ,NumberOutlined } from '@ant-design/icons';



export default function Dashboard() {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Finish:', values);
      };
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand text-white" href="/">Z-Time</a>
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


    <div className='container p-5' style={{ marginTop:'8rem'}}>
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

    
    </div>
    </>
  )
}
