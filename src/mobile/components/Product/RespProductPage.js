import React from 'react';
import { useGlobalContext } from '../../../context';
import './product-page.css';

function RespProductPage() {
    const {mobileScreen} = useGlobalContext();
  return (
    <div className={'respProduct'} style={{marginLeft:'-30px'}}>
     <div className={'flexWrapperOne-info-resp'}>
        <p className={'prescriptionRequired'} style={mobileScreen ? {fontSize:'20px', width:'100%'}: null}>
          Prescription Required
        </p>
      </div>
      <p className={'dolo650Tablet-resp'}>
        Dolo 650 Tablet
      </p>
      <img
        alt=""
        className={'screenshot20220405At10052-resp'}
        src="https://static.overlay-tech.com/assets/5e9db1c8-f681-49f5-922c-8ac49dee5a38.png"
      />
      <div className={'flexWrapperFour-resp'}>
        <div className={'flexWrapperOne-resp'}>
          <img
            alt=""
            className={'screenshot20220405At10064-resp'}
            src="https://static.overlay-tech.com/assets/d1316575-8240-478c-aaed-747845a0863b.png"
          />
        </div>
        <div className={'flexWrapperTwo-resp'}>
          <img
            alt=""
            className={'screenshot20220405At10064-resp'}
            src="https://static.overlay-tech.com/assets/3fc69017-9510-4230-ba3f-250e5c3c7bf8.png"
          />
        </div>
        <div className={'flexWrapperTwo-resp'}>
          <img
            alt=""
            className={'screenshot20220405At10064-resp'}
            src="https://static.overlay-tech.com/assets/3fb9728e-85b8-4af1-b837-fa78ab808af8.png"
          />
        </div>
      </div>
    </div>
  )
}

export default RespProductPage