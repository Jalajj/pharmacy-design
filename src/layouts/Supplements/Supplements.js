import React from 'react'
import { useGlobalContext } from '../../context'
import RespFooter from '../../mobile/Layout/RespFooter/RespFooter'
import Categories from '../Category/Categories/Categories'
import Landing from '../Category/Landing-Layout/Landing'
import Footer from '../Footer/Footer'
import ProductLayout from '../Home/Product/Product-layout'
import Nav from '../Nav/Nav'
import MainNav from './../../mobile/Layout/MobileNav/MainNav';
import './supplements.css'

function Supplements() {
  const {mobileScreen} = useGlobalContext();
  return (
    <>
        {mobileScreen ? <MainNav /> : <Nav />}
        <Landing />
        {mobileScreen ?   <Categories /> : <ProductLayout supplement={true} />}
        <div className='title-container container' style={{marginTop:100}} >
       <h1 className='product-home-title'>Explore other  Categories</h1>
       {mobileScreen ? null : <Categories supplementCategory={'supplement-category-container'} container={'supplement-container'} />}
     
      {/* <Footer /> */}
       </div>
       {mobileScreen && <ProductLayout supplement={true} />}
       {mobileScreen ? <RespFooter /> : <Footer />}
    </>
  )
}

export default Supplements