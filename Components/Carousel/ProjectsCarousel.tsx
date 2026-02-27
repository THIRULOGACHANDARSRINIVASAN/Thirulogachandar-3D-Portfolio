// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// const ProjectsCarousel = () => {
//     const [activeIndex, setActiveIndex] = useState<number>(0);

//     const rotateLeft = (): void => {
//         setActiveIndex(
//             (prev) => (prev - 1 + projects.length) % projects.length
//         );
//     };

//     const rotateRight = (): void => {
//         setActiveIndex(
//             (prev) => (prev + 1) % projects.length
//         );
//     };

//     return (
//         <section className={styles.wrapper}>
//             {/* Left Arrow */}
//             <button
//                 className={styles.leftArrow}
//                 onClick={rotateLeft}
//                 aria-label="Previous project"
//             >
//                 ‹
//             </button>

//             {/* 3D Scene */}
//             <div className={styles.scene}>
//                 {projects.map((project, index: number) => {
//                     const offset: number = index - activeIndex;

//                     const isActive = offset === 0;

//                     return (
//                         <article
//                             key={project.id}
//                             className={styles.card}
//                             style={{
//                                 transform: `
//                   rotateY(${offset * 40}deg)
//                   translateZ(${isActive ? 350 : 250}px)
//                   scale(${isActive ? 1 : 0.85})
//                 `,
//                                 opacity: isActive ? 1 : 0.4,
//                                 pointerEvents: isActive ? "auto" : "none",
//                             }}
//                             onClick={() => console.log(project.title)}
//                         >
//                             <img
//                                 src={"/logo.png"}
//                                 alt={project.title}
//                                 className={styles.image}
//                             />

//                             <h3 className={styles.title}>{project.title}</h3>
//                             <p className={styles.description}>{project.description}</p>
//                         </article>
//                     );
//                 })}
//             </div>

//             {/* Right Arrow */}
//             <button
//                 className={styles.rightArrow}
//                 onClick={rotateRight}
//                 aria-label="Next project"
//             >
//                 ›
//             </button>
//         </section>
//     );
// };

// export default ProjectsCarousel;




// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// const ProjectsCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const total = projects.length;

//   const rotateRight = (): void => {
//     setActiveIndex((prev) => (prev + 1) % total);
//   };

//   const rotateLeft = (): void => {
//     setActiveIndex((prev) => (prev - 1 + total) % total);
//   };

//   const getCircularOffset = (
//     index: number,
//     active: number,
//     length: number
//   ): number => {
//     let offset = index - active;

//     if (offset > length / 2) offset -= length;
//     if (offset < -length / 2) offset += length;

//     return offset;
//   };

//   return (
//     <section className={styles.wrapper}>
//       <button className={styles.leftArrow} onClick={rotateLeft}>
//         ‹
//       </button>

//       <div className={styles.scene}>
//         {projects.map((project: Project, index: number) => {
//           const offset = getCircularOffset(index, activeIndex, total);

