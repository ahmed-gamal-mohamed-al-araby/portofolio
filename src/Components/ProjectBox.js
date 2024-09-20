import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName,projectNameImag}) => {
  const desc = {
    ERPDesc : "This ERP system was developed for EEC Group Company, to streamline various business operations. It includes modules such as HR, E-Purchasing, Expense Management, Invoices, CRM, Performance Management, Task Management, and a Booking Calendar. The project enhanced my skills in integrating complex systems and automating business workflows. I also gained experience in deploying ERP solutions that are both scalable and user-friendly, ensuring seamless usage across multiple departments.",
    ERPGithub : "",
    ERPWebsite : "",
    TAFDesc : "Our platform provides a seamless experience for adding products to carts and completing purchases.\n" +
      "• Users can access training courses to create products independently and subscribe for ongoing learning.\n" +
      "• Google Maps integration helps locate nearby stores.\n" +
      "• Craftsmen have a control panel to manage products and add stores to Google Maps.\n" +
      "• The admin dashboard allows for managing courses, approving products, and creating special offers, streamlining administrative tasks and site management.",
    TAFGithub : "",
    TAFWebsite : "",

    HEALTHDesc : "The primary aim of this website is to define the concept of “Hand or Upper Limb Surgery” to all those who are interested in it, including patients, doctors, specialists and anyone who seeks information about what has been achieved so far in the field of hand surgery in Egypt. On this website, you can learn more about our most important specialties, and you can find answers to questions on your mind.",
    HEALTHGithub : "",
    HEALTHWebsite : "",

    UKDesc : "This system was developed to streamline the process of applying for a UK Electronic Visa Waiver (EVW), allowing eligible travelers to easily submit their applications online. Working on this project helped me enhance my knowledge of secure form handling, data validation, and integrating third-party APIs for processing visa applications.",
    UKGithub : "",
    UKWebsite : "https://www.visawaiver.co.uk/public/",

    GoodDesc:"I designed this responsive landing page template for GoodWEB Solutions. The template includes key sections such as Home, About Us, Services, Portfolio, Features, Testimonials, Pricing, and Contact.",
    GoodGithub:"",
    GoodWebsite:"https://elegant-bardeen-1b385c.netlify.app/",

    MartxaDesc:"I designed this responsive landing page template for Martxa. The template includes key sections such as Home, About, Service, Team, Portofolio, Blog and Contact.",
    MartxaGithub:"",
    MartxaWebsite:"https://agitated-fermat-b41b76.netlify.app/",
  }


  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
   return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectNameImag + 'Desc']}
            <br />
            {
                desc[projectNameImag + 'Website'] !== '' &&
                    <a href={desc[projectNameImag + 'Website']} target='_blank'>
                        <button className='projectbtn'><CgFileDocument/> Demo</button>
                    </a>
            }
        </div>
    </div>
  )
}

export default  ProjectBox