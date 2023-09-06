import React from 'react'

const SoloImage = ({ image }) => {
  return (
    <div className='solo-img'>
        <img alt='' className='solo' src={image}/>
    </div>
  )
}

export default SoloImage