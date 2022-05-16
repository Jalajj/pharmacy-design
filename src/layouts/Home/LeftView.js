import React from 'react'
import Search from '../../mobile/components/Search/Search'
import './leftview.css'
import { useGlobalContext } from './../../context/index';
import paper from '../../assets/paper.png';
import person from '../../assets/person.png';

export const LandingCards = ({cardContainer, cardImg, cardDesc}) => {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className={`row mt-4`} style={mobileScreen ? {marginLeft:'2%',display:'grid', gridTemplateColumns:'repeat(3, 1fr)'} : {marginLeft:'1%'}}>
    <div className={`col-md-4 ${cardContainer ? cardContainer : 'card-container'}`}>
    <img
        alt="box"
        className={` ${cardImg ? cardImg : 'box-img m-auto'}`}
        src={paper}
      />
      <p className={` ${cardDesc ? cardDesc : 'box-desc'}`}>Upload the Prescription</p>
    </div>
    <div className={`col-md-4 ${cardContainer ? cardContainer : 'card-container'}`}>
    <img
        alt="box"
        className={` ${cardImg ? cardImg : 'box-img m-auto'}`}
        src={person}
      />
      <p className={` ${cardDesc ? cardDesc : 'box-desc'}`}>Call the pharmastic</p>
    </div>
    <div className={`col-md-4 ${cardContainer ? cardContainer : 'card-container'}`}>
    <img
        alt="box"
        className={` ${cardImg ? cardImg : 'box-img m-auto'}`}
        src="https://static.overlay-tech.com/assets/99486dba-4b4f-4ae2-a418-1935165026ca.png"
      />
      <p className={` ${cardDesc ? cardDesc : 'box-desc'}`}>View all Medications</p>
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
       <Search containerClass={'search-home'} label={'Search by topic'} searchClass='search-img' />
       :
        <div className='search-input'>
            <input className='search' placeholder='Search. We have everything' />
        </div>}
         <LandingCards />
    </div>
  )
}

export default LeftView