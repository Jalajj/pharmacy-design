import React from 'react'
import LandingCheckout from '../../layouts/Checkout/LandingCheckout'
import SearchNav from '../../layouts/Nav/SearchNav'
import MainNav from '../../mobile/Layout/MobileNav/MainNav';
import Footer from './../../layouts/Footer/Footer';
import { useGlobalContext } from './../../context/index';
import RespFooter from '../../mobile/Layout/RespFooter/RespFooter';

function Checkout() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
      { mobileScreen ? <MainNav /> : <SearchNav />} 
       <LandingCheckout />
       {mobileScreen ? <RespFooter /> : <Footer />}
    </div>
  )
}

export default Checkout