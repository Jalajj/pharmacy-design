import React from "react";
import CompareProduct from "../../../components/Compare/CompareProduct";
import "./compare.css";

const CompareComponent = () => {
  return (
    <div className="container">
 <div className={'compareHead'} >
      <p className={'medication'}>Medication</p>
      <p className={'price'} style={{marginLeft:'11%'}}>Price </p>
      <p className={'sugamAushadhiMedicine'}>
        Sugam Aushadhi Medicine
      </p>
      <p className={'price'}>Price </p>
      
    </div>
    <div className='product-container' >
    <CompareProduct />
    <CompareProduct />
    <CompareProduct />
    <CompareProduct />
    </div>
   <div className='total-container m-5' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
   <div className={'totalTwo'}>
      <p className={'total'}>Total</p>
      <p className={'num38014'}>$380.14</p>
      <p className={'num315'}>$315</p>
      <p className={'num115'}>$115</p>
    </div>
   </div>
   <div className="cta-container m-5"  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
   <div className={'ctaCompare'}>
      <div className={'compare-cta'}>
        <p className={'addMyMedicinesToCart m-auto'}>
          Add my medicines to Cart
        </p>
      </div>
      <div className={'flexWrapperTwo-compare-cta'}>
        <p className={'addMyMedicinesToCart m-auto'}>
          Add Sugam Aushadhi’s medicnes to Cart
        </p>
      </div>
    </div>
   </div>
    </div>
   
  );
};

export default CompareComponent;