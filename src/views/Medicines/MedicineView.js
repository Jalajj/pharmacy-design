import React from 'react'
import { useGlobalContext } from '../../context'
import Landing from '../../layouts/Category/Landing-Layout/Landing'
import Footer from '../../layouts/Footer/Footer'
import CartSuggestions from '../../layouts/Medicines/cart-suggestions/cart-suggestions'
import MedCTA from '../../layouts/Medicines/MedCTA/MedCTA'
import MedicineList from '../../layouts/Medicines/MedicineList/MedicineList'
import Nav from '../../layouts/Nav/Nav'
import RespMedicineList from '../../mobile/Layout/Medicines/RespMedicineList'
import MainNav from '../../mobile/Layout/MobileNav/MainNav'
import RespFooter from '../../mobile/Layout/RespFooter/RespFooter';

function MedicineView() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
       {mobileScreen ? <MainNav /> : <Nav />}
       <Landing />
       {mobileScreen ? <RespMedicineList /> : <MedicineList />}
       <CartSuggestions />
       <MedCTA />
       {mobileScreen ? <RespFooter /> : <Footer />}
    </div>
  )
}

export default MedicineView