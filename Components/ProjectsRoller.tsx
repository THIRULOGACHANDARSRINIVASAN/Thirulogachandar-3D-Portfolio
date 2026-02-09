// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { AnimatePresence, motion } from "framer-motion";

// // const projects = [
// //   {
// //     id: 1,
// //     title: "3D Portfolio",
// //     description: "Interactive Three.js based portfolio",
// //     tech: ["React", "Three.js", "GSAP"]
// //   },
// //   {
// //     id: 2,
// //     title: "E-commerce Platform",
// //     description: "Scalable MERN stack application",
// //     tech: ["React", "Node", "MongoDB"]
// //   },
// //   {
// //     id: 3,
// //     title: "Realtime Tracker",
// //     description: "Live location tracking system",
// //     tech: ["Next.js", "Maps SDK", "WebSockets"]
// //   }
// // ];

// // export default function ProjectsRoller() {
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   const [index, setIndex] = useState(0);
// //   const [direction, setDirection] = useState<1 | -1>(1);
// //   const isAnimating = useRef(false);

// //   // 🚫 Lock page scroll only inside container
// //   useEffect(() => {
// //     const el = containerRef.current;
// //     if (!el) return;

// //     const handleWheel = (e: WheelEvent) => {
// //       e.preventDefault();
// //       if (isAnimating.current) return;

// //       if (e.deltaY > 0 && index < projects.length - 1) {
// //         isAnimating.current = true;
// //         setDirection(1);
// //         setIndex(i => i + 1);
// //       }

// //       if (e.deltaY < 0 && index > 0) {
// //         isAnimating.current = true;
// //         setDirection(-1);
// //         setIndex(i => i - 1);
// //       }
// //     };

// //     el.addEventListener("wheel", handleWheel, { passive: false });
// //     return () => el.removeEventListener("wheel", handleWheel);
// //   }, [index]);

// //   // ⏱️ Unlock animation after transition
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       isAnimating.current = false;
// //     }, 800);
// //     return () => clearTimeout(timer);
// //   }, [index]);

// //   return (
// //     <section className="w-full h-screen flex items-center justify-center bg-black text-white z-10000 cursor-pointer">
// //       <div
// //         ref={containerRef}
// //         className="relative w-[80%] h-[70%] overflow-hidden perspective"
// //       >
// //         <AnimatePresence custom={direction} mode="wait">
// //           <motion.div
// //             key={index}
// //             custom={direction}
// //             variants={rollerVariants}
// //             initial="enter"
// //             animate="center"
// //             exit="exit"
// //             transition={{
// //               duration: 0.8,
// //               ease: "easeInOut"
// //             }}
// //             className="absolute w-full h-full flex items-center justify-center"
// //           >
// //             <ProjectCard project={projects[index]} />
// //           </motion.div>
// //         </AnimatePresence>

// //         {/* Progress Indicator */}
// //         <div className="absolute bottom-4 right-4 text-sm opacity-70">
// //           {index + 1} / {projects.length}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* 🎥 3D Rolling Animation */
// // const rollerVariants = {
// //   enter: (direction: number) => ({
// //     x: direction > 0 ? "-120%" : "120%",
// //     rotateY: direction > 0 ? -60 : 60,
// //     opacity: 0,
// //     scale: 0.9
// //   }),
// //   center: {
// //     x: 0,
// //     rotateY: 0,
// //     opacity: 1,
// //     scale: 1
// //   },
// //   exit: (direction: number) => ({
// //     x: direction > 0 ? "120%" : "-120%",
// //     rotateY: direction > 0 ? 60 : -60,
// //     opacity: 0,
// //     scale: 0.9
// //   })
// // };

// // /* 🧱 Card UI */
// // function ProjectCard({ project }: any) {
// //   return (
// //     <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 shadow-2xl flex flex-col justify-center">
// //       <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
// //       <p className="text-zinc-300 mb-6">{project.description}</p>

// //       <div className="flex gap-2 flex-wrap">
// //         {project.tech.map((t: string) => (
// //           <span
// //             key={t}
// //             className="px-3 py-1 rounded-full text-sm bg-white/10"
// //           >
// //             {t}
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useRocketToast } from "@/hooks/useRocketToast";

// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
//   { id: 2, title: "E-commerce", desc: "Full MERN platform" },
//   { id: 3, title: "Tracker", desc: "Realtime location tracking" },
//   { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" }
// ];

// export default function ProjectsCylinder() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [index, setIndex] = useState(0);
//   const lock = useRef(false);
//    const {showToast} = useRocketToast()

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//     //   e.preventDefault();
//       if (lock.current) return;

//       lock.current = true;

//       if (e.deltaY > 0) {
//         setIndex(i => (i + 1) % projects.length);
//       } else {
//         setIndex(i => (i - 1 + projects.length) % projects.length);
//       }

//       setTimeout(() => (lock.current = false), 700);
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   const getProject = (offset: number) =>
//     projects[(index + offset + projects.length) % projects.length];

//   return (
//     <section className="h-screen flex items-center justify-center  text-white cursor-pointer z-500 border">
//       <div
//         ref={ref}
//         className="relative w-[85%] h-[60%] overflow-hidden"
//         style={{ perspective: "1400px" }}
//       >
//         {/* LEFT (NEXT) */}
//         <ProjectCard project={getProject(1)} position="left" />

//         {/* CENTER (ACTIVE) */}
//         <ProjectCard project={getProject(0)} position="center" />

//         {/* RIGHT (PREVIOUS) */}
//         <ProjectCard project={getProject(-1)} position="right" />
//       </div>
//     </section>
//   );
// }

// /* 🎥 Cylindrical Positions */
// const positions = {
//   center: {
//     x: "0%",
//     scale: 1,
//     rotateY: 0,
//     opacity: 1,
//     zIndex: 3
//   },
//   left: {
//     x: "-55%",
//     scale: 0.85,
//     rotateY: 35,
//     opacity: 0.4,
//     zIndex: 2
//   },
//   right: {
//     x: "55%",
//     scale: 0.85,
//     rotateY: -35,
//     opacity: 0.4,
//     zIndex: 2
//   }
// };

// function ProjectCard({
//   project,
//   position
// }: {
//   project: any;
//   position: "left" | "center" | "right";
// }) {


//     const {showToast} = useRocketToast()

//   return (
//     // <section id="skills" className="relative flex flex-col border cursor-pointer z-999">
//     <motion.div
//       animate={positions[position]}
//       transition={{ duration: 0.7, ease: "easeInOut" }}
//       className="z-200 absolute top-1/2 left-1/2 w-[420px] h-[260px] 
//                  -translate-x-1/2 -translate-y-1/2 
//                  bg-gradient-to-br from-zinc-900 to-zinc-800 
//                  rounded-2xl p-8 shadow-2xl  cursor-pointer"
//       style={{ transformStyle: "preserve-3d" }}
//       onClick={() =>showToast("Rocket toast launched 🚀", 2500)}
//     >
//       <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
//       <p className="text-zinc-300">{project.desc}</p>
//     </motion.div>
//     // </section>
//   );
// }






// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useRocketToast } from "@/hooks/useRocketToast";

// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
//   { id: 2, title: "E-commerce", desc: "Full MERN platform" },
//   { id: 3, title: "Tracker", desc: "Realtime location tracking" },
//   { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 6, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 7, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 8, title: "Mobile App", desc: "Flutter + Firebase" },
// ];

// const RADIUS = 600;
// const STEP = 360 / projects.length;

// export default function ProjectsCylinder() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const rotation = useRef(0);
//   const [angle, setAngle] = useState(0);
//   const lock = useRef(false);

//   /* 🖱️ Scroll + horizontal swipe */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       if (lock.current) return;

//       lock.current = true;

//       const delta =
//         Math.abs(e.deltaX) > Math.abs(e.deltaY)
//           ? e.deltaX
//           : e.deltaY;

//       rotation.current += delta > 0 ? STEP : -STEP;
//       setAngle(rotation.current);

//       setTimeout(() => (lock.current = false), 650);
//     };

//     el.addEventListener("wheel", onWheel, { passive: true });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section className="h-screen flex items-center justify-center text-white relative z-20">
//       <div
//         ref={containerRef}
//         className="relative w-full h-[70vh] overflow-hidden"
//         style={{ perspective: "1600px" }}
//       >
//         <motion.div
//           animate={{ rotateY: angle }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0 flex items-center justify-center"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {projects.map((project, i) => (
//             <CylinderCard
//               key={project.id}
//               project={project}
//               index={i}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* 🧱 Single card on cylinder */
// function CylinderCard({
//   project,
//   index
// }: {
//   project: any;
//   index: number;
// }) {
//   const { showToast } = useRocketToast();
//   const angle = index * STEP;

