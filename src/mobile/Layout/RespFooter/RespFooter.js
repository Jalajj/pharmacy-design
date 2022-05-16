import React from "react";

import './resp-footer.css'

const RespFooter = () => {
  return (
    <div className={'respFooter'}>
      <p className={'comeShopOffline-resp'}>
        Come Shop Offline
      </p>
      {/* <div className={'relativeWrapperOne'}>
        <div className={'rectangle33'} />
        <div className={'rectangle34'} />
        <div className={'rectangle35'} />
        <p className={'connaughtPlace'}>
          Connaught Place
        </p>
        <p className={patelNagar}>Patel Nagar</p>
        <p className={rajpathArea}>Rajpath Area</p>
      </div> */}
      <p className={'checkOut-resp'}>Check out</p>
      <p className={'blogs--resp'}>Blogs</p>
      <p className={'allMedications-resp'}>
        All Medications
      </p>
      <p className={'specialOffers-resp'}>Special Offers</p>
      <p className={'wereOnline-resp'}>We’re Online</p>
      <p className={'facebook-resp'}>Facebook</p>
      <p className={'instagram-resp'}>Instagram</p>
      <p className={'twitter-resp'}>Twitter</p>
      <p className={'shopOnApp-resp'}>Shop on App</p>
      <img
        alt=""
        className={'appStore-resp'}
        src="https://static.overlay-tech.com/assets/50e9ea0e-84a5-422a-9172-b86465831721.png"
      />
      {/* <div className={frame20}>
        <GooglePlay className={googlePlay} />
      </div> */}
      <img
        alt=""
        className={'appStore-resp'}
        src="https://static.overlay-tech.com/assets/50e9ea0e-84a5-422a-9172-b86465831721.png"
      />
      <p className={'termsAndConditions-resp'}>
        Terms and Conditions
      </p>
      <p className={'privacyPolicy-resp'}>Privacy Policy</p>
      <p
        className={'copyright2022SugamAushadhiPvtLtd-resp'}
      >
        Copyright{" "}
        <strong
          className={
           'copyright2022SugamAushadhiPvtLtdEmphasis1-resp'
          }
        >
          Ⓒ
        </strong>{" "}
        2022{" "}
        <strong
          className={
            'copyright2022SugamAushadhiPvtLtdEmphasis3-resp'
          }
        >
          Sugam Aushadhi
        </strong>{" "}
        Pvt Ltd. All rights reserved
      </p>
    </div>
  );
};

export default RespFooter;