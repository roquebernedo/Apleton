import React from 'react'

const GreenImages = ({imageLeft, imageLeft2, imageRight}) => {
  return (
    <div className='white-green'>
        <div className='green'>
            <img alt='' className='img-green' src={imageLeft}/>
            <img alt='' className='img-green2' src={imageLeft2}/>
        </div>
        <div className='white'>
            <img alt='' className='img-white' src={imageRight}/> 
        </div>            
    </div>
  )
}

export default GreenImages