import React from 'react';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { hobbies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import compContainer from '../hoc/compContainer';

const HobbyCard=({index,hobby,description})=>(
    <motion.div
    className=' min-w-[220px] '
    // variants={fadeIn("right","spring",index*0.5,0.75)}
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
    >

        <div className='min-h-[280px] flex justify-center bg-tertiary rounded-[20px] '>

        <h3 className='text-white text-[20px] font-bold text-center py-10'>
          {hobby}
        </h3>

        </div>

    </motion.div>
    )
    
const Extracuricular=()=>{
    return(
        <>
         
            <div className='w-full flex flex-wrap justify-center gap-10'>
            {hobbies.map((x,index)=>(
                <HobbyCard key={x.hobby} index={index} {...x}/>
            ))}
            </div>
         
        </>

    )
}

export default compContainer(Extracuricular,"extracuricular","bg-red");