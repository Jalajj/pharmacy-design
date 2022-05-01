import React from 'react'
import './medcta.css'


function MedCTA() {
  return (
    <div className='container' style={{marginTop:'70px'}}>
         <div className={'ctaMed'}>
      <p className={'dontSeeYourMedication text-center'}>
        Dont’ see your medication?
      </p>
      <p
        className={'wereAlwaysAddingNewMedicationsToO text-center'}
      >
        We&#039;re always adding new medications to our
        pharmacy. Tell us which drugs you&#039;re looking
        for and we&#039;ll let you know when they become
        available.
      </p>
      <div className={'flexWrapperOne-cta m-auto'}>
        <p
          className={'enterYourDrugNameOrComposition'}
        >
          Enter your drug name or composition
        </p>
      </div>
      <div className={'flexWrapperTwo-cta m-auto mt-3'}>
        <p
          className={'enterYourDrugNameOrComposition'}
        >
          Enter your drug name or composition
        </p>
      </div>
      <div className={'flexWrapperThree-cta m-auto mt-3'}>
        <p className={'submit-cta'}>Submit</p>
      </div>
    </div>
    </div>
  )
}

export default MedCTA