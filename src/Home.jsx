import React from 'react'
import "./Styles/Home.scss"
import Ableton from './Parts/Ableton'
import Introduction from './Parts/Introduction.jsx'
import YellowImages from './Parts/YellowImages'
import Music from './Parts/Music'
import WhyAbleton from './Parts/WhyAbleton'
import Contribute from './Parts/Contribute'
import GreenImages from './Parts/GreenImages'
import FocusonWork from './Parts/FocusonWork'
import SoloImage from './Parts/SoloImage'
import PassionateWork from './Parts/PassionateWork'
import PurpleImages from './Parts/PurpleImages'
import Employees from './Parts/Employees'
import SeeJobs from './Parts/SeeJobs'

const Home = () => {

  const imageSrc = require('./Images/img1.jpg')
  const imageSrc2 = require('./Images/img2.jpg')
  const imageSrc3 = require('./Images/img3.jpg')
  const imageSrc4 = require('./Images/img4.jpg')
  const imageSrc5 = require('./Images/img5.jpg')
  const imageSrc6 = require('./Images/img6.jpg')
  const imageSrc7 = require('./Images/img7.jpg')
  const imageSrc8 = require('./Images/img8.jpg')
  const imageSrc9 = require('./Images/img9.jpg')

  return (
    <div className='home'>
        <Ableton image={imageSrc} />
        <Introduction />
        <YellowImages imageLeft={imageSrc2} imageRight={imageSrc3} />
        <Music />
        <WhyAbleton />
        <Contribute />
        <GreenImages imageLeft={imageSrc4} imageLeft2={imageSrc5} imageRight={imageSrc6} />
        <FocusonWork />
        <SoloImage image={imageSrc7} />
        <PassionateWork />
        <PurpleImages imageAbove={imageSrc8} imageBelow={imageSrc9} />
        <Employees />
        <SeeJobs />
    </div>
  )
}

export default Home