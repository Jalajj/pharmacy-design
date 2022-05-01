import React from 'react'
import SuggestedProduct from '../../../components/Suggestions/SuggestedProduct'
import './cart-suggestions.css'

function CartSuggestions() {
  return (
    <div className='container mt-5'>
    <div className='suggestion-title'>
    <h1 className='text-center'>Dementia Medications</h1>
    </div>
       <div className='suggestion-header mt-5'>
       <div className={'suggestionHeader'}>
      <p className={'medication'}>Medication</p>
      <p className={'manufacturer'}>Manufacturer</p>
      <p className={'packOf'}>Pack of</p>
      <p className={'retailPrice'}>Retail Price</p>
      <p className={'ourPrice'}>Our Price</p>
    </div>
    <div className='suggestion-product'>
        <SuggestedProduct />
        <SuggestedProduct />
        <SuggestedProduct />
    </div>
       </div>
    </div>
  )
}

export default CartSuggestions