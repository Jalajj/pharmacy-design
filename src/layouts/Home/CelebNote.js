import React from "react";
import { useGlobalContext } from "../../context";
import "./celebnote.css";

const CelebNote = () => {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className="container" style={{backgroundColor:'rgba(248, 212, 137, 1)', 
    borderRadius:10, maxWidth:1119, marginBottom:'100px', marginTop:'100px'}}>
      <div className="row">
        <div className="col-md-3">
        <img
        className='celeb-narendra'
        alt="pm"
        style={mobileScreen ? {position:'relative', bottom:70, right:20}: null}
        src="https://static.overlay-tech.com/assets/303ce4aa-b026-445a-86aa-38171a89c7e1.png"
      />
        </div>
        <div className="col-md-9 m-auto" style={mobileScreen ? null : {paddingLeft:'15%'}}>
        <p
          className={
            'everyoneShouldHaveSafeAffordableM'
          }
        >
          &#34;Everyone should have safe, affordable
          medicines with transparent prices.&#34;
        </p>
        <p className={'narendraModi'}>
          - Narendra Modi
        </p>
        </div>
      </div>
    </div>
  );
};

export default CelebNote;
