import React from "react"
import "./auth.css"
import {data, mobileData} from './data.js'
import PriceCard from './../../components/Pricecard/PriceCard';
import LeftView from './../../layouts/Auth/LeftView';
import { useGlobalContext } from "../../context";

export default function Auth() {
  const {mobileScreen} = useGlobalContext();
   
  return (
      <div style={{margin:0, padding:0, height:'100vh',background:'#DFF1F9'}}>
    <div className="container">
        <div className="row">
           { mobileScreen ? null: <div className="col-sm-12 col-md-5 m-auto" style={{marginTop:50, lineHeight:'50px', marginLeft:0 }}>
              <LeftView btn='Create account' />
            </div>}
            <div className="col-sm mt-3" style={mobileScreen ? {margin:'auto', display:'flex', alignItems:'center', justifyContent:'center'} :{marginLeft:70, marginTop:10}}> 
            <div className="row">
            {mobileScreen ? mobileData.map((main, i) => {
                return (
                <PriceCard key={i} retail={main.retailPrice} name={main.name} sidenote={main.comma} price={main.price} />
                )
            }): data.map((main, i) => {
                return (
                <PriceCard key={i} retail={main.retailPrice} name={main.name} sidenote={main.comma} price={main.price} />
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
