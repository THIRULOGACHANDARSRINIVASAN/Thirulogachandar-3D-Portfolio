// "use client";

// import { motion, Variants } from "framer-motion";
// import React from "react";

// const text = "MERN STACK DEVELOPER";

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };

// const letter: Variants = {
//   hidden: {
//     x: -60,        // 👈 from left
//     rotate: -10,   // 👈 tilted while moving
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     rotate: 0,     // 👈 straighten
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 18,
//       mass: 0.6,
//     },
//   },
// };

// const PositionAnimation: React.FC = () => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       style={{
//         display: "flex",
//         gap: "0.15rem",
//         fontSize: "1.8rem",
//         fontWeight: 500,
//         overflow: "hidden",
//         letterSpacing: "0.1em",
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{
//             display: "inline-block",
//             transformOrigin: "left center",
//           }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default PositionAnimation;






// "use client";

// import { motion, Variants } from "framer-motion";
// import React from "react";

// const text = "MERN STACK DEVELOPER";

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };

// const letter: Variants = {
//   hidden: {
//     x: -60,
//     rotate: -10,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 18,
//     },
//   },
// };

// interface HeroPositionProps {
//   show: boolean;
// }

// const PositionAnimation: React.FC<HeroPositionProps> = ({ show }) => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={show ? "visible" : "hidden"}
//       style={{
//         display: "flex",
//         marginTop: "1rem",
//         fontSize: "1.8rem",
//         letterSpacing: "0.1em",
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span key={index} variants={letter}>
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default PositionAnimation;



// "use client";

// import { motion, Variants, useAnimationControls } from "framer-motion";
// import React, { useEffect } from "react";

// const text = "MERN STACK DEVELOPER";

// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };

// const letter: Variants = {
//   hidden: {
//     x: -60,
//     rotate: -10,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 18,
//     },
//   },
// };

// interface HeroPositionProps {
//   show: boolean;
//   onComplete: () => void;
// }

// const PositionAnimation: React.FC<HeroPositionProps> = ({
//   show,
//   onComplete,
// }) => {
//   const controls = useAnimationControls();

//   useEffect(() => {
//     if (!show) return;

//     controls.start("visible").then(onComplete); // 👈 notify parent
//   }, [show, controls, onComplete]);

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={controls}
//       style={{
//         display: "flex",
//         marginTop: "1rem",
//         fontSize: "1.8rem",
//         letterSpacing: "0.1em",
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default PositionAnimation;

// "use client";

// import { motion, Variants } from "framer-motion";
// import React from "react";

// const text = "MERN STACK DEVELOPER";

// /* Container animation */
// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//       when: "beforeChildren",
//     },
//   },
// };

// /* Letter animation */
// const letter: Variants = {
//   hidden: {
//     x: -60,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     x: [ -60, 10, -5, 0 ],
//     rotate: [ -12, 6, -2, 0 ],
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
// };

// interface HeroPositionProps {
//   show: boolean;
//   onComplete?: () => void;
// }

// const PositionAnimation: React.FC<HeroPositionProps> = ({
//   show,
//   onComplete,
// }) => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={show ? "visible" : "hidden"}
//       onAnimationComplete={() => {
//         onComplete?.();
//       }}
//       style={{
//         display: "flex",
//         marginTop: "1rem",
//         fontSize: "1.8rem",
//         letterSpacing: "0.15em",
//         fontWeight: 600,
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           style={{ display: "inline-block" }}
//           className="text-[1rem] md:text-[1.8rem]"
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default PositionAnimation;



// "use client";

// import { motion, Variants } from "framer-motion";
// import React from "react";

// const text = "MERN STACK DEVELOPER";

// /* Container animation */
// const container: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//       when: "beforeChildren",
//     },
//   },
// };

// /* Letter animation */
// const letter: Variants = {
//   hidden: {
//     x: -60,
//     rotate: -12,
//     opacity: 0,
//   },
//   visible: {
//     x: [-60, 10, -5, 0],
//     rotate: [-12, 6, -2, 0],
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
// };

// interface HeroPositionProps {
//   show: boolean;
//   onComplete?: () => void;
// }

// const PositionAnimation: React.FC<HeroPositionProps> = ({
//   show,
//   onComplete,
// }) => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={show ? "visible" : "hidden"}
//       onAnimationComplete={(definition) => {
//         // ✅ fires ONLY once after full stagger completes
//         if (definition === "visible") {
//           onComplete?.();
//         }
//       }}
//       className="flex mt-4 font-semibold tracking-[0.15em]"
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={letter}
//           className="inline-block text-[1rem] md:text-[1.8rem]"
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default PositionAnimation;




"use client";

import React, { useEffect } from "react";
import { motion, Variants, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const text = "MERN STACK DEVELOPER";

/* Container animation */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      when: "beforeChildren",
    },
  },
};

/* Letter animation */
const letter: Variants = {
  hidden: {
    x: -60,
    rotate: -12,
    opacity: 0,
  },
  visible: {
    x: [-60, 10, -5, 0],
    rotate: [-12, 6, -2, 0],
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

interface HeroPositionProps {
  onComplete?: () => void;
}

const PositionAnimation: React.FC<HeroPositionProps> = ({ onComplete }) => {
  const controls = useAnimationControls();

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 allow replay
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.set("hidden"); // 👈 reset on exit
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="flex mt-4 font-semibold tracking-[0.15em] z-[110]"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className="inline-block text-[1rem] md:text-[1.8rem]"
          onAnimationComplete={() => {
            // ✅ call ONLY when last letter finishes
            if (index === text.length - 1 && inView) {
              onComplete?.();
            }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default PositionAnimation;

