import React from 'react'
import Search from '../../mobile/components/Search/Search';
import MobileNav from '../../mobile/Layout/MobileNav/MobileNav';
import RespLanding from '../../mobile/Layout/RespHome/RespLanding';

function ResponsiveHome() {
  return (
    <div className='container' style={{backgroundColor:'#FDFAF6', marginTop:'3%'}}>
    <MobileNav />
       <Search />
        <RespLanding />
    </div> 
  )
}

export default ResponsiveHome;