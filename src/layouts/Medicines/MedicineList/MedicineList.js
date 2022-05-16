import React from 'react'
import MedList from '../../../components/MedicineList/MedList'
import { useGlobalContext } from '../../../context'

function MedicineList() {
    const {mobileScreen} = useGlobalContext();
  return (
      <>
     <div className='container' style={{marginRight:'1%'}}>
        <div className='row' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <div className='col-md-3'>
               <MedList />
           </div>
           <div className='col-md-3'>
               <MedList />
           </div>
           <div className='col-md-3'>
               <MedList />
           </div>
           <div className='col-md-3'>
               <MedList />
           </div>
       </div>
       
    </div>
    {mobileScreen ? null : <hr className='m-auto mt-4' style={{border:'2px solid black', width:'80%'}}></hr>}
      </>
  )
}

export default MedicineList