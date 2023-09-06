import React from 'react'
import { Link } from 'react-router-dom'

const SeeJobs = () => {
  return (
    <div className='latest'>
        <div className='latest-left'></div>
        <div className='latest-right'>
            <div className='right-jobs'>
                <div className='up-jobs'>
                    We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part 
                    of it, please join us.
                </div>
                <Link className='down-jobs'>
                    See latest jobs
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SeeJobs