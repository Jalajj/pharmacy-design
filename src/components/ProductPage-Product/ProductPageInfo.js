import React from "react";
import './productinfo.css'

const ProductPageInfo = () => {
  return (
    <div className={'productPageInfo'}>
      <div className={'flexWrapperOne-info'}>
        <p className={'prescriptionRequired m-auto'}>
          Prescription Required
        </p>
      </div>
      <div className={'flexWrapperTwo-info'}>
        <p
          className={
           'whyDoesMyMedicationLookDifferent'
          }
        >
          Why does my medication look different?
        </p>
        <p
          className={
            'differentManufacturersProduceDifferen'
          }
        >
          Different manufacturers produce different looking
          medications to distinguish themselves from one
          another, but the drug, strength, and ingredients
          are the same.
        </p>
      </div>
      <p className={'manufactureMicroLabsLtd'}>
        <strong
          className={
            'manufactureMicroLabsLtdEmphasis0'
          }
        >
          Manufacture:
        </strong>{" "}
        Micro Labs Ltd
      </p>
      <p className={'num1Strip20Tablets'}>
        <strong
          className={
           'manufactureMicroLabsLtdEmphasis0'
          }
        >
          1 Strip:
        </strong>{" "}
        20 tablets
      </p>
      <p className={'saltCompositionParacetamol650mg'}>
        <strong
          className={
          'manufactureMicroLabsLtdEmphasis0'
          }
        >
          Salt Composition:
        </strong>{" "}
        Paracetamol (650mg)
      </p>
    
      <p className={'num50Off'}>50% off</p>
     
      <p className={'ourPrice25'}>Our Price ₹25</p>
    </div>
  );
};

export default ProductPageInfo;