"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from "three";
import { Vector3 } from 'three';
// We'll use a placeholder texture since the image was in the old directory
// You can replace this with your actual eye texture path later
import { cn } from "@/lib/utils";

// Global mouse position state
const globalMouse = { x: 0, y: 0 };

// Enhanced camera rig with global cursor following
function CameraRig() {
  const { camera } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    // Use global mouse position for smoother tracking across entire page
    camera.position.lerp(vec.set(-globalMouse.x * 0.2, -globalMouse.y * 0.2, camera.position.z), 0.04);
    camera.lookAt(0, 0, 0);
  });
}

// Dynamic lighting that follows global mouse
function DynamicLights() {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.set(globalMouse.x * 30, globalMouse.y * 30, 50);
    }
    if (pointLightRef.current) {
      pointLightRef.current.position.set(globalMouse.x * 20, globalMouse.y * 20, 30);
    }
  });

  return (
    <>
      {/* Ambient base lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Main directional light that follows mouse */}
      <directionalLight 
        ref={lightRef}
        color="#ffffff"
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Dynamic point light for reflections */}
      <pointLight 
        ref={pointLightRef}
        color="#F8E441" // Brand accent color
        intensity={0.8}
        distance={100}
      />
      
      {/* Secondary rim lighting */}
      <directionalLight 
        color="#4285FF" // Brand secondary color
        position={[-30, -30, -50]}
        intensity={0.6}
      />
      
      {/* Fill light from behind */}
      <directionalLight 
        color="#ffffff"
        position={[0, 0, -100]}
        intensity={0.4}
      />
    </>
  );
}

// Enhanced 3D Eye Sphere that looks at global cursor
function EyeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = new THREE.TextureLoader().load('/img/eye_illustration.jpeg');
  const targetRotation = useRef(new THREE.Euler());
  
  // Configure texture for better appearance
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  // Make the eye look at the global cursor position
  useFrame(() => {
    if (meshRef.current) {
      // Convert global mouse position to rotation angles (fixed inversion)
      const targetX = -globalMouse.y * 0.3; // Vertical mouse movement (negated to fix inversion)
      const targetY = globalMouse.x * 0.3; // Horizontal mouse movement (positive for correct direction)
      
      // Smooth interpolation to target rotation
      targetRotation.current.set(targetX, targetY, 0);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.05);
    }
  });

  return (
    <mesh 
      ref={meshRef}
      visible 
      castShadow 
      receiveShadow
      position={[0, 0, 0]}
    >
      {/* Higher detail sphere geometry */}
      <sphereGeometry args={[2.5, 64, 64]} />
      
      {/* Enhanced material with better 3D properties */}
      <meshStandardMaterial 
        map={texture}
        color="#ffffff"
        metalness={0.1}
        roughness={0.3}
        envMapIntensity={1}
        transparent={false}
        opacity={1}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

interface EyeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Eye: React.FC<EyeProps> = ({ 
  className,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96', 
    lg: 'w-[32rem] h-[32rem]'
  };

  // Track global mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert screen coordinates to normalized device coordinates (-1 to +1)
      globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Add global event listener
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={cn(
      "relative rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black",
      sizeClasses[size],
      className
    )}>
      <Canvas
        className="w-full h-full"
        camera={{ 
          position: [0, 0, 6], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          alpha: false, 
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        shadows
      >
        <DynamicLights />
        <EyeSphere />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default Eye;