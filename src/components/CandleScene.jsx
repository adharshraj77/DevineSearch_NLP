import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function FlickeringCandle() {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      // Flicker simulation
      lightRef.current.intensity = 1.5 + Math.sin(Date.now() * 0.005) * 0.5;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 1.5, 0]}
      intensity={2}
      distance={4}
      color="#ffcc66"
      castShadow
    />
  );
}

export default function CandleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }}
    >
      {/* Stars in the background */}
      <Stars radius={100} depth={30} count={4000} factor={4} saturation={0} fade />
      
      <ambientLight intensity={0.2} />
      <FlickeringCandle />
    </Canvas>
  );
}