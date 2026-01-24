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

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const START = new THREE.Vector3(-1.6, 1.6, 0);
// const END   = new THREE.Vector3(2.2, -2.2, 0);

// const SPEED = 0.25;
// const MAX_LENGTH = 0.7;
// const DELAY_DURATION = 2.5;

// export default function Comet() {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);

//   const progress = useRef(0);
//   const waiting = useRef(false);
//   const delayTimer = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(END, START).normalize(),
//     []
//   );

//   // 🔧 Geometry with origin at one end
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // ⬅ anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     if (waiting.current) {
//       delayTimer.current += delta;
//       if (delayTimer.current >= DELAY_DURATION) {
//         waiting.current = false;
//         delayTimer.current = 0;
//         progress.current = 0;
//       }
//       return;
//     }

//     progress.current += delta * SPEED;
//     const t = Math.min(progress.current, 1);

//     const headPos = new THREE.Vector3().lerpVectors(START, END, t);
//     headRef.current.position.copy(headPos);

//     // ✔ Correct grow → shrink (peaks at center)
//     const tailLength =
//       t < 0.5
//         ? THREE.MathUtils.lerp(0.01, MAX_LENGTH, t * 2)
//         : THREE.MathUtils.lerp(MAX_LENGTH, 0.01, (t - 0.5) * 2);

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.lookAt(
//       headPos.clone().add(direction)
//     );

//     if (t >= 1) {
//       waiting.current = true;
//     }
//   });

//   return (
//     <>
//       {/* Invisible anchor */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 8, 8]} />
//         <meshBasicMaterial />
//       </mesh>

//       {/* Comet tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
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
// const END = new THREE.Vector3(2.2, -2.2, 0);

// const SPEED = 0.25;
// const MAX_LENGTH = 0.7;
// const DELAY_DURATION = 2.5;

// export default function Comet() {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);

//   const progress = useRef(0);
//   const waiting = useRef(false);
//   const delayTimer = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(END, START).normalize(),
//     []
//   );

//   // Tail geometry anchored at the head
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // ⏸ Delay phase
//     if (waiting.current) {
//       delayTimer.current += delta;
//       if (delayTimer.current >= DELAY_DURATION) {
//         waiting.current = false;
//         delayTimer.current = 0;
//         progress.current = 0;
//       }
//       return;
//     }

//     // ▶ Animation phase
//     progress.current += delta * SPEED;
//     const t = Math.min(progress.current, 1);

//     const headPos = new THREE.Vector3().lerpVectors(START, END, t);
//     headRef.current.position.copy(headPos);

//     // Grow → shrink ONCE
//     const tailLength =
//       t < 0.5
//         ? THREE.MathUtils.lerp(0.01, MAX_LENGTH, t * 2)
//         : THREE.MathUtils.lerp(MAX_LENGTH, 0.01, (t - 0.5) * 2);

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.lookAt(headPos.clone().add(direction));

//     // 🛑 End cleanly (no second pulse)
//     if (t >= 1) {
//       tailRef.current.scale.set(0, 1, 1); // hide tail
//       waiting.current = true;
//     }
//   });

//   return (
//     <>
//       {/* Invisible head anchor */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 8, 8]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* Comet tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.6} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const START = new THREE.Vector3(-1.6, 1.6, 0);
// const END = new THREE.Vector3(2.2, -2.2, 0);

// const SPEED = 0.25;
// const MAX_LENGTH = 0.7;
// const DELAY_DURATION = 2.5;

// export default function Comet() {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);

//   const progress = useRef(0);
//   const waiting = useRef(false);
//   const delayTimer = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(END, START).normalize(),
//     []
//   );

//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // ⏸ DELAY PHASE — tail fully hidden
//     if (waiting.current) {
//       tailRef.current.scale.set(0, 1, 1); // 🔒 hard stop
//       delayTimer.current += delta;

//       if (delayTimer.current >= DELAY_DURATION) {
//         delayTimer.current = 0;
//         progress.current = 0;
//         waiting.current = false;
//       }
//       return;
//     }

//     // ▶ ANIMATION PHASE
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     // End immediately — no second animation allowed
//     if (t >= 1) {
//       tailRef.current.scale.set(0, 1, 1);
//       waiting.current = true;
//       return;
//     }

//     // Position head
//     const headPos = new THREE.Vector3().lerpVectors(START, END, t);
//     headRef.current.position.copy(headPos);

//     // ✅ SINGLE grow → shrink
//     const tailLength =
//       t < 0.5
//         ? THREE.MathUtils.lerp(0, MAX_LENGTH, t * 2)
//         : THREE.MathUtils.lerp(MAX_LENGTH, 0, (t - 0.5) * 2);

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.lookAt(headPos.clone().add(direction));
//   });

//   return (
//     <>
//       {/* Invisible head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 8, 8]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* Comet tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.6} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const START = new THREE.Vector3(-1.6, 1.6, 0);
// const END = new THREE.Vector3(2.2, -2.2, 0);

// const SPEED = 0.25;
// const MAX_LENGTH = 0.7;
// const DELAY_DURATION = 2.5;

// export default function Comet() {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);

//   const progress = useRef(0);
//   const delayTimer = useRef(0);
//   const running = useRef(true);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(END, START).normalize(),
//     []
//   );

//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // ⏸ Delay (tail hidden)
//     if (!running.current) {
//       tailRef.current.scale.set(0, 1, 1);
//       delayTimer.current += delta;

//       if (delayTimer.current >= DELAY_DURATION) {
//         delayTimer.current = 0;
//         progress.current = 0;
//         running.current = true;
//       }
//       return;
//     }

//     // ▶ Run once
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     // End hard-stop (NO second animation)
//     if (t >= 1) {
//       tailRef.current.scale.set(0, 1, 1);
//       running.current = false;
//       return;
//     }

//     // Head position
//     const headPos = new THREE.Vector3().lerpVectors(START, END, t);
//     headRef.current.position.copy(headPos);

//     // ✅ Single grow → shrink over full path
//     const tailLength = MAX_LENGTH * (1 - Math.abs(2 * t - 1));

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.lookAt(headPos.clone().add(direction));
//   });

//   return (
//     <>
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 8, 8]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.6} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.6;
// const MAX_LENGTH = 0.7;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0);
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // 🔺 single grow → shrink curve
//     const tailLength = MAX_LENGTH * (1 - Math.abs(2 * t - 1));

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.lookAt(headPos.clone().add(direction));
//   });

