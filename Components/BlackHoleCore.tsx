// "use client";
// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import * as THREE from "three";

// const BlackHoleCore = () => {
//   const diskRef = useRef<THREE.Mesh>(null!);

//   // Simple Shader for the glowing Accretion Disk
//   const shaderArgs = useMemo(() => ({
//     uniforms: {
//       uTime: { value: 0 },
//       uColor: { value: new THREE.Color("#9d00ff") },
//     },
//     vertexShader: `
//       varying vec2 vUv;
//       void main() {
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `,
//     fragmentShader: `
//       varying vec2 vUv;
//       uniform float uTime;
//       uniform vec3 uColor;
//       void main() {
//         float dist = distance(vUv, vec2(0.5));
//         float strength = pow(0.05 / (dist - 0.2), 1.2);
//         strength *= 0.5 + 0.5 * sin(uTime * 2.0 + dist * 10.0);
//         gl_FragColor = vec4(uColor * strength, strength);
//       }
//     `,
//   }), []);

//   useFrame((state) => {
//     diskRef.current.rotation.z += 0.01;
//     shaderArgs.uniforms.uTime.value = state.clock.getElapsedTime();
//   });

//   return (
//     <group>
//       {/* The Event Horizon */}
//       <Sphere args={[1.5, 64, 64]}>
//         <meshBasicMaterial color="black" />
//       </Sphere>

//       {/* The Accretion Disk */}
//       <mesh ref={diskRef} rotation={[-Math.PI / 2.1, 0, 0]}>
//         <torusGeometry args={[3.5, 0.05, 16, 100]} />
//         <shaderMaterial
//           args={[shaderArgs]}
//           transparent
//           blending={THREE.AdditiveBlending}
//           side={THREE.DoubleSide}
//         />
//       </mesh>
//     </group>
//   );
// };

// export default function BlackHoleScene() {
//   return (
//     <div className="h-screen w-full bg-black flex items-center justify-center">
//       <div className="h-[500px] w-full max-w-4xl relative">
//         <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
//           <color attach="background" args={["#05000a"]} />
          
//           <BlackHoleCore />
          
//           {/* Post-processing for the Purple Glow */}
//           <EffectComposer>
//             <Bloom 
//               intensity={1.5} 
//               luminanceThreshold={0.1} 
//               luminanceSmoothing={0.9} 
//               mipmapBlur 
//             />
//           </EffectComposer>

//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
//         </Canvas>

//         {/* Tailwind Overlay */}
//         <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-end pb-20">
//           <h1 className="text-purple-500 text-4xl font-bold tracking-widest uppercase opacity-80">
//             Singularity
//           </h1>
//           <p className="text-purple-300/50 text-sm mt-2">Interactive 3D Experience</p>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import React, { useRef } from "react";
// import { useFrame,Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, Torus } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import * as THREE from "three";

// const BlackHoleCore = () => {
//   const diskRef = useRef<THREE.Mesh>(null!);

//   // Animation loop to rotate the accretion disk
//   useFrame((state, delta) => {
//     if (diskRef.current) {
//       diskRef.current.rotation.z += delta * 0.5;
//     }
//   });

//   return (
//     <div style={{ width: "100%", height: "500px", background: "#000" }}>
//       <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
//         <color attach="background" args={["black"]} />
//         <ambientLight intensity={0.5} />

//         {/* 1. The Event Horizon (The Black Sphere) */}
//         <Sphere args={[1, 64, 64]}>
//           <meshBasicMaterial color="black" />
//         </Sphere>

//         {/* 2. The Accretion Disk (The Glowing Ring) */}
//         <Torus 
//           ref={diskRef} 
//           args={[2, 0.05, 16, 100]} 
//           rotation={[Math.PI / 2, 0, 0]}
//         >
//           <meshStandardMaterial 
//             color="#ff4400" 
//             emissive="#ff2200" 
//             emissiveIntensity={10} 
//           />
//         </Torus>

//         {/* 3. Post-Processing: This is where 'Bloom' lives */}
//         <EffectComposer>
//           <Bloom 
//             intensity={1.5} 
//             luminanceThreshold={0.1} 
//             luminanceSmoothing={0.9} 
//             height={300} 
//           />
//         </EffectComposer>

//         <OrbitControls makeDefault />
//       </Canvas>
//     </div>
//   );
// };

// export default BlackHoleCore;






"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // useFrame belongs inside
import { OrbitControls, Sphere, Torus } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// 1. Create a "Scene" component for the logic
const BlackHoleScene = () => {
  const diskRef = useRef<THREE.Mesh>(null!);

  // NOW this works because it's a child of <Canvas>
  useFrame((state, delta) => {
    if (diskRef.current) {
      diskRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial color="black" />
      </Sphere>

      <Torus 
        ref={diskRef} 
        args={[2, 0.05, 16, 100]} 
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial 
          color="#ff4400" 
          emissive="#ff2200" 
          emissiveIntensity={10} 
        />
      </Torus>

      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.1} />
      </EffectComposer>

      <OrbitControls />
    </>
  );
};

// 2. The main export only handles the Canvas setup
const BlackHoleCore = () => {
  return (
    <div style={{ width: "100%", height: "500px", background: "#000" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <BlackHoleScene /> 
      </Canvas>
    </div>
  );
};

export default BlackHoleCore;