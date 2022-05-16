import React from 'react'
import './landing.css'
import { useGlobalContext } from './../../../context/index';
import Search from '../../../mobile/components/Search/Search';
import search from '../../../assets/search.png'

function Landing() {
  const {mobileScreen} = useGlobalContext()
  return (
    <div className={mobileScreen ? 'landing-category container' :'landingLayout'} style={mobileScreen ? null : {backgroundColor:' rgba(223, 240, 248, 1)'}}>
      <p className={'ourCategories'}>Our Categories</p>
      {mobileScreen ? <Search /> :  <div className={'flexWrapperOne-category'}>
         <div className={'search-category'}>
         <img src={search} alt='search' />
          {/* <div className={'vector-category'} />
          <img
            alt=""
            className={'vectorTwo-category'}
            src="https://static.overlay-tech.com/assets/d87970f5-fdfb-4262-b9bb-880cf5c6c348.svg"
          /> */}
        </div>
        <input placeholder='Search, we got you everything required'
         className='searchWeGotYouEverythingRequired-category' 
         style={{border:'none'}}
         />
        {/* <p
          className={
           'searchWeGotYouEverythingRequired-category'
          }
        >
          Search, we got you everything required
        </p> */}
      </div>}
    </div>
  )
}

export default Landing