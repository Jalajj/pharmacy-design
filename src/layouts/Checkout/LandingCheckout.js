import React from 'react'
import Cart from '../../components/Checkout/Cart'
import Product from '../../components/Product/Product'
import productDatacheck from './productData'
import Address from './Address';
import { useGlobalContext } from '../../context';
import RespAddress from '../../mobile/Layout/RespAddress/RespAddress';
import Info from './Info';


function LandingCheckout() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container' style={{marginTop:'50px'}}>
     <div className='row'>
         <div className='col-md-8'>
            <h1 style={{fontFamily:'Poppins', fontSize:'40'}}>Quick Buys</h1>
            <div className='row' style={mobileScreen ? {display:'grid', gridTemplateColumns:'repeat(2, 1fr)', marginTop:50} : null}>
        {productDatacheck.map((product,i) => {
          return (
            <div className='col-md-4 mt-4' key={i} >
            <Product  name={product.name} mrp={product.mrp} productImg={product.src} price={product.price} category={product.category} />
            </div>
          )
        })}
      </div>
           {mobileScreen ? null : <hr style={{margin:40}} />} 
           { mobileScreen? null : <div className='info'>
             <Info />
           </div>}
           {/* <div className='shipping-address'> */}
             {mobileScreen ? <RespAddress />: <Address />}
           {/* </div> */}
         </div>
         <div className='col-md-3 mt-5'>
             <Cart /> 
         </div>
     </div>
    </div>
  )
}

export default LandingCheckout