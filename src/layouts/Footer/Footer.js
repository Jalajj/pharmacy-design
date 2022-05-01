import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className={'group6-footer container'} style={{marginTop:'100px'}}>
        <div className={'flexWrapperOne-footer'}>
          <p className={'comeShopOffline'}>
            Come Shop Offline
          </p>
          {/* <div className={'relativeWrapperOne'}>
            <div className={'rectangle33'} />
            <div className={'rectangle34'} />
            <div className={'rectangle35'} />
            <p className={'connaughtPlace'}>
              Connaught Place
            </p>
            <p className={'patelNagar'}>Patel Nagar</p>
            <p className={'rajpathArea'}>
              Rajpath Area
            </p>
          </div> */}
        </div>
        <div className={'flexWrapperTwo-footer'}>
          <p className={'checkOut'}>Check out</p>
          <p className={'blogs'}>Blogs</p>
          <p className={'blogs'}>All Medications</p>
          <p className={'blogs'}>Special Offers</p>
        </div>
        <div className={'flexWrapperThree-footer'}>
          <p className={'wereOnline'}>We’re Online</p>
          <p className={'blogs'}>Facebook</p>
          <p className={'blogs'}>Instagram</p>
          <p className={'blogs'}>Twitter</p>
        </div>
        <div className={'flexWrapperTwo-footer'}>
          <p className={'wereOnline'}>Shop on App</p>
          <img
            alt=""
            className={'appStore'}
            src="https://static.overlay-tech.com/assets/11d0deba-da5f-4a2d-a1e6-9769f6a9b427.png"
          />
           <img
            alt=""
            className={'appStore'}
            src="https://static.overlay-tech.com/assets/11d0deba-da5f-4a2d-a1e6-9769f6a9b427.png"
          />
          
        </div>
      </div>
      <div className="text-center" style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <p className={'termsAndConditions-footer text-center'}>
        Terms and Conditions
      </p>
      <p className={'privacyPolicy text-center'}>Privacy Policy</p>
      </div>
     <div className="text-center">
      <p
        className={'copyright2022SugamAushadhiPvtLtd'}
      >
        Copyright{" "}
        <strong
          className={
           'copyright2022SugamAushadhiPvtLtdEmphasis1'
          }
        >
          Ⓒ
        </strong>{" "}
        2022{" "}
        <strong
          className={
            'copyright2022SugamAushadhiPvtLtdEmphasis3'
          }
        >
          Sugam Aushadhi
        </strong>{" "}
        Pvt Ltd. All rights reserved
      </p>
      </div>
    </div>
  );
};

export default Footer;