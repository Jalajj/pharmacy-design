import React from 'react'
import CategoryCard from '../../../components/CategoryCard/CategoryCard'
import categoryData from './categoryData'
import { useGlobalContext } from './../../../context/index';
import './categorylay.css';

function Categories({container,supplementCategory}) {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid'>
      <div className={`row ${mobileScreen ? null : 'category-container'} ${supplementCategory}`} style={mobileScreen ? {display:'grid', gridTemplateColumns:'repeat(2, 1fr)', marginTop:50} : null}>
          {categoryData.map((category, i) => {
            return(
               <div key={i} className='col-md-3' >
                <CategoryCard container={container} category={category.name} categoryImg={category.src} />
               </div>
            )
          })}
      </div>
    </div>
  )
}

export default Categories