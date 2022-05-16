import React from 'react'
import PriceCard from '../../components/Pricecard/PriceCard'
import './rightview.css'

function RightHome() {
  return (
    <div className='col-md-5 right-container' style={{backgroundColor:'#DFF1F9'}}>
    <div className='fade-container-top' />
    
        <div className='row' style={{marginTop:'15%', marginLeft:'3%'}}>
             <div className='col-md-6 card-1'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 card-2' style={{marginTop:100}}>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 mt-4 card-3'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 card-4' style={{marginTop:80}}>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 card-5'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
             <div className='col-md-6 card-6'>
                 <PriceCard retail='Retail price ₹234.45' price='₹34.99' name="Imatinib" sidenote={'(Generic for Gleevec)'} />
             </div>
        </div>
        <div className='fade-container-bottom' />
    </div>
  )
}

export default RightHome