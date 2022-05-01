import React from 'react'
import Categories from '../../layouts/Category/Categories/Categories';
import Landing from '../../layouts/Category/Landing-Layout/Landing';
import Footer from '../../layouts/Footer/Footer';
import ProductLayout from '../../layouts/Home/Product/Product-layout';
import Nav from './../../layouts/Nav/Nav';
import { useGlobalContext } from './../../context/index';
import MainNav from '../../mobile/Layout/MobileNav/MainNav';

function Category() {
  const {mobileScreen} = useGlobalContext();

  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
      {mobileScreen ? <MainNav /> : <Nav />}
      <Landing />
      <Categories />
        <ProductLayout />
        {/* <Footer /> */}
    </div>
  )
}

export default Category