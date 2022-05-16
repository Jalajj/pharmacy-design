import React from "react";
import './resp-nav.css'

const MobileNav = () => {
  return (
    <div className={'mobileNav'}>
      <img
        alt=""
        className={'alignLeft-mobile'}
        src="https://static.overlay-tech.com/assets/655a59c6-eeba-43cd-aadc-7abde4a21aab.svg"
      />
      <p className={'heySherya'}>Hey Sherya</p>
      <div className={'flexWrapperOne-mobile'}>
        <img
          alt=""
          className={'shoppingBag'}
          src="https://static.overlay-tech.com/assets/4f78aabd-0ffa-4109-8419-1eb49d413e13.svg"
        />
      </div>
    </div>
  );
};

export default MobileNav;