//           // Only render near cards (center, left, right)
//           if (Math.abs(offset) > 1) return null;

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{
//                 transform: `
//                   rotateY(${offset * 45}deg)
//                   translateX(${offset * 220}px)
//                   translateZ(${offset === 0 ? 360 : 240}px)
//                   scale(${offset === 0 ? 1 : 0.85})
//                 `,
//                 opacity: offset === 0 ? 1 : 0.45,
//                 zIndex: offset === 0 ? 3 : 2,
//               }}
//             >
//               <img src={project.image} alt={project.title} />
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//             </article>
//           );
//         })}
//       </div>

//       <button className={styles.rightArrow} onClick={rotateRight}>
//         ›
//       </button>
//     </section>
//   );
// };

// export default ProjectsCarousel;



// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const angleStep = 360 / projects.length;
//   const [rotation, setRotation] = useState<number>(0);

//   return (
//     <section className={styles.wrapper}>
//       <button
//         className={styles.leftArrow}
//         onClick={() => setRotation((r) => r + angleStep)}
//       >
//         ‹
//       </button>

//       <div
//         className={styles.scene}
//         style={{
//           transform: `rotateY(${rotation}deg)`,
//         }}
//       >
//         {projects.map((project, index) => {
//           const angle = index * angleStep;

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{
//                 transform: `
//                   rotateY(${angle}deg)
//                   translateZ(360px)
//                 `,
//               }}
//             >
//               <img src={project.image} alt={project.title} />
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//             </article>
//           );
//         })}
//       </div>

//       <button
//         className={styles.rightArrow}
//         onClick={() => setRotation((r) => r - angleStep)}
//       >
//         ›
//       </button>
//     </section>
//   );
// }





// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const angleStep = 360 / total;

//   const [rotation, setRotation] = useState<number>(0);

//   const rotateLeft = () => setRotation((r) => r + angleStep);
//   const rotateRight = () => setRotation((r) => r - angleStep);

//   return (
//     <section className={styles.wrapper}>
//       {/* LEFT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//         aria-label="Previous project"
//       >
//         ‹
//       </button>

//       {/* 3D SCENE */}
//       <div
//         className={styles.scene}
//         style={{ transform: `rotateY(${rotation}deg)` }}
//       >
//         {projects.map((project, index: number) => {
//           const angle = index * angleStep;

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{
//                 transform: `
//                   rotateY(${angle}deg)
//                   translateZ(380px)
//                 `,
//               }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>{project.title}</h3>
//               <p className={styles.description}>{project.description}</p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//         aria-label="Next project"
//       >
//         ›
//       </button>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import {projects} from "../../utils/portfolioData";


// /* =======================
//    Component
// ======================= */
// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const angleStep = 360 / total;
//   const [rotation, setRotation] = useState<number>(0);

//   const rotateLeft = () => setRotation((r) => r + angleStep);
//   const rotateRight = () => setRotation((r) => r - angleStep);

//   return (
//     <section className={styles.wrapper}>
//       {/* LEFT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//         aria-label="Previous project"
//       >
//         ‹
//       </button>

//       {/* 3D SCENE */}
//       <div
//         className={styles.scene}
//         style={{ transform: `rotateY(${rotation}deg)` }}
//       >
//         {projects.map((project, index) => {
//           const angle = index * angleStep;

//           return (
//             <article
//               key={project.id}
//               className={`${styles.card} border`}
//               style={{
//                 transform: `
//                   rotateY(${angle}deg)
//                   translateZ(var(--card-depth))
//                 `,
//               }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>{project.title}</h3>
//               <p className={styles.description}>{project.description}</p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//         aria-label="Next project"
//       >
//         ›
//       </button>
//     </section>
//   );
// }



// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const angleStep = 360 / total;

//   const [activeIndex, setActiveIndex] = useState(0);

//   const rotateRight = () =>
//     setActiveIndex((i) => (i + 1) % total);

//   const rotateLeft = () =>
//     setActiveIndex((i) => (i - 1 + total) % total);

//   const getCircularOffset = (
//     index: number,
//     active: number,
//     length: number
//   ) => {
//     let offset = index - active;

//     if (offset > length / 2) offset -= length;
//     if (offset < -length / 2) offset += length;

//     return offset;
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* LEFT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//       >
//         ‹
//       </button>

//       {/* SCENE */}
//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getCircularOffset(
//             index,
//             activeIndex,
//             total
//           );

//           // 🔥 LIMIT VISIBLE CARDS (ONLY 4)
//           if (offset < -2 || offset > 1) return null;

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{
//                 transform: `
//                   rotateY(${offset * 45}deg)
//                   translateZ(var(--card-depth))
//                 `,
//                 opacity: offset === 0 ? 1 : 0.45,
//                 zIndex: offset === 0 ? 3 : 2,
//               }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>
//                 {project.title}
//               </h3>
//               <p className={styles.description}>
//                 {project.description}
//               </p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//       >
//         ›
//       </button>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const [activeIndex, setActiveIndex] = useState(0);

//   const rotateRight = () =>
//     setActiveIndex((i) => (i + 1) % total);

//   const rotateLeft = () =>
//     setActiveIndex((i) => (i - 1 + total) % total);

//   const getOffset = (index: number) => {
//     let offset = index - activeIndex;

//     if (offset > total / 2) offset -= total;
//     if (offset < -total / 2) offset += total;

//     return offset;
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* LEFT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//       >
//         ‹
//       </button>

//       {/* SCENE */}
//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getOffset(index);

//           // ONLY 4 VISIBLE CARDS
//           if (offset < -1 || offset > 2) return null;

//           let transform = "";
//           let opacity = 0.45;
//           let zIndex = 1;

//           switch (offset) {
//             case 0: // FRONT
//               transform = `
//                 translateZ(220px)
//                 scale(1)
//               `;
//               opacity = 1;
//               zIndex = 4;
//               break;

//             case -1: // LEFT
//               transform = `
//                 translateX(-220px)
//                 rotateY(35deg)
//                 scale(0.85)
//               `;
//               break;

//             case 1: // RIGHT
//               transform = `
//                 translateX(220px)
//                 rotateY(-35deg)
//                 scale(0.85)
//               `;
//               break;

//             case 2: // BOTTOM
//               transform = `
//                 translateY(180px)
//                 translateZ(-80px)
//                 scale(0.75)
//               `;
//               opacity = 0.3;
//               break;
//           }

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{
//                 transform,
//                 opacity,
//                 zIndex,
//               }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>
//                 {project.title}
//               </h3>
//               <p className={styles.description}>
//                 {project.description}
//               </p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//       >
//         ›
//       </button>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";
// import { useRocketToast } from "@/hooks/useRocketToast";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const {showToast} = useRocketToast();
//   const rotateRight = () =>
//     setActiveIndex((i) => (i + 1) % total);

//   const rotateLeft = () =>
//     setActiveIndex((i) => (i - 1 + total) % total);

//   const getOffset = (index: number) => {
//     let offset = index - activeIndex;

//     if (offset > total / 2) offset -= total;
//     if (offset < -total / 2) offset += total;

//     return offset;
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* LEFT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//       >
//         ‹
//       </button>

//       {/* SCENE */}
//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getOffset(index);

//           // ONLY 4 VISIBLE CARDS
//           if (offset < -1 || offset > 2) return null;

//           let transform = "";
//           let opacity = 0.4;
//           let zIndex = 1;

//           switch (offset) {
//             case 0: // FRONT
//               transform = `
//                 translateZ(260px)
//                 scale(1)
//               `;
//               opacity = 1;
//               zIndex = 4;
//               break;

//             case -1: // LEFT
//               transform = `
//                 translateX(-240px)
//                 rotateY(35deg)
//                 scale(0.85)
//               `;
//               zIndex = 3;
//               break;

//             case 1: // RIGHT
//               transform = `
//                 translateX(240px)
//                 rotateY(-35deg)
//                 scale(0.85)
//               `;
//               zIndex = 3;
//               break;

//             case 2: // BEHIND
//               transform = `
//                 translateZ(-180px)
//                 scale(0.7)
//               `;
//               opacity = 0.25;
//               zIndex = 0;
//               break;
//           }

//           return (
//             <article
//               key={project.id}
//               className={`${styles.card} border`}
//               style={{ transform, opacity, zIndex }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>
//                 {project.title}
//               </h3>
//               <p className={styles.description}>
//                 {project.description}
//               </p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//       >
//         ›
//       </button>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";
// import { useRocketToast } from "@/hooks/useRocketToast";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const {showToast} = useRocketToast();
//   const rotateRight = () =>
//     setActiveIndex((i) => (i + 1) % total);

//   const rotateLeft = () =>
//     setActiveIndex((i) => (i - 1 + total) % total);

//   const getOffset = (index: number) => {
//     let offset = index - activeIndex;

//     if (offset > total / 2) offset -= total;
//     if (offset < -total / 2) offset += total;

//     return offset;
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* LEFT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//       >
//         ‹
//       </button>

//       {/* SCENE */}
//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getOffset(index);

//           // ONLY 4 VISIBLE CARDS
//           if (offset < -1 || offset > 2) return null;

//           let transform = "";
//           let opacity = 0.4;
//           let zIndex = 1;

//           switch (offset) {
//             case 0: // FRONT
//               transform = `
//                 translateZ(260px)
//                 scale(1)
//               `;
//               opacity = 1;
//               zIndex = 4;
//               break;

//             case -1: // LEFT
//               transform = `
//                 translateX(-240px)
//                 rotateY(35deg)
//                 scale(0.85)
//               `;
//               zIndex = 3;
//               break;

//             case 1: // RIGHT
//               transform = `
//                 translateX(240px)
//                 rotateY(-35deg)
//                 scale(0.85)
//               `;
//               zIndex = 3;
//               break;

//             case 2: // BEHIND
//               transform = `
//                 translateZ(-180px)
//                 scale(0.7)
//               `;
//               opacity = 0.25;
//               zIndex = 0;
//               break;
//           }

//           return (
//             <article
//               key={project.id}
//               className={`${styles.card} border`}
//               style={{ transform, opacity, zIndex }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>
//                 {project.title}
//               </h3>
//               <p className={styles.description}>
//                 {project.description}
//               </p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//       >
//         ›
//       </button>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [touchStartX, setTouchStartX] = useState<number | null>(null);

//   const rotateRight = () =>
//     setActiveIndex((i) => (i + 1) % total);

//   const rotateLeft = () =>
//     setActiveIndex((i) => (i - 1 + total) % total);

//   const getOffset = (index: number) => {
//     let offset = index - activeIndex;
//     if (offset > total / 2) offset -= total;
//     if (offset < -total / 2) offset += total;
//     return offset;
//   };

//   /* =======================
//      Swipe handlers
//   ======================= */
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX === null) return;

//     const endX = e.changedTouches[0].clientX;
//     const diff = touchStartX - endX;
//     const threshold = 40;

//     if (diff > threshold) rotateRight();
//     if (diff < -threshold) rotateLeft();

//     setTouchStartX(null);
//   };

//   return (
//     <section
//       className={styles.wrapper}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* LEFT ARROW (DESKTOP ONLY) */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//         aria-label="Previous project"
//       >
//         ‹
//       </button>

//       {/* SCENE */}
//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getOffset(index);

//           // ONLY 4 VISIBLE CARDS
//           if (offset < -1 || offset > 2) return null;

//           let transform = "";
//           let opacity = 0.4;
//           let zIndex = 1;

//           switch (offset) {
//             case 0:
//               transform = "translateZ(260px) scale(1)";
//               opacity = 1;
//               zIndex = 4;
//               break;

//             case -1:
//               transform =
//                 "translateX(-240px) rotateY(35deg) scale(0.85)";
//               zIndex = 3;
//               break;

//             case 1:
//               transform =
//                 "translateX(240px) rotateY(-35deg) scale(0.85)";
//               zIndex = 3;
//               break;

//             case 2:
//               transform = "translateZ(-180px) scale(0.7)";
//               opacity = 0.25;
//               zIndex = 0;
//               break;
//           }

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{ transform, opacity, zIndex }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>{project.title}</h3>
//               <p className={styles.description}>
//                 {project.description}
//               </p>
//             </article>
//           );
//         })}
//       </div>

//       {/* RIGHT ARROW (DESKTOP ONLY) */}
//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//         aria-label="Next project"
//       >
//         ›
//       </button>

//       {/* MOBILE HINT */}
//       <div className={styles.swipeHint}>SWIPE</div>
//     </section>
//   );
// }




// "use client";

// import { useState, useRef } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const [activeIndex, setActiveIndex] = useState(0);

//   const startX = useRef<number | null>(null);

//   const rotateRight = () =>
//     setActiveIndex((i) => (i + 1) % total);

//   const rotateLeft = () =>
//     setActiveIndex((i) => (i - 1 + total) % total);

//   const getOffset = (index: number) => {
//     let offset = index - activeIndex;
//     if (offset > total / 2) offset -= total;
//     if (offset < -total / 2) offset += total;
//     return offset;
//   };

//   /* =======================
//      Swipe handlers (FIXED)
//   ======================= */
//   const onTouchStart = (e: React.TouchEvent) => {
//     startX.current = e.touches[0].clientX;
//   };

//   const onTouchEnd = (e: React.TouchEvent) => {
//     if (startX.current === null) return;

//     const endX = e.changedTouches[0].clientX;
//     const delta = startX.current - endX;

//     if (Math.abs(delta) > 35) {
//       delta > 0 ? rotateRight() : rotateLeft();
//     }

//     startX.current = null;
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* SWIPE CAPTURE LAYER */}
//       <div
//         className={styles.swipeLayer}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//       />

//       {/* DESKTOP ARROWS */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={rotateLeft}
//       >
//         ‹
//       </button>

//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getOffset(index);
//           if (offset < -1 || offset > 2) return null;

//           let transform = "";
//           let opacity = 0.4;
//           let zIndex = 1;

//           if (offset === 0) {
//             transform = "translateZ(260px) scale(1)";
//             opacity = 1;
//             zIndex = 4;
//           } else if (offset === -1) {
//             transform =
//               "translateX(-240px) rotateY(35deg) scale(0.85)";
//             zIndex = 3;
//           } else if (offset === 1) {
//             transform =
//               "translateX(240px) rotateY(-35deg) scale(0.85)";
//             zIndex = 3;
//           } else {
//             transform = "translateZ(-180px) scale(0.7)";
//             opacity = 0.25;
//           }

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{ transform, opacity, zIndex }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>{project.title}</h3>
//               <p className={styles.description}>
//                 {project.description}
//               </p>
//             </article>
//           );
//         })}
//       </div>

//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={rotateRight}
//       >
//         ›
//       </button>

//       <div className={styles.swipeHint}>SWIPE</div>
//     </section>
//   );
// }



// "use client";

// import { useState, useRef } from "react";
// import styles from "./ProjectsCarousel.module.css";
// import { projects } from "../../utils/portfolioData";

// export default function ProjectsCarousel() {
//   const total = projects.length;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const startX = useRef<number | null>(null);

//   const rotateRight = () => setActiveIndex((i) => (i + 1) % total);
//   const rotateLeft = () => setActiveIndex((i) => (i - 1 + total) % total);

//   const getOffset = (index: number) => {
//     let offset = index - activeIndex;
//     if (offset > total / 2) offset -= total;
//     if (offset < -total / 2) offset += total;
//     return offset;
//   };

//   /* Swipe Logic */
//   const onTouchStart = (e: React.TouchEvent) => {
//     startX.current = e.touches[0].clientX;
//   };

//   const onTouchEnd = (e: React.TouchEvent) => {
//     if (startX.current === null) return;
//     const endX = e.changedTouches[0].clientX;
//     const delta = startX.current - endX;

//     // Threshold of 35px to trigger swipe
//     if (Math.abs(delta) > 35) {
//       delta > 0 ? rotateRight() : rotateLeft();
//     }
//     startX.current = null;
//   };

//   /* Desktop Click Logic for the Overlay */
//   const handleLayerClick = (e: React.MouseEvent) => {
//     // Only trigger if screen is wide (desktop) 
//     // and clicking the sides of the container
//     if (window.innerWidth > 768) {
//       const { clientX } = e;
//       const { innerWidth } = window;
//       if (clientX < innerWidth / 2) {
//         rotateLeft();
//       } else {
//         rotateRight();
//       }
//     }
//   };

//   return (
//     <section className={styles.wrapper}>
//       {/* SWIPE & CLICK LAYER 
//           Acts as the interaction controller 
//       */}
//       <div
//         className={styles.swipeLayer}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//         onClick={handleLayerClick}
//       />

//       {/* DESKTOP ARROWS - Hidden via CSS on mobile */}
//       <button
//         className={`${styles.arrow} ${styles.left}`}
//         onClick={(e) => { e.stopPropagation(); rotateLeft(); }}
//         aria-label="Previous Project"
//       >
//         ‹
//       </button>

//       <div className={styles.scene}>
//         {projects.map((project, index) => {
//           const offset = getOffset(index);
//           // Show active, one left, and two right for a balanced 3D feel
//           if (offset < -1 || offset > 2) return null;

//           let transform = "";
//           let opacity = 0.4;
//           let zIndex = 1;

//           if (offset === 0) {
//             transform = "translate(-50%, -50%) translateZ(260px) scale(1)";
//             opacity = 1;
//             zIndex = 10;
//           } else if (offset === -1) {
//             transform = "translate(-50%, -50%) translateX(-250px) rotateY(35deg) scale(0.85)";
//             zIndex = 5;
//           } else if (offset === 1) {
//             transform = "translate(-50%, -50%) translateX(250px) rotateY(-35deg) scale(0.85)";
//             zIndex = 5;
//           } else {
//             transform = "translate(-50%, -50%) translateZ(-180px) scale(0.7)";
//             opacity = 0.25;
//           }

//           return (
//             <article
//               key={project.id}
//               className={styles.card}
//               style={{ transform, opacity, zIndex }}
//             >
//               <img src={project.image} alt={project.title} className={styles.image} />
//               <h3 className={styles.title}>{project.title}</h3>
//               <p className={styles.description}>{project.description}</p>
//             </article>
//           );
//         })}
//       </div>

//       <button
//         className={`${styles.arrow} ${styles.right}`}
//         onClick={(e) => { e.stopPropagation(); rotateRight(); }}
//         aria-label="Next Project"
//       >
//         ›
//       </button>

//       <div className={styles.swipeHint}>SWIPE TO EXPLORE</div>
//     </section>
//   );
// }





"use client";

import { useState, useRef } from "react";
import styles from "./ProjectsCarousel.module.css";
import { projects } from "../../utils/portfolioData";

export default function ProjectsCarousel() {
  const total = projects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const rotateRight = () => setActiveIndex((i) => (i + 1) % total);
  const rotateLeft = () => setActiveIndex((i) => (i - 1 + total) % total);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  /* Swipe Logic */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = startX.current - endX;

    if (Math.abs(delta) > 35) {
      delta > 0 ? rotateRight() : rotateLeft();
    }
    startX.current = null;
  };

  /* Unified Click Logic */
  const handleInteractionClick = (e: React.MouseEvent) => {
    // We calculate if the click was on the left or right half of the screen
    const { clientX } = e;
    const { innerWidth } = window;
    if (clientX < innerWidth / 2) {
      rotateLeft();
    } else {
      rotateRight();
    }
  };

  return (
    <section className={styles.wrapper}>
      {/* This is the invisible controller on top. 
        The cursor:pointer is applied here.
      */}
      <div
        className={styles.interactionLayer}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={handleInteractionClick}
      />

      {/* Navigation Arrows */}
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={(e) => { e.stopPropagation(); rotateLeft(); }}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className={styles.scene}>
        {projects.map((project, index) => {
          const offset = getOffset(index);
          // Standard visibility logic
          if (offset < -1 || offset > 2) return null;

          let transform = "";
          let opacity = 0.4;
          let zIndex = 1;

          if (offset === 0) {
            transform = "translate(-50%, -50%) translateZ(260px) scale(1)";
            opacity = 1;
            zIndex = 10;
          } else if (offset === -1) {
            transform = "translate(-50%, -50%) translateX(-250px) rotateY(35deg) scale(0.85)";
            zIndex = 5;
          } else if (offset === 1) {
            transform = "translate(-50%, -50%) translateX(250px) rotateY(-35deg) scale(0.85)";
            zIndex = 5;
          } else {
            transform = "translate(-50%, -50%) translateZ(-180px) scale(0.7)";
            opacity = 0.25;
          }

          return (
            <article
              key={project.id}
              className={styles.card}
              style={{ transform, opacity, zIndex }}
            >
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </article>
          );
        })}
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={(e) => { e.stopPropagation(); rotateRight(); }}
        aria-label="Next"
      >
        ›
      </button>

      <div className={styles.swipeHint}>SWIPE TO EXPLORE</div>
    </section>
  );
}