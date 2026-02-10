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





// "use client";

// import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
// import { Html, useCursor } from "@react-three/drei";
// import { useRef, useState } from "react";
// import * as THREE from "three";

// /* =========================
//    DATA
// ========================= */
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

// const RADIUS = 4;
// const STEP = (Math.PI * 2) / projects.length;

// /* =========================
//    MAIN
// ========================= */
// export default function ProjectsCylinderR3F() {
//   return (
//     <section className="h-screen w-full">
//       <Canvas
//         camera={{ position: [0, 0, 8], fov: 45 }}
//         style={{ background: "transparent" }}
//       >
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />

//         <CylinderCarousel />
//       </Canvas>
//     </section>
//   );
// }

// /* =========================
//    CYLINDER
// ========================= */
// function CylinderCarousel() {
//   const groupRef = useRef<THREE.Group>(null);
//   const rotation = useRef(0);

//   /* scroll / swipe */
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = THREE.MathUtils.lerp(
//         groupRef.current.rotation.y,
//         rotation.current,
//         0.08
//       );
//     }
//   });

//   const onWheel = (e: ThreeEvent<WheelEvent>) => {
//     rotation.current += e.deltaY > 0 ? STEP : -STEP;
//   };

//   return (
//     <group ref={groupRef} onWheel={onWheel}>
//       {projects.map((project, i) => (
//         <ProjectCard
//           key={project.id}
//           project={project}
//           index={i}
//           rotationRef={rotation}
//         />
//       ))}
//     </group>
//   );
// }

// /* =========================
//    CARD
// ========================= */
// function ProjectCard({
//   project,
//   index,
//   rotationRef
// }: {
//   project: any;
//   index: number;
//   rotationRef: React.MutableRefObject<number>;
// }) {
//   const ref = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   useCursor(hovered);

//   const angle = index * STEP;

//   useFrame(() => {
//     if (!ref.current) return;

//     const worldRotation =
//       angle + (rotationRef.current % (Math.PI * 2));

//     const normalized =
//       ((worldRotation % (Math.PI * 2)) + Math.PI * 2) %
//       (Math.PI * 2);

//     const isFront =
//       normalized < STEP / 2 ||
//       normalized > Math.PI * 2 - STEP / 2;

//     ref.current.position.x = Math.sin(angle) * RADIUS;
//     ref.current.position.z = Math.cos(angle) * RADIUS;
//     ref.current.rotation.y = angle + Math.PI;

//     ref.current.scale.setScalar(
//       THREE.MathUtils.lerp(
//         ref.current.scale.x,
//         isFront ? 1 : 0.85,
//         0.1
//       )
//     );
//   });

//   return (
//     <group
//       ref={ref}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       {/* CARD PLANE */}
//       <mesh>
//         <planeGeometry args={[2.6, 1.6]} />
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#111827"}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </mesh>

//       {/* HTML CONTENT */}
//       <Html
//         transform
//         distanceFactor={1.4}
//         position={[0, 0, 0.01]}
//       >
//         <div className="w-[360px] h-[360px] p-4 rounded-xl bg-zinc-900/90 text-white cursor-pointer">
//           <h2 className="font-bold text-lg mb-1">
//             {project.title}
//           </h2>
//           <p className="text-sm text-zinc-300">
//             {project.desc}
//           </p>
//         </div>
//       </Html>
//     </group>
//   );
// }





// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Html, useCursor } from "@react-three/drei";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// /* =========================
//    DATA
// ========================= */
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

// const RADIUS = 4;
// const STEP = (Math.PI * 2) / projects.length;

// /* =========================
//    MAIN
// ========================= */
// export default function ProjectsCylinderR3F() {
//   return (
//     <section className="h-screen w-full bg-black">
//       <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
//         <ambientLight intensity={0.9} />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         <pointLight position={[0, 2, 5]} intensity={1} />

//         <CylinderCarousel />
//       </Canvas>
//     </section>
//   );
// }

// /* =========================
//    CYLINDER
// ========================= */
// function CylinderCarousel() {
//   const group = useRef<THREE.Group>(null);
//   const targetRotation = useRef(0);
//   const currentRotation = useRef(0);

//   /* smooth rotation */
//   useFrame(() => {
//     currentRotation.current = THREE.MathUtils.lerp(
//       currentRotation.current,
//       targetRotation.current,
//       0.08
//     );

//     if (group.current) {
//       group.current.rotation.y = currentRotation.current;
//     }
//   });

//   /* wheel scroll */
//   useEffect(() => {
//     const onWheel = (e: WheelEvent) => {
//       targetRotation.current += e.deltaY * 0.0008;
//     };

//     window.addEventListener("wheel", onWheel, { passive: true });
//     return () => window.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <group ref={group}>
//       {projects.map((project, i) => (
//         <ProjectCard
//           key={project.id}
//           project={project}
//           index={i}
//           rotationRef={currentRotation}
//         />
//       ))}
//     </group>
//   );
// }

// /* =========================
//    CARD
// ========================= */
// function ProjectCard({
//   project,
//   index,
//   rotationRef
// }: {
//   project: any;
//   index: number;
//   rotationRef: React.MutableRefObject<number>;
// }) {
//   const ref = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   useCursor(hovered);

//   const angle = index * STEP;

//   useFrame(({ camera }) => {
//     if (!ref.current) return;

//     const totalAngle = angle + rotationRef.current;

//     const normalized =
//       ((totalAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

//     const isFront =
//       normalized < STEP / 2 ||
//       normalized > Math.PI * 2 - STEP / 2;

//     /* position on cylinder */
//     ref.current.position.set(
//       Math.sin(angle) * RADIUS,
//       isFront ? 0.25 : 0,
//       Math.cos(angle) * RADIUS
//     );

//     /* always face camera */
//     ref.current.lookAt(camera.position);

//     /* scale emphasis */
//     const targetScale = isFront ? 1.05 : 0.85;
//     ref.current.scale.lerp(
//       new THREE.Vector3(targetScale, targetScale, targetScale),
//       0.1
//     );
//   });

//   return (
//     <group
//       ref={ref}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       {/* CARD */}
//       <mesh>
//         <planeGeometry args={[2.8, 1.7]} />
//         <meshStandardMaterial
//           color={hovered ? "#2563eb" : "#020617"}
//           metalness={0.4}
//           roughness={0.35}
//         />
//       </mesh>

//       {/* CONTENT */}
//       <Html transform distanceFactor={1.4} position={[0, 0, 0.02]}>
//         <div className="w-[300px] p-4 rounded-xl bg-zinc-900/90 backdrop-blur text-white shadow-xl">
//           <h2 className="font-semibold text-lg mb-1">
//             {project.title}
//           </h2>
//           <p className="text-sm text-zinc-300">
//             {project.desc}
//           </p>
//         </div>
//       </Html>
//     </group>
//   );
// }





// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Html, useCursor } from "@react-three/drei";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// /* =========================
//    DATA
// ========================= */
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

// const RADIUS = 4;
// const STEP = (Math.PI * 2) / projects.length;

// /* =========================
//    MAIN
// ========================= */
// export default function ProjectsCylinderR3F() {
//   return (
//     <section className="h-screen w-full">
//       <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
//         <ambientLight intensity={1.1} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <CylinderCarousel />
//       </Canvas>
//     </section>
//   );
// }

// /* =========================
//    CYLINDER CAROUSEL
// ========================= */
// function CylinderCarousel() {
//   const groupRef = useRef<THREE.Group>(null);

//   const targetRotation = useRef(0);
//   const currentRotation = useRef(0);

//   const [isInside, setIsInside] = useState(false);

//   const MAX_ROTATION = STEP * (projects.length - 1);

//   /* smooth rotation */
//   useFrame(() => {
//     currentRotation.current = THREE.MathUtils.lerp(
//       currentRotation.current,
//       targetRotation.current,
//       0.08
//     );

//     if (groupRef.current) {
//       groupRef.current.rotation.y = currentRotation.current;
//     }
//   });

//   /* wheel handling */
//   useEffect(() => {
//     const onWheel = (e: WheelEvent) => {
//       if (!isInside) return;

//       const direction = e.deltaY > 0 ? 1 : -1;
//       const next = targetRotation.current + direction * STEP;

//       /* allow normal scroll if limit reached */
//       if (next < 0 || next > MAX_ROTATION) return;

//       e.preventDefault();
//       targetRotation.current = next;
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     return () =>
//       window.removeEventListener("wheel", onWheel);
//   }, [isInside]);

//   return (
//     <group
//       ref={groupRef}
//       onPointerEnter={() => setIsInside(true)}
//       onPointerLeave={() => setIsInside(false)}
//     >
//       {projects.map((project, i) => (
//         <ProjectCard
//           key={project.id}
//           project={project}
//           index={i}
//           rotationRef={currentRotation}
//         />
//       ))}
//     </group>
//   );
// }

// /* =========================
//    PROJECT CARD
// ========================= */
// function ProjectCard({
//   project,
//   index,
//   rotationRef
// }: {
//   project: any;
//   index: number;
//   rotationRef: React.MutableRefObject<number>;
// }) {
//   const ref = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   useCursor(hovered);

//   const angle = index * STEP;

//   useFrame(() => {
//     if (!ref.current) return;

//     const worldAngle = angle + rotationRef.current;
//     const normalized =
//       ((worldAngle % (Math.PI * 2)) + Math.PI * 2) %
//       (Math.PI * 2);

//     const isFront =
//       normalized < STEP / 2 ||
//       normalized > Math.PI * 2 - STEP / 2;

//     ref.current.position.x = Math.sin(angle) * RADIUS;
//     ref.current.position.z = Math.cos(angle) * RADIUS;
//     ref.current.rotation.y = angle + Math.PI;

//     ref.current.scale.setScalar(
//       THREE.MathUtils.lerp(
//         ref.current.scale.x,
//         isFront ? 1 : 0.85,
//         0.1
//       )
//     );
//   });

//   return (
//     <group
//       ref={ref}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       {/* CARD */}
//       <mesh>
//         <planeGeometry args={[2.8, 1.7]} />
//         <meshStandardMaterial
//           color={hovered ? "#2563eb" : "#111827"}
//           metalness={0.25}
//           roughness={0.4}
//         />
//       </mesh>

//       {/* HTML CONTENT */}
//       <Html transform distanceFactor={1.4} position={[0, 0, 0.01]}>
//         <div className="w-[280px] rounded-xl bg-zinc-900/90 p-4 text-white backdrop-blur">
//           <h3 className="text-lg font-semibold mb-1">
//             {project.title}
//           </h3>
//           <p className="text-sm text-zinc-300">
//             {project.desc}
//           </p>
//         </div>
//       </Html>
//     </group>
//   );
// }


















// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Html, useCursor } from "@react-three/drei";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// /* =========================
//    DATA
// ========================= */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Galaxy based UI" },
//   { id: 2, title: "E-commerce", desc: "MERN Stack" },
//   { id: 3, title: "Tracker", desc: "Realtime GPS" },
//   { id: 4, title: "Admin Panel", desc: "Role based access" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" }
// ];

// const RADIUS = 4;
// const STEP = (Math.PI * 2) / projects.length;

// /* =========================
//    MAIN
// ========================= */
// export default function ProjectsGalaxyRoller() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* LEFT ARROW (desktop only) */}
//       <Arrow direction="left" />

//       {/* RIGHT ARROW */}
//       <Arrow direction="right" />

//       <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <GalaxyCarousel />
//       </Canvas>
//     </section>
//   );
// }

// /* =========================
//    GLOBAL ROTATION STATE
// ========================= */
// let setIndexGlobal: (v: number) => void;

// /* =========================
//    ARROW BUTTON
// ========================= */
// function Arrow({ direction }: { direction: "left" | "right" }) {
//   return (
//     <button
//       onClick={() =>
//         setIndexGlobal((prev) =>
//           direction === "left"
//             ? Math.max(prev - 1, 0)
//             : Math.min(prev + 1, projects.length - 1)
//         )
//       }
//       className={`
//         hidden md:flex
//         absolute top-1/2 z-10 -translate-y-1/2
//         ${direction === "left" ? "left-6" : "right-6"}
//         h-12 w-12 items-center justify-center
//         rounded-full bg-white/10 text-white
//         backdrop-blur hover:bg-white/20
//       `}
//     >
//       {direction === "left" ? "◀" : "▶"}
//     </button>
//   );
// }

// /* =========================
//    CAROUSEL
// ========================= */
// function GalaxyCarousel() {
//   const groupRef = useRef<THREE.Group>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   setIndexGlobal = setActiveIndex;

//   const targetRotation = useRef(0);

//   /* smooth animation */
//   useFrame(() => {
//     targetRotation.current = -activeIndex * STEP;
//     if (groupRef.current) {
//       groupRef.current.rotation.y = THREE.MathUtils.lerp(
//         groupRef.current.rotation.y,
//         targetRotation.current,
//         0.08
//       );
//     }
//   });

//   /* MOBILE SCROLL */
//   useEffect(() => {
//     let locked = false;

//     const onWheel = (e: WheelEvent) => {
//       if (window.innerWidth >= 768) return; // desktop handled by arrows
//       if (locked) return;

//       locked = true;

//       setActiveIndex((prev) =>
//         e.deltaY > 0
//           ? Math.min(prev + 1, projects.length - 1)
//           : Math.max(prev - 1, 0)
//       );

//       setTimeout(() => (locked = false), 500);
//     };

//     window.addEventListener("wheel", onWheel);
//     return () => window.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <group ref={groupRef}>
//       {projects.map((p, i) => (
//         <ProjectCard key={p.id} project={p} index={i} />
//       ))}
//     </group>
//   );
// }

// /* =========================
//    CARD
// ========================= */
// function ProjectCard({
//   project,
//   index
// }: {
//   project: any;
//   index: number;
// }) {
//   const ref = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   useCursor(hovered);

//   const angle = index * STEP;

//   useFrame(() => {
//     if (!ref.current) return;

//     ref.current.position.x = Math.sin(angle) * RADIUS;
//     ref.current.position.z = Math.cos(angle) * RADIUS;
//     ref.current.rotation.y = angle + Math.PI;
//   });

//   return (
//     <group
//       ref={ref}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <mesh>
//         <planeGeometry args={[2.8, 1.7]} />
//         <meshStandardMaterial
//           color={hovered ? "#6366f1" : "#020617"}
//           metalness={0.4}
//           roughness={0.3}
//         />
//       </mesh>

//       <Html transform distanceFactor={1.4} position={[0, 0, 0.01]}>
//         <div className="rounded-xl bg-black/70 p-4 text-white backdrop-blur">
//           <h3 className="text-lg font-semibold">
//             {project.title}
//           </h3>
//           <p className="text-sm text-zinc-400">
//             {project.desc}
//           </p>
//         </div>
//       </Html>
//     </group>
//   );
// }






// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Html, useCursor } from "@react-three/drei";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// /* =========================
//    DATA
// ========================= */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Galaxy based UI" },
//   { id: 2, title: "E-commerce", desc: "MERN Stack" },
//   { id: 3, title: "Tracker", desc: "Realtime GPS" },
//   { id: 4, title: "Admin Panel", desc: "Role based access" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" }
// ];

// const RADIUS = 4;
// const STEP = (Math.PI * 2) / projects.length;

// /* =========================
//    GLOBAL INDEX
// ========================= */
// let setIndexGlobal: (fn: (v: number) => number) => void;

// /* =========================
//    MAIN
// ========================= */
// export default function ProjectsGalaxyRoller() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <Arrow direction="left" />
//       <Arrow direction="right" />

//       <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <GalaxyCarousel />
//       </Canvas>
//     </section>
//   );
// }

// /* =========================
//    ARROWS (DESKTOP)
// ========================= */
// function Arrow({ direction }: { direction: "left" | "right" }) {
//   return (
//     <button
//       className={`
//         hidden md:flex absolute top-1/2 z-10 -translate-y-1/2
//         ${direction === "left" ? "left-6" : "right-6"}
//         h-12 w-12 items-center justify-center
//         rounded-full bg-white/10 text-white
//         backdrop-blur hover:bg-white/20
//       `}
//       onClick={() =>
//         setIndexGlobal((prev) =>
//           direction === "left"
//             ? Math.max(prev - 1, 0)
//             : Math.min(prev + 1, projects.length - 1)
//         )
//       }
//     >
//       {direction === "left" ? "◀" : "▶"}
//     </button>
//   );
// }

// /* =========================
//    CAROUSEL
// ========================= */
// function GalaxyCarousel() {
//   const groupRef = useRef<THREE.Group>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   setIndexGlobal = setActiveIndex;

//   const startY = useRef(0);
//   const locked = useRef(false);

//   /* smooth rotation */
//   useFrame(() => {
//     if (!groupRef.current) return;

//     const target = -activeIndex * STEP;
//     groupRef.current.rotation.y = THREE.MathUtils.lerp(
//       groupRef.current.rotation.y,
//       target,
//       0.08
//     );
//   });

//   /* MOBILE TOUCH */
//   useEffect(() => {
//     const onTouchStart = (e: TouchEvent) => {
//       startY.current = e.touches[0].clientY;
//     };

//     const onTouchEnd = (e: TouchEvent) => {
//       if (locked.current) return;

//       const endY = e.changedTouches[0].clientY;
//       const diff = startY.current - endY;

//       if (Math.abs(diff) < 40) return;

//       locked.current = true;

//       setActiveIndex((prev) =>
//         diff > 0
//           ? Math.min(prev + 1, projects.length - 1)
//           : Math.max(prev - 1, 0)
//       );

//       setTimeout(() => (locked.current = false), 500);
//     };

//     window.addEventListener("touchstart", onTouchStart);
//     window.addEventListener("touchend", onTouchEnd);

//     return () => {
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchend", onTouchEnd);
//     };
//   }, []);

//   return (
//     <group ref={groupRef}>
//       {projects.map((p, i) => (
//         <ProjectCard key={p.id} project={p} index={i} />
//       ))}
//     </group>
//   );
// }

// /* =========================
//    CARD
// ========================= */
// function ProjectCard({
//   project,
//   index
// }: {
//   project: any;
//   index: number;
// }) {
//   const ref = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   useCursor(hovered);

//   const angle = index * STEP;

//   useFrame(() => {
//     if (!ref.current) return;

//     ref.current.position.x = Math.sin(angle) * RADIUS;
//     ref.current.position.z = Math.cos(angle) * RADIUS;
//     ref.current.rotation.y = angle + Math.PI;
//   });

//   return (
//     <group
//       ref={ref}
//       onPointerOver={(e) => {
//         e.stopPropagation();
//         setHovered(true);
//       }}
//       onPointerOut={() => setHovered(false)}
//     >
//       <mesh>
//         <planeGeometry args={[2.8, 1.7]} />
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#020617"}
//           metalness={0.4}
//           roughness={0.3}
//         />
//       </mesh>

//       <Html transform distanceFactor={1.4} position={[0, 0, 0.01]}>
//         <div
//           className="
//             select-none cursor-pointer
//             rounded-xl bg-black/70 p-4
//             text-white backdrop-blur
//           "
//           onPointerDown={(e) => e.stopPropagation()}
//         >
//           <h3 className="text-lg font-semibold">
//             {project.title}
//           </h3>
//           <p className="text-sm text-zinc-400">
//             {project.desc}
//           </p>
//         </div>
//       </Html>
//     </group>
//   );
// }





// "use client";

// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Html, useCursor } from "@react-three/drei";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// /* =========================
//    DATA
// ========================= */
// const projects = [
//   { id: 1, title: "3D Portfolio", desc: "Galaxy based UI" },
//   { id: 2, title: "E-commerce", desc: "MERN Stack" },
//   { id: 3, title: "Tracker", desc: "Realtime GPS" },
//   { id: 4, title: "Admin Panel", desc: "Role based access" },
//   { id: 5, title: "Mobile App", desc: "Flutter + Firebase" }
// ];

// /* =========================
//    MAIN
// ========================= */
// export default function ProjectsGalaxyRoller() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <GalaxyCarousel />
//       </Canvas>
//     </section>
//   );
// }

// /* =========================
//    CAROUSEL
// ========================= */
// function GalaxyCarousel() {
//   const groupRef = useRef<THREE.Group>(null);
//   const { size } = useThree();

//   const isMobile = size.width < 768;

//   const RADIUS = isMobile ? 2.6 : 4;
//   const STEP = (Math.PI * 2) / projects.length;

//   const [activeIndex, setActiveIndex] = useState(0);
//   const startY = useRef(0);
//   const locked = useRef(false);

//   /* Smooth rotation */
//   useFrame(() => {
//     if (!groupRef.current) return;
//     const target = -activeIndex * STEP;
//     groupRef.current.rotation.y = THREE.MathUtils.lerp(
//       groupRef.current.rotation.y,
//       target,
//       0.08
//     );
//   });

//   /* MOBILE SWIPE (scoped correctly) */
//   useEffect(() => {
//     if (!isMobile) return;

//     const onTouchStart = (e: TouchEvent) => {
//       startY.current = e.touches[0].clientY;
//     };

//     const onTouchEnd = (e: TouchEvent) => {
//       if (locked.current) return;

//       const diff =
//         startY.current - e.changedTouches[0].clientY;

//       if (Math.abs(diff) < 35) return;

//       locked.current = true;

//       setActiveIndex((prev) =>
//         diff > 0
//           ? Math.min(prev + 1, projects.length - 1)
//           : Math.max(prev - 1, 0)
//       );

//       setTimeout(() => (locked.current = false), 450);
//     };

//     window.addEventListener("touchstart", onTouchStart, {
//       passive: true
//     });
//     window.addEventListener("touchend", onTouchEnd);

//     return () => {
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchend", onTouchEnd);
//     };
//   }, [isMobile]);

//   return (
//     <group ref={groupRef}>
//       {projects.map((p, i) => (
//         <ProjectCard
//           key={p.id}
//           project={p}
//           index={i}
//           radius={RADIUS}
//           step={STEP}
//         />
//       ))}
//     </group>
//   );
// }

// /* =========================
//    CARD
// ========================= */
// function ProjectCard({
//   project,
//   index,
//   radius,
//   step
// }: {
//   project: any;
//   index: number;
//   radius: number;
//   step: number;
// }) {
//   const ref = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   useCursor(hovered);

//   const angle = index * step;

//   useFrame(({ camera }) => {
//     if (!ref.current) return;

//     ref.current.position.x = Math.sin(angle) * radius;
//     ref.current.position.z = Math.cos(angle) * radius;

//     /* plane faces center */
//     ref.current.rotation.y = angle + Math.PI;

//     /* HTML always faces camera */
//     ref.current.children[1]?.lookAt(camera.position);
//   });

//   return (
//     <group
//       ref={ref}
//       onPointerOver={(e) => {
//         e.stopPropagation();
//         setHovered(true);
//       }}
//       onPointerOut={() => setHovered(false)}
//     >
//       {/* CARD PLANE */}
//       <mesh>
//         <planeGeometry args={[2.3, 1.4]} />
//         <meshStandardMaterial
//           color={hovered ? "#6366f1" : "#020617"}
//           metalness={0.4}
//           roughness={0.3}
//         />
//       </mesh>

//       {/* HTML CONTENT (NOT FLIPPED) */}
//       <Html transform distanceFactor={1.4} position={[0, 0, 0.01]}>
//         <div className="select-none rounded-xl bg-black/70 p-4 text-white backdrop-blur">
//           <h3 className="text-lg font-semibold">
//             {project.title}
//           </h3>
//           <p className="text-sm text-zinc-400">
//             {project.desc}
//           </p>
//         </div>
//       </Html>
//     </group>
//   );
// }




// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import { useRef, useState } from "react";
// import gsap from "gsap";

// const projects = [
//   { title: "Project One" },
//   { title: "Project Two" },
//   { title: "Project Three" },
//   { title: "Project Four" },
// ];

// function Card({ title, position, rotation }) {
//   return (
//     <group position={position} rotation={rotation}>
//       <Html transform>
//         <div
//           className="card"
//           style={{
//             width: 220,
//             height: 140,
//             background: "rgba(20,20,40,0.9)",
//             borderRadius: 12,
//             color: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             userSelect: "none",
//             pointerEvents: "auto",
//           }}
//         >
//           {title}
//         </div>
//       </Html>
//     </group>
//   );
// }

// function Carousel() {
//   const groupRef = useRef();
//   const [index, setIndex] = useState(0);
//   const radius = 3;
//   const angleStep = (Math.PI * 2) / projects.length;

//   const rotateTo = (next) => {
//     gsap.to(groupRef.current.rotation, {
//       y: -next * angleStep,
//       duration: 0.8,
//       ease: "power3.out",
//     });
//     setIndex(next);
//   };

//   // Mobile scroll
//   let locked = false;
//   const onWheel = (e) => {
//     if (locked) return;
//     locked = true;

//     if (e.deltaY > 0) {
//       rotateTo((index + 1) % projects.length);
//     } else {
//       rotateTo((index - 1 + projects.length) % projects.length);
//     }

//     setTimeout(() => (locked = false), 800);
//   };

//   return (
//     <group ref={groupRef} onWheel={onWheel}>
//       {projects.map((p, i) => {
//         const angle = i * angleStep;
//         return (
//           <Card
//             key={i}
//             title={p.title}
//             position={[
//               Math.sin(angle) * radius,
//               0,
//               Math.cos(angle) * radius,
//             ]}
//             rotation={[0, angle + Math.PI, 0]}
//           />
//         );
//       })}
//     </group>
//   );
// }

// export default function ProjectsRoller() {
//   return (
//     <div className="w-full h-screen relative">
//       {/* Arrows (Desktop) */}
//       <button
//         className="nav left"
//         onClick={() =>
//           window.dispatchEvent(new WheelEvent("wheel", { deltaY: -1 }))
//         }
//       >
//         ◀
//       </button>

//       <button
//         className="nav right"
//         onClick={() =>
//           window.dispatchEvent(new WheelEvent("wheel", { deltaY: 1 }))
//         }
//       >
//         ▶
//       </button>

//       <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//         <ambientLight intensity={1.5} />
//         <Carousel />
//       </Canvas>
//     </div>
//   );
// }





// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import { useRef, useState } from "react";
// import gsap from "gsap";

// const projects = [
//   {
//     name: "Galaxy App",
//     description: "3D space themed portfolio",
//     image: "/p1.jpg",
//   },
//   {
//     name: "E-Commerce",
//     description: "Modern shopping experience",
//     image: "/p2.jpg",
//   },
//   {
//     name: "Dashboard",
//     description: "Analytics & metrics",
//     image: "/p3.jpg",
//   },
// ];

// function ProjectCard({ project, position, rotation }) {
//   return (
//     <group position={position} rotation={rotation}>
//       <Html transform>
//         <div className="project-card">
//           <img src={project.image} alt={project.name} />
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//         </div>
//       </Html>
//     </group>
//   );
// }

// function Carousel({ projects }) {
//   const groupRef = useRef();
//   const [index, setIndex] = useState(0);

//   const radius = 3.2;
//   const step = (Math.PI * 2) / projects.length;

//   const rotateTo = (nextIndex) => {
//     gsap.to(groupRef.current.rotation, {
//       y: -nextIndex * step,
//       duration: 0.9,
//       ease: "power3.inOut",
//     });
//     setIndex(nextIndex);
//   };

//   return (
//     <>
//       <group ref={groupRef}>
//         {projects.map((project, i) => {
//           const angle = i * step;
//           return (
//             <ProjectCard
//               key={i}
//               project={project}
//               position={[
//                 Math.sin(angle) * radius,
//                 0,
//                 Math.cos(angle) * radius,
//               ]}
//               rotation={[0, angle + Math.PI, 0]}
//             />
//           );
//         })}
//       </group>

//       {/* Controls */}
//       <div className="controls">
//         <button
//           onClick={() =>
//             rotateTo((index - 1 + projects.length) % projects.length)
//           }
//         >
//           ◀
//         </button>
//         <button
//           onClick={() => rotateTo((index + 1) % projects.length)}
//         >
//           ▶
//         </button>
//       </div>
//     </>
//   );
// }

// export default function ProjectsCarousel3D() {
//   return (
//     <div className="carousel-wrapper">
//       <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <Carousel projects={projects} />
//       </Canvas>
//     </div>
//   );
// }






// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import { useRef, useState } from "react";
// import * as THREE from "three";
// import gsap from "gsap";

// /* ======================
//    TYPES
// ====================== */
// interface Project {
//   name: string;
//   description: string;
//   image: string;
// }

// interface ProjectCardProps {
//   project: Project;
//   position: [number, number, number];
//   rotation: [number, number, number];
// }

// /* ======================
//    DATA
// ====================== */
// const projects: Project[] = [
//   {
//     name: "Galaxy App",
//     description: "3D space themed portfolio",
//     image: "/p1.jpg",
//   },
//   {
//     name: "E-Commerce",
//     description: "Modern shopping experience",
//     image: "/p2.jpg",
//   },
//   {
//     name: "Dashboard",
//     description: "Analytics & insights",
//     image: "/p3.jpg",
//   },
// ];

// /* ======================
//    CARD
// ====================== */
// function ProjectCard({
//   project,
//   position,
//   rotation,
// }: ProjectCardProps) {
//   return (
//     <group position={position} rotation={rotation}>
//       <Html transform>
//         <div className="project-card">
//           <img src={project.image} alt={project.name} />
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//         </div>
//       </Html>
//     </group>
//   );
// }

// /* ======================
//    CAROUSEL
// ====================== */
// function Carousel({ projects }: { projects: Project[] }) {
//   const groupRef = useRef<THREE.Group>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const radius = 3.2;
//   const step = (Math.PI * 2) / projects.length;

//   const rotateTo = (index: number) => {
//     if (!groupRef.current) return;

//     gsap.to(groupRef.current.rotation, {
//       y: -index * step,
//       duration: 0.9,
//       ease: "power3.inOut",
//     });

//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <group ref={groupRef}>
//         {projects.map((project, i) => {
//           const angle = i * step;

//           return (
//             <ProjectCard
//               key={i}
//               project={project}
//               position={[
//                 Math.sin(angle) * radius,
//                 0,
//                 Math.cos(angle) * radius,
//               ]}
//               rotation={[0, angle + Math.PI, 0]}
//             />
//           );
//         })}
//       </group>

//       {/* CONTROLS */}
//       <div className="controls">
//         <button
//           onClick={() =>
//             rotateTo(
//               (activeIndex - 1 + projects.length) %
//                 projects.length
//             )
//           }
//         >
//           ◀
//         </button>

//         <button
//           onClick={() =>
//             rotateTo((activeIndex + 1) % projects.length)
//           }
//         >
//           ▶
//         </button>
//       </div>
//     </>
//   );
// }

// /* ======================
//    MAIN
// ====================== */
// export default function ProjectsCarousel3D() {
//   return (
//     <div className="carousel-wrapper">
//       <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <Carousel projects={projects} />
//       </Canvas>
//     </div>
//   );
// }





// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import { useRef, useState } from "react";
// import * as THREE from "three";
// import gsap from "gsap";

// /* ======================
//    TYPES
// ====================== */
// interface Project {
//   name: string;
//   description: string;
//   image: string;
// }

// const projects: Project[] = [
//   {
//     name: "Galaxy App",
//     description: "3D space themed portfolio",
//     image: "/p1.jpg",
//   },
//   {
//     name: "E-Commerce",
//     description: "Modern shopping experience",
//     image: "/p2.jpg",
//   },
//   {
//     name: "Dashboard",
//     description: "Analytics & insights",
//     image: "/p3.jpg",
//   },
// ];

// /* ======================
//    CARD
// ====================== */
// function ProjectCard({
//   project,
//   position,
//   rotation,
// }: {
//   project: Project;
//   position: [number, number, number];
//   rotation: [number, number, number];
// }) {
//   return (
//     <group position={position} rotation={rotation}>
//       <Html transform>
//         <div className="project-card">
//           <img src={project.image} />
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//         </div>
//       </Html>
//     </group>
//   );
// }

// /* ======================
//    CAROUSEL
// ====================== */
// function Carousel({
//   activeIndex,
//   setActiveIndex,
// }: {
//   activeIndex: number;
//   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
// }) {
//   const groupRef = useRef<THREE.Group>(null);

//   const radius = 3.2;
//   const step = (Math.PI * 2) / projects.length;

//   const rotateTo = (index: number) => {
//     if (!groupRef.current) return;

//     gsap.to(groupRef.current.rotation, {
//       y: -index * step,
//       duration: 0.9,
//       ease: "power3.inOut",
//     });

//     setActiveIndex(index);
//   };

//   // expose rotate function via window (simple + safe)
//   (window as any).rotateCarousel = rotateTo;

//   return (
//     <group ref={groupRef}>
//       {projects.map((project, i) => {
//         const angle = i * step;

//         return (
//           <ProjectCard
//             key={i}
//             project={project}
//             position={[
//               Math.sin(angle) * radius,
//               0,
//               Math.cos(angle) * radius,
//             ]}
//             rotation={[0, angle + Math.PI, 0]}
//           />
//         );
//       })}
//     </group>
//   );
// }

// /* ======================
//    MAIN
// ====================== */
// export default function ProjectsRoller() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const next = () =>
//     (window as any).rotateCarousel(
//       (activeIndex + 1) % projects.length
//     );

//   const prev = () =>
//     (window as any).rotateCarousel(
//       (activeIndex - 1 + projects.length) %
//         projects.length
//     );

//   return (
//     <div className="carousel-wrapper">
//       {/* ✅ CANVAS (3D ONLY) */}
//       <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <Carousel
//           activeIndex={activeIndex}
//           setActiveIndex={setActiveIndex}
//         />
//       </Canvas>

//       {/* ✅ DOM CONTROLS (OUTSIDE CANVAS) */}
//       <div className="controls">
//         <button onClick={prev}>◀</button>
//         <button onClick={next}>▶</button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { Html } from "@react-three/drei";
// import { useState } from "react";

// export interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// /**
//  * R3F Project Card
//  * - Faces camera correctly
//  * - No blue highlight / text selection
//  * - Mobile friendly
//  */
// export default function ProjectRoller({
//   project,
// }: ProjectCardProps) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <group>
//       {/* Invisible plane for pointer events */}
//       <mesh
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <planeGeometry args={[2.8, 1.7]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* HTML CONTENT */}
//       <Html
//         transform
//         center
//         distanceFactor={1.4}
//         position={[0, 0, 0.01]}
//         style={{
//           pointerEvents: "none", // 👈 fixes mobile scroll & blue highlight
//         }}
//       >
//         <div
//           className={`
//             w-[260px] sm:w-[300px]
//             rounded-xl
//             bg-zinc-900/90
//             text-white
//             backdrop-blur-md
//             transition-all duration-300
//             ${hovered ? "ring-2 ring-blue-500 scale-105" : ""}
//           `}
//           style={{
//             userSelect: "none", // 👈 prevents text selection
//             WebkitUserSelect: "none",
//           }}
//         >
//           {/* IMAGE */}
//           <img
//             src={"project.image"}
//             alt={"project.title"}
//             className="w-full h-36 object-cover rounded-t-xl pointer-events-none"
//             draggable={false}
//           />

//           {/* CONTENT */}
//           <div className="p-4">
//             <h3 className="text-lg font-semibold mb-1">
//               {"project.title"}
//             </h3>
//             <p className="text-sm text-zinc-300">
//               {"project.description"}
//             </p>
//           </div>
//         </div>
//       </Html>
//     </group>
//   );
// }




// "use client";

// import { Html } from "@react-three/drei";
// import { useState } from "react";
// import * as THREE from "three";

// export interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <group>
//       {/* Pointer catcher */}
//       <mesh
//         geometry={new THREE.PlaneGeometry(2.8, 1.7)}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* HTML content */}
//       <Html
//         transform
//         center
//         distanceFactor={1.4}
//         position={[0, 0, 0.01]}
//         style={{ pointerEvents: "none" }}
//       >
//         <div
//           className={`
//             w-[260px] sm:w-[300px]
//             rounded-xl
//             bg-zinc-900/90
//             text-white
//             backdrop-blur-md
//             transition-all duration-300
//             ${hovered ? "ring-2 ring-blue-500 scale-105" : ""}
//           `}
//           style={{
//             userSelect: "none",
//             WebkitUserSelect: "none",
//           }}
//         >
//           <img
//             src={"project.image"}
//             alt={"project.title"}
//             className="w-full h-36 object-cover rounded-t-xl"
//             draggable={false}
//           />

//           <div className="p-4">
//             <h3 className="text-lg font-semibold mb-1">
//               {"project.title"}
//             </h3>
//             <p className="text-sm text-zinc-300">
//               {"project.description"}
//             </p>
//           </div>
//         </div>
//       </Html>
//     </group>
//   );
// }





// "use client";

// import { Html } from "@react-three/drei";
// import { useState } from "react";
// import * as THREE from "three";

// export interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// const planeGeometry = new THREE.PlaneGeometry(2.8, 1.7);
// const invisibleMaterial = new THREE.MeshBasicMaterial({
//   transparent: true,
//   opacity: 0,
// });

// export default function ProjectCard({ project }: ProjectCardProps) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <group>
//       {/* Pointer catcher */}
//       <mesh
//         geometry={planeGeometry}
//         material={invisibleMaterial}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       />

//       {/* HTML card */}
//       <Html
//         transform
//         center
//         distanceFactor={1.4}
//         position={[0, 0, 0.01]}
//         style={{ pointerEvents: "none" }}
//       >
//         <div
//           className={`
//             w-[260px] sm:w-[300px]
//             rounded-xl
//             bg-zinc-900/90
//             text-white
//             backdrop-blur-md
//             transition-all duration-300
//             ${hovered ? "ring-2 ring-blue-500 scale-105" : ""}
//           `}
//           style={{
//             userSelect: "none",
//             WebkitUserSelect: "none",
//           }}
//         >
//           <img
//             src={"project.image"}
//             alt={"project.title"}
//             className="w-full h-36 object-cover rounded-t-xl"
//             draggable={false}
//           />

//           <div className="p-4">
//             <h3 className="text-lg font-semibold mb-1">
//               {"project.title"}
//             </h3>
//             <p className="text-sm text-zinc-300">
//               {"project.description"}
//             </p>
//           </div>
//         </div>
//       </Html>
//     </group>
//   );
// }





import { Html } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(2.8, 1.7);
const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

export default function ProjectRoller({ project }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <group>
      <mesh
        geometry={geometry}
        material={material}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <Html
        transform
        center
        distanceFactor={1.4}
        position={[0, 0, 0.01]}
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{ userSelect: "none" }}
          className={`rounded-xl bg-zinc-900/90 text-white transition ${
            hovered ? "ring-2 ring-blue-500 scale-105" : ""
          }`}
        >
          <img src={"project.image"} className="rounded-t-xl" />
          <div className="p-4">
            <h3>{"project.title"}</h3>
            <p>{"project.description"}</p>
          </div>
        </div>
      </Html>
    </group>
  );
}
