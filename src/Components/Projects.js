import React from 'react';
import ProjectBox from './ProjectBox';
import ERP from '../images/5.PNG';
import TAF from '../images/4.png';
import UK from '../images/6.PNG';
import Good from '../images/8.PNG';
import Martxa from '../images/7.PNG';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ERP} projectName="ERP System" projectNameImag="ERP" />
        <ProjectBox projectPhoto={TAF} projectName="Tafaneen System" projectNameImag="TAF" />
        <ProjectBox projectPhoto={UK} projectName="UK Electronic Visa Waiver" projectNameImag="UK" />
        <ProjectBox projectPhoto={Good} projectName="Good web Solutions" projectNameImag="Good"  />
        <ProjectBox projectPhoto={Martxa} projectName="Martxa" projectNameImag="Martxa" />
      </div>

    </div>
  )
}

export default Projects