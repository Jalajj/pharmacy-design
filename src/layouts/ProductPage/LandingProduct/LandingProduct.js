import React from 'react'
import Alternatives from '../../../components/ProductPage-Product/Alternatives'
import ProductPageInfo from '../../../components/ProductPage-Product/ProductPageInfo'
import ProductView from '../../../components/ProductPage-Product/ProductView'
import './landing-product.css'

function LandingProduct() {
  return (
    <div className='container-fluid product-landing' >
      <div className='row' style={{marginLeft:'5%'}}>
          <div className='col-sm'>
               <ProductView /> 
               <div className='row' style={{marginLeft:'15px'}}>
               <div className={'flexWrapperThree-cta m-auto mt-3'} style={{width:'282px', height:60, marginRight:'5%'}}>
        <p className={'submit-cta '}>Add to cart</p>
        </div>
        <div className={'productCount  m-auto mt-3' } style={{width:100, height:60}}>
        <div className={'relativeWrapperOne'}>
        {/* <p className={'hyphen'}>-</p> */}
        <div className={'ellipse2'}/></div><p className={'num01'}>01</p>
        <div className={'relativeWrapperOne'}>
        <div className={'ellipse2'}/></div></div>
          </div>
          </div>
          <div className='col-sm'>
             <ProductPageInfo />
              </div>
              <div className='col-sm'>
              <Alternatives />
              </div>
      </div>
    </div>
  )
}

export default LandingProduct