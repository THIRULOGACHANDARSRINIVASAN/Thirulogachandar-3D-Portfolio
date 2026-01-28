// import React, { Suspense, FC } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "./Loader";

// /* ---------- Types ---------- */

// interface BallProps {
//   imgUrl: string;
// }

// interface BallCanvasProps {
//   icon: string;
// }

// /* ---------- Components ---------- */

// const Ball: FC<BallProps> = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]) as [THREE.Texture];

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />

//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />

//         <meshStandardMaterial
//           color="#C7B9FF"
//   emissive="#C7B9FF"
//   emissiveIntensity={0.6}
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />

//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas: FC<BallCanvasProps> = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

// import React, { FC, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import * as THREE from "three";

// import CanvasLoader from "./Loader";

// /* ---------- Types ---------- */

// interface BallProps {
//   imgUrl: string;
// }

// interface BallCanvasProps {
//   icon: string;
// }

// /* ---------- Ball ---------- */

// const Ball: FC<BallProps> = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]) as [THREE.Texture];

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       {/* Lights */}
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />

//       {/* Sphere */}
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />

//         <meshStandardMaterial
//           color="#C7B9FF"
//           emissive="#C7B9FF"
//           emissiveIntensity={0.6}
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />

//         {/* Logo decal */}
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// /* ---------- Canvas ---------- */

// const BallCanvas: FC<BallCanvasProps> = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       {/* Controls must NOT be inside Suspense */}
//       <OrbitControls enableZoom={false} />

//       {/* Only async components inside Suspense */}
//       <Suspense fallback={<CanvasLoader />}>
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;




// import React, { FC, Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import * as THREE from "three";

// import CanvasLoader from "./Loader";

// /* ---------- Types ---------- */

// interface BallProps {
//   imgUrl: string;
// }

// /* ---------- Ball ---------- */

// const Ball: FC<BallProps> = ({ imgUrl }) => {
//   const meshRef = useRef<THREE.Mesh>(null);
//   const [decal] = useTexture([imgUrl]) as [THREE.Texture];

//   const isAnimating = useRef(false);
//   const rotated = useRef(0);

//   const ROTATION_SPEED = 0.15; // tweak for faster/slower spin
//   const FULL_ROTATION = Math.PI * 2;

//   /* Animation loop */
//   useFrame(() => {
//     if (!isAnimating.current || !meshRef.current) return;

//     const step = ROTATION_SPEED;
//     meshRef.current.rotation.x += step;
//     rotated.current += step;

//     if (rotated.current >= FULL_ROTATION) {
//       // reset perfectly so logo faces front
//       meshRef.current.rotation.x = 0;
//       rotated.current = 0;
//       isAnimating.current = false;
//     }
//   });

//   /* Click handler */
//   const handleClick = () => {
//     if (isAnimating.current) return;
//     isAnimating.current = true;
//   };

//   return (
//     <Float speed={1.75} rotationIntensity={0} floatIntensity={2}>
//       {/* Lights */}
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />

//       {/* Sphere */}
//       <mesh
//         ref={meshRef}
//         castShadow
//         receiveShadow
//         scale={2.75}
//         onClick={handleClick}
//       >
//         <icosahedronGeometry args={[1, 1]} />

//         <meshStandardMaterial
//           color="#C7B9FF"
//           emissive="#C7B9FF"
//           emissiveIntensity={0.6}
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />

//         {/* Logo decal */}
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// /* ---------- Canvas ---------- */

// const BallCanvas: FC<{ icon: string }> = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="always"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;




import React, { FC, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "./Loader";

/* ---------- Types ---------- */

interface BallProps {
  imgUrl: string;
}

/* ---------- Ball ---------- */

const Ball: FC<BallProps> = ({ imgUrl }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [decal] = useTexture([imgUrl]) as [THREE.Texture];

  const isAnimating = useRef(false);
  const rotated = useRef(0);

  const ROTATION_SPEED = 0.15;
  const FULL_ROTATION = Math.PI * 2;

  /* Animation loop */
  useFrame(() => {
    if (!isAnimating.current || !meshRef.current) return;

    const step = ROTATION_SPEED;
    meshRef.current.rotation.x += step;
    rotated.current += step;

    if (rotated.current >= FULL_ROTATION) {
      // Snap back so logo faces front perfectly
      meshRef.current.rotation.x = 0;
      rotated.current = 0;
      isAnimating.current = false;
    }
  });

  /* Hover handler */
  const handleHover = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
  };

  return (
    <Float speed={1.75} rotationIntensity={0} floatIntensity={2}>
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* Sphere */}
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={2.75}
        onPointerEnter={handleHover}
      >
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#C7B9FF"
          emissive="#C7B9FF"
          emissiveIntensity={0.6}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Logo decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.5}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/* ---------- Canvas ---------- */

const BallCanvas: FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
