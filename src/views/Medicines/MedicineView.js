import React from 'react'
import Landing from '../../layouts/Category/Landing-Layout/Landing'
import Footer from '../../layouts/Footer/Footer'
import CartSuggestions from '../../layouts/Medicines/cart-suggestions/cart-suggestions'
import MedCTA from '../../layouts/Medicines/MedCTA/MedCTA'
import MedicineList from '../../layouts/Medicines/MedicineList/MedicineList'
import Nav from '../../layouts/Nav/Nav'

function MedicineView() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#FDFAF6'}}>
       <Nav />
       <Landing />
       <MedicineList />
       <CartSuggestions />
       <MedCTA />
       <Footer />
    </div>
  )
}

export default MedicineView