// "use client";

// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// const StarBackground = (props: any) => {
//     const ref: any = useRef();
//     const [sphere] = useState(() =>
//         random.inSphere(new Float32Array(5001), { radius: 1.2 })
//     );

//     useFrame((state, delta) => {
//         ref.current.rotation.x -= delta / 10;
//         ref.current.rotation.y -= delta / 15;
//     });

//     return (
//         <group rotation={[0, 0, Math.PI / 4]}>
//             <Points
//                 ref={ref}
//                 positions={sphere}
//                 stride={3}
//                 frustumCulled
//                 {...props}
//             >
//                 <PointMaterial
//                     transparent
//                     color="$fff"
//                     size={0.002}
//                     sizeAttenuation={true}
//                     dethWrite={false}
//                 />
//             </Points>
//         </group>
//     );
// };

// const StarsCanvas = () => (
//     <div className="w-full h-auto fixed inset-0 z-[20]">
//         <Canvas camera={{ position: [0, 0, 1] }}>
//             <Suspense fallback={null}>
//                 <StarBackground />
//             </Suspense>
//         </Canvas>
//     </div>
// );

// export default StarsCanvas;

// "use client";
// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";
// const StarBackground = (props: any) => {
//   const ref: any = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5001), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     const { mouse } = state;

//     // slow base rotation
//     ref.current.rotation.y -= delta * 0.01;

//     // interactive hover movement
//     ref.current.rotation.x += mouse.y * delta * 0.05;
//     ref.current.rotation.y += mouse.x * delta * 0.05;
//   });

//   return (
//     <group rotation={[Math.PI / 4, 0, 0]}>
//       {" "}
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         {" "}
//         <PointMaterial
//           transparent
//           color="#e0733a"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />{" "}
//       </Points>{" "}
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   const mouse = useRef({ x: 0, y: 0 });

//   return (
//     <div className="w-full h-auto fixed inset-0 z-[20]">
//       {" "}
//       <Canvas
//         onPointerMove={(e) => {
//           mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//           mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
//         }}
//         camera={{ position: [0, 0, 1] }}
//       >
//         {" "}
//         <Suspense fallback={null}>
//           {" "}
//           <StarBackground />{" "}
//         </Suspense>{" "}
//       </Canvas>{" "}
//     </div>
//   );
// };
// export default StarsCanvas;




"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import DebugPoint from "./Comet";
import Comet from "./Comet";
import ShootingStars from "./ShootingStars";

/* =======================
   Star Background
======================= */
const StarBackground = (props: any) => {
  const ref = useRef<any>();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    const { mouse } = state;

    if (!ref.current) return;

    // base slow rotation
    ref.current.rotation.y -= delta * 0.01;

    // mouse-reactive movement (NO pointer capture)
    ref.current.rotation.x += mouse.y * delta * 0.3;
    ref.current.rotation.y += mouse.x * delta * 0.3;
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#e0733a"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

/* =======================
   Canvas Wrapper
======================= */
const StarsCanvas = () => {
  return (
   <div className="fixed inset-0 z-[0]  glass-background">
  <Canvas
    camera={{ position: [0, 0, 1] }}
    dpr={[1, 2]}
    style={{ pointerEvents: "none" }}
  >
    <Suspense fallback={null}>
      <StarBackground />
      <ShootingStars/>
    </Suspense>
  </Canvas>
</div>
  );
};

export default StarsCanvas;
