import React from 'react'
import './suggested-product.css'

function SuggestedProduct() {
  return (
    <div className='m-auto'>
<div className={'suggestionProduct-suggested'}>
      <img
        alt=""
        className={'rectangle205-suggested'}
        src="https://static.overlay-tech.com/assets/21ef9acf-092d-49fd-9edf-8c58bd7323cb.png"
      />
      <div className={'flexWrapperTwo-suggested'}>
        <p className={'zincovitTablet'}>
          Zincovit Tablet
        </p>
        <p className={'paracetamol650mg'}>
          Paracetamol (650mg)
        </p>
      </div>
      <p className={'glimepiride'}>Glimepiride </p>
      <p className={'num20'}>20</p>
      <p className={'num8607'}>$86.07</p>
      <p className={'num45'}>&#43;45%</p>
      <p className={'num8607Two'}>$86.07</p>
      <div className={'flexWrapperOne-suggested'}>
        <p className={'addToCart-suggested m-auto'}>Add to cart</p>
      </div>
    </div>
    </div>
  )
}

export default SuggestedProduct