//   return (
//     <motion.div
//       className="absolute w-[420px] h-[260px]
//                  bg-gradient-to-br from-zinc-900 to-zinc-800
//                  rounded-2xl p-8 shadow-2xl cursor-pointer"
//       style={{
//         transform: `
//           rotateY(${angle}deg)
//           translateZ(${RADIUS}px)
//         `,
//         transformStyle: "preserve-3d"
//       }}
//       whileHover={{ scale: 1.05 }}
//       onClick={() => showToast("Rocket toast launched 🚀", 2500)}
//     >
//       <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
//       <p className="text-zinc-300">{project.desc}</p>
//     </motion.div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useRocketToast } from "@/hooks/useRocketToast";

// /* =========================
//    DATA
// ========================= */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
//   { id: 2, title: "E-commerce", desc: "Full MERN platform" },
//   { id: 3, title: "Tracker", desc: "Realtime location tracking" },
//   { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 6, title: "FinTech App", desc: "Payments & analytics" },
//   { id: 7, title: "AI Tool", desc: "ML powered automation" },
//   { id: 8, title: "Dashboard", desc: "Advanced data insights" }
// ];

// /* =========================
//    CYLINDER CONFIG
// ========================= */
// const RADIUS = 520;
// const STEP = 360 / projects.length;
// const SCROLL_LOCK = 700;

// /* =========================
//    MAIN COMPONENT
// ========================= */
// export default function ProjectsCylinder() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const rotation = useRef(0);
//   const [angle, setAngle] = useState(0);
//   const lock = useRef(false);

//   /* 🖱️ Wheel / Trackpad Scroll */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       if (lock.current) return;
//       lock.current = true;

//       const direction = e.deltaY > 0 ? 1 : -1;
//       rotation.current += direction * STEP;

//       setAngle(rotation.current);

//       setTimeout(() => (lock.current = false), SCROLL_LOCK);
//     };

//     el.addEventListener("wheel", onWheel, { passive: true });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center z-20">
//       <div
//         ref={containerRef}
//         className="relative w-full h-[70vh] overflow-hidden"
//         style={{ perspective: "1600px" }}
//       >
//         <motion.div
//           animate={{ rotateY: angle }}
//           transition={{
//             duration: 0.9,
//             ease: [0.25, 0.8, 0.25, 1]
//           }}
//           className="absolute inset-0"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {projects.map((project, i) => (
//             <CylinderCard
//               key={project.id}
//               project={project}
//               index={i}
//               currentAngle={angle}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* =========================
//    SINGLE CARD
// ========================= */
// function CylinderCard({
//   project,
//   index,
//   currentAngle
// }: {
//   project: any;
//   index: number;
//   currentAngle: number;
// }) {
//   const { showToast } = useRocketToast();
//   const baseAngle = index * STEP;

//   /* Fade based on distance from front */
//   const diff =
//     (((baseAngle + currentAngle) % 360) + 360) % 360;
//   const distance = Math.min(diff, 360 - diff);

//   const opacity =
//     distance < 35 ? 1 : distance < 80 ? 0.55 : 0.25;

//   return (
//     <motion.div
//       className="
//         absolute left-1/2 top-1/2
//         w-[420px] h-[260px]
//         -translate-x-1/2 -translate-y-1/2
//         bg-gradient-to-br from-zinc-900 to-zinc-800
//         rounded-2xl p-8
//         shadow-2xl cursor-pointer
//         select-none
//       "
//       style={{
//         transform: `
//           rotateY(${baseAngle}deg)
//           translateZ(${RADIUS}px)
//         `,
//         opacity,
//         backfaceVisibility: "hidden",
//         transformStyle: "preserve-3d"
//       }}
//       whileHover={{
//         translateZ: RADIUS + 40,
//         transition: { duration: 0.25 }
//       }}
//       onClick={() => showToast("Rocket launched 🚀", 2200)}
//     >
//       <h2 className="text-2xl font-bold mb-3 text-white">
//         {project.title}
//       </h2>
//       <p className="text-zinc-300">{project.desc}</p>
//     </motion.div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useRocketToast } from "@/hooks/useRocketToast";

