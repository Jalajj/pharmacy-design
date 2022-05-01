import React from 'react'
import LandingCheckout from '../../layouts/Checkout/LandingCheckout'
import SearchNav from '../../layouts/Nav/SearchNav'
import Footer from './../../layouts/Footer/Footer';

function Checkout() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
       <SearchNav />
       <LandingCheckout />
       <Footer />
    </div>
  )
}

export default Checkout