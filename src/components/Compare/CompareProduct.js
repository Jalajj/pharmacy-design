import React from "react";
import "./compare-product.css";

const CompareProduct = () => {

  return (
    <div>
      <div className={'group24'}>
        <div className={'flexWrapperOne-compare'}>
          <p
            className={
              'zincovitTabletApexLaboratories'
            }
          >
            Zincovit Tablet (Apex Laboratories)
          </p>
          <p className={'paracetamol650mg'}>
            Paracetamol (650mg)
          </p>
        </div>
        <p className={'num8607'}>$86.07</p>
        <p className={'num43'}>$43</p>
        <div className={'flexWrapperTwo-compare'}>
          <p
            className={
              'zincovitTabletApexLaboratories'
            }
          >
            Dolo 650 (Micro Labs)
          </p>
          <p className={'paracetamol650mgTwo'}>
            Paracetamol (650mg)
          </p>
        </div>
        <p className={'num43Two'}>$43</p>
      </div>
      <p className={'delete'}>Delete</p>
    </div>
  );
};

export default CompareProduct;