// /* ===============================
//    CONFIG
// ================================ */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
//   { id: 2, title: "E-commerce", desc: "Full MERN platform" },
//   { id: 3, title: "Tracker", desc: "Realtime location tracking" },
//   { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 6, title: "Analytics", desc: "Charts & dashboards" },
//   { id: 7, title: "AI Tool", desc: "ML powered automation" },
//   { id: 8, title: "SaaS App", desc: "Subscription platform" }
// ];

// const RADIUS = 520;
// const STEP = 360 / projects.length;

// /* ===============================
//    MAIN COMPONENT
// ================================ */
// export default function ProjectsCylinder() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const rotationRef = useRef(0);
//   const [angle, setAngle] = useState(0);
//   const lock = useRef(false);

//   /* 🖱️ Wheel + trackpad horizontal swipe */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       // lock scrolling to this container
//       e.preventDefault();
//       if (lock.current) return;

//       lock.current = true;

//       const delta =
//         Math.abs(e.deltaX) > Math.abs(e.deltaY)
//           ? e.deltaX
//           : e.deltaY;

//       rotationRef.current += delta > 0 ? STEP : -STEP;
//       setAngle(rotationRef.current);

//       setTimeout(() => (lock.current = false), 650);
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section className="h-screen flex items-center justify-center text-white relative z-20">
//       <div
//         ref={containerRef}
//         className="relative w-full h-[70vh] overflow-hidden"
//         style={{ perspective: "1600px" }}
//       >
//         {/* CYLINDER */}
//         <motion.div
//           animate={{ rotateY: angle }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             transformStyle: "preserve-3d",
//             willChange: "transform"
//           }}
//         >
//           {projects.map((project, index) => (
//             <CylinderCard
//               key={project.id}
//               project={project}
//               index={index}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ===============================
//    CYLINDER CARD
// ================================ */
// function CylinderCard({
//   project,
//   index
// }: {
//   project: any;
//   index: number;
// }) {
//   const { showToast } = useRocketToast();
//   const angle = index * STEP;

//   return (
//     <motion.div
//       className="
//         absolute w-[420px] h-[260px]
//         bg-gradient-to-br from-zinc-900 to-zinc-800
//         rounded-2xl p-8 shadow-2xl cursor-pointer
//         select-none
//       "
//       style={{
//         transform: `
//           rotateY(${angle}deg)
//           translateZ(${RADIUS}px)
//         `,
//         transformStyle: "preserve-3d",
//         backfaceVisibility: "hidden",
//         willChange: "transform"
//       }}
//       whileHover={{
//         scale: 1.06,
//         boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
//       }}
//       transition={{ type: "spring", stiffness: 260, damping: 20 }}
//       onClick={() => showToast("Rocket toast launched 🚀", 2500)}
//     >
//       <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
//       <p className="text-zinc-300 leading-relaxed">{project.desc}</p>
//     </motion.div>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useRocketToast } from "@/hooks/useRocketToast";

// /* ===============================
//    DATA
// ================================ */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
//   { id: 2, title: "E-commerce", desc: "Full MERN platform" },
//   { id: 3, title: "Tracker", desc: "Realtime location tracking" },
//   { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 6, title: "Analytics", desc: "Charts & dashboards" },
//   { id: 7, title: "AI Tool", desc: "ML powered automation" },
//   { id: 8, title: "SaaS App", desc: "Subscription platform" }
// ];

// /* ===============================
//    CYLINDER CONFIG
// ================================ */
// const RADIUS = 520;
// const STEP = 360 / projects.length;

// /* ===============================
//    MAIN COMPONENT
// ================================ */
// export default function ProjectsCylinder() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const rotationRef = useRef(0);
//   const [rotation, setRotation] = useState(0);
//   const lock = useRef(false);

//   /* 🎡 Scroll / Trackpad */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       if (lock.current) return;

//       lock.current = true;

//       const delta =
//         Math.abs(e.deltaX) > Math.abs(e.deltaY)
//           ? e.deltaX
//           : e.deltaY;

//       rotationRef.current += delta > 0 ? STEP : -STEP;
//       setRotation(rotationRef.current);

