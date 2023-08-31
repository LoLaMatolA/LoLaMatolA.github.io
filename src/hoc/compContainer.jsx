import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";


const compContainer = (Component,index, bgColor)=> function HOC(){
    return(
      <div className={`${bgColor}`}>
      
        <motion.section
        variants={staggerContainer(0.3,0.2)}
        initial='hidden'
        whileInView='show'
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${bgColor}`}>
        <span className='hash-span' id={index}>
          &nbsp;
        </span>
        <Component/>
       </motion.section>
         
      </div>
    );
};

export default compContainer;