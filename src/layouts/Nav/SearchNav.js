import React from "react";
import "./search-nav.css";

const SearchNav = () => {
  return (
    <div className={'searchNav'}>
      <div className={'group1-nav'}>
        <img
          alt=""
          className={'screenshot20220403At12501'}
          src="https://static.overlay-tech.com/assets/925ae363-c7ab-4899-bcae-4c49810a06e2.png"
        />
      </div>
      <div className={'flexWrapperTwo-nav'}>
        {/* <div className={'search-nav'}> */}
          {/* <div className={'vector-nav'} /> */}
          {/* <img
            alt=""
            className={'vectorTwo-nav'}
            src="https://static.overlay-tech.com/assets/74d27dc3-3614-4164-a1a4-05dc4ee23638.svg"
          /> */}
          
        {/* </div> */}
        <input placeholder='Search, we got you everything required'
         className='searchWeHaveEverything-nav' 
         style={{border:'none'}}
         />
      </div>
      <p className={'categories-nav'}>Categories</p>
      <p className={'compareMedicines-nav'}>
        Compare Medicines
      </p>
      <p className={'storeLocator'}>Store Locator</p>
      <div className={'flexWrapperThree-nav'}>
        <img
          alt=""
          className={'shoppingCart-nav'}
          src="https://static.overlay-tech.com/assets/943f6db1-1b92-4111-bd3a-b5a7e46fdeaf.svg"
        />
        <p className={'num02'}>02</p>
      </div>
      <div className={'flexWrapperOne-nav'}>
        <p className={'signIn-nav text-center mt-2'}>Sign in</p>
      </div>
    </div>
  );
};

export default SearchNav;