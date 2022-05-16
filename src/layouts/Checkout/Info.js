import React from 'react'
import './info.css'
import { useGlobalContext } from './../../context/index';

function Info() {
  const {mobileScreen} = useGlobalContext()
  return (
    // <div className='container-fluid' >
 <div className={'checkoutInfo1-info'} >
       {/* <div className='row' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}> */}
  {/* <div className='col-sm'> */}
    <div className='text-center a-wrapper mt-1' style={{backgroundColor:'black', width:30, height:30, borderRadius:40}}>
      <p className='m-auto text-white a' style={{fontFamily:'Poppins', fontSize:16}}>A</p>
    </div>
  {/* </div> */}
  <div className='col-sm login-wrapper' style={{marginLeft:30}}>
    <p className='login-resp' style={{fontSize:14, fontFamily:'Poppins', fontWeight:500}}>LOGIN</p>
    <p className={`m-auto name ${mobileScreen ? null : 'person-name'}`} style={{fontFamily:'Poppins', fontSize:16, fontWeight:600, marginTop:'-2%', width:'150px'}}>Nevaid Aggarwal</p>
  </div>
  {/* <div className='col-sm' style={{marginLeft:30, marginTop:40}}> */}
  <p className={`num ${mobileScreen ? null : 'person-num'}`} style={mobileScreen ? null : {fontFamily:'Poppins', fontSize:16, fontWeight:600, width:'200px'}}>+91 906 445 4453</p>
  {/* </div> */}
       </div>
    // </div>
    // </div>
  )
}

export default Info