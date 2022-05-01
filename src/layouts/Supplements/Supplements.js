import React from 'react'
import Categories from '../Category/Categories/Categories'
import Landing from '../Category/Landing-Layout/Landing'
import Footer from '../Footer/Footer'
import ProductLayout from '../Home/Product/Product-layout'
import Nav from '../Nav/Nav'

function Supplements() {
  return (
    <>
        <Nav />
        <Landing />
        <ProductLayout supplement={true} />
        <div className='title-container container mt-5'>
       <h1 className='product-home-title'>Top offers only for <span style={{color:'#49A542'}}>Today </span></h1>
       <Categories />
       <Footer />
       </div>
    </>
  )
}

export default Supplements