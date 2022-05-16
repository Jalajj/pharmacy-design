import React from "react";
import './uploaded.css'

const Uploaded = () => {
  return (
    <div className={'uploading'}>
      <div className={'flexWrapperTwo-uploading'}>
        <img
          alt=""
          className={'rectangle70-uploading'}
          src="https://static.overlay-tech.com/assets/03ce4870-bdb9-468f-9b3a-0288c950f0c8.png"
        />
        <p className={'prescriptionUploaded-uploading'}>
          Prescription Uploaded
        </p>
      </div>
      <div className={'flexWrapperOne-uploading'}>
        <img
          alt=""
          className={'group5-uploading'}
          src="https://static.overlay-tech.com/assets/12b5618d-28f5-423c-8079-b62e9e4ddcdb.png"
        />
        <p
          className={
           ' receivedYourPrescriptionWeWillAdd-uploading'
          }
        >
          Received your prescription, we will add all the
          medicines to your cart soon and call you{" "}
        </p>
      </div>
    </div>
  );
};

export default Uploaded;