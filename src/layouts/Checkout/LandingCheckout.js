import React from 'react'
import Cart from '../../components/Checkout/Cart'
import Product from '../../components/Product/Product'
import productDatacheck from './productData'
import Info from './Info';
import Address from './Address';

function LandingCheckout() {
  return (
    <div className='container' style={{marginTop:'50px'}}>
     <div className='row'>
         <div className='col-md-8'>
            <h1 style={{fontFamily:'Poppins', fontSize:'40'}}>Quick Buys</h1>
            <div className='row'>
        {productDatacheck.map((product,i) => {
          return (
            <div className='col-md-4 mt-4' key={i}>
            <Product  name={product.name} mrp={product.mrp} price={product.price} category={product.category} />
            </div>
          )
        })}
      </div>
           <hr />
           <div className='info'>
             <Info />
           </div>
           <div className='shipping-address'>
              <Address />
           </div>
         </div>
         <div className='col-md-3'>
             <Cart />
         </div>
     </div>
    </div>
  )
}

export default LandingCheckout