import React from 'react'
import Footer from '../../layouts/Footer/Footer'
import SearchNav from '../../layouts/Nav/SearchNav'
import LandingProduct from '../../layouts/ProductPage/LandingProduct/LandingProduct'
import Productfaq from '../../layouts/ProductPage/ProductFAQ/ProductFAQ'
import RespFooter from '../../mobile/Layout/RespFooter/RespFooter'
import { useGlobalContext } from './../../context/index';
import MainNav from './../../mobile/Layout/MobileNav/MainNav';

function ProductPage() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
       {mobileScreen ? <MainNav /> : <SearchNav />}
       <LandingProduct />
       <Productfaq />
       {mobileScreen ? <RespFooter /> : <Footer />}
    </div>
  )
}

export default ProductPage;