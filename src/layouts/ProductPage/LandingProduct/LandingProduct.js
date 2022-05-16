import React from 'react'
import Alternatives from '../../../components/ProductPage-Product/Alternatives'
import ProductPageInfo from '../../../components/ProductPage-Product/ProductPageInfo'
import ProductView from '../../../components/ProductPage-Product/ProductView'
import './landing-product.css'
import { useGlobalContext } from './../../../context/index';
import RespProductPage from '../../../mobile/components/Product/RespProductPage'

import AddToCart from '../../../components/ProductPage-Product/AddToCart'

function LandingProduct() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid product-landing' >
          <div className={'component2-view'}>
      <p className={'allMedications-view'}>
        All Medications
      </p>
      <div className={'chevronRight-view'}>
        <img
          alt=""
          className={'vector-view'}
          src="https://static.overlay-tech.com/assets/c39c1382-5dca-4b94-869d-5c8e8e2127a7.svg"
        />
      </div>
      <p className={'dolo650-view'}>Dolo 650</p>
    </div>
      <div className='row' style={{marginLeft:'5%'}}>
   
          <div className='col-sm'>
              {mobileScreen ? <RespProductPage /> : <ProductView />  } 
             
               {mobileScreen ? null : <AddToCart />}
          </div>
          <div className='col-sm '>
             <ProductPageInfo />
            
           </div>
            { mobileScreen && <div className='add-to-cart-resp' style={{position:'relative', right:170}}>
            <AddToCart />
          </div>}
              <div className='col-sm'>
              <Alternatives />
              </div>
      </div>
    </div>
  )
}

export default LandingProduct