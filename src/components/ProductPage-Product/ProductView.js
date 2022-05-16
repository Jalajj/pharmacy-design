
import React from 'react';
import './product-view.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProductView = () => {

  return (<div className={'productPageProduct'}>

    <p className={'dolo650Tablet-product'}>Dolo 650 Tablet</p>
    <div className={'flexWrapperSeven-product'}>
    {/* <div className={'flexWrapperNine-product'}>
    <div className={'flexWrapperTwo-product'}>
    <img alt="" className={'screenshot20220405At10061'} src="https://static.overlay-tech.com/assets/f1988d95-a4ac-4be1-90d4-07cbdfa08933.png"/>
    </div><div className={'flexWrapperThree-product'}>
    <img alt="" className={'screenshot20220405At10061'} src="https://static.overlay-tech.com/assets/5bd37587-c3b3-4382-b9fe-3ceab3c61387.png"/>
    </div><div className={'flexWrapperThree-product'}><img alt="" className={'screenshot20220405At10061'} src="https://static.overlay-tech.com/assets/bdb8925c-2d66-4302-9cc7-94b0f842437b.png"/>
    </div></div> */}
    <div className={'flexWrapperOne-product'}>
   
    <Carousel>
                <div>
                <img alt="" className={'screenshot20220405At10061-main'} src="https://static.overlay-tech.com/assets/d0495add-9094-474c-b6c7-7d6963222568.png"/>
                </div>
                <div>
                <img alt="" className={'screenshot20220405At10061-main'} src="https://static.overlay-tech.com/assets/d0495add-9094-474c-b6c7-7d6963222568.png"/>
                </div>
                <div>
                <img alt="" className={'screenshot20220405At10061-main'} src="https://static.overlay-tech.com/assets/d0495add-9094-474c-b6c7-7d6963222568.png"/>  
                </div>
            </Carousel>
    </div>
    
    </div>
   </div>);
};

export default ProductView;
