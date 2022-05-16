import React from "react";
import search from '../../../assets/search.png';
import './search.css'

const Search = ({containerClass, label, searchClass}) => {
  return (
    <div className={`searchTwo ${containerClass}`}>
    <div className={'search-mobile'}>
         {/*  <div className={'vector-mobile'} /> */}
        <img
         style={{height:24, width:24, marginRight:5, padding:1}}
          src={search}
          className={searchClass}
          alt="search med"
        />
      </div>
      <input className={'searchAnythingWeGotThemAll-mobile m-auto'}
      style={{ border: 'none', backgroundColor: 'transparent', resize: 'none', outline: 'none'}}
       placeholder= {label ? label : 'Search anything, we got them all'}
      > 
      </input>
    </div>
  );
};

export default Search;