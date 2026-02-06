// "use client";

// import { motion } from "framer-motion";
// import Rocket from "./Rocket";
// import ClothBanner from "./ClothBanner";
// import { RocketToastProps } from "./rocket-toast.types";
// import "./rocket-toast.css";

// export default function RocketToast({
//   message,
//   duration = 50000,
// }: RocketToastProps) {
//   return (
//     <motion.div
//       className="rocket-toast-wrapper"
//       initial={{ x: "100vw", y: -20 }}
//       animate={{ x: "-120vw" }}
//       transition={{
//         duration: duration / 1000,
//         ease: "linear",
//       }}
//     >
//       <Rocket />
//       <ClothBanner message={message} />
//     </motion.div>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import Rocket from "./Rocket";
// import ClothBanner from "./ClothBanner";
// import { RocketToastProps } from "./rocket-toast.types";
// import "./rocket-toast.css";

// export default function RocketToast({
//   message,
//   duration = 5000,
// }: RocketToastProps) {
//   const totalSeconds = duration / 1000;

//   return (
//     <motion.div
//       className="rocket-toast-wrapper"
//       initial="enter"
//       animate="animate"
//       variants={{
//         enter: {
//           x: "100vw",
//           y: -20,
//         },
//         animate: {
//           x: ["100vw", "0vw", "0vw", "-120vw"],
//           y: [-20, 0, 0, -20],
//         },
//       }}
//       transition={{
//         duration: totalSeconds,
//         times: [0, 0.2, 0.8, 1], // enter → hold → exit
//         ease: "linear",
//       }}
//     >
//       <Rocket />
//       <ClothBanner message={message} />
//     </motion.div>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Rocket from "./Rocket";
import ClothBanner from "./ClothBanner";
import { RocketToastProps } from "./rocket-toast.types";
import "./rocket-toast.css";

export default function RocketToast({
  message,
  duration = 2000,
}: RocketToastProps) {
  const totalSeconds = duration / 1000;

  return (
    <motion.div
      className="rocket-toast-wrapper"
      initial={{ x: 200, y: -20 }}   // offscreen right
      animate={{
        x: [200, 0, 0, -1200],       // enter → hold → exit left
        y: [-20, 0, 0, -20],
      }}
      transition={{
        duration: totalSeconds,
        times: [0, 0.1, 0.85, 1],    // quick enter, long hold
        ease: "linear",
      }}
    >
      <Rocket />
      <ClothBanner message={message} />
    </motion.div>
  );
}
