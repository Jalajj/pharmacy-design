import React from "react";
import "./product.css";

const Product = ({price, category, mrp, name}) => {
  return (
    <div className='product'>
      <img
        alt="product"
        className={'screenshot20220403At4521'}
        src="https://static.overlay-tech.com/assets/da692ba9-c791-4973-b34d-b596294e1339.png"
      />
      <p
        className={'optimumNutritionOnGoldStandard100'}
      >
       {name}
      </p>
      <p className={'jarOf2lbPowder'}>
        {category}
      </p>
      {/* <div className={'flex-wrapper'}> */}
        <p className={'mrp2999'}>MRP {mrp}</p>
        {/* <p className={'num50Off'}>50% off</p> */}
      {/* </div> */}
      <p className={'num1499'}>{price}</p>
    </div>
  );
};

export default Product;