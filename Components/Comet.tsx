// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const START = new THREE.Vector3(-1.6, 1.6, 0);
// const END   = new THREE.Vector3(2.2, -2.2, 0);
// const SPEED = 0.6;
// const MAX_LENGTH = 0.7;

// export default function Comet() {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Direction is constant → memoized
//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(END, START).normalize(),
//     []
//   );

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     progress.current += delta * SPEED;
//     const t = Math.min(progress.current, 1);

//     // Move head
//     const headPos = new THREE.Vector3().lerpVectors(START, END, t);
//     headRef.current.position.copy(headPos);

//     // Linear grow → shrink
//     let tailLength;
//     if (t < 0.5) {
//       tailLength = THREE.MathUtils.lerp(0.01, MAX_LENGTH, t * 2);
//     } else {
//       tailLength = THREE.MathUtils.lerp(MAX_LENGTH, 0.01, (t - 0.5) * 2);
//     }

//     // Tail positioned ONLY behind head
//     tailRef.current.position
//       .copy(headPos)
//       .addScaledVector(direction, -tailLength);

//     // Scale tail from head outward
//     tailRef.current.scale.set(tailLength, 1, 1);

//     // Orient tail
//     tailRef.current.lookAt(headPos);

//     // Reset
//     if (t >= 1) {
//       progress.current = 0;
//     }
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 16, 16]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail (anchored at head) */}
//       <mesh ref={tailRef}>
//         {/* geometry origin shifted to one end */}
//         <boxGeometry args={[1, 0.006, 0.006]} />
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.6}
//         />
//       </mesh>
//     </>
//   );
// }





// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const START = new THREE.Vector3(-1.6, 1.6, 0);
// const END   = new THREE.Vector3(2.2, -2.2, 0);

// // 🔧 Controls
// const SPEED = 0.25;          // ⬅ slower = longer animation
// const MAX_LENGTH = 0.7;
// const DELAY_DURATION = 2.5;  // ⬅ delay between animations (seconds)

// export default function Comet() {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);

//   const progress = useRef(0);
//   const waiting = useRef(false);
//   const delayTimer = useRef(0);

//   // Constant direction
//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(END, START).normalize(),
//     []
//   );

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     /* ⏸️ Delay between repetitions */
//     if (waiting.current) {
//       delayTimer.current += delta;
//       if (delayTimer.current >= DELAY_DURATION) {
//         waiting.current = false;
//         delayTimer.current = 0;
//         progress.current = 0;
//       }
//       return;
//     }

//     /* ▶️ Progress animation */
//     progress.current += delta * SPEED;
//     const t = Math.min(progress.current, 1);

//     // Head position
//     const headPos = new THREE.Vector3().lerpVectors(START, END, t);
//     headRef.current.position.copy(headPos);

//     // Tail grow → shrink
//     let tailLength;
//     if (t < 0.5) {
//       tailLength = THREE.MathUtils.lerp(0.01, MAX_LENGTH, t * 2);
//     } else {
//       tailLength = THREE.MathUtils.lerp(
//         MAX_LENGTH,
//         0.01,
//         (t - 0.5) * 2
//       );
//     }

//     // Tail placement
//     tailRef.current.position
//       .copy(headPos)
//       .addScaledVector(direction, -tailLength);

//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.lookAt(headPos);

//     /* 🔁 End → start delay */
//     if (t >= 1) {
//       waiting.current = true;
//     }
//   });

//   return (
//     <>
//       {/* Invisible head (anchor) */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Thin comet tail */}
//       <mesh ref={tailRef}>
//         <boxGeometry args={[1, 0.004, 0.004]} />
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.6}
//         />
//       </mesh>
//     </>
//   );
// }





import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const START = new THREE.Vector3(-1.6, 1.6, 0);
const END   = new THREE.Vector3(2.2, -2.2, 0);

const SPEED = 0.25;
const MAX_LENGTH = 0.7;
const DELAY_DURATION = 2.5;

export default function Comet() {
  const headRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);

  const progress = useRef(0);
  const waiting = useRef(false);
  const delayTimer = useRef(0);

  const direction = useMemo(
    () => new THREE.Vector3().subVectors(END, START).normalize(),
    []
  );

  // 🔧 Geometry with origin at one end
  const tailGeometry = useMemo(() => {
    const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
    geo.translate(0.5, 0, 0); // ⬅ anchor at head
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (!headRef.current || !tailRef.current) return;

    if (waiting.current) {
      delayTimer.current += delta;
      if (delayTimer.current >= DELAY_DURATION) {
        waiting.current = false;
        delayTimer.current = 0;
        progress.current = 0;
      }
      return;
    }

    progress.current += delta * SPEED;
    const t = Math.min(progress.current, 1);

    const headPos = new THREE.Vector3().lerpVectors(START, END, t);
    headRef.current.position.copy(headPos);

    // ✔ Correct grow → shrink (peaks at center)
    const tailLength =
      t < 0.5
        ? THREE.MathUtils.lerp(0.01, MAX_LENGTH, t * 2)
        : THREE.MathUtils.lerp(MAX_LENGTH, 0.01, (t - 0.5) * 2);

    tailRef.current.position.copy(headPos);
    tailRef.current.scale.set(tailLength, 1, 1);
    tailRef.current.lookAt(
      headPos.clone().add(direction)
    );

    if (t >= 1) {
      waiting.current = true;
    }
  });

  return (
    <>
      {/* Invisible anchor */}
      <mesh ref={headRef}>
        <sphereGeometry args={[0.0001, 8, 8]} />
        <meshBasicMaterial />
      </mesh>

      {/* Comet tail */}
      <mesh ref={tailRef} geometry={tailGeometry}>
        <meshBasicMaterial
          color="white"
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  );
}
