import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {

  return (
    <div className={'nav'}>
      <div className={'group1'}>
      <Link to='/' style={{cursor:'pointer', textDecoration:'none'}}>
        <img
          alt="logo"
          className={'screenshot20220403At12501'}
          src="https://static.overlay-tech.com/assets/90c73d71-5276-48ad-9626-3f370306a87f.png"
        />
        </Link>
      </div>
      <div className={'frame17 mt-3'}>
      <Link to='/compare' style={{cursor:'pointer', textDecoration:'none'}}>
      <p className={'compareMedicines'}>
          Compare medicines
        </p>
      </Link>
      <Link to='/medication' style={{cursor:'pointer', textDecoration:'none'}}>
        <p className={'compareMedicines'}>
          All Medications
        </p>
        </Link>
        <Link to='/category' style={{cursor:'pointer', textDecoration:'none'}}>
        <p className={'compareMedicines'}>
          Categories
        </p>
        </Link>
        <p className={'compareMedicines'}>Blogs</p>
        {/* <Link to='/product' style={{cursor:'pointer', textDecoration:'none'}}>
        <p className={'compareMedicines'}>Product</p>
        </Link>
        <Link to='/checkout' style={{cursor:'pointer', textDecoration:'none'}}>
        <p className={'compareMedicines'}>Checkout</p>
       </Link> */}
      </div>
      
      <div className="float-right" style={{height:40, width:120, backgroundColor:'black', borderRadius:'2px', zIndex:10000, position:"relative" ,left:60}}>
      <Link to='/auth' style={{cursor:'pointer', textDecoration:'none'}}>
      <p className="text-center mt-2 text-white">Sign in</p>
      </Link>
      </div>
    </div>
  );
};

export default Nav;