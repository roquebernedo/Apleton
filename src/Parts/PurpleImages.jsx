import React from 'react'

const PurpleImages = ({ imageAbove, imageBelow }) => {
  return (
    <div className='purple'>
        <div className='pur'>
            <img alt='' className='imgpur1' src={imageAbove}/>
            <img alt='' className='imgpur2' src={imageBelow}/>
        </div>
    </div>
  )
}

export default PurpleImages