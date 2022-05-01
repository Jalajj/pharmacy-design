import React from "react";
import './search.css'

const Search = ({containerClass, label}) => {
  return (
    <div className={`searchTwo ${containerClass}`}>
      <div className={'search-mobile'}>
        <div className={'vector-mobile'} />
        <img
          alt=""
          className={'vectorTwo-mobile'}
          src="https://static.overlay-tech.com/assets/8f594010-b14a-4bed-a632-cf0feda0f502.svg"
        />
      </div>
      <p className={'searchAnythingWeGotThemAll-mobile m-auto'}>
        {label ? label : 'Search anything, we got them all'}
      </p>
    </div>
  );
};

export default Search;