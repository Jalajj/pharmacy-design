import React from "react";
import "./pricecard.css";

const PriceCard = ({retail, price, sidenote, name}) => {
  return (
    <div className={'group7 col-md-4 col-sm-5'}>
      <p className={'imatinib'}>{name}</p>
      <p className={'genericForGleevec'}>
        {sidenote}
      </p>
      <p className={'num3499'}>{price}</p>
      <p className={'retailPrice23445'}>
        {retail}
      </p>
    </div>
  );
};

export default PriceCard;