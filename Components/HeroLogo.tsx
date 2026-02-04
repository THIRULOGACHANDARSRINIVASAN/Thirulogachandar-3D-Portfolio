// "use client";

// import { motion, useAnimationControls } from "framer-motion";
// import React, { useEffect } from "react";

// interface HeroLogoProps {
//   show: boolean;
// }

// const HeroLogo: React.FC<HeroLogoProps> = ({ show }) => {
//   const controls = useAnimationControls();

//   useEffect(() => {
//     if (!show) return;

//     const runAnimation = async () => {
//       // 1️⃣ Enter from left with TWO BOUNCES (tween, not spring)
//       await controls.start({
//         x: [-120, 30, -15, 0],
//         opacity: 1,
//         transition: {
//           type: "tween",     // ✅ IMPORTANT
//           duration: 0.9,
//           ease: "easeOut",
//         },
//       });

//       // 2️⃣ Move to top-right corner
//       await controls.start({
//         x: 280,   // adjust to your layout
//         y: -120,
//         transition: {
//           duration: 0.8,
//           ease: "easeInOut",
//         },
//       });

//       // 3️⃣ Rotate once on X-axis
//       await controls.start({
//         rotateX: 360,
//         transition: {
//           duration: 0.8,
//           ease: "easeInOut",
//         },
//       });
//     };

//     runAnimation();
//   }, [show, controls]);

//   return (
//     <motion.div
//       initial={{
//         x: -200,
//         opacity: 0,
//         rotateX: 0,
//       }}
//       animate={controls}
//       style={{
//         width: 70,
//         height: 70,
//         borderRadius: "50%",
//         overflow: "hidden",
//         backgroundColor: "#fff",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
//         transformStyle: "preserve-3d",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{ width: "100%", height: "100%" }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogo;

// "use client";

// import { motion, useAnimationControls } from "framer-motion";
// import React, { useEffect } from "react";

// interface HeroLogoProps {
//   show: boolean;
// }

// const HeroLogo: React.FC<HeroLogoProps> = ({ show }) => {
//   const controls = useAnimationControls();

//   useEffect(() => {
//     if (!show) return;

//     const runAnimation = async () => {
//       /* 1️⃣ Drop from top with TWO bounces */
//       await controls.start({
//         y: [-180, 0, -60, 0, -25, 0], // 👈 gravity + 2 bounces
//         opacity: 1,
//         transition: {
//           type: "tween",
//           duration: 1.4,
//           ease: "easeOut",
//         },
//       });

//       /* 2️⃣ Move to top-right corner */
//       await controls.start({
//         x: 260,   // adjust for container width
//         y: -120,  // move upward
//         transition: {
//           duration: 0.8,
//           ease: "easeInOut",
//         },
//       });

//       /* 3️⃣ Rotate once on X-axis */
//       await controls.start({
//         rotateX: 360,
//         transition: {
//           duration: 0.7,
//           ease: "easeInOut",
//         },
//       });
//     };

//     runAnimation();
//   }, [show, controls]);

//   return (
//     <motion.div
//       initial={{
//         y: -200,      // start above container
//         x: 0,
//         opacity: 0,
//         rotateX: 0,
//       }}
//       animate={controls}
//       style={{
//         width: 70,
//         height: 70,
//         borderRadius: "50%",
//         backgroundColor: "#fff",
//         boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
//         transformStyle: "preserve-3d",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: "50%",
//         }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogo;

// "use client";

// import { motion, useAnimationControls } from "framer-motion";
// import React, { useEffect } from "react";

// interface HeroLogoProps {
//   show: boolean;
// }

// const HeroLogo: React.FC<HeroLogoProps> = ({ show }) => {
//   const controls = useAnimationControls();

//   useEffect(() => {
//     if (!show) return;

//     const runAnimation = async () => {
//       /* 1️⃣ DC waveform motion (left → right) */
//       await controls.start({
//         x: [-280, -200, -120, -40, 40, 120],
//         y: [-40, 40, -30, 30, -15, 0],
//         opacity: 1,
//         transition: {
//           duration: 1.8,
//           ease: "easeInOut",
//         },
//       });

//       /* 2️⃣ Settle into top-right corner */
//       await controls.start({
//         x: 260,
//         y: -120,
//         transition: {
//           duration: 0.8,
//           ease: "easeInOut",
//         },
//       });

//       /* 3️⃣ Rotate once on X-axis */
//       await controls.start({
//         rotateX: 360,
//         transition: {
//           duration: 0.7,
//           ease: "easeInOut",
//         },
//       });
//     };

//     runAnimation();
//   }, [show, controls]);

//   return (
//     <motion.div
//       initial={{
//         x: -320,
//         y: 0,
//         opacity: 0,
//         rotateX: 0,
//       }}
//       animate={controls}
//       style={{
//         width: 70,
//         height: 70,
//         borderRadius: "50%",
//         backgroundColor: "#fff",
//         boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
//         transformStyle: "preserve-3d",
//         position: "absolute",
//         left: 0,
//         top: "50%",
//         transform: "translateY(-50%)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: "50%",
//         }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogo;

// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const swalVariant = {
//   hidden: {
//     opacity: 0,
//     scale: 0.7,
//     y: -40,
//   },
//   visible: {
//     opacity: 1,
//     scale: [0.7, 1.05, 1],
//     y: [ -40, 10, 0 ],
//     transition: {
//       duration: 0.6,
//       ease: [0.34, 1.56, 0.64, 1], // 👈 Swal-like elastic
//     },
//   },
// };

