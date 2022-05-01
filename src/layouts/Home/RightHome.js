import React from 'react'
import PriceCard from '../../components/Pricecard/PriceCard'
import './rightview.css'

function RightHome() {
  return (
    <div className='col-md-5 right-container' style={{backgroundColor:'#DFF1F9'}}>
        <div className='row' style={{marginTop:'25%', marginLeft:'10%'}}>
             <div className='col-md-6'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 mt-4'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 mt-4'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
        </div>
    </div>
  )
}

export default RightHome