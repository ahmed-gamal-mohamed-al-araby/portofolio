import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Ahmed Gamal</b> and I am from Cairo, Egypt.
            I'm a <b>Senior PHP developer</b> . <br/><br/>
            I am currently working at EEC company, developing an <b> ERP system </b> that includes modules for HR, Purchasing, e_Invoices,  Expenses, CRM, PMS, task management, Booking Calendar and Meal Reservation.
            .<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>

          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skills</h1>
      <div className='skills'>
        
        <Skills skill='html' />
        <Skills skill='css' />
        <Skills skill='Javascript' />
        <Skills skill='jquery' />
        <Skills skill='Bootstrap' />
        <Skills skill='Github' />
        <Skills skill='sass' />
        <Skills skill='React' />
        <Skills skill='php' />
        <Skills skill='laravel' />
        <Skills skill='firebase' />
        <Skills skill='pusher' />
        <Skills skill='mysql'/>
        <Skills skill='redis'/>
        <Skills skill='docker'/>

      </div>
    </>
  )
}

export default About