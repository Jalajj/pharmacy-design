import React from "react";
import  "./leftview.css";
import { useGlobalContext } from './../../context/index';

const LeftView = ({btn}) => {
  const [message, setMessage] = React.useState(false);
  const {mobileScreen} = useGlobalContext();

  return (
    <div className={'leftView'}>
      {mobileScreen? null :<div className={'group6'}>
        <img
          alt=""
          className={'screenshot20220403At12501'}
          src="https://static.overlay-tech.com/assets/2e6dc612-946a-4933-8cd7-da6013e42c62.png"
        />
      </div>}
      {message && <div className="message text-center" style={{width:'100%' , margin:'auto'}}>
         <p className="text-center m-auto">Please login before uploading prescription. It super easy</p>
      </div>}
      <p className={'sugamAushadhi'}>Sugam Aushadhi</p>
      <p
        className={'aBestPlaceToFindEveryMedinceAtIt'}
      >
        A best place to find every medince at its best price{" "}
      </p>
      <input defaultValue={'Your Name'} className='yourName' style={{borderColor:'transparent',borderBottom:'3px solid black'}}></input>
      <div className={'rectangle62'} />
      <div className={'flexWrapperTwo'}>
        <p className={'createAccount m-auto'}>
          {btn}
        </p>
      </div>
      <div className={'flexWrapperThree'}>
        <img
          alt=""
          className={'appStore'}
          src="https://static.overlay-tech.com/assets/93faf740-2796-47bc-a625-f0b158e74477.png"
        />
       <img
          alt=""
          className={'appStore'}
          src="https://static.overlay-tech.com/assets/93faf740-2796-47bc-a625-f0b158e74477.png"
        />
      </div>
    </div>
  );
};

export default LeftView;