import React from 'react'
import Footer from '../../layouts/Footer/Footer'
import SearchNav from '../../layouts/Nav/SearchNav'
import LandingProduct from '../../layouts/ProductPage/LandingProduct/LandingProduct'
import Productfaq from '../../layouts/ProductPage/ProductFAQ/ProductFAQ'

function ProductPage() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
       <SearchNav />
       <LandingProduct />
       <Productfaq />
       <Footer />
    </div>
  )
}

export default ProductPage;