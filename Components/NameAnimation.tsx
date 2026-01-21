// "use client";

// import { motion, Variants } from "framer-motion";
// import React from "react";

// const name: string = "THIRULOGACHANDAR";

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const letter: Variants = {
//   hidden: {
//     y: -50,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "linear",
//     },
//   },
// };

// const NameAnimation: React.FC = () => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       style={{
//         display: "flex",
//         fontSize: "3rem",
//         fontWeight: 700,
//         overflow: "hidden",
//       }}
//       className="h-[200px] border flex justify-center items-center"
//     >
//       {name.split("").map((char: string, index: number) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default NameAnimation;



// "use client";

// import { motion, Variants } from "framer-motion";
// import React from "react";

// const name = "THIRULOGACHANDAR";

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const letter: Variants = {
//   hidden: {
//     y: -80,
//     rotate: -12, // 👈 tilted while falling
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     rotate: 0, // 👈 straightens
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 220, // bounce strength
//       damping: 6, // lower = more bounce
//       mass: 0.6,
//     },
//   },
// };

// const HeroText: React.FC = () => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       style={{
//         display: "flex",
//         fontSize: "4rem",
//         fontWeight: 700,
//         overflow: "hidden",
//       }}
//     >
//       {name.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{
//             display: "inline-block",
//             transformOrigin: "center bottom",
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default HeroText;



// "use client";

// import { motion, Variants, useAnimationControls } from "framer-motion";
// import React, { useEffect } from "react";

// const name = "THIRULOGACHANDAR";

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const letter: Variants = {
//   hidden: {
//     y: -80,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 180,
//       damping: 16,
//     },
//   },
// };

// interface HeroNameProps {
//   onComplete: () => void;
// }

// const NameAnimation: React.FC<HeroNameProps> = ({ onComplete }) => {
//   const controls = useAnimationControls();

//   useEffect(() => {
//     controls.start("visible").then(onComplete); // 👈 trigger next animation
//   }, [controls, onComplete]);

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={controls}
//       style={{
//         display: "flex",
//         fontWeight: 700,
//       }}
//     >
//       {name.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//           className="text-[1.8rem] md:text-[3rem] xl:text[3.5rem]"
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default NameAnimation;




// "use client";

// import React, { useEffect } from "react";
// import { motion, Variants, useAnimationControls } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const name = "THIRULOGACHANDAR";

// /* Container animation */
// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// /* Letter animation */
// const letter: Variants = {
//   hidden: {
//     y: -80,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 180,
//       damping: 16,
//     },
//   },
// };

// interface HeroNameProps {
//   onComplete?: () => void;
// }

// const NameAnimation: React.FC<HeroNameProps> = ({ onComplete }) => {
//   const controls = useAnimationControls();

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.4,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible").then(() => {
//         onComplete?.(); // ✅ safely trigger next animation
//       });
//     }
//   }, [inView, controls, onComplete]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={container}
//       initial="hidden"
//       animate={controls}
//       style={{
//         display: "flex",
//         fontWeight: 700,
//       }}
//     >
//       {name.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//           className="text-[1.8rem] md:text-[3rem] xl:text-[3.5rem]"
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default NameAnimation;



// "use client";

// import React, { useEffect } from "react";
// import { motion, Variants, useAnimationControls } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const name = "THIRULOGACHANDAR";

// /* Container animation */
// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// /* Letter animation */
// const letter: Variants = {
//   hidden: {
//     y: -80,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 180,
//       damping: 16,
//     },
//   },
// };

// interface HeroNameProps {
//   onComplete?: () => void;
// }

// const NameAnimation: React.FC<HeroNameProps> = ({ onComplete }) => {
//   const controls = useAnimationControls();

//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 IMPORTANT
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.set("hidden"); // 👈 reset when leaving viewport
//     }
//   }, [inView, controls]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={container}
//       initial="hidden"
//       animate={controls}
//       style={{
//         display: "flex",
//         fontWeight: 700,
//       }}
//     >
//       {name.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//           className="text-[1.8rem] md:text-[3rem] xl:text-[3.5rem]"
//           onAnimationComplete={() => {
//             if (index === name.length - 1 && inView) {
//               onComplete?.(); // fires every time
//             }
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default NameAnimation;



// "use client";

// import React, { useEffect } from "react";
// import { motion, Variants, useAnimationControls } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const name = "THIRULOGACHANDAR";

// /* Container animation */
// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// /* Letter animation */
// const letter: Variants = {
//   hidden: {
//     y: -80,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 180,
//       damping: 16,
//     },
//   },
// };

// interface HeroNameProps {
//   onComplete?: () => void;
// }

// const NameAnimation: React.FC<HeroNameProps> = ({ onComplete }) => {
//   const controls = useAnimationControls();

//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.6, // 👈 slightly higher = more stable
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       // 🔥 CRITICAL FIX
//       controls.stop();          // stop any running animations
//       controls.set("hidden");   // force full reset instantly
//     }
//   }, [inView, controls]);

//   return (
//     <motion.div
      
//       variants={container}
//       initial="hidden"
//       animate={controls}
//       style={{
//         display: "flex",
//         fontWeight: 700,
//       }}
//     >
//       {name.split("").map((char, index) => (
//         <motion.span
//         ref={ref}
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//           className="text-[1.8rem] md:text-[3rem] xl:text-[3.5rem]"
//           onAnimationComplete={() => {
//             if (index === name.length - 1 && inView) {
//               onComplete?.();
//             }
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default NameAnimation;


// "use client";

// import React, { useEffect } from "react";
// import { motion, Variants, useAnimationControls } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const name = "THIRULOGACHANDAR";

// /* Container animation */
// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// /* Letter animation */
// const letter: Variants = {
//   hidden: {
//     y: -80,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 180,
//       damping: 16,
//     },
//   },
// };

// interface HeroNameProps {
//   onComplete?: () => void;
// }

// const NameAnimation: React.FC<HeroNameProps> = ({ onComplete }) => {
//   const controls = useAnimationControls();

//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.6,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.stop();
//       controls.set("hidden"); // hard reset
//     }
//   }, [inView, controls]);

//   return (
//     <div ref={ref} className="flex flex-col items-center text-center">
//       {/* -------- Line 1 -------- */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//         transition={{ duration: 0.5 }}
//         className="text-[1.4rem] md:text-[1.8rem] font-medium mb-2"
//       >
//         Hi,&nbsp;
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold">
//           I&apos;m
//         </span>
//       </motion.div>

//       {/* -------- Line 2 (Animated Name) -------- */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate={controls}
//         className="flex font-bold"
//       >
//         {name.split("").map((char, index) => (
//           <motion.span
//             key={index}
//             variants={letter}
//             className="inline-block text-[1.8rem] md:text-[3rem] xl:text-[3.5rem]"
//             onAnimationComplete={() => {
//               if (index === name.length - 1 && inView) {
//                 onComplete?.();
//               }
//             }}
//           >
//             {char}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default NameAnimation;




"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const name = "THIRULOGACHANDAR";

/* Container animation */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // stagger between letters
    },
  },
};

/* Letter animation */
const letter: Variants = {
  hidden: {
    y: -80,
    rotate: -12,
    opacity: 0,
  },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 16,
    },
  },
};

interface HeroNameProps {
  onComplete?: () => void;
}

const NameAnimation: React.FC<HeroNameProps> = ({ onComplete }) => {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  // This key forces a full remount of letters when we exit viewport
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.stop();
      controls.set("hidden"); // hard reset letters
      setResetKey((prev) => prev + 1); // force full re-render
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center z-[120]">
      {/* -------- Line 1 -------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-[1.4rem] md:text-[1.8rem] font-medium mb-2"
      >
        Hi,&nbsp;
        <span className=" cinzel-font text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold">
          I&apos;m
        </span>
      </motion.div>

      {/* -------- Line 2 (Animated Name) -------- */}
      <motion.div
        key={resetKey} // 👈 forces re-render on exit
        variants={container}
        initial="hidden"
        animate={controls}
        className="flex cinzel-font font-bold"
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className="inline-block text-[1.8rem] md:text-[3rem] xl:text-[3.5rem] hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold cursor-pointer z-5"
            onAnimationComplete={() => {
              if (index === name.length - 1 && inView) {
                onComplete?.();
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default NameAnimation;


