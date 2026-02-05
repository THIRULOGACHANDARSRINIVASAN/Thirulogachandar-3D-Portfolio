// "use client";

// import { motion } from "framer-motion";
// import { Download } from "lucide-react"; // or any icon

// export default function DownloadButton() {
//   return (
//     <motion.button
//       whileHover="hover"
//       className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white . overflow-hidden"
//     >
//       <motion.span
//         variants={{
//           hover: {
//             y: [0, 8, -8, 0],
//             opacity: [1, 0, 0, 1],
//           },
//         }}
//         transition={{
//           duration: 0.6,
//           ease: "easeIn",
//           repeat: Infinity,
//         }}
//       >
//         <Download size={20} />
//       </motion.span>

//       <span>Download</span>
//     </motion.button>
//   );
// }

// import { motion } from "framer-motion";
// import { Download } from "lucide-react";

// export default function DownloadButton() {
//   return (
//     <motion.button
//       whileHover="hover"
//       className="relative flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white overflow-hidden"
//     >
//       <span>Download</span>

//       {/* Icon container */}
//       <div className="relative h-6 w-6 overflow-hidden">
//         <motion.div
//           variants={{
//             hover: {
//               y: ["-100%", "100%"], // top → bottom
//               transition: {
//                 duration: 0.8,
//                 ease: "linear",
//                 repeat: Infinity,
//               },
//             },
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download size={20} />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }

// import { motion } from "framer-motion";
// import { Download } from "lucide-react";

// export default function DownloadButton() {
//   return (
//     <motion.button
//       initial="rest"
//       whileHover="hover"
//       animate="rest"
//       variants={{
//         rest: {
//           scale: 1,
//           boxShadow: "0px 0px 0px rgba(0,0,0,0)",
//         },
//         hover: {
//           scale: 1.05,
//           boxShadow: "0px 5px 40px rgb(73, 13, 191,0.8)",
//         },
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 15 }}
//       className="relative . overflow-hidden rounded-xl px-6 py-3 bg-black text-white flex items-center gap-3 border border-white/10"
//     >
//       {/* Glow border */}
//       <motion.span
//         variants={{
//           rest: { opacity: 0 },
//           hover: { opacity: 1 },
//         }}
//         className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60"
//       />

//       {/* Text */}
//       <span className="relative z-10 font-medium">Download</span>

//       {/* Icon container */}
//       <div className="relative z-10 h-6 w-6 overflow-hidden">
//         <motion.div
//           variants={{
//             hover: {
//               y: ["-100%", "100%"],
//               transition: {
//                 duration: 0.8,
//                 ease: "linear",
//                 repeat: Infinity,
//               },
//             },
//             rest: {
//               y: 0,
//             },
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download
//             size={20}
//             className="text-cyan-400 drop-shadow-[0_0_8px_rgb(26, 9, 59,0.8)]"
//           />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }

// import { motion } from "framer-motion";
// import { Download } from "lucide-react";

// export default function DownloadButton() {
//   return (
//     <motion.button
//       initial={{
//         x: 120,        // start from right
//         opacity: 0,
//         scale: 0.95,
//       }}
//       animate={{
//         x: 0,
//         opacity: 1,
//         scale: 1,
//       }}
//       whileHover="hover"
//       variants={{
//         hover: {
//           scale: 1.05,
//           boxShadow: "0px 5px 40px rgba(73, 13, 191, 0.8)",
//         },
//       }}
//       transition={{
//         x: { type: "spring", stiffness: 120, damping: 14 },
//         opacity: { duration: 0.4 },
//         scale: { duration: 0.4 },
//       }}
//       className="relative . overflow-hidden rounded-xl px-6 py-3 bg-black text-white flex items-center gap-3 border border-white/10"
//     >
//       {/* Glow border */}
//       <motion.span
//         variants={{
//           hover: { opacity: 1 },
//         }}
//         className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 opacity-0"
//       />

//       {/* Text */}
//       <span className="relative z-10 font-medium">Download</span>

//       {/* Icon container */}
//       <div className="relative z-10 h-6 w-6 overflow-hidden">
//         <motion.div
//           variants={{
//             hover: {
//               y: ["-100%", "100%"],
//               transition: {
//                 duration: 0.8,
//                 ease: "linear",
//                 repeat: Infinity,
//               },
//             },
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download
//             size={20}
//             className="text-cyan-400 drop-shadow-[0_0_8px_rgba(26,9,59,0.8)]"
//           />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }

// import { motion, useAnimation } from "framer-motion";
// import { Download } from "lucide-react";

// interface DownloadButtonProps {
//   show: boolean;
// }

// export default function DownloadButton({ show }: DownloadButtonProps) {
//   const iconControls = useAnimation();

