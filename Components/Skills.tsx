// import React from "react";
// import BallCanvas from "./Balls";
// import { Backend, frontend ,tools} from "../utils/portfolioData";
// import { motion } from "framer-motion";
// import { InView } from "react-intersection-observer";
// import {
//   slideInFromLeft,
//   slideInFromBottom,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/utils/motion";

// const Skills = () => {
//   return (
//     <div className="glass-background z-0 flex flex-col bg-transparent border . ">
      
//       {/* <h1 className="border">Backend Technologoies</h1> */}
//       <div className=" w-auto h-auto  ">
//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromLeft(0.6)}
//               className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200  inter-body"
//             >
//               Skills
//             </motion.div>
//           )}
//         </InView>
//       </div>

//       <div className="flex flex-col items-center my-3 bg-transparent">
//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromLeft(0.6)}
//               className="
//                 text-[22px]
//                 tracking-widest
//                 text-gray-400
//                 text-center
//                 mb-6
//                 font-medium
//                 Welcome-box
//                 w-[10%]
//               "
//             >
//               <span className=" px-3 py-2 Welcome-text text-[20px] font-bold w-full">
//                 Backend
//               </span>
//             </motion.div>
//           )}
//         </InView>

//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromTop}
//               className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center"
//             >
//               {Backend?.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-[120px] flex flex-col items-center gap-3"
//                 >
//                   <div className="w-[100px] h-[100px]">
//                     <BallCanvas icon={item?.image} />
//                   </div>

//                   <p className="text-sm text-center text-white Skill-heading px-2 py-1.5">{item?.name}</p>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </InView>
//       </div>
//       {/* <div className="flex flex-col items-center my-3 bg-transparent">
//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromLeft(0.6)}
//               className="
//                 text-[22px]
//                 tracking-widest
//                 text-gray-400
//                 text-center
//                 mb-6
//                 font-medium
//                 Welcome-box
//                 w-[10%]
//               "
//             >
//               <span className=" px-3 py-2 Welcome-text text-[20px] font-bold w-full">
//                 Frontend
//               </span>
//             </motion.div>
//           )}
//         </InView>

//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromTop}
//               className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center"
//             >
//               {frontend?.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-[120px] flex flex-col items-center gap-3"
//                 >
//                   <div className="w-[100px] h-[100px]">
//                     <BallCanvas icon={item?.image} />
//                   </div>

//                   <p className="text-sm text-center text-white Skill-heading px-2 py-1.5">{item?.name}</p>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </InView>
//       </div> */}
//       <div className="flex flex-col items-center my-3 bg-transparent">
//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromLeft(0.6)}
//               className="
//                 text-[22px]
//                 tracking-widest
//                 text-gray-400
//                 text-center
//                 mb-6
//                 font-medium
//                 Welcome-box
//                 w-[10%]
//               "
//             >
//               <span className=" px-3 py-2 Welcome-text text-[20px] font-bold w-full">
//                 Tools
//               </span>
//             </motion.div>
//           )}
//         </InView>

//         <InView triggerOnce={false}>
//           {({ inView, ref }) => (
//             <motion.div
//               ref={ref}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={slideInFromTop}
//               className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center"
//             >
//               {tools?.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-[120px] flex flex-col items-center gap-3"
//                 >
//                   <div className="w-[100px] h-[100px]">
//                     <BallCanvas icon={item?.image} />
//                   </div>

//                   <p className="text-sm text-center text-white Skill-heading px-2 py-1.5">{item?.name}</p>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </InView>
//       </div>
//     </div>
//   );
// };

// export default Skills;




"use client";

import React from "react";
import BallCanvas from "./Balls";
import { backend, frontend, tools } from "../utils/portfolioData";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import SkillSection from "./SkillSection";



/* -------------------------------------
   Main Skills Component
------------------------------------- */
const Skills = () => {
  return (
    // IMPORTANT:
    // ❌ no glass-background here
    // ❌ no z-index here
    // ❌ no transform/filter on root
    <section className="relative flex flex-col bg-[#030014]">

      {/* Page Title */}
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromLeft(0.6)}
            className="
              text-[40px]
              pt-[5rem]
              pb-6
              font-medium
              text-center
              text-gray-200
              inter-body
            "
          >
            Skills
          </motion.h2>
        )}
      </InView>

      {/* Skill Sections */}
      <SkillSection title="Frontend" data={frontend} />
      <SkillSection title="Backend" data={backend} />
      <SkillSection title="Tools" data={tools} />

    </section>
  );
};

export default Skills;
