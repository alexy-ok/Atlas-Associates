import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bellevue3DModel } from './Bellevue3DModel';

function Bellevue3D() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Bellevue3DModel />
      <OrbitControls/>
    </Canvas>
  );
}

export default Bellevue3D;
