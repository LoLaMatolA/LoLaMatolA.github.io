import React from 'react';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import compContainer from '../hoc/compContainer';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full red-galaxyblue-gradient p-[1px] rounded-[150px] shadow-card'
    >
      <div
        // options={{
        //   max: 45,
        //   scale: 2,
        //   speed: 450,
        // }}
        className='bg-tertiary rounded-[250px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-galaxyblue`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 ml-5 text-galaxyblue text-[17px] max-w-3xl leading-[30px]'
      >
        I am a final year college student. I am currently exploring different areas in software and web development. My skills inlcude React.js, JavaScript, python, java, and a dab of Unity MLAgents and C. Also know how to play around with data using pandas library. 
      </motion.p>
      <div className='mt-20  justify-between flex flex-wrap gap-10'>
       {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
       ))} 
      </div>
    </>
  )
}

export default compContainer(About,"about","bg-green")