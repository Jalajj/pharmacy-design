import React from 'react'
import './about.css'
import { useGlobalContext } from './../../context/index';

const CardAbout = () => {
    return (
<div className={'flexWrapperFour'}>
          <img
            alt=""
            className={'rectangle16'}
            src="https://static.overlay-tech.com/assets/23e6e929-94d9-48d0-a90f-f4917b15b24f.png"
          />
          <p className={'offlinePickup'}>
            Offline Pickup
          </p>
          <p
            className={'getTheBestPricesInTheWholeOfDelhThree'}
          >
            Get the best prices in the whole of Delhi
          </p>
        </div>
    )
}


function About() {
  const {mobileScreen} = useGlobalContext()
  return (
    <div className='container container-about' style={{marginTop:100, marginBottom:100}}>
        <div className='row'>
            <div className='col-md-7' style={{lineHeight:200}}>
               <h1 className='about-title'>What is Sugam Aushadhi?</h1>
               <div className='about-paras'>
                  <p className='about-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec dictum quis lacus egestas hendrerit. Vestibulum sit amet imperdiet massa. 
                  In dignissim, elit in vulputate placerat, diam ex ullamcorper turpis, non cursus justo mi a tellus. 
                  Suspendisse maximus hendrerit pulvinar. 
                 iaculis sit amet tortor eu sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec dictum quis lacus egestas hendrerit. Vestibulum sit amet imperdiet massa. 
                  In dignissim, elit in vulputate placerat, diam ex ullamcorper turpis, non cursus justo mi a tellus. 
                  Suspendisse maximus hendrerit pulvinar. 
                 iaculis sit amet tortor eu sollicitudin.</p>

                 <p className='about-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec dictum quis lacus egestas hendrerit. Vestibulum sit amet imperdiet massa. 
                  In dignissim, elit in vulputate placerat, diam ex ullamcorper turpis, non cursus justo mi a tellus. 
                  Suspendisse maximus hendrerit pulvinar. 
                 iaculis sit amet tortor eu sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec dictum quis lacus egestas hendrerit. Vestibulum sit amet imperdiet massa. 
                  In dignissim, elit in vulputate placerat, diam ex ullamcorper turpis, non cursus justo mi a tellus. 
                  Suspendisse maximus hendrerit pulvinar. 
                 iaculis sit amet tortor eu sollicitudin.</p>
               </div>
            </div>
            <div className='col-md-5 card-about'>
            <div className='row'  style={mobileScreen ? {display:'grid', gridTemplateColumns:'repeat(2, 1fr)'} : null}>
                <div className='col-md-6 col-sm-3'>
                 <CardAbout />
                </div>
                <div className='col-md-6  col-sm-3'>
                 <CardAbout />
                </div>
                <div className='col-md-6 mt-4  col-sm-3'>
                 <CardAbout />
                </div>
                <div className='col-md-6 mt-4  col-sm-3'>
                 <CardAbout />
                </div>
            </div>
         
            </div>
        </div>

    </div>
  )
}

export default About