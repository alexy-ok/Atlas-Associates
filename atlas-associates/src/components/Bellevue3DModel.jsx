import React from 'react';
import { useGLTF } from '@react-three/drei';
import { TransformControls } from '@react-three/drei';
export function Bellevue3DModel() {
  // Load the GLTF file
  const { scene } = useGLTF('projects/3D/BellevueInvestment.glb');
  
  return( 
      <primitive object={scene} scale={0.5} />


  )
}

export default Bellevue3DModel;