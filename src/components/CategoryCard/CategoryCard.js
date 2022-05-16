import React from 'react'
import './categorycard.css';

function CategoryCard({category, container, categoryImg}) {
  
  return (
    <div className={`${container} categoryCard text-center ${'hover-card'}`} style={{cursor:'pointer'}}>
      <img
        alt=""
        className={`rectangle33-category-card text-center mt-3 ${container && 'mt-4'}`}
         style={container ? {width:'60px', height:'60px'} :{width:'40px', height:'40px'} }
        src={categoryImg}
      />
      <p className={'medicine text-center'}>{category}</p>
    </div>
  )
}

export default CategoryCard