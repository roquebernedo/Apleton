import React from 'react'

const YellowImages = ({imageLeft, imageRight}) => {
  return (
    <div className='white-yellow'>
        <div className='white'>
            <img alt='' className='img-white' src={imageLeft}/>
        </div>
        <div className='yellow'>
            <img alt='' className='img-yellow' src={imageRight}/>                
        </div>
    </div>
  )
}

export default YellowImages