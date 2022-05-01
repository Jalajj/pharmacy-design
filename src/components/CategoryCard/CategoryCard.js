import React from 'react'
import './categorycard.css';

function CategoryCard({category}) {
  return (
    <div className={'categoryCard text-center'} >
      <img
        alt=""
        className={'rectangle33 text-center mt-3'}
        style={{width:'60px', height:'60px'}}
        src="https://static.overlay-tech.com/assets/083a52b4-ecef-417c-ab87-d8b748051bc1.png"
      />
      <p className={'medicine text-center'}>{category}</p>
    </div>
  )
}

export default CategoryCard