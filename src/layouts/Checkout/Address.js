import React from 'react'
import './address.css'

function Address() {
  return (
    <div className='container-fluid  mt-5' >
     <div className='row checkoutInfo1-info' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-around', marginLeft:5, width:'95%', height:60, backgroundColor:'white'}}>
     <div className='text-center dot-container col-md-2' style={{backgroundColor:'black', width:30, height:30, borderRadius:40}}>
      <p className='text-white b-text' style={{fontFamily:'Poppins', fontSize:16, marginTop:3, marginRight:10}}>B</p>

    </div>
    <div className='col-sm shipping-text' style={{marginLeft:50}}>
    <p className='m-auto' style={{fontSize:14, fontFamily:'Poppins', fontWeight:600}}>SHIPPING ADDRESS</p>
  
    </div>
    </div>
    <div className='mt-5'>
        <p style={{fontSize:16, fontFamily:'Poppins', fontWeight:600}}>Patient Name</p>
        <div className='m-auto'>
        <input className='name-input' defaultValue={'Nevaid Aggarwal'} />
    </div>
    <div className='mt-4 row'>
        <div className='col-md-8'>
           <label style={{fontSize:16, fontFamily:'Poppins', fontWeight:600}}>Address*</label> 
           <div className='m-auto mt-3'>
        <input className='name-input' />
    </div>
        </div>
        <div className='col-md-4' style={{marginLeft:-110}}>
        <label style={{fontSize:16, fontFamily:'Poppins', fontWeight:600}}>Land Mark</label> 
           <div className='m-auto mt-3'>
        <input className='name-input' style={{width:320}} />
        </div>
    </div>
    </div>
    <div className='mt-4 row'>
        <div className='col-md-6'>
           <label style={{fontSize:16, fontFamily:'Poppins', fontWeight:600}}>City*</label> 
           <div className='m-auto mt-3'>
        <input className='name-input'  style={{width:350}} />
    </div>
        </div>
        <div className='col-md-6' >
        <label style={{fontSize:16, fontFamily:'Poppins', fontWeight:600}}>Postal Code*</label> 
           <div className='m-auto mt-3'>
        <input className='name-input' style={{width:350}} />
        </div>
    </div>
    </div>
    <div className='row checkoutInfo1-info mt-5' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-around', marginLeft:5, width:'95%', height:60, backgroundColor:'white'}}>
     <div className='text-center dot-container col-md-2' style={{backgroundColor:'black', width:30, height:30, borderRadius:40}}>
      <p className='m-auto c-text text-white mt-1 mr-1' style={{fontFamily:'Poppins', fontSize:16}}>C</p>

    </div>
    <div className='col-sm shipping-text' style={{marginLeft:50 }}>
    <p className='m-auto' style={{fontSize:14, fontFamily:'Poppins', fontWeight:600}}>UPLOAD PRESCRIPTION</p>
  
    </div>
    </div>
    <div className='row checkoutInfo1-info mt-5' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-around', marginLeft:5, width:'95%',height:60, backgroundColor:'white'}}>
     <div className='text-center dot-container col-md-2' style={{backgroundColor:'black', width:30, height:30, borderRadius:40}}>
      <p className='m-auto d-text text-white' style={{fontFamily:'Poppins', fontSize:16}}>D</p>

    </div>
    <div className='col-sm shipping-text' style={{marginLeft:50}}>
    <p className='m-auto' style={{fontSize:14, fontFamily:'Poppins', fontWeight:600}}>PAYMENT METHOD</p>
  
    </div>
    </div>
    </div>
    </div>
  )
}

export default Address