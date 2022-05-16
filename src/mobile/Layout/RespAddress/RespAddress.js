import React from "react";
import Info from "../../../layouts/Checkout/Info";
import './resp-address.css'

const RespAddress = () => {
  return (
    <div className={'respAddress mt-5'}>
     <Info />
      {/* <RespInfo className={respInfo} /> */}
      <div className={'flexWrapperTwo-resp-address mt-3'}>
        <div className={'flexWrapperThree-resp-address'}>
          <p className={'b m-auto'}>B</p>
        </div>
        <p className={'shippingAddress-resp-address'}>
          SHIPPING ADDRESS
        </p>
      </div>
      <p className={'patientName-resp-address'}>Patient Name</p>
      <input className="flexWrapperEight-resp-address nevaidAggarwal-resp-address"
       placeholder="Nevaid Aggarwal" />
      {/* <div className={'flexWrapperEight-resp-address'}> */}
        {/* <p className={'nevaidAggarwal-resp-address'}>
          Nevaid Aggarwal
        </p> */}
      {/* </div> */}
      <p className={'address-resp-address'}>Address*</p>
      <input
        className={'rectangle79-resp-address'}
      />
      <p className={'landMark-resp-address'}>Land Mark</p>
      <input
        alt=""
        className={'rectangle83-resp-address'}
      />
      <p className={'city-resp-address'}>City*</p>
      <input
       
        className={'rectangle83-resp-address'}
      />
      <p className={'postalCode-resp-address'}>Postal Code*</p>
      <img
        alt=""
        className={'rectangle82-resp-address'}
        src="https://static.overlay-tech.com/assets/be0f8806-1728-4f63-a32c-071a8e0d17f1.png"
      />
      <div className={'flexWrapperFour-resp-address'}>
        <div className={'flexWrapperFive-resp-address'}>
          <p className={'c m-auto'}>C</p>
        </div>
        <p className={'uploadPrescription-resp-address m-auto'}>
          UPLOAD PRESCRIPTION
        </p>
      </div>
      <div className={'flexWrapperSix-resp-address'}>
        <div className={'flexWrapperSeven-resp-address'}>
          <p className={'c m-auto'}>D</p>
        </div>
        <p className={'paymentMethod-resp-address m-auto'}>
          PAYMENT METHOD
        </p>
      </div>
    </div>
  );
};

export default RespAddress;