//   return (
//     <motion.button
//       initial="hidden"
//       animate={show ? "visible" : "hidden"}
//       whileHover="hover"
//       variants={{
//         hidden: {
//           x: 120,
//           opacity: 0,
//           scale: 0.95,
//           pointerEvents: "none",
//         },
//         visible: {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           pointerEvents: "auto",
//           transition: {
//             x: { type: "spring", stiffness: 120, damping: 14 },
//             opacity: { duration: 0.4 },
//             scale: { duration: 0.4 },
//           },
//         },
//         hover: {
//           scale: 1.05,
//           boxShadow: "0px 5px 40px rgba(73, 13, 191, 0.8)",
//         },
//       }}
//       onHoverStart={() => {
//         iconControls.start({
//           y: ["-100%", "100%"],
//           transition: {
//             duration: 0.8,
//             ease: "linear",
//             repeat: Infinity,
//           },
//         });
//       }}
//       onHoverEnd={() => {
//         iconControls.stop();
//         iconControls.start({
//           y: 0,
//           transition: { duration: 1 },
//         });
//       }}
//       className="relative . overflow-hidden rounded-xl px-6 py-3  text-white flex items-center gap-3 border border-white/10"
//     >
//       {/* Glow border */}
//       <motion.span
//         variants={{ hover: { opacity: 1 } }}
//         className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 opacity-0"
//       />

//       {/* Text */}
//       <span className="relative z-10 font-medium">Download Resume</span>

//       {/* Icon container */}
//       <div className="relative z-10 h-6 w-6 overflow-hidden">
//         <motion.div
//           animate={iconControls}
//           initial={{ y: 0 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download
//             size={20}
//             className="text-cyan-400 drop-shadow-[0_0_8px_rgba(26,9,59,0.8)]"
//           />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }



// import { motion } from "framer-motion";
// import { Download } from "lucide-react";

// interface DownloadButtonProps {
//   show: boolean;
// }

// export default function DownloadButton({ show }: DownloadButtonProps) {
//   return (
//     <motion.button
//       initial="hidden"
//       animate={show ? "visible" : "hidden"}
//       whileHover={show ? "hover" : undefined}
//       variants={{
//         hidden: {
//           x: 120,
//           opacity: 0,
//           scale: 0.95,
//           pointerEvents: "none",
//         },
//         visible: {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           pointerEvents: "auto",
//           transition: {
//             x: { type: "spring", stiffness: 120, damping: 14 },
//             opacity: { duration: 0.4 },
//             scale: { duration: 0.4 },
//           },
//         },
//         hover: {
//           scale: 1.05,
//           boxShadow: "0px 5px 40px rgba(73, 13, 191, 0.8)",
//         },
//       }}
//       className="relative . overflow-hidden rounded-xl px-6 py-3 bg-black text-white flex items-center gap-3 border border-white/10"
//     >
//       {/* Glow border */}
//       <motion.span
//         variants={{
//           hover: { opacity: 1 },
//         }}
//         className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 opacity-0"
//       />

//       {/* Text */}
//       <span className="relative z-10 font-medium">Download</span>

//       {/* Icon container */}
//       <div className="relative z-10 h-6 w-6 overflow-hidden">
//         <motion.div
//           initial="rest"
//           variants={{
//             rest: {
//               y: 0,
//               transition: { duration: 0.2 },
//             },
//             hover: {
//               y: ["-100%", "100%"],
//               transition: {
//                 duration: 0.8,
//                 ease: "linear",
//                 repeat: Infinity,
//               },
//             },
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download
//             size={20}
//             className="text-cyan-400 drop-shadow-[0_0_8px_rgba(26,9,59,0.8)]"
//           />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }



// import { motion } from "framer-motion";
// import { Download } from "lucide-react";

// interface DownloadButtonProps {
//   show: boolean;
// }

// export default function DownloadButton({ show }: DownloadButtonProps) {
//   return (
//     <motion.button
//       initial="hidden"
//       animate={show ? "visible" : "hidden"}
//       variants={{
//         hidden: {
//           x: 120,
//           opacity: 0,
//           scale: 0.95,
//           pointerEvents: "none",
//         },
//         visible: {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           pointerEvents: "auto",
//           transition: {
//             x: { type: "spring", stiffness: 120, damping: 14 },
//             opacity: { duration: 0.4 },
//             scale: { duration: 0.4 },
//           },
//         },
//       }}
//       className="relative . overflow-hidden rounded-xl px-6 py-3 bg-black text-white flex items-center gap-3 border border-white/10"
//     >
//       {/* Glow border */}
//       <motion.span
//         whileHover={{ opacity: 1 }}
//         className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 opacity-0"
//       />

//       {/* Text */}
//       <span className="relative z-10 font-medium">Download</span>

//       {/* Icon container */}
//       <div className="relative z-10 h-6 w-6 overflow-hidden">
//         <motion.div
//           initial={{ y: 0 }}
//           whileHover={{
//             y: ["-100%", "100%"],
//           }}
//           transition={{
//             duration: 0.8,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download
//             size={20}
//             className="text-cyan-400 drop-shadow-[0_0_8px_rgba(26,9,59,0.8)]"
//           />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }



// import { motion, useAnimation, useInView } from "framer-motion";
// import { Download } from "lucide-react";
// import { useRef, useEffect } from "react";



// export default function DownloadButton() {
//   const ref = useRef<HTMLButtonElement | null>(null);

//   const isInView = useInView(ref, {
//     amount: 0.5,      // 50% visible triggers animation
//     once: false       // 👈 VERY IMPORTANT (replay)
//   });

//   const controls = useAnimation();
//   const iconControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden"); // reset when out of view
//     }
//   }, [isInView, controls]);

//   return (
//     <motion.button
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       whileHover="hover"
//       variants={{
//         hidden: {
//           x: 120,
//           opacity: 0,
//           scale: 0.95,
//           pointerEvents: "none",
//         },
//         visible: {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           pointerEvents: "auto",
//           transition: {
//             x: { type: "spring", stiffness: 120, damping: 14 },
//             opacity: { duration: 0.4 },
//             scale: { duration: 0.4 },
//           },
//         },
//         hover: {
//           scale: 1.05,
//           boxShadow: "0px 5px 40px rgba(73, 13, 191, 0.8)",
//         },
//       }}
//       onHoverStart={() => {
//         iconControls.start({
//           y: ["-100%", "100%"],
//           transition: {
//             duration: 0.8,
//             ease: "linear",
//             repeat: Infinity,
//           },
//         });
//       }}
//       onHoverEnd={() => {
//         iconControls.stop();
//         iconControls.start({
//           y: 0,
//           transition: { duration: 0.5 },
//         });
//       }}
//       className="relative . overflow-hidden rounded-xl px-6 py-3 text-white flex items-center gap-3 border border-white/10"
//     >
//       {/* Glow border */}
//       <motion.span
//         variants={{ hover: { opacity: 1 } }}
//         className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 opacity-0"
//       />

//       {/* Text */}
//       <span className="relative z-10 font-medium">Download Resume</span>

//       {/* Icon */}
//       <div className="relative z-10 h-6 w-6 overflow-hidden">
//         <motion.div
//           animate={iconControls}
//           initial={{ y: 0 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Download size={20} className="text-cyan-400" />
//         </motion.div>
//       </div>
//     </motion.button>
//   );
// }



"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { useRocketToast } from "@/hooks/useRocketToast";

export default function DownloadButton() {
  const ref = useRef<HTMLButtonElement | null>(null);
  const {showToast} = useRocketToast()

  // 👀 Viewport detection
  const isInView = useInView(ref, {
    amount: 0.5,   // trigger when 50% visible
    once: false,   // replay on re-enter
  });

  const controls = useAnimation();
  const iconControls = useAnimation();

  // 🎬 Play / reset animation based on viewport
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden", {
        transition: { duration: 0.5 }, // smooth reset
      });
    }
  }, [isInView, controls]);

  return (
    <motion.button
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={{
        hidden: {
          x: 140,
          opacity: 0,
          scale: 0.94,
          pointerEvents: "none",
        },
        visible: {
          x: 0,
          opacity: 1,
          scale: 1,
          pointerEvents: "auto",
          transition: {
            x: {
              type: "spring",
              stiffness: 60,   // ⬅ slow & premium
              damping: 20,
              mass: 1.2,
            },
            opacity: {
              duration: 0.8,
              ease: "easeOut",
            },
            scale: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        },
        hover: {
          scale: 1.05,
          boxShadow: "0px 5px 40px rgba(73, 13, 191, 0.8)",
        },
      }}
      onHoverStart={() => {
        iconControls.start({
          y: ["-100%", "100%"],
          transition: {
            duration: 1.2, // ⬅ slower loop
            ease: "linear",
            repeat: Infinity,
          },
        });
      }}
      onHoverEnd={() => {
        iconControls.stop();
        iconControls.start({
          y: 0,
          transition: { duration: 0.6 },
        });
      }}
      className="relative flex . items-center gap-3 overflow-hidden rounded-xl border z-[101] border border-white/10 px-6 py-3 text-white "
      onClick={() =>showToast("Rocket toast launched 🚀", 5000)}
    >
      {/* Glow border */}
      <motion.span
        variants={{ hover: { opacity: 1 } }}
        className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 opacity-0"
      />

      {/* Text */}
      <span className="relative  font-medium " >
        Download Resume
      </span>

      {/* Icon */}
      <div className="relative z-10 h-6 w-6 overflow-hidden">
        <motion.div
          animate={iconControls}
          initial={{ y: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Download
            size={20}
            className="text-cyan-400 drop-shadow-[0_0_8px_rgba(26,9,59,0.8)]"
          />
        </motion.div>
      </div>
    </motion.button>
  );
}

