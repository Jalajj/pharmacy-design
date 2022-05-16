import React, { useState } from 'react'
import  Modal  from 'react-modal';
import './upload.css'
import Uploaded from './Uploaded';


function UploadModal() {

    const [modalIsOpen, setOpen] = useState(false);

    const closeModal = () => setOpen(false)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          padding:0,
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
         
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 10,
            padding:' 60px 64.24px 71px 70.24px',
            display:' flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
      };
      
  return (
   <div className='container'>
  <button className='btn-primary' style={{display:'flex', alignItems:'center', justifyContent:'center'}} onClick={() => setOpen(true)}>Upload Prescription</button>
   
    <Modal  style={customStyles}
    isOpen={modalIsOpen}
    ariaHideApp={false}
    onRequestClose={closeModal}
    shouldFocusAfterRender={true}>
 
    
 <div className={'flexWrapperThree-modal'}>
        <img
          alt=""
          className={'rectangle70-modal'}
          src="https://static.overlay-tech.com/assets/cd7031b1-7ff9-4aa7-bacb-145c2ead5a5d.png"
        />
        <p className={'uploadPrescription-modal'}>
          Upload Prescription
        </p>
      </div>
      <div className={'flexWrapperOne-modal'}>
        <p className={'dragAndDropTheFileHere-modal'}>
          Drag and drop the file here
        </p>
        <div className={'flexWrapperFour-modal m-auto'}>
        <div className={'rectangle167-modal'} /> 
          <p className={'or-modal m-auto text-center'}>or</p>
         <div className={'rectangle167-modal'} /> 
         </div>
         <div className={'flexWrapperTwo-modal'}>
           <p className={'selectFromYourDevice-modal m-auto'}>
            Select from your device
           </p>
         </div>
       </div>
    </Modal>
    </div>
  )
}

export default UploadModal
