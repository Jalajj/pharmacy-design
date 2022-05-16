import React from "react";
import './resp-med.css'

const RespMedicineList = () => {
  return (
    <div className={'respMedicineList mt-5'}>
      <p className={'acidReflux'}>Acid Reflux</p>
      {/* <div className={'rectangle260'} /> */}
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'alcoholDependence'}>
        Alcohol Dependence
      </p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'allergies'}>Allergies</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'angina'}>Angina</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'antiFungal'}>Anti-fungal</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'antiParasitic'}>Anti-Parasitic</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'asthmaCopd'}>Asthma/COPD</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'birthControl'}>Birth Control</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'antiParasitic'}>Blood Thinner </p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'boneHealth'}>Bone Health</p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
      <p className={'highCholesterol'}>
        High Cholesterol
      </p>
      <hr className='m-auto mb-3' style={{border:'1px solid black', width:'90%'}}></hr>
    </div>
  );
};

export default RespMedicineList;