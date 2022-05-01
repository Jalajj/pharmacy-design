import React from 'react'
import CategoryCard from '../../../components/CategoryCard/CategoryCard'
import categoryData from './categoryData'
import { useGlobalContext } from './../../../context/index';

function Categories() {
  const {mobileScreen} = useGlobalContext();
  return (
    <div className='container-fluid'>
      <div className='row' style={mobileScreen ? {display:'grid', gridTemplateColumns:'repeat(2, 1fr)'} : null}>
          {categoryData.map((category, i) => {
            return(
               <div key={i} className='col-md-3'>
                <CategoryCard category={category.name} />
               </div>
            )
          })}
      </div>
    </div>
  )
}

export default Categories