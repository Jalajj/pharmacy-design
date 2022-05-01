import React from 'react'
import Search from '../../mobile/components/Search/Search'
import './leftview.css'
import { useGlobalContext } from './../../context/index';

export const LandingCards = () => {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='row mt-4' style={mobileScreen ? {marginLeft:'2%',display:'grid', gridTemplateColumns:'repeat(3, 1fr)'} : {marginLeft:'5%'}}>
    <div className='col-md-4 card-container'>
    <img
        alt="box"
        className='box-img m-auto'
        src="https://static.overlay-tech.com/assets/99486dba-4b4f-4ae2-a418-1935165026ca.png"
      />
      <p className='box-desc '>View all Medications</p>
    </div>
    <div className='col-md-4 card-container'>
    <img
        alt="box"
        className='box-img m-auto'
        src="https://static.overlay-tech.com/assets/99486dba-4b4f-4ae2-a418-1935165026ca.png"
      />
      <p className='box-desc'>View all Medications</p>
    </div>
    <div className='col-md-4 card-container'>
    <img
        alt="box"
        className='box-img m-auto'
        src="https://static.overlay-tech.com/assets/99486dba-4b4f-4ae2-a418-1935165026ca.png"
      />
      <p className='box-desc'>View all Medications</p>
    </div>
    </div>
  )
}

function LeftView() {
  const {mobileScreen} = useGlobalContext(); 
  return (
    <div className='col-md-6 left-container container'>
        <div style={{marginBottom:'4%'}}>
            <h1 className='home-title mt-5'>No price games.</h1>
             <h1 className='home-title'>Huge drug savings.</h1>
        </div>
       {mobileScreen ?
       <Search containerClass={'search-home'} label={'Search by topic'} />
       :
        <div className='search-input'>
            <input className='search' placeholder='Search. We have everything' />
        </div>}
         <LandingCards />
    </div>
  )
}

export default LeftView