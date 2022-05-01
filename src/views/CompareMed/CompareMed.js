import React from 'react'
import Landing from '../../layouts/Category/Landing-Layout/Landing'
import CompareComponent from '../../layouts/CompareMed/CompareHead/CompareComponent'
import Footer from '../../layouts/Footer/Footer'
import Nav from '../../layouts/Nav/Nav'

function CompareMed() {
  return (
    <div className='container-fluid'>
      <Nav />
      <Landing />
      <CompareComponent />
      <Footer />
    </div>
  )
}

export default CompareMed