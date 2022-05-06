import React from 'react'
import { useState , useEffect } from 'react';
import { Form, Input, Button , Tag} from 'antd';
import { UserOutlined, LockOutlined ,NumberOutlined } from '@ant-design/icons';
import { Card  , Badge } from 'antd';
import { Select } from 'antd';
import { setAnnouncements } from '../redux/announcementSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useCreateAnnouncementMutation } from '../redux/nodeAPI';
import { useSnackbar } from 'notistack';
import Cook from 'js-cookie';
import { Link } from 'react-router-dom';
import moment from 'moment';
import SlotCard from './SlotCard';




export default function Dashboard() {
  


  // const [currTime, setCurrTime] = useState(Math.floor(new Date().getTime()/1000)*1000);
  const [currTime, setCurrTime] = useState(new Date());

  const [createAnnouncement]=useCreateAnnouncementMutation();


    const { Option } = Select;


    useEffect( () => {
      setInterval( () => {
        setCurrTime(new Date()) ;
      }, 30000 );
      
  
    }, [] )



    const {enqueueSnackbar}=useSnackbar();


    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();
    const [form4] = Form.useForm();
    const [form5] = Form.useForm();


    
  // const slot1Date= ( moment().set( "hour", 11 ).set( "minute", 30 ) )._d
  // const slot1Date= ( moment().set( "hour", 15 ).set( "minute", 24 ) )._d
  const slot1Date = new Date(new Date().setHours(11,30,0,0))
  const slot2Date= ( moment().set( "hour", 13 ).set( "minute", 30 ) )._d
  const slot3Date=( moment().set( "hour", 16 ).set( "minute", 30 ) )._d
  const slot4Date=( moment().set( "hour", 19 ).set( "minute", 30 ) )._d
  const slot5Date=( moment().set( "hour", 1 ).set( "minute", 49 ) )._d

  const preTime = 10*60*1000;


  // console.log(slot1Date)

  // console.log(new Date(currTime), "----" , new Date(slot1Date.getTime()))
  


  // console.log( Math.floor( slot5Date.getTime()-currTime )<preTime && Math.floor(( slot5Date.getTime()-currTime) )>(1*60*1000) ) 
  console.log( new Date(slot5Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) <=currTime.toLocaleTimeString( [], { timeStyle: 'short' }) && currTime.toLocaleTimeString( [], { timeStyle: 'short' })<slot5Date.toLocaleTimeString( [], { timeStyle: 'short' }) ) 

  console.log( new Date(slot5Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) ,currTime.toLocaleTimeString( [], { timeStyle: 'short' }),slot5Date.toLocaleTimeString( [], { timeStyle: 'short' }))


    const onFinish1 =async (values) => {
        const announceData= {
          winners: [ {
          num1:values.slot1digit1,
          num2:values.slot1digit2,
          num3:values.slot1digit3,
          num4:values.slot1digit4,
        }],
        date:slot1Date,
        }
        
        console.log(announceData);

        const res=await createAnnouncement(announceData);

        console.log(res);

        if(res.data && res.data.status==='success'){
          enqueueSnackbar( "Annoucement added successfully!", { variant: 'success' } );
          form1.resetFields()
        }else{
          enqueueSnackbar( "Something went wrong!", { variant: 'error' } ); 
        }

      };



      const onFinish2 =async (values) => {
        console.log(values)
          const announceData= {
            winners: [ {
            num1:values.digit1,
            num2:values.digit2,
            num3:values.digit3,
            num4:values.digit4,
          },
          {
            num1:values.digit5,
            num2:values.digit6,
            num3:values.digit7,
            num4:values.digit8,
          },
          {
            num1:values.digit9,
            num2:values.digit10,
            num3:values.digit11,
            num4:values.digit12,
          },
          {
            num1:values.digit13,
            num2:values.digit14,
            num3:values.digit15,
            num4:values.digit16,
          },
          {
            num1:values.digit17,
            num2:values.digit18,
            num3:values.digit19,
            num4:values.digit20,
          },      
        ],
          date: slot2Date,
          }
          
          console.log(announceData);
          const res=await createAnnouncement(announceData);
          console.log(res);
  
          if(res.data && res.data.status==='success'){
            enqueueSnackbar( "Annoucement added successfully!", { variant: 'success' } );
            form2.resetFields()
          }else{
            enqueueSnackbar( "Something went wrong!", { variant: 'error' } ); 
          }
  
        };


  


          const onFinish3 =async (values) => {
            console.log(values)
              const announceData= {
                winners: [ {
                num1:values.digit1,
                num2:values.digit2,
                num3:values.digit3,
                num4:values.digit4,
              },
              {
                num1:values.digit5,
                num2:values.digit6,
                num3:values.digit7,
                num4:values.digit8,
              },
              {
                num1:values.digit9,
                num2:values.digit10,
                num3:values.digit11,
                num4:values.digit12,
              },
              {
                num1:values.digit13,
                num2:values.digit14,
                num3:values.digit15,
                num4:values.digit16,
              },
              {
                num1:values.digit17,
                num2:values.digit18,
                num3:values.digit19,
                num4:values.digit20,
              },      
            ],
              date: slot3Date,
              }
              
              console.log(announceData);
              const res=await createAnnouncement(announceData);
              console.log(res);
      
              if(res.data && res.data.status==='success'){
                enqueueSnackbar( "Annoucement added successfully!", { variant: 'success' } );
                form3.resetFields()
              }else{
                enqueueSnackbar( "Something went wrong!", { variant: 'error' } ); 
              }
      
            };



            const onFinish4 =async (values) => {
                const announceData= {
                  winners: [ {
                  num1:values.digit1,
                  num2:values.digit2,
                  num3:values.digit3,
                  num4:values.digit4,
                },
                {
                  num1:values.digit5,
                  num2:values.digit6,
                  num3:values.digit7,
                  num4:values.digit8,
                },
                {
                  num1:values.digit9,
                  num2:values.digit10,
                  num3:values.digit11,
                  num4:values.digit12,
                },
                {
                  num1:values.digit13,
                  num2:values.digit14,
                  num3:values.digit15,
                  num4:values.digit16,
                },
                {
                  num1:values.digit17,
                  num2:values.digit18,
                  num3:values.digit19,
                  num4:values.digit20,
                },      
              ],
                date:slot4Date,
                }
                
                console.log(announceData);
                const res=await createAnnouncement(announceData);
                console.log(res);
        
                if(res.data && res.data.status==='success'){
                  enqueueSnackbar( "Annoucement added successfully!", { variant: 'success' } );
                  form4.resetFields()
                }else{
                  enqueueSnackbar( "Something went wrong!", { variant: 'error' } ); 
                }
        
              };  
          const onFinish5 =async (values) => {
          console.log(values)
            const announceData= {
              winners: [ {
              num1:values.digit1,
              num2:values.digit2,
              num3:values.digit3,
              num4:values.digit4,
            },
            {
              num1:values.digit5,
              num2:values.digit6,
              num3:values.digit7,
              num4:values.digit8,
            },
            {
              num1:values.digit9,
              num2:values.digit10,
              num3:values.digit11,
              num4:values.digit12,
            },
            {
              num1:values.digit13,
              num2:values.digit14,
              num3:values.digit15,
              num4:values.digit16,
            },
            {
              num1:values.digit17,
              num2:values.digit18,
              num3:values.digit19,
              num4:values.digit20,
            },      
          ],
            date: slot5Date,
            }
            
            console.log(announceData);
            const res=await createAnnouncement(announceData);
            console.log(res);
    
            if(res.data && res.data.status==='success'){
              enqueueSnackbar( "Annoucement added successfully!", { variant: 'success' } );
              form5.resetFields()
            }else{
              enqueueSnackbar( "Something went wrong!", { variant: 'error' } ); 
            }
    
          };
    

      const handleLogout=()=>{
       Cook.remove('JWT'); 
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
              <Link className="nav-link nav_links text-white" to='/admin/login' onClick={handleLogout}>Logout</Link>
            </li>
          </ul>


        </div>
      </div>
    </nav> 



<div className='container p-5'  style={{ marginTop:'5rem'}}>
<div className='text-center mt-3 mb-5'> <h3>Announcement:</h3> </div>











{ 
new Date(slot1Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) <=currTime.toLocaleTimeString( [], { timeStyle: 'short' }) && currTime.toLocaleTimeString( [], { timeStyle: 'short' })<slot1Date.toLocaleTimeString( [], { timeStyle: 'short' }) ? 

<div className='w-50 my-4 mx-auto'>
<Badge.Ribbon placement='start' color="#FF7E03" text="Slot 1" className=''>
        <Card data-aos="zoom-in-down" data-aos-duration="800" className='mx-auto' style={{ borderRadius: '7px' }}>
        <Tag color="default" className='px-5 py-2' style={{marginLeft:'19rem'}}>{moment().format(`dddd, MMMM Do YYYY`)} 11:30 AM (PKT)</Tag>

  <h6 className='my-3'>Enter winner digits:</h6>
  <Form form={form1} name="horizontal_login" layout="inline" onFinish={onFinish1}>
      <Form.Item
        name="slot1digit1"
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
        name="slot1digit2"
        rules={[
          {
            required: true,
            message: 'required!'
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
        name="slot1digit3"
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
      </Form.Item>
      
       <Form.Item
        name="slot1digit4"
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
     
   
      <Form.Item shouldUpdate>
        {() => (
          <Button
          style={{color:'white', backgroundColor:'#FF7E03'}}
            htmlType="submit"
            disabled={
              !form1.isFieldsTouched(true) ||
              !!form1.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
          Generate
          </Button>
        )}
      </Form.Item>
    </Form>

  </Card></Badge.Ribbon>
  </div>
  :""

}

{
new Date(slot2Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) <=currTime.toLocaleTimeString( [], { timeStyle: 'short' }) && currTime.toLocaleTimeString( [], { timeStyle: 'short' })<slot2Date.toLocaleTimeString( [], { timeStyle: 'short' })   ?

<SlotCard timeSlot={'1:30 PM (PKT)'} form={form2}  onFinish={onFinish2} slot='2' digit1="digit1" digit2="digit2" digit3="digit3" digit4="digit4" digit5="digit5" digit6="digit6" digit7="digit7" digit8="digit8" digit9="digit9" digit10="digit10" digit11="digit11" digit12="digit12" digit13="digit13" digit14="digit14" digit15="digit15" digit16="digit16" digit17="digit17" digit18="digit18" digit19="digit19" digit20="digit20"  />
  :""
}

  
  
  

 
  
  
  
  
  
  
  
  
  

{
new Date(slot3Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) <=currTime.toLocaleTimeString( [], { timeStyle: 'short' }) && currTime.toLocaleTimeString( [], { timeStyle: 'short' })<slot3Date.toLocaleTimeString( [], { timeStyle: 'short' })   ?

  <SlotCard timeSlot={'4:30 PM (PKT)'} form={form3}  onFinish={onFinish3}  slot='3' digit1="digit1" digit2="digit2" digit3="digit3" digit4="digit4" digit5="digit5" digit6="digit6" digit7="digit7" digit8="digit8" digit9="digit9" digit10="digit10" digit11="digit11" digit12="digit12" digit13="digit13" digit14="digit14" digit15="digit15" digit16="digit16" digit17="digit17" digit18="digit18" digit19="digit19" digit20="digit20"  />
:""}
  
  
  
  
  
{
  new Date(slot4Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) <=currTime.toLocaleTimeString( [], { timeStyle: 'short' }) && currTime.toLocaleTimeString( [], { timeStyle: 'short' })<slot4Date.toLocaleTimeString( [], { timeStyle: 'short' }) 
   ?

  <SlotCard timeSlot={'7:30 PM (PKT)'} form={form4}  onFinish={onFinish4}  slot='4' digit1="digit1" digit2="digit2" digit3="digit3" digit4="digit4" digit5="digit5" digit6="digit6" digit7="digit7" digit8="digit8" digit9="digit9" digit10="digit10" digit11="digit11" digit12="digit12" digit13="digit13" digit14="digit14" digit15="digit15" digit16="digit16" digit17="digit17" digit18="digit18" digit19="digit19" digit20="digit20"  />
:''}



{
   new Date(slot5Date.getTime()-preTime).toLocaleTimeString( [], { timeStyle: 'short' }) <=currTime.toLocaleTimeString( [], { timeStyle: 'short' }) && currTime.toLocaleTimeString( [], { timeStyle: 'short' })<slot5Date.toLocaleTimeString( [], { timeStyle: 'short' })  ?

   <SlotCard timeSlot={'10:30 PM (PKT)'} form={form5}  onFinish={onFinish5}  slot='5' digit1="digit1" digit2="digit2" digit3="digit3" digit4="digit4" digit5="digit5" digit6="digit6" digit7="digit7" digit8="digit8" digit9="digit9" digit10="digit10" digit11="digit11" digit12="digit12" digit13="digit13" digit14="digit14" digit15="digit15" digit16="digit16" digit17="digit17" digit18="digit18" digit19="digit19" digit20="digit20"  />
:""  
}
  
  
  




</div>
</div>
  )
}
