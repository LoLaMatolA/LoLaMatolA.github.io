import { motion } from 'framer-motion';
import {styles} from '../styles';
import StarCanvas from './canvas/Star.jsx';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-wrap flex-row">
      <div className={`mt-20 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 flex w-1/2 ${styles.paddingX}`}>
        
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`} >Hello, I am Shruti!</h1>
          <p className={`${styles.heroSubText} mt-2`}>I am a budding software developer that loves the creative side of the development.</p>
        </div>        
      </div>
      <div className='flex w-1/2 mb-8 '>
      <StarCanvas/>
      </div>    
      
    </section>
  )
}

export default Hero