//   return (
//     <>
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0001, 8, 8]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.8} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.7;
// const MAX_LENGTH = 0.6;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head movement
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // ⭐ Natural shooting-star tail
//     let tailLength = 0;

//     if (t < 0.2) {
//       // dot → growing line
//       tailLength = MAX_LENGTH * (t / 0.2);
//     } else if (t < 0.6) {
//       // stable bright tail
//       tailLength = MAX_LENGTH;
//     } else {
//       // linear shrink → disappear
//       tailLength = MAX_LENGTH * (1 - (t - 0.6) / 0.4);
//     }

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(Math.max(tailLength, 0), 1, 1);
//     tailRef.current.lookAt(headPos.clone().add(direction));
//   });

//   return (
//     <>
//       {/* Tiny head dot */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.003, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.7}
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.7;
// const MAX_LENGTH = 0.6;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // 🔒 LOCKED diagonal angle
//   const angleZ = useMemo(() => {
//     const dir = new THREE.Vector3().subVectors(end, start).normalize();
//     return Math.atan2(dir.y, dir.x);
//   }, [start, end]);

//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head movement (diagonal travel)
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // ⭐ Shooting-star tail behavior
//     let tailLength = 0;

//     if (t < 0.2) {
//       tailLength = MAX_LENGTH * (t / 0.2);      // grow from dot
//     } else if (t < 0.6) {
//       tailLength = MAX_LENGTH;                  // stable streak
//     } else {
//       tailLength = MAX_LENGTH * (1 - (t - 0.6) / 0.4); // shrink
//     }

//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(Math.max(tailLength, 0), 1, 1);

//     // 🔒 FIXED rotation — NO TILTING
//     tailRef.current.rotation.set(0, 0, angleZ);
//   });

//   return (
//     <>
//       {/* Bright head dot */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.003, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Locked tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.75}
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.7;
// const MAX_LENGTH = 0.6;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   // 🔒 fixed diagonal rotation
//   const angleZ = useMemo(
//     () => Math.atan2(direction.y, direction.x),
//     [direction]
//   );

//   // Tail centered geometry (IMPORTANT)
//   const tailGeometry = useMemo(
//     () => new THREE.BoxGeometry(1, 0.004, 0.004),
//     []
//   );

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head keeps moving
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // 🌠 Tail lifecycle
//     let tailLength = 0;

//     if (t < 0.2) {
//       tailLength = MAX_LENGTH * (t / 0.2);
//     } else if (t < 0.6) {
//       tailLength = MAX_LENGTH;
//     } else {
//       tailLength = MAX_LENGTH * (1 - (t - 0.6) / 0.4);
//     }

