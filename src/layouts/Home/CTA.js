import React from 'react'
import { LandingCards } from './LeftView'
import './cta.css'
import { useGlobalContext } from '../../context'
import Search from '../../mobile/components/Search/Search';

function CTA() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='cta-container' style={{marginTop:100, marginBottom:100}}>
        <h1 className='cta-title'>You are just a search away from your medicine</h1>
        {mobileScreen ? <Search containerClass={'search-home'} label={'Search by topic'} /> : <div className='search-input-cta' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <input className='search-cta' placeholder='Search. We have everything' />
        </div>}
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <LandingCards />
        </div>
      
    </div>
  )
}

export default CTA