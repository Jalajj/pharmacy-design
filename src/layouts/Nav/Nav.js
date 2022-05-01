import React from "react";
import "./nav.css";

const Nav = () => {

  return (
    <div className={'nav'}>
      <div className={'group1'}>
        <img
          alt="logo"
          className={'screenshot20220403At12501'}
          src="https://static.overlay-tech.com/assets/90c73d71-5276-48ad-9626-3f370306a87f.png"
        />
      </div>
      <div className={'frame17 mt-3'}>
        <p className={'compareMedicines'}>
          Compare medicines
        </p>
        <p className={'compareMedicines'}>
          All Medications
        </p>
        <p className={'compareMedicines'}>
          Categories
        </p>
        <p className={'compareMedicines'}>Blogs</p>
      </div>
      <div className="float-right" style={{height:40, width:120, backgroundColor:'black', borderRadius:'2px', zIndex:10000}}>
      <p className="text-center mt-2 text-white">Sign in</p>
      </div>
    </div>
  );
};

export default Nav;