//     // 🔑 Position tail BEHIND the head
//     tailRef.current.position.copy(
//       headPos.clone().addScaledVector(direction, -tailLength / 2)
//     );

//     tailRef.current.scale.set(Math.max(tailLength, 0), 1, 1);
//     tailRef.current.rotation.set(0, 0, angleZ);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0003, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.75}
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.45;          // slower = smoother
// const MAX_LENGTH = 0.6;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);
//   const finished = useRef(false);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   const angleZ = useMemo(
//     () => Math.atan2(direction.y, direction.x),
//     [direction]
//   );

//   /**
//    * 🔑 Geometry starts from origin and extends forward
//    * NOT centered anymore
//    */
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.004, 0.004);
//     geo.translate(0.5, 0, 0); // 👈 critical fix
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current || finished.current) return;

//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       finished.current = true;
//       onComplete();
//       return;
//     }

//     /* Head movement */
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     /* Tail lifecycle */
//     let tailLength = 0;

//     if (t < 0.5) {
//       // grow till halfway
//       tailLength = MAX_LENGTH * (t / 0.5);
//     } else {
//       // very slow shrink
//       tailLength = MAX_LENGTH * (1 - (t - 0.5) / 0.5);
//     }

//     tailLength = Math.max(tailLength, 0);

//     /* Tail stays attached to head */
//     tailRef.current.position.copy(headPos);
//     tailRef.current.rotation.set(0, 0, angleZ);
//     tailRef.current.scale.set(tailLength, 1, 1);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.0003, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.7}
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.35;        // slower = smoother
// const MAX_LENGTH = 0.45;  // tail size

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   const angleZ = useMemo(
//     () => Math.atan2(direction.y, direction.x),
//     [direction]
//   );

//   const tailGeometry = useMemo(
//     () => new THREE.BoxGeometry(1, 0.003, 0.003),
//     []
//   );

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head ALWAYS moves
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // 🌠 Tail growth → peak → slow shrink
//     let tailLength = 0;

//     if (t < 0.25) {
//       // grow
//       tailLength = MAX_LENGTH * (t / 0.25);
//     } else {
//       // slow shrink while moving
//       tailLength = MAX_LENGTH * (1 - (t - 0.25) / 0.75);
//     }

//     tailLength = Math.max(tailLength, 0.001);

//     // Tail stays BEHIND head
//     tailRef.current.position.copy(
//       headPos.clone().addScaledVector(direction, -tailLength / 2)
//     );

//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.rotation.set(0, 0, angleZ);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.7}
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.45;
// const MAX_LENGTH = 0.5;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   const angleZ = useMemo(
//     () => Math.atan2(direction.y, direction.x),
//     [direction]
//   );

//   // Tail grows only backward from head
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Progress ALWAYS increases
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head ALWAYS moves
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // 🌠 Tail length based on progress
//     let tailLength = 0;

//     if (t < 0.4) {
//       // grow while moving
//       tailLength = MAX_LENGTH * (t / 0.4);
//     } else {
//       // shrink while moving
//       tailLength = MAX_LENGTH * (1 - (t - 0.4) / 0.6);
//     }

//     tailLength = Math.max(tailLength, 0);

//     // Tail sticks to head and extends backward
//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.rotation.set(0, 0, angleZ);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.75}
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.45;
// const MAX_LENGTH = 0.5;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   const angleZ = useMemo(() => Math.atan2(direction.y, direction.x), [direction]);

//   // Tail geometry anchored at the head (negative X)
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(-0.5, 0, 0); // head at origin, tail extends backward
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Update progress
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Move head
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail length (grow then shrink)
//     let tailLength = 0;
//     if (t < 0.4) {
//       tailLength = MAX_LENGTH * (t / 0.4);
//     } else {
//       tailLength = MAX_LENGTH * (1 - (t - 0.4) / 0.6);
//     }
//     tailLength = Math.max(tailLength, 0);

//     // Update tail position, scale, rotation, and fade opacity
//     tailRef.current.position.copy(headPos);
//     tailRef.current.scale.set(tailLength, 1, 1);
//     tailRef.current.rotation.set(0, 0, angleZ);
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75 * (tailLength / MAX_LENGTH);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.75} // initial, overridden in useFrame
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.45;
// const MAX_LENGTH = 0.5;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const direction = useMemo(
//     () => new THREE.Vector3().subVectors(end, start).normalize(),
//     [start, end]
//   );

