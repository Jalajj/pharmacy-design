import React from 'react'
import { useGlobalContext } from '../../context';
import About from '../../layouts/Home/About';
import CelebNote from '../../layouts/Home/CelebNote';
import CTA from '../../layouts/Home/CTA';
import LeftHome from '../../layouts/Home/LeftView';
import ProductLayout from '../../layouts/Home/Product/Product-layout';

import MainNav from '../../mobile/Layout/MobileNav/MainNav';

import Nav from './../../layouts/Nav/Nav';

function Home() {
  const {mobileScreen} = useGlobalContext();
  return (
      <div style={{backgroundColor:'#FDFAF6', marginTop:'-3%'}}>
   <div className='container-fluid'>
       { mobileScreen ? <MainNav /> : <Nav /> }
       <div className='row'>
         <LeftHome />
        {/* {mobileScreen ? null: <RightHome />} */}
       </div>
       <CelebNote />
       <ProductLayout />
       <About />
       <CTA />
       {/* <Footer /> */}
    </div>
      </div>
    
  )
}

export default Home