import React from 'react'
import { useGlobalContext } from '../../context';
import About from '../../layouts/Home/About';
import CelebNote from '../../layouts/Home/CelebNote';
import CTA from '../../layouts/Home/CTA';
import LeftHome from '../../layouts/Home/LeftView';
import ProductLayout from '../../layouts/Home/Product/Product-layout';
import RespFooter from '../../mobile/Layout/RespFooter/RespFooter';
import MainNav from '../../mobile/Layout/MobileNav/MainNav';

import Nav from './../../layouts/Nav/Nav';
import Footer from '../../layouts/Footer/Footer';
import RightHome from '../../layouts/Home/RightHome';

function Home() {
  const {mobileScreen} = useGlobalContext();
  return (
      <div style={{backgroundColor:'#FDFAF6'}}>
   <div className='container-fluid'>
       { mobileScreen ? <MainNav /> : <Nav /> }
       <div className='row'>
         <LeftHome />
         {mobileScreen ? null: <RightHome />} 
       </div>
       <CelebNote />
       <ProductLayout />
       <About />
       <CTA />
       {mobileScreen ? <RespFooter /> : <Footer />}
    </div>
      </div>
    
  )
}

export default Home