//       setTimeout(() => (lock.current = false), 650);
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section className="h-screen flex items-center justify-center text-white relative z-20">
//       <div
//         ref={containerRef}
//         className="relative w-full h-[70vh] overflow-hidden"
//         style={{ perspective: "1600px" }}
//       >
//         <motion.div
//           animate={{ rotateY: rotation }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             transformStyle: "preserve-3d",
//             willChange: "transform"
//           }}
//         >
//           {projects.map((project, index) => (
//             <CylinderCard
//               key={project.id}
//               project={project}
//               index={index}
//               rotation={rotation}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ===============================
//    CARD
// ================================ */
// function CylinderCard({
//   project,
//   index,
//   rotation
// }: {
//   project: any;
//   index: number;
//   rotation: number;
// }) {
//   const { showToast } = useRocketToast();

//   const baseAngle = index * STEP;
//   const visibleAngle = (baseAngle + rotation) % 360;
//   const normalized = (visibleAngle + 360) % 360;

//   // front-facing detection
//   const isFront = normalized < STEP / 2 || normalized > 360 - STEP / 2;

//   return (
//     <motion.div
//       className="
//         absolute w-[420px] h-[260px]
//         bg-gradient-to-br from-zinc-900 to-zinc-800
//         rounded-2xl p-8 shadow-2xl select-none
//       "
//       style={{
//         transform: `
//           rotateY(${baseAngle}deg)
//           translateZ(${RADIUS}px)
//         `,
//         transformStyle: "preserve-3d",
//         backfaceVisibility: "hidden",
//         pointerEvents: isFront ? "auto" : "none",
//         opacity: isFront ? 1 : 0.45,
//         willChange: "transform"
//       }}
//       whileHover={
//         isFront
//           ? {
//               scale: 1.06,
//               boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
//             }
//           : {}
//       }
//       transition={{ type: "spring", stiffness: 260, damping: 22 }}
//       onClick={() => isFront && showToast("Rocket toast launched 🚀", 2500)}
//     >
//       <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
//       <p className="text-zinc-300 leading-relaxed">{project.desc}</p>
//     </motion.div>
//   );
// }




// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// import { useRocketToast } from "@/hooks/useRocketToast";

// gsap.registerPlugin(Observer);

// /* ===============================
//    DATA
// ================================ */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
//   { id: 2, title: "E-commerce", desc: "Full MERN platform" },
//   { id: 3, title: "Tracker", desc: "Realtime tracking" },
//   { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" },
//   { id: 6, title: "Analytics", desc: "Charts & insights" },
//   { id: 7, title: "AI Tool", desc: "ML powered system" },
//   { id: 8, title: "SaaS App", desc: "Subscription platform" }
// ];

// const RADIUS = 520;
// const STEP = 360 / projects.length;

// /* ===============================
//    COMPONENT
// ================================ */
// export default function ProjectsCylinderGSAP() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   const rotation = useRef(0);
//   const { showToast } = useRocketToast();

//   useEffect(() => {
//     const cards = cardsRef.current;
//     const wrapper = wrapperRef.current;
//     if (!cards.length || !wrapper) return;

//     /* Initial layout */
//     cards.forEach((card, i) => {
//       gsap.set(card, {
//         rotateY: i * STEP,
//         transformOrigin: `50% 50% ${-RADIUS}px`,
//         transformStyle: "preserve-3d",
//         backfaceVisibility: "hidden"
//       });
//     });

//     /* Observer handles wheel + touch + drag */
//     Observer.create({
//       target: containerRef.current!,
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       tolerance: 12,
//       preventDefault: true,
//       onDown: () => rotate(-STEP),
//       onUp: () => rotate(STEP),
//       onLeft: () => rotate(STEP),
//       onRight: () => rotate(-STEP)
//     });

//     function rotate(amount: number) {
//       rotation.current += amount;

//       gsap.to(wrapper, {
//         rotateY: rotation.current,
//         duration: 0.9,
//         ease: "power3.inOut",
//         onUpdate: updateFocus
//       });
//     }

//     function updateFocus() {
//       cards.forEach((card) => {
//         const angle =
//           (gsap.getProperty(card, "rotateY") as number) +
//           rotation.current;

//         const normalized = ((angle % 360) + 360) % 360;
//         const isFront = normalized < STEP / 2 || normalized > 360 - STEP / 2;

