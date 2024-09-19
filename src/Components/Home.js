import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import profile from '../images/1.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Ahmed Gamal</b></h1>
          <Typed/>   
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

        {/*<Tilt>*/}
        {/*  <img className='' style={{width:'80%'}} src={profile} alt="" />*/}
        {/*</Tilt>*/}
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Experienced <b>PHP</b> developer with a strong focus on the <b>Laravel</b> framework. Proficient in <b>MVC</b> architecture, RESTful
            API development, front-end technologies, and database management. Committed to continuous growth and
            contributing to innovative projects .<br /><br />
            Also, I love <b>tea</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home