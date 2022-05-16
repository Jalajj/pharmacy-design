import React from "react"
import "./auth.css"
import {data, mobileData} from './data.js'
import PriceCard from './../../components/Pricecard/PriceCard';
import LeftView from './../../layouts/Auth/LeftView';
import { useGlobalContext } from "../../context";

export default function Auth() {
  const {mobileScreen} = useGlobalContext();
  // style={{display:'grid' , gridTemplateColumns:'repeat(2, 1fr)', gridColumnGap:'200px'}}
  return (
      <div style={{margin:0, padding:0,background:'#DFF1F9', overflowX:'hidden'}}>
    <div className="container" >
        <div className="row" >
        {/* className="col-sm-12 col-md-5 m-auto" */}
           { mobileScreen ? null: <div className="col-sm-12 col-md-5 left-view-container" style={{marginTop:50, lineHeight:'50px', marginLeft:0}}>
              <LeftView btn='Create account' />
            </div>}
            {/* className="col-sm mt-3" */}
            <div className="col-sm mt-3" style={mobileScreen ? {margin:'auto', display:'flex', alignItems:'center', justifyContent:'center'} :{marginLeft:0, marginTop:10 }}> 
            <div className={`row ${mobileScreen ? 'card-price-auth-mob':'card-price-auth' }`} >
            {mobileScreen ? mobileData.map((main, i) => {
                return (
                
                <PriceCard key={i} retail={main.retailPrice} name={main.name} sidenote={main.comma} price={main.price} />
                
                )
            }): data.map((main, i) => {
                return (
               <div className={`card-auth-${i}`} key={i}>
              
                <PriceCard key={i} retail={main.retailPrice} name={main.name} sidenote={main.comma} price={main.price} />
               </div>
                )
            })}
            </div>
            </div>
            {mobileScreen && <div className="col-sm-12 col-md-5 m-auto" style={{marginTop:50, lineHeight:'50px', marginLeft:0 }}>
              <LeftView btn='Create account' />
            </div>}
        </div>
        </div>
    </div>
  )
}
