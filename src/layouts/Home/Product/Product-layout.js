import React from 'react'
import Product from '../../../components/Product/Product'
import { useGlobalContext } from '../../../context'
import './product.css'
import productData from './productData'

function ProductLayout({supplement}) {
  const {mobileScreen} = useGlobalContext();

  return (
    <div className='container' style={supplement ? {marginTop:'70px'} : {marginTop:'100px'}}>
       {supplement ? null : <div className='title-container'>
       <h1 className='product-home-title'>Top offers only for <span style={{color:'#49A542'}}>Today</span>
       {/* <hr style={{borderBottom: '4px solid #49A542'}} /> */}
        </h1>
       </div>}
     
      <div className='row' style={mobileScreen ? {display:'grid', gridTemplateColumns:'repeat(2, 1fr)'} : null}>
        {productData.map((product,i) => {
          return (
            <div className='col-md-3 ' key={i} >
            <Product name={product.name} mrp={product.mrp} productImg={product.src} price={product.price} category={product.category} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductLayout;