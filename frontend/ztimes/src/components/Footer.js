import React from 'react'
import './../css/footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <footer className='footer'>
    <div className='row mt-5' style={{backgroundColor:'#FF7E03'}}>
        <div className='col-sm-6 p-4 '>
          <h4 className='text-white text-center ztime' data-aos="fade">
                ZEETIME
            </h4>
          <p className='text-white pt-4 ztime_text' data-aos="fade">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className='col-sm-6 p-4' >
    
          <h4 className='text-white text-center contact' data-aos="fade">CONTACT DETAILS</h4>
          <div className='text-white pt-4 border_left' data-aos="fade">
            <p><LocationOnIcon/> <span>Lahore, Pakistam</span></p>
            <p><LocalPhoneIcon/> <span>0312456789</span></p>
            <p><EmailIcon/> <span>ztime@gmail.com</span></p>
            </div>
        </div>
    </div>
    <div className='text-center footer__foot' style={{color:'white', backgroundColor:'black'}}><p style={{marginBottom:'0rem'}}>CopyRight</p></div>
    </footer>
  )
}