// const HeroLogoSwal = () => {
//   return (
//     <motion.div
//       variants={swalVariant}
//       initial="hidden"
//       animate="visible"
//       style={{
//         width: 80,
//         height: 80,
//         borderRadius: "50%",
//         background: "#fff",
//         boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{ width: "100%", height: "100%", borderRadius: "50%" }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogoSwal;

// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const swalVariant = {
//   hidden: {
//     opacity: 0,
//     scale: 0.7,
//     y: -40,
//   },
//   visible: {
//     opacity: 1,
//     scale: [0.7, 1.05, 1],
//     y: [ -40, 10, 0 ],
//     transition: {
//       duration: 0.6,
//       ease: [0.34, 1.56, 0.64, 1], // 👈 Swal-like elastic
//     },
//   },
// };

// const HeroLogoSwal = () => {
//   return (
//     <motion.div
//       variants={swalVariant}
//       initial="hidden"
//       animate="visible"
//       style={{
//         width: 80,
//         height: 80,
//         borderRadius: "50%",
//         background: "#fff",
//         boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{ width: "100%", height: "100%", borderRadius: "50%" }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogoSwal;

// "use client";

// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";

// const HeroLogoSwal: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // Trigger animation after mount
//     setMounted(true);
//   }, []);

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.6,
//         y: -40,
//       }}
//       animate={
//         mounted
//           ? {
//               opacity: 1,
//               scale: [0.6, 1.08, 1],
//               y: [-40, 10, 0],
//             }
//           : {}
//       }
//       transition={{
//         duration: 0.6,
//         ease: [0.34, 1.56, 0.64, 1], // SweetAlert feel
//       }}
//       style={{
//         width: 80,
//         height: 80,
//         borderRadius: "50%",
//         background: "#fff",
//         boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: "50%",
//         }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogoSwal;

// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const HeroLogoSwal: React.FC = () => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.3,
//         y: 30,
//       }}
//       animate={{
//         opacity: 1,
//         scale: [0.3, 1.05, 1],
//         y: [30, -6, 0],
//       }}
//       transition={{
//         duration: 0.45,
//         ease: [0.25, 0.46, 0.45, 0.94], // 🔑 Swal-like easing
//       }}
//       style={{
//         width: 90,
//         height: 90,
//         borderRadius: "50%",
//         backgroundColor: "#fff",
//         boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         margin: "0 auto",
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="Logo"
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: "50%",
//         }}
//       />
//     </motion.div>
//   );
// };

// export default HeroLogoSwal;

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function HeroLogo() {
//   return (
//     <div className="relative w-full h-40 overflow-hidden bg-gray-100">
//       <motion.div
//         className="absolute left-0 top-1/2 -translate-y-1/2"
//         animate={{
//           x: ["-20%", "100%"],
//           rotateX: [0, 360],
//         }}
//         transition={{
//           duration: 2.5,
//           ease: "linear",
//         }}
//       >
//         <Image
//           src="/logo.png"
//           alt="Rolling Logo"
//           width={80}
//           height={80}
//           className="rounded-full"
//         />
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function HeroLogo() {
//   return (
//     <div
//       className="relative w-full h-40 overflow-hidden bg-black"
//       style={{ perspective: 800 }}
//     >
//       <motion.div
//         className="absolute top-1/2 -translate-y-1/2"
//         animate={{
//           x: ["-120px", "calc(100vw - 80px)"],
//           rotateX: [0, 720],
//         }}
//         transition={{
//           duration: 3,
//           ease: "linear",
//         }}
//       >
//         <Image
//           src="/logo.png"
//           alt="Logo"
//           width={80}
//           height={80}
//           className="rounded-full"
//         />
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const WHEEL_SIZE = 180; // px
// const CONTAINER_PADDING = 16; // px
// const ROTATIONS = 1; // number of wheel rolls

// export default function HeroLogo() {
//   const circumference = Math.PI * WHEEL_SIZE;
//   const travelDistance = circumference * ROTATIONS;

//   return (
//     <div className="w-full px-4">
//       <div className="relative h-40 overflow-hidden flex justify-center items-center ">
//         <motion.div
//           className="absolute bottom-0 left-0  flex justify-center items-center"
//           animate={{
//             x: travelDistance,
//             rotateZ: ROTATIONS * 360,
//           }}
//           transition={{
//             duration: 3,
//             ease: "easeOut",
//           }}
//         >
//           <Image
//             src="/logo.png"
//             alt="Rolling Wheel"
//             width={WHEEL_SIZE}
//             height={WHEEL_SIZE}
//             className="rounded-full"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function FallingLogo() {
//   return (
//     <div className="relative  flex items-start justify-center overflow-hidden bg-black border">
//       <motion.div
//         initial={{ y: -200, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           type: "spring",
//           stiffness: 120,
//           damping: 12,
//           mass: 1,
//         }}
//       >
//         <Image
//           src="/logo.png"
//           alt="Logo"
//           width={200}
//           height={200}
//           className="rounded-full "
//         />
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import BallCanvas from "./Balls";
export default function FallingLogo( ) {
  return (
    <div className="relative py-6 w-full overflow-hidden flex justify-center z-[999] pointer-events-auto">
  <InView triggerOnce={false}>
    {({ inView, ref }) => (
      <motion.div
        ref={ref}
        initial={{ y: -200, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
      >
        {/* <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="
            rounded-full
            .
            transition-all duration-300
            hover:shadow-[0_0_30px_10px_rgba(99,102,241,0.8)]
          "
        /> */}
        <div  className="
            rounded-full
            .
            transition-all duration-300
            hover:shadow-[0_0_30px_10px_rgba(99,102,241,0.8)] w-50 h-50
          ">
          <BallCanvas icon="/logo.svg"></BallCanvas>
        </div>
      </motion.div>
    )}
  </InView>
</div>
  );
}
