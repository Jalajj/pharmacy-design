import React from 'react';
import './addtocart.css';
import elipse from '../../assets/elipse.png'

function AddToCart() {
  return (
    <div>
         <div className='row add-to-cart-container' style={{marginLeft:'15px'}}>
               <div className={'flexWrapperThree-product-page m-auto mt-3'} style={{width:'282px', height:60, marginRight:'5%'}}>
        <p className={'submit-cta-product'}>Add to cart</p>
        </div>
        <div className={'productCount m-auto mt-3' } style={{width:100, height:60}}>
        <div className={'relativeWrapperOne'}>
        <img  src={elipse} style={{position:'relative', right:10}} alt='count' />
        <p style={{position:'relative', zIndex:100, right:1, bottom:40, color:'white', fontSize:30}}>-</p>
        {/* <p className={'hyphen'}>-</p> */}
        {/* <div className={'ellipse2'}/></div> */}
        </div>
        <p  className={'num01 '} style={{position:'relative', right:9, bottom:4}}>01</p>
        <div className={'relativeWrapperOne'}>
        <img  src={elipse} alt='count' style={{position:'relative', right:7}} />
        <p style={{position:'relative', zIndex:100, right:1, bottom:36, color:'white', fontSize:25}}>+</p>
        {/* <div className={'ellipse2'}/> */}
        </div> 
        </div>
        
          </div>
    </div>
  )
}

export default AddToCart