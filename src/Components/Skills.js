import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaSass , FaJs , FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiFirebase , SiJquery , SiPusher , SiRedis , SiDocker , SiMysql , SiLaravel , SiPostman, SiVercel} from "react-icons/si";
import { MdPhp , MdHtml , MdCss } from "react-icons/md";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        jquery: <SiJquery/>,
        Vercel : <SiVercel/>,
        php : <MdPhp />,
        laravel : <SiLaravel />,
        html : <MdHtml />,
        css : <MdCss />,
        js : <FaJs />,
        sass : <FaSass />,
        mysql : <SiMysql />,
        firebase : <SiFirebase />,
        pusher : <SiPusher />,
        redis : <SiRedis />,
        docker : <SiDocker />

}
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
