import {Suspense, useRef} from 'react';
import * as THREE from "three";
import {Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls ,Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Stars = () => {
  const starref=useRef();
  
  const star = useGLTF('src/assets/Models/Star.glb');
  
 

  return (
    <mesh ref={starref}
    emissive={'white'}>
      <primitive
        object={star.scene}
        scale={3}
        position={[0, 0, -1]}
        // rotation={[0, 55, 45]}
        
      >
      </primitive>
      
    </mesh>
  )
  

  
}

const StarCanvas = ( ) =>{
  

  return(
    <Canvas
      frameLoop="demand"
      camera={{position:[20,5,10], fov:25}}
      
      
    >
      <pointLight position={[200, 0, 100]} />
      
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}/>
      <Stars />
    </Suspense>
    <Preload all/>
    </Canvas>
      

  )
}

export default StarCanvas