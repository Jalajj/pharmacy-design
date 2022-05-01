import React from 'react';
import CategoryCard from '../../../components/CategoryCard/CategoryCard';
import RespCategory from '../../components/Category/RespCategory';
import RespProduct from '../../components/Product/RespProduct';
import './resp-home.css'

function RespLanding() {
  return (
    <div className='container'>
        <div className='text-center mt-4' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <div style={{backgroundColor: '#EFFAFF', height:150, width:350}} />
       </div>
       <div className='container mt-5' style={{display:'flex', flexDirection:'row', marginLeft:'-7%'}}>
         <div className='col-sm-2 m-1'>
             <RespCategory />
         </div>
         <div className='col-sm-2 m-1'>
             <RespCategory />
         </div>
         <div className='col-sm-2 m-1'>
             <RespCategory />
         </div>
       </div>
       <div className='container mt-5' style={{display:'flex', flexDirection:'row', marginLeft:'-7%'}}>
         <div className='col-sm-2 m-1'>
             <RespCategory />
         </div>
         <div className='col-sm-2 m-1'>
             <RespCategory />
         </div>
         <div className='col-sm-2 m-1'>
             <RespCategory />
         </div>
       </div>
       <div className='products-mobile mt-5'>
         <h1 style={{fontSize:20, fontFamily:'Poppins'}}>Deals of the Day</h1>
         <div className='product-list' style={{marginTop:'50px'}}>
           <RespProduct />
         </div>
         <div className='product-list' style={{marginTop:'50px'}}>
           <RespProduct />
         </div>
       </div>
    </div>
  )
}

export default RespLanding