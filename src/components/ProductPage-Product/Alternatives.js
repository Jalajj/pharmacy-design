import React from "react";
import './alternatives.css'
import { useGlobalContext } from './../../context/index';

const Alternatives = () => {
  const {mobileScreen} = useGlobalContext()
  return (
    <div>
    
      <div className={'alternativesTwo'} style={mobileScreen ? null :{marginLeft:'5%'}}>
        {/* tyle={{display:'flex', alignItems:'flex-start'}} */}
        <div className="alternate-title" style={mobileScreen ? null : {position:'sticky', width:'100%', height:84}}>
       <p className={'alternatives'}>Alternatives</p>
       </div>
        <div style={{display:'flex', alignItems:'flex-start'}} >
        <img
        alt=""
        className={'rectangle43-alternative'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
       
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div className="specs-alt" style={{display:'flex',marginLeft:'8%', position:"relative", bottom:20}}>
        <p style={{position:'relative', left:50, bottom:3}}>$25</p>
        <p className={'num23'} style={{position:'relative', left:55}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <hr style={{border:'1px solid black', width:'100%', marginTop:-20}} />
        {/* <div className={'flexWrapperOne-alternative'}>
          <p className={'num23'}>(&#43;23%)</p>
          <p className={'packOf30'}>
            Pack of
            <strong className={'packOf30Emphasis1'}>
              {" "}
              30
            </strong>
          </p>
        </div> */}
        {/* <hr className={'rectangle46-alternative'} /> */}
        <div  style={{display:'flex', alignItems:'flex-start'}} >
        <img
        alt=""
        className={'rectangle43-alternative'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
       
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div className="specs-alt" style={{display:'flex',marginLeft:'8%', position:"relative", bottom:20}}>
        <p style={{position:'relative', left:50, bottom:3}}>$25</p>
        <p className={'num23'} style={{position:'relative', left:55}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <hr style={{border:'1px solid black', width:'100%', marginTop:-20}} />
        <div style={{display:'flex', alignItems:'flex-start'}} >
        <img
        alt=""
        className={'rectangle43-alternative'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
       
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div className="specs-alt" style={{display:'flex',marginLeft:'8%', position:"relative", bottom:20}}>
        <p className="price-alt" style={{position:'relative', left:50, bottom:3}}>$25</p>
        <p className={'num23'} style={{position:'relative', left:55}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <hr style={{border:'1px solid black', width:'100%', marginTop:-20}} />
        <div style={{display:'flex', alignItems:'flex-start'}} >
        <img
        alt=""
        className={'rectangle43-alternative'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
       
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div className="specs-alt" style={{display:'flex',marginLeft:'8%', position:"relative", bottom:20}}>
        <p style={{position:'relative', left:50, bottom:3}}>$25</p>
        <p className={'num23'} style={{position:'relative', left:55}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <hr style={{border:'1px solid black', width:'100%', marginTop:-20}} />
        <div style={{display:'flex', alignItems:'flex-start'}} >
        <img
        alt=""
        className={'rectangle43-alternative'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
       
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div className="specs-alt" style={{display:'flex',marginLeft:'8%', position:"relative", bottom:20}}>
        <p style={{position:'relative', left:50, bottom:3}} className='price-alternative'>$25</p>
        <p className={'num23'} style={{position:'relative', left:55}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <hr style={{border:'1px solid black', width:'100%', marginTop:-20}} />
        {/* <div style={{display:'flex', alignItems:'flex-start'}}>
        <img
        alt=""
        className={'rectangle43'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems: 'flex-start', marginLeft:'8%'}}>
        <p className={'num23'} style={{marginLeft:'15%'}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <div className={'rectangle46-alternative'} />
        <div style={{display:'flex', alignItems:'flex-start'}}>
        <img
        alt=""
        className={'rectangle43'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
      </div>
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        <div style={{display:'flex', flexDirection:'row', alignItems: 'flex-start', marginLeft:'8%'}}>
        <p className={'num23'} style={{marginLeft:'15%'}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <div className={'rectangle46-alternative'} />
        <div style={{display:'flex', alignItems:'flex-start'}}>
        <img
        alt=""
        className={'rectangle43'}
        src="https://static.overlay-tech.com/assets/3af6edae-8e97-40fc-a7e7-2bbd2e697bd2.png"
      />
        <p className={'crocinAdvanceTablet-alternative'}>
          Crocin Advance Tablet
        </p>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems: 'flex-start', marginLeft:'8%'}}>
        <p className={'num23'} style={{marginLeft:'15%'}}>(&#43;23%)</p>
        <p className={'packOf30'} style={{width:'200px'}}>Pack of 30</p>
        </div>
        <div className={'rectangle46-alternative'} /> */}
      
      </div>
    </div>
  );
};

export default Alternatives;