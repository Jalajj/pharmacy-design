import React from "react";
import "./resp-product.css";

const RespProduct = () => {
  return (
      <div>
    <div className={'respProduct'}>
      <img
        alt=""
        className={'screenshot20220403At4527'}
        src="https://static.overlay-tech.com/assets/74d08605-d053-4ec0-9ce3-5a2af50e05e4.png"
      />
      <div className={'flexWrapperOne-product-resp'}>
        <p
          className={
            'optimumNutritionOnGoldStandard100'
          }
        >
          Optimum Nutrition (ON) Gold Standard 100% Whey
          Protein
        </p>
        <p className={'jarOf2lbPowder'}>
          Jar of 2lb powder
        </p>
        <div className={'respProduct'}>
          <p className={'num1500'}>₹1500</p>
          <p className={'num2999'}>₹2999</p>
          <p className={'num50Off-mobile'}>50% off</p>
        </div>
      </div>
    </div>
    <div className={'addToBagTwo'} style={{marginTop:'30px'}}>
      <img
        alt=""
        className={'shoppingBag'}
        src="https://static.overlay-tech.com/assets/19a80e5e-9ae0-45da-b164-22aa9c527e19.svg"
      />
      <p className={'addToBag'}>Add to Bag</p>
      <div className={'flexWrapperOne-resp-add'}>
        <p className={'hyphen-resp-add m-auto'}>-</p>
      </div>
      <p className={'num01-resp-add'}>01</p>
      <div className={'flexWrapperTwo-resp-add'}>
        <p className={'hyphen-resp-add m-auto'}>&#43;</p>
      </div>
    </div>
    </div>
  );
};

export default RespProduct;