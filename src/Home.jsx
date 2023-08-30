import React from 'react'
import "./Styles/Home.scss"
import { Link } from 'react-router-dom'
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import Select from 'react-select'

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

  const options = [
    {value: "English", label: "English"},
    {value: "Deutsch", label: "Deutsch"},
    {value: "Français", label: "Français"},
    {value: "日本語", label: "日本語"},
    {value: "简体中文", label: "简体中文"},
    {value: "Español", label: "Español"}
  ]



  return (
    <div className='home'>
        <div className='ableton'>
            <img alt='' className='imgableton' src={imageSrc} />
            <div className='text'>Ableton</div>
        </div>
        <div className='unique'>
            <div className='live-push'>
                We make <span>Live</span>, <span>Push</span> and <span>Link</span> — unique software and hardware for music creation
                 and performance. With these products, our community of users creates amazing things.
            </div>
            <div className='founded'>
                Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community
                of dedicated musicians, sound designers, and artists from across the world.
            </div>
        </div>
        <div className='white-yellow'>
            <div className='white'>
                <img alt='' className='img-white' src={imageSrc2}/>
            </div>
            <div className='yellow'>
                <img alt='' className='img-yellow' src={imageSrc3}/>                
            </div>
        </div>
        <div className='unique'>
            <div className='live-push'>
                Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
            </div>
            <div className='founded'>
                We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what
                 we make, and the people we make it for.
            </div>
        </div>
        <div className='why-video'>
            <div className='why-frame'>
                <iframe width="775" height="425" src="https://www.youtube.com/embed/18r2cE-hpj0?si=aA-7RZzCQkJOjygc" title="YouTube video player"
                 frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
            </div>
            <div className='juanpe'>
                Why Ableton - Stranjah
            </div>
        </div>
        <div className='unique'>
            <div className='live-push'>
                We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices
                in Los Angeles and Tokyo.
            </div>
            <div className='founded'>
                Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a
                wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are
                somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute
                to something big: helping to shape the future of music culture.
            </div>
        </div>
        <div className='white-green'>
            <div className='green'>
                <img alt='' className='img-green' src={imageSrc4}/>
                <img alt='' className='img-green2' src={imageSrc5}/>
            </div>
            <div className='white'>
                <img alt='' className='img-white' src={imageSrc6}/> 
            </div>
                           
        </div>
        <div className='unique'>
            <div className='live-push'>
                We believe it takes focus to create truly outstanding instruments. 
                We only work on a few products and we strive to make them great.
            </div>
            <div className='founded'>
                Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow.
                We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore
                problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and 
                openly encouraged.
            </div>
        </div>
        <div className='solo-img'>
            <img alt='' className='solo' src={imageSrc7}/>
        </div>
        <div className='unique2'>
            <div className='live-push2'>
                We’re passionate about what we do, but we’re equally passionate about improving who we are.
            </div>
            <div className='founded2'>
                We work hard to foster an environment where people can grow both personally and professionally, and we strive to create
                a wealth of opportunities to learn from and with each other.
            </div>
            <div className='training'>
                Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and 
                coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance 
                to discuss new technologies, production techniques and best practices.
            </div>
        </div>
        <div className='purple'>
            <div className='pur'>
                <img alt='' className='imgpur1' src={imageSrc8}/>
                
                <img alt='' className='imgpur2' src={imageSrc9}/>
                
                
            </div>
        </div>
        <div className='unique'>
            <div className='live-push'>
                We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will
                do everything we can to make your transition as easy as possible.
            </div>
            <div className='founded'>
                If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German 
                or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your 
                family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have 
                several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
            </div>
        </div>
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
        <div className='footer'>
            <div className='foot-aple'>Apleton</div>
            <div className='foot-info'>
                <div className='register'>
                    <Link className='foot-link'>Register Live or Push</Link>
                    <Link className='foot-link'>About Apleton</Link>
                    <Link className='foot-link'>Jobs</Link>
                    <div className='icons'>
                        <Link to="/" target='_blank' className='icon face'><BiLogoFacebook /></Link>
                        <Link to="/" target='_blank' className='icon twi'><AiOutlineTwitter /></Link>
                        <Link to="/" target='_blank' className='icon you'><AiFillYoutube /></Link>
                        <Link to="/" target='_blank' className='icon ins'><AiFillInstagram /></Link>
                    </div>
                </div>
                <div className='education'>
                    <strong>Education</strong>
                    <Link className='foot-link'>Offers for students and teachers</Link>
                    <Link className='foot-link'>Apleton for the Classroom</Link>
                    <Link className='foot-link'>Apleton for Colleges and Universities</Link>
                </div>
                <div className='sign-up'>
                    <strong>Sign up to our newsletter</strong>
                    <div>
                        Enter your email address to stay up to date with the latest offers, tutorials, 
                        downloads, surveys and more.
                    </div>
                    <div className='regis'>
                        <input className='email' placeholder='Email Address'/>
                        <input type='submit' className='sign' value='Sign up'/>
                    </div>
                </div>
            </div>
            <div className='foot-info2'>
                <div className='find'>
                    <strong>Community</strong>
                    <Link className='foot-link'>Find Apleton User Groups</Link>
                    <Link className='foot-link'>Find Certified Training</Link>
                    <Link className='foot-link'>Become a Certified Trainer</Link>
                </div>
                <div className='language'>
                    <strong>Language</strong>
                    <Select className='chooser' options={options}/>
                    
                </div>
            </div>
            <div className='made'>
                <div className='information'>
                    <div>Contact Us</div>
                    <div>Press Resources</div>
                    <div>Legal Info</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Settings</div>
                    <div>Imprint</div>
                </div>
                <div className='berlin'>
                    <div>Made in Peru</div>
                    <svg role="img" aria-labelledby="logo"  xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><title id="logo">Ableton Homepage</title><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home