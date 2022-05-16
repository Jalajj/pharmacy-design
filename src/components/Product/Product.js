import React from "react";
import "./product.css";
import { Link } from 'react-router-dom';


const Product = ({price, category, mrp, name, productImg}) => {
 
  return (
    <>
    <Link className="product"  style={{cursor:'pointer', textDecoration:'none'}} to='/product'>
      <img
        alt="product"
        className={'product-img'}
        src={productImg}
      />
      <p
        className={'optimumNutritionOnGoldStandard100'}
      >
       {name}
      </p>
      {/* <p className={'jarOf2lbPowder'}>
        {category}
      </p> */}
      <div className={'flex-wrapper'}>
        <p className={'mrp2999'}>MRP <span style={{textDecoration:'line-through'}}>{mrp}</span></p>
       {/* {mobileScreen ? null : <p className={'num50Off'}>50% off</p>} */}
      </div>
      {/* {mobileScreen &&  */}
      <div className="flex-wrapper-2">
      <p className={'num50Off'}>50% off</p>
      </div>
      {/* } */}
      <p className={'num1499'}>{price}</p>
      {/* <div > */}
       <Link className="add-to-cart" to='/checkout' style={{textDecoration:'none', color:'black'}}><p className="add-to-cart-text m-auto text-center mt-2">Add to Cart</p></Link>
      {/* </div> */}
      </Link>
    </>
  );
};

export default Product;