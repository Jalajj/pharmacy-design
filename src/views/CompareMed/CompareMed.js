import React from 'react'
import { useGlobalContext } from '../../context'
import Landing from '../../layouts/Category/Landing-Layout/Landing'
import CompareComponent from '../../layouts/CompareMed/CompareHead/CompareComponent'
import Footer from '../../layouts/Footer/Footer'
import Nav from '../../layouts/Nav/Nav'
import MainNav from '../../mobile/Layout/MobileNav/MainNav'
import RespFooter from '../../mobile/Layout/RespFooter/RespFooter';
import './compare-main.css'

function CompareMed() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid'>
      {mobileScreen ? <MainNav /> : <Nav />}
      <Landing />
    {mobileScreen ? null :<CompareComponent />}
    {mobileScreen && (
      <div className='container mt-5' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:270, height:40,border: '1.18669px solid #000000'}}>
         <p className='btn-cart'>
         Add my medicines to Cart
         </p>
        </div>
        <div style={{width:355, height:40,border: '1.18669px solid #000000', marginTop:40}}>
         <p className='btn-cart-2'>
         Add my medicines to Cart
         </p>
        </div>
      </div>
    )}
      {mobileScreen ? <RespFooter /> : <Footer />}
    </div>
  )
}

export default CompareMed