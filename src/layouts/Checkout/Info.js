import React from 'react'
import './info.css'

function Info() {
  return (
    <div className='container-fluid' >
 <div className={'checkoutInfo1-info'} >
       <div className='row' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}>
  <div className='col-sm'>
    <div className='text-center' style={{backgroundColor:'black', width:30, height:30, borderRadius:40}}>
      <p className='m-auto text-white' style={{fontFamily:'Poppins', fontSize:16}}>A</p>
    </div>
  </div>
  <div className='col-sm' style={{marginLeft:30}}>
    <p style={{fontSize:14, fontFamily:'Poppins', fontWeight:500}}>LOGIN</p>
    <p className='m-auto' style={{fontFamily:'Poppins', fontSize:16, fontWeight:600, marginTop:'-2%', width:'150px'}}>Nevaid Aggarwal</p>
  </div>
  <div className='col-sm' style={{marginLeft:30, marginTop:40}}>
  <p className='m-auto' style={{fontFamily:'Poppins', fontSize:16, fontWeight:600, marginTop:'-2%', width:'200px'}}>+91 906 445 4453</p>
  </div>
       </div>
    </div>
    </div>
  )
}

export default Info