//   // Tail geometry anchored at center (will scale along X)
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor at left, will scale toward right
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Update progress
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Move head
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail length (grow then shrink)
//     let tailLengthT = 0;
//     if (t < 0.4) {
//       tailLengthT = MAX_LENGTH * (t / 0.4);
//     } else {
//       tailLengthT = MAX_LENGTH * (1 - (t - 0.4) / 0.6);
//     }
//     tailLengthT = Math.max(tailLengthT, 0);

//     // Tail start position along the path
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector from tail start to head
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();

//     // Center position for the tail mesh
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Scale tail along its length
//     tailRef.current.scale.set(tailDistance, 1, 1);

//     // Rotate tail along direction
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Fade opacity with tail length
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75 * (tailDistance / MAX_LENGTH);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial
//           color="white"
//           transparent
//           opacity={0.75} // initial, overridden in useFrame
//         />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.45;
// const MAX_LENGTH = 0.5;

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry: Box along X-axis, anchor at left
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor left, will scale toward right
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Increase speed after tail starts shrinking
//     const speedMultiplier = progress.current < 0.4 ? 1 : 1.8;
//     progress.current += delta * SPEED * speedMultiplier;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head position
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail length (grow then shrink)
//     let tailLengthT = 0;
//     if (t < 0.4) {
//       tailLengthT = MAX_LENGTH * (t / 0.4);
//     } else {
//       tailLengthT = MAX_LENGTH * (1 - (t - 0.4) / 0.6);
//     }
//     tailLengthT = Math.max(tailLengthT, 0);

//     // Tail start position along the path
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail scale and rotation
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail opacity fades with length
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75 * (tailDistance / MAX_LENGTH);
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.45;
// const MAX_LENGTH = 0.5;
// const TAIL_GROW_DURATION = 0.3; // fraction of total progress to grow tail

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry: anchored at left, will scale toward right
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor left
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Update progress
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Move head along start → end
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail length grows only for the first TAIL_GROW_DURATION
//     let tailLengthT = 0;
//     if (t <= TAIL_GROW_DURATION) {
//       tailLengthT = MAX_LENGTH * (t / TAIL_GROW_DURATION);
//     } else {
//       tailLengthT = MAX_LENGTH; // stop growing
//     }

//     // Tail start position lags behind the head by its length
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail scale and rotation
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail opacity stays constant
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 0.25; // normal speed
// const FAST_SPEED = 0.6; // speed while tail is growing
// const MAX_LENGTH = 0.5;
// const TAIL_GROW_DURATION = 0.3; // fraction of progress during which tail grows

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry anchored at left
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor left, scale toward right
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Use fast speed during tail growth, normal afterwards
//     const currentSpeed = progress.current < TAIL_GROW_DURATION ? FAST_SPEED : SPEED;
//     progress.current += delta * currentSpeed;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Move head along start → end
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail length grows only during initial tail-grow duration
//     let tailLengthT = 0;
//     if (t <= TAIL_GROW_DURATION) {
//       tailLengthT = MAX_LENGTH * (t / TAIL_GROW_DURATION);
//     } else {
//       tailLengthT = MAX_LENGTH; // stop growing
//     }

//     // Tail start lags behind head by its length
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail scale and rotation
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Constant tail opacity
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 1.5; // high speed for shooting star
// const MAX_LENGTH = 0.5;
// const TAIL_GROW_DURATION = 0.3; // fraction of total movement to grow tail

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor left
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Constant high speed
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     if (t >= 1) {
//       onComplete();
//       return;
//     }

//     // Head moves along path
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail grows initially, then stays constant
//     let tailLengthT = t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start lags behind head
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Scale and rotate tail
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Constant opacity
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 1.5;               // fast shooting star speed
// const MAX_LENGTH = 0.5;          // tail max length
// const TAIL_GROW_DURATION = 0.3;  // fraction of path to grow tail
// const EXTRA_TRAVEL = 0.2;        // extra progress beyond end to travel out of screen

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor at left, scale toward right
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // High constant speed
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     // Allow extra travel beyond 1 for smooth exit
//     const tMax = 1 + EXTRA_TRAVEL;
//     if (t >= tMax) {
//       onComplete();
//       return;
//     }

//     // Head position along extended path
//     const headPos = new THREE.Vector3().lerpVectors(start, end, Math.min(t, 1));
//     headRef.current.position.copy(headPos);

//     // Tail grows only in initial phase
//     let tailLengthT = t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start lags behind head
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, Math.min(tailStartT, 1));

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail scale and rotation
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail opacity constant
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3;
//   end: THREE.Vector3;
//   onComplete: () => void;
// };

// const SPEED = 1.5;               // fast shooting star speed
// const MAX_LENGTH = 0.5;          // tail max length
// const TAIL_GROW_DURATION = 0.3;  // fraction of path to grow tail
// const EXTRA_TRAVEL = 0.2;        // extra progress beyond end to travel out of screen

// export default function Comet({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor at left, scale toward right
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // High constant speed
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     // Allow extra travel beyond 1 for smooth exit
//     const tMax = 1 + EXTRA_TRAVEL;
//     if (t >= tMax) {
//       onComplete();
//       return;
//     }

//     // Head position along extended path
//     const headPos = new THREE.Vector3().lerpVectors(start, end, Math.min(t, 1));
//     headRef.current.position.copy(headPos);

//     // Tail grows only in initial phase
//     let tailLengthT = t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start lags behind head
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, Math.min(tailStartT, 1));

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail scale and rotation
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail opacity constant
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3; // starting point (top of screen)
//   end: THREE.Vector3;   // ending point (bottom of screen)
//   onComplete: () => void;
// };

// const SPEED = 1.5;               // shooting star speed
// const MAX_LENGTH = 0.5;          // tail max length
// const TAIL_GROW_DURATION = 0.2;  // fraction of movement for tail to grow

// export default function ShootingStar({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 0.003, 0.003);
//     geo.translate(0.5, 0, 0); // anchor left, scales toward right
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // High constant speed
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     // Head position along path
//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail grows initially
//     const tailLengthT =
//       t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start lags behind head
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail scale and rotation
//     tailRef.current.scale.set(tailDistance, 1, 1);
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Constant opacity
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;

//     // Detect when comet is below screen (Y < -1 for example)
//     if (headPos.y < -1.2) {
//       onComplete(); // remove comet after it moves out
//     }
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3; // starting point (top of screen)
//   end: THREE.Vector3;   // ending point (bottom of screen)
//   onComplete: () => void;
// };

// const SPEED = 1.5;               // shooting star speed
// const MAX_LENGTH = 0.5;          // tail max length
// const TAIL_GROW_DURATION = 0.2;  // fraction of movement for tail to grow
// const HEAD_THICKNESS = 0.004;    // thick at head
// const TAIL_THICKNESS = 0.0005;   // thin at tail

// export default function ShootingStar({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry (Box, pivot at head)
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 1, 1);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Move head
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail grows initially
//     const tailLengthT =
//       t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start position
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail rotation
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail scale: length + thickness taper
//     const thickness = TAIL_THICKNESS + (HEAD_THICKNESS - TAIL_THICKNESS) * (tailDistance / MAX_LENGTH);
//     tailRef.current.scale.set(tailDistance, thickness, thickness);

//     // Tail opacity
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;

//     // Remove comet when off-screen
//     if (headPos.y < -1.2) {
//       onComplete();
//     }
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3; // starting point (top of screen)
//   end: THREE.Vector3;   // ending point (bottom of screen)
//   onComplete: () => void;
// };

// const SPEED = 1.5;               // shooting star speed
// const MAX_LENGTH = 0.5;          // tail max length
// const TAIL_GROW_DURATION = 0.2;  // fraction of movement for tail to grow
// const HEAD_THICKNESS = 0.004;    // thick at head
// const TAIL_THICKNESS = 0.0005;   // thin at tail

// export default function ShootingStar({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry (Box, pivot at head)
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 1, 1);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Move head
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail grows initially
//     const tailLengthT =
//       t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start position
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail rotation
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail scale: length + thickness taper (thicker at head, thinner at tip)
//     const taperRatio = Math.min(tailDistance / MAX_LENGTH, 1);
//     const thickness = HEAD_THICKNESS * (1 - taperRatio) + TAIL_THICKNESS * taperRatio;
//     tailRef.current.scale.set(tailDistance, thickness, thickness);

//     // Tail opacity
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;

//     // Remove comet when off-screen
//     if (headPos.y < -1.2) {
//       onComplete();
//     }
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry}>
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// type Props = {
//   start: THREE.Vector3; // starting point (top of screen)
//   end: THREE.Vector3;   // ending point (bottom of screen)
//   onComplete: () => void;
// };

// // Adjust these for visual thickness
// const SPEED = 1.5;               // shooting star speed
// const MAX_LENGTH = 0.5;          // tail max length
// const TAIL_GROW_DURATION = 0.2;  // fraction of movement for tail to grow
// const HEAD_THICKNESS = 0.008;    // thicker at head (increased)
// const TAIL_THICKNESS = 0.0003;   // sharper tip (decreased)

// export default function ShootingStar({ start, end, onComplete }: Props) {
//   const headRef = useRef<THREE.Mesh>(null);
//   const tailRef = useRef<THREE.Mesh>(null);
//   const progress = useRef(0);

//   // Tail geometry (Box, pivot at head)
//   const tailGeometry = useMemo(() => {
//     const geo = new THREE.BoxGeometry(1, 1, 1);
//     geo.translate(0.5, 0, 0); // anchor at head
//     return geo;
//   }, []);

//   useFrame((_, delta) => {
//     if (!headRef.current || !tailRef.current) return;

//     // Move head
//     progress.current += delta * SPEED;
//     const t = progress.current;

//     const headPos = new THREE.Vector3().lerpVectors(start, end, t);
//     headRef.current.position.copy(headPos);

//     // Tail grows initially
//     const tailLengthT =
//       t <= TAIL_GROW_DURATION ? MAX_LENGTH * (t / TAIL_GROW_DURATION) : MAX_LENGTH;

//     // Tail start position
//     const tailStartT = Math.max(t - tailLengthT, 0);
//     const tailStartPos = new THREE.Vector3().lerpVectors(start, end, tailStartT);

//     // Tail vector and center
//     const tailVector = new THREE.Vector3().subVectors(headPos, tailStartPos);
//     const tailDistance = tailVector.length();
//     const tailCenter = new THREE.Vector3().addVectors(headPos, tailStartPos).multiplyScalar(0.5);
//     tailRef.current.position.copy(tailCenter);

//     // Tail rotation
//     tailRef.current.rotation.set(0, 0, Math.atan2(tailVector.y, tailVector.x));

//     // Tail scale: length + taper thickness (thicker at head, sharper tip)
//     const taperRatio = Math.min(tailDistance / MAX_LENGTH, 1);
//     const thickness = HEAD_THICKNESS * (1 - taperRatio) + TAIL_THICKNESS * taperRatio;
//     tailRef.current.scale.set(tailDistance, thickness, thickness);

//     // Tail opacity
//     (tailRef.current.material as THREE.MeshBasicMaterial).opacity = 0.75;

//     // Remove comet when off-screen
//     if (headPos.y < -1.2) {
//       onComplete();
//     }
//   });

//   return (
//     <>
//       {/* Head */}
//       <mesh ref={headRef}>
//         <sphereGeometry args={[0.002, 8, 8]} />
//         <meshBasicMaterial color="white" />
//       </mesh>

//       {/* Tail */}
//       <mesh ref={tailRef} geometry={tailGeometry} >
//         <meshBasicMaterial color="white" transparent opacity={0.75} />
//       </mesh>
//     </>
//   );
// }

import { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  start: THREE.Vector3;
  end: THREE.Vector3;
  onComplete: () => void;
};

const SPEED = 1.5; // same shooting speed

export default function ShootingStar({ start, end, onComplete }: Props) {
  const spriteRef = useRef<THREE.Sprite>(null);
  const progress = useRef(0);

  // Load GIF texture
  const texture = useLoader(THREE.TextureLoader, "/shooting_star.gif");

  // Sprite material
  const material = useMemo(() => {
    return new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
    });
  }, [texture]);

  useFrame((_, delta) => {
    if (!spriteRef.current) return;

    // Progress movement
    progress.current += delta * SPEED;
    const t = progress.current;

    // Move sprite
    const position = new THREE.Vector3().lerpVectors(start, end, t);
    spriteRef.current.position.copy(position);

    // Rotate sprite to face direction of travel
    const dir = new THREE.Vector3().subVectors(end, start).normalize();
    spriteRef.current.material.rotation = Math.atan2(dir.y, dir.x);

    // Scale sprite (adjust to taste)
    // spriteRef.current.scale.set(0.15, 0.04, 1);
    spriteRef.current.scale.set(0.9, 0.09, 1);

    // ✅ CORRECT ROTATION
    const material = spriteRef.current.material as THREE.SpriteMaterial;
    material.rotation = THREE.MathUtils.degToRad(-42);

    material.opacity = 0.95;

    // Remove when off-screen
    if (position.y < -1.2) {
      onComplete();
    }
  });

  return <sprite ref={spriteRef} material={material} />;
}