//         gsap.to(card, {
//           opacity: isFront ? 1 : 0.45,
//           scale: isFront ? 1 : 0.92,
//           pointerEvents: isFront ? "auto" : "none",
//           duration: 0.3
//         });
//       });
//     }

//     updateFocus();

//     return () => Observer.getAll().forEach(o => o.kill());
//   }, []);

//   return (
//     <section className="h-screen flex items-center justify-center text-white relative z-20">
//       <div
//         ref={containerRef}
//         className="relative w-full h-[70vh] overflow-hidden"
//         style={{ perspective: "1600px" }}
//       >
//         <div
//           ref={wrapperRef}
//           className="absolute inset-0 flex items-center justify-center"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {projects.map((project, i) => (
//             <div
//               key={project.id}
//               ref={el => (cardsRef.current[i] = el!)}
//               onClick={() => showToast("Rocket toast launched 🚀", 2500)}
//               className="
//                 absolute w-[420px] h-[260px]
//                 bg-gradient-to-br from-zinc-900 to-zinc-800
//                 rounded-2xl p-8 shadow-2xl cursor-pointer
//                 select-none
//               "
//             >
//               <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
//               <p className="text-zinc-300">{project.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Html, useCursor } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

/* =========================
   DATA
========================= */
const projects = [
  { id: 1, title: "3D Portfolio", desc: "Three.js immersive site" },
  { id: 2, title: "E-commerce", desc: "Full MERN platform" },
  { id: 3, title: "Tracker", desc: "Realtime tracking" },
  { id: 4, title: "Admin Panel", desc: "Role based dashboards" },
  { id: 5, title: "Mobile App", desc: "Flutter + Firebase" },
  { id: 6, title: "Analytics", desc: "Charts & insights" },
  { id: 7, title: "AI Tool", desc: "ML powered system" },
  { id: 8, title: "SaaS App", desc: "Subscription platform" }
];

const RADIUS = 4;
const STEP = (Math.PI * 2) / projects.length;

/* =========================
   MAIN
========================= */
export default function ProjectsCylinderR3F() {
  return (
    <section className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <CylinderCarousel />
      </Canvas>
    </section>
  );
}

/* =========================
   CYLINDER
========================= */
function CylinderCarousel() {
  const groupRef = useRef<THREE.Group>(null);
  const rotation = useRef(0);

  /* scroll / swipe */
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation.current,
        0.08
      );
    }
  });

  const onWheel = (e: ThreeEvent<WheelEvent>) => {
    rotation.current += e.deltaY > 0 ? STEP : -STEP;
  };

  return (
    <group ref={groupRef} onWheel={onWheel}>
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          rotationRef={rotation}
        />
      ))}
    </group>
  );
}

/* =========================
   CARD
========================= */
function ProjectCard({
  project,
  index,
  rotationRef
}: {
  project: any;
  index: number;
  rotationRef: React.MutableRefObject<number>;
}) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const angle = index * STEP;

  useFrame(() => {
    if (!ref.current) return;

    const worldRotation =
      angle + (rotationRef.current % (Math.PI * 2));

    const normalized =
      ((worldRotation % (Math.PI * 2)) + Math.PI * 2) %
      (Math.PI * 2);

    const isFront =
      normalized < STEP / 2 ||
      normalized > Math.PI * 2 - STEP / 2;

    ref.current.position.x = Math.sin(angle) * RADIUS;
    ref.current.position.z = Math.cos(angle) * RADIUS;
    ref.current.rotation.y = angle + Math.PI;

    ref.current.scale.setScalar(
      THREE.MathUtils.lerp(
        ref.current.scale.x,
        isFront ? 1 : 0.85,
        0.1
      )
    );
  });

  return (
    <group
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* CARD PLANE */}
      <mesh>
        <planeGeometry args={[2.6, 1.6]} />
        <meshStandardMaterial
          color={hovered ? "#3b82f6" : "#111827"}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* HTML CONTENT */}
      <Html
        transform
        distanceFactor={1.4}
        position={[0, 0, 0.01]}
      >
        <div className="w-[260px] h-[160px] p-4 rounded-xl bg-zinc-900/90 text-white">
          <h2 className="font-bold text-lg mb-1">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-300">
            {project.desc}
          </p>
        </div>
      </Html>
    </group>
  );
}
