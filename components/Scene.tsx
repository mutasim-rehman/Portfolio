import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

const MendlBox = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += 0.005;
        groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 1) * 0.001;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation as any}>
      {/* Box Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#F7CAC9" />
      </mesh>
      {/* Blue Ribbon Vertical */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.15, 0.82, 0.82]} />
        <meshStandardMaterial color="#92A8D1" />
      </mesh>
      {/* Blue Ribbon Horizontal */}
      <mesh position={[0, 0, 0]}>
         <boxGeometry args={[0.82, 0.15, 0.82]} />
         <meshStandardMaterial color="#92A8D1" />
      </mesh>
    </group>
  );
}

const Key = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
    const ref = useRef<THREE.Group>(null);
    useFrame((state) => {
        if(ref.current) {
            ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group ref={ref} position={position} rotation={rotation as any}>
             <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
                <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
             </mesh>
             <mesh position={[0, 1.2, 0]}>
                 <torusGeometry args={[0.2, 0.05, 8, 16]} />
                 <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
             </mesh>
             <mesh position={[0.15, -0.1, 0]}>
                 <boxGeometry args={[0.3, 0.1, 0.05]} />
                 <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
             </mesh>
             <mesh position={[0.15, 0.1, 0]}>
                 <boxGeometry args={[0.3, 0.1, 0.05]} />
                 <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
             </mesh>
        </group>
    )
}

const HotelFacade = () => {
    // A procedural background that looks like the hotel facade
    return (
        <group position={[0, 0, -5]}>
            {/* Main Building Body */}
            <mesh position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[14, 10]} />
                <meshStandardMaterial color="#F7CAC9" />
            </mesh>

            {/* Central Column */}
            <mesh position={[0, 0, 0.1]}>
                <planeGeometry args={[3, 10]} />
                <meshStandardMaterial color="#E0A8A7" />
            </mesh>

            {/* Window Rows */}
            {[-3, -1.5, 0, 1.5, 3].map((y, rowIdx) => (
                <group key={`row-${rowIdx}`} position={[0, y, 0.2]}>
                    {/* Left Wing Windows */}
                    {[-5, -3.5].map((x, colIdx) => (
                        <mesh key={`l-${colIdx}`} position={[x, 0, 0]}>
                             <planeGeometry args={[0.8, 1.2]} />
                             <meshStandardMaterial color="#2C2C2C" />
                             <mesh position={[0, -0.7, 0]}>
                                <boxGeometry args={[1, 0.1, 0.1]} />
                                <meshStandardMaterial color="#FDF4DC" />
                             </mesh>
                        </mesh>
                    ))}
                    
                    {/* Center Windows */}
                    {[-0.8, 0.8].map((x, colIdx) => (
                         <mesh key={`c-${colIdx}`} position={[x, 0, 0]}>
                            <planeGeometry args={[0.8, 1.2]} />
                            <meshStandardMaterial color="#2C2C2C" />
                            {/* Window Sill */}
                            <mesh position={[0, -0.7, 0]}>
                                <boxGeometry args={[1, 0.1, 0.1]} />
                                <meshStandardMaterial color="#FDF4DC" />
                            </mesh>
                        </mesh>
                    ))}

                    {/* Right Wing Windows */}
                    {[3.5, 5].map((x, colIdx) => (
                        <mesh key={`r-${colIdx}`} position={[x, 0, 0]}>
                             <planeGeometry args={[0.8, 1.2]} />
                             <meshStandardMaterial color="#2C2C2C" />
                             <mesh position={[0, -0.7, 0]}>
                                <boxGeometry args={[1, 0.1, 0.1]} />
                                <meshStandardMaterial color="#FDF4DC" />
                             </mesh>
                        </mesh>
                    ))}
                </group>
            ))}
            
            {/* Roof Line */}
             <mesh position={[0, 5.2, 0.2]}>
                <boxGeometry args={[14.5, 0.4, 0.5]} />
                <meshStandardMaterial color="#6B5B95" />
             </mesh>
        </group>
    )
}

export const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas dpr={[1, 2]} shadows>
        {/* Orthographic Camera is key for the Wes Anderson "Dollhouse" look */}
        <OrthographicCamera makeDefault position={[0, 0, 50]} zoom={60} />
        
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} castShadow />
        <directionalLight position={[-10, 5, 10]} intensity={0.3} color="#F7CAC9" />

        <HotelFacade />

        {/* Floating Story Elements */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
             <MendlBox position={[-5, 2, 2]} rotation={[0.4, 0.6, 0]} />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.3, 0.3]}>
             <MendlBox position={[5, -1, 1]} rotation={[0.2, -0.4, 0.1]} />
        </Float>

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            <Key position={[3, 3, 3]} rotation={[0, 0, -0.5]} />
        </Float>
        
        {/* Fog to blend the bottom */}
        <fog attach="fog" args={['#FDF4DC', 5, 20]} />
      </Canvas>
    </div>
  );
};