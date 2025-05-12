import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, PresentationControls } from '@react-three/drei';
import { Group } from 'three';

// Simple TV model created with Three.js primitives since we can't load external models
const TVModelPrimitive: React.FC = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      // Slow rotation
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* TV Screen */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.7, 0.1]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      
      {/* TV Screen Glass */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[2.9, 1.6, 0.01]} />
        <meshStandardMaterial color="#151515" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* TV Mount */}
      <mesh position={[0, 0, -0.2]}>
        <boxGeometry args={[0.8, 0.8, 0.3]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Wall */}
      <mesh position={[0, 0, -0.4]} rotation={[0, 0, 0]}>
        <boxGeometry args={[5, 3, 0.1]} />
        <meshStandardMaterial color="#E5E5E5" />
      </mesh>
      
      {/* TV Logo */}
      <mesh position={[0, -0.7, 0.11]}>
        <boxGeometry args={[0.5, 0.1, 0.01]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
    </group>
  );
};

const TVModel: React.FC = () => {
  return (
    <div className="w-full h-full absolute">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 300 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <TVModelPrimitive />
        </PresentationControls>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default TVModel;