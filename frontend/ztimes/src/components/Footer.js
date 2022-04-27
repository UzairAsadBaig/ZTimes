import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <>
    <div className='row mt-5' style={{backgroundColor:'#FF7E03'}}>
        <div className='col-6 p-4 '>
            <h4 className='text-white text-center'>
                ZEETIME
            </h4>
            <p className='text-white mx-auto pt-4' style={{width:"25rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic types Ipsum passages, and more recen</p>
        </div>
        <div className='col-6 p-4' >
    
            <h4 className='text-white text-center'>CONTACT DETAILS</h4>
            <div className='text-white pt-4' style={{paddingLeft:'10rem' , borderLeft:'2px solid black'}}>
            <p><LocationOnIcon/> <span>Lahore, Pakistam</span></p>
            <p><LocalPhoneIcon/> <span>0312456789</span></p>
            <p><EmailIcon/> <span>ztime@gmail.com</span></p>
            </div>
        </div>
    </div>
    <div className='text-center' style={{color:'white', backgroundColor:'black'}}><p className='ps-5'>CopyRight</p></div>
    </>
  )
}
