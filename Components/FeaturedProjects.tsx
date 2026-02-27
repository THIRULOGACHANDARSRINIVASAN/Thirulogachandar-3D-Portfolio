// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description:
//       "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description:
//       "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description:
//       "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description:
//       "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// export default function FeaturedProjects() {
//   const [active, setActive] = useState(0);
//   const lockRef = useRef(false);

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 600);
//   };

//   useEffect(() => {
//     const onWheel = (e: WheelEvent) => {
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     window.addEventListener("wheel", onWheel, { passive: true });
//     return () => window.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section className="hidden lg:flex h-[80vh] w-full flex-col items-center justify-center bg-[#0b061a] text-white overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences built with
//           Next.js, Three.js, and Tailwind CSS.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//         {projects.map((project, index) => {
//           const diff =
//             (index - active + projects.length) % projects.length;

//           // Only render left, center, right
//           if (diff > 1 && diff < projects.length - 1) return null;

//           const position =
//             diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               position={position}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// type CardProps = {
//   project: Project;
//   position: "left" | "center" | "right";
// };

// function ProjectCard({ project, position }: CardProps) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       {/* Image */}
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />

//       {/* Content */}
//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4 border-white">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700); // match animation duration
//   };

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault(); // ⛔ stop page scroll

//       if (e.deltaY > 0) rotate(1);
//       else rotate(-1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });

//     return () => {
//       section.removeEventListener("wheel", onWheel);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="hidden lg:flex h-[80vh] w-full flex-col items-center justify-center bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* Heading */}
//       <div className="text-center mb-12 pointer-events-none">
//         <h2 className="text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences built with
//           Next.js, Three.js, and Tailwind CSS.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//         {projects.map((project, index) => {
//           const diff =
//             (index - active + projects.length) % projects.length;

//           // Only render left, center, right
//           if (diff > 1 && diff < projects.length - 1) return null;

//           const position =
//             diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               position={position}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// type CardProps = {
//   project: Project;
//   position: "left" | "center" | "right";
// };

// function ProjectCard({ project, position }: CardProps) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />

//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   // Desktop-only wheel behavior
//   useEffect(() => {
//     if (window.innerWidth < 1024) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       e.deltaY > 0 ? rotate(1) : rotate(-1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-auto lg:h-[80vh] w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* Heading */}
//       <div className="text-center px-4 pt-16 lg:pt-0 mb-12">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences built with
//           Next.js, Three.js, and Tailwind CSS.
//         </p>
//       </div>

//       {/* MOBILE & TABLET */}
//       <div className="lg:hidden px-4 pb-16 grid gap-6">
//         {projects.map((project) => (
//           <MobileCard key={project.id} project={project} />
//         ))}
//       </div>

//       {/* DESKTOP CAROUSEL */}
//       <div className="hidden lg:flex relative w-full max-w-6xl h-full items-center justify-center mx-auto">
//         {projects.map((project, index) => {
//           const diff =
//             (index - active + projects.length) % projects.length;

//           if (diff > 1 && diff < projects.length - 1) return null;

//           const position =
//             diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               position={position}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// /* ---------------- Desktop Card ---------------- */

// function ProjectCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <CardContent project={project} />
//     </div>
//   );
// }

// /* ---------------- Mobile Card ---------------- */

// function MobileCard({ project }: { project: Project }) {
//   return (
//     <div className="w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
//       <CardContent project={project} />
//     </div>
//   );
// }

// /* ---------------- Shared Content ---------------- */

// function CardContent({ project }: { project: Project }) {
//   return (
//     <>
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[160px] w-full object-cover"
//       />

//       <div className="p-5 flex flex-col">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="mt-auto w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* -------------------- TYPES -------------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* -------------------- DATA -------------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// /* -------------------- MAIN COMPONENT -------------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);

//   /* ---------- Desktop rotation ---------- */

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   /* ---------- Desktop wheel handling ---------- */

//   useEffect(() => {
//     if (window.innerWidth < 1024) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       e.deltaY > 0 ? rotate(1) : rotate(-1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* -------- Heading -------- */}
//       <div className="text-center px-4 pt-16 mb-12">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences built with
//           Next.js, Three.js, and Tailwind CSS.
//         </p>
//       </div>

//       {/* -------- Mobile / Tablet (Cylindrical) -------- */}
//       <div className="lg:hidden px-4 pb-20">
//         <MobileCylinder projects={projects} />
//       </div>

//       {/* -------- Desktop Carousel -------- */}
//       <div className="hidden lg:flex relative h-[80vh] max-w-6xl mx-auto items-center justify-center">
//         {projects.map((project, index) => {
//           const diff =
//             (index - active + projects.length) % projects.length;

//           if (diff > 1 && diff < projects.length - 1) return null;

//           const position =
//             diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <DesktopCard
//               key={project.id}
//               project={project}
//               position={position}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// /* ======================================================
//    =============== MOBILE CYLINDER ======================
//    ====================================================== */

// function MobileCylinder({ projects }: { projects: Project[] }) {
//   const [active, setActive] = useState(0);
//   const startY = useRef(0);

//   const radius = 260;
//   const step = 30;

//   const onTouchStart = (e: React.TouchEvent) => {
//     startY.current = e.touches[0].clientY;
//   };

//   const onTouchEnd = (e: React.TouchEvent) => {
//     const delta = startY.current - e.changedTouches[0].clientY;
//     if (Math.abs(delta) < 40) return;

//     setActive((prev) =>
//       delta > 0
//         ? (prev + 1) % projects.length
//         : (prev - 1 + projects.length) % projects.length
//     );
//   };

//   return (
//     <div
//       className="relative h-[420px] w-full"
//       style={{ perspective: "1000px" }}
//       onTouchStart={onTouchStart}
//       onTouchEnd={onTouchEnd}
//     >
//       {projects.map((project, index) => {
//         const diff =
//           (index - active + projects.length) % projects.length;

//         if (diff > 2 && diff < projects.length - 2) return null;

//         const angle =
//           diff === 0
//             ? 0
//             : diff === 1
//             ? step
//             : diff === projects.length - 1
//             ? -step
//             : diff === 2
//             ? step * 2
//             : -step * 2;

//         return (
//           <div
//             key={project.id}
//             className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
//             style={{
//               transform: `rotateX(${angle}deg) translateZ(${radius}px)`,
//               opacity: Math.abs(angle) > 45 ? 0.35 : 1,
//             }}
//           >
//             <CardContent project={project} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* ======================================================
//    =============== DESKTOP CARD =========================
//    ====================================================== */

// function DesktopCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <CardContent project={project} />
//     </div>
//   );
// }

// /* ======================================================
//    =============== SHARED CARD CONTENT ==================
//    ====================================================== */

// function CardContent({ project }: { project: Project }) {
//   return (
//     <div className="overflow-hidden rounded-3xl bg-white/5">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover"
//       />

//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- TYPES ---------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------------- DATA ---------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// /* ================= MAIN ================= */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);

//   /* -------- Desktop wheel rotation -------- */

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   useEffect(() => {
//     if (window.innerWidth < 1024) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       e.deltaY > 0 ? rotate(1) : rotate(-1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* -------- Heading -------- */}
//       <div className="text-center px-4 pt-16 mb-12">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences built with
//           Next.js, Three.js, and Tailwind CSS.
//         </p>
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="lg:hidden pb-16">
//         <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="snap-center shrink-0 w-full px-6"
//             >
//               <MobileCard project={project} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= DESKTOP ================= */}
//       <div className="hidden lg:flex relative h-[80vh] max-w-6xl mx-auto items-center justify-center">
//         {projects.map((project, index) => {
//           const diff =
//             (index - active + projects.length) % projects.length;

//           if (diff > 1 && diff < projects.length - 1) return null;

//           const position =
//             diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <DesktopCard
//               key={project.id}
//               project={project}
//               position={position}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// /* ================= DESKTOP CARD ================= */

// function DesktopCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <CardContent project={project} />
//     </div>
//   );
// }

// /* ================= MOBILE CARD ================= */

// function MobileCard({ project }: { project: Project }) {
//   return (
//     <div className="w-full max-w-md mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
//       <CardContent project={project} />
//     </div>
//   );
// }

// /* ================= SHARED CONTENT ================= */

// function CardContent({ project }: { project: Project }) {
//   return (
//     <>
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[180px] w-full object-cover"
//       />

//       <div className="p-5 flex flex-col">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="mt-auto w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- TYPES ---------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------------- DATA ---------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "High-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive charts.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// /* ---------------- COMPONENT ---------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);

//   /* ---------- Wheel carousel (tablet + desktop) ---------- */
//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       if (window.innerWidth < 768) return; // 🚫 mobile excluded
//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* ---------- Heading ---------- */}
//       <div className="text-center py-16 px-6">
//         <h2 className="text-4xl md:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
//           A curated collection of immersive digital experiences.
//         </p>
//       </div>

//       {/* ================= MOBILE: HORIZONTAL SCROLL ================= */}
//       <div className="md:hidden pb-16">
//         <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="snap-center shrink-0 w-full px-6"
//             >
//               <MobileCard project={project} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= TABLET + DESKTOP: WHEEL ================= */}
//       <div className="hidden md:flex h-[80vh] items-center justify-center">
//         <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//           {projects.map((project, index) => {
//             const diff =
//               (index - active + projects.length) % projects.length;

//             if (diff > 1 && diff < projects.length - 1) return null;

//             const position =
//               diff === 0 ? "center" : diff === 1 ? "right" : "left";

//             return (
//               <WheelCard
//                 key={project.id}
//                 project={project}
//                 position={position}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- MOBILE CARD ---------------- */

// function MobileCard({ project }: { project: Project }) {
//   return (
//     <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-52 w-full object-cover"
//       />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-2">
//           {project.description}
//         </p>
//         <div className="flex gap-2 flex-wrap mt-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[11px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- WHEEL CARD (TABLET + DESKTOP) ---------------- */

// function WheelCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />

//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Project ↗
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       // 🚫 Do NOT hijack scroll on mobile/tablet
//       if (window.innerWidth < 1024) return;

//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="flex h-auto lg:h-[80vh] w-full flex-col items-center justify-center bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* Heading */}
//       <div className="text-center mb-10 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center">
//         {projects.map((project, index) => {
//           const diff =
//             (index - active + projects.length) % projects.length;

//           // MOBILE → render only active card
//           if (window.innerWidth < 1024 && diff !== 0) return null;

//           // DESKTOP → only left, center, right
//           if (window.innerWidth >= 1024 && diff > 1 && diff < projects.length - 1)
//             return null;

//           const position =
//             diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               position={position}
//               isMobile={window.innerWidth < 1024}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// type CardProps = {
//   project: Project;
//   position: "left" | "center" | "right";
//   isMobile: boolean;
// };

// function ProjectCard({ project, position, isMobile }: CardProps) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         // 📱 MOBILE → always centered
//         isMobile && "translate-x-0 scale-100 opacity-100 z-30",

//         // 💻 DESKTOP positions
//         !isMobile &&
//           position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         !isMobile &&
//           position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         !isMobile &&
//           position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />

//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

//         <p className="text-xs text-gray-400 mb-3 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap mb-4">
//           {project.tech.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }







// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- TYPES ---------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------------- DATA ---------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// /* ---------------- COMPONENT ---------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);
//   const [isDesktop, setIsDesktop] = useState(false);

//   /* ---------- Detect breakpoint safely ---------- */
//   useEffect(() => {
//     const media = window.matchMedia("(min-width: 1024px)");

//     const update = () => setIsDesktop(media.matches);
//     update();

//     media.addEventListener("change", update);
//     return () => media.removeEventListener("change", update);
//   }, []);

//   /* ---------- Wheel carousel (desktop only) ---------- */
//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   useEffect(() => {
//     if (!isDesktop) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, [isDesktop]);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* Heading */}
//       <div className="text-center py-16 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences.
//         </p>
//       </div>

//       {/* ================= MOBILE / TABLET ================= */}
//       {!isDesktop && (
//         <div className="pb-16">
//           <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="snap-center shrink-0 w-full px-6"
//               >
//                 <MobileCard project={project} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ================= DESKTOP ================= */}
//       {isDesktop && (
//         <div className="h-[80vh] flex items-center justify-center">
//           <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//             {projects.map((project, index) => {
//               const diff =
//                 (index - active + projects.length) % projects.length;

//               if (diff > 1 && diff < projects.length - 1) return null;

//               const position =
//                 diff === 0 ? "center" : diff === 1 ? "right" : "left";

//               return (
//                 <WheelCard
//                   key={project.id}
//                   project={project}
//                   position={position}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// /* ---------------- MOBILE CARD ---------------- */

// function MobileCard({ project }: { project: Project }) {
//   return (
//     <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-52 w-full object-cover"
//       />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-2">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- DESKTOP CARD ---------------- */

// function WheelCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />

//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <p className="text-xs text-gray-400 mb-3 flex-grow">
//           {project.description}
//         </p>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- TYPES ---------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------------- DATA ---------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// type ViewMode = "mobile" | "tablet" | "desktop";

// /* ---------------- COMPONENT ---------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);
//   const [view, setView] = useState<ViewMode>("mobile");

//   /* ---------- Breakpoint detection ---------- */
//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth >= 1024) setView("desktop");
//       else if (window.innerWidth >= 768) setView("tablet");
//       else setView("mobile");
//     };

//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   /* ---------- Desktop wheel ---------- */
//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => (lockRef.current = false), 700);
//   };

//   useEffect(() => {
//     if (view !== "desktop") return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, [view]);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* ---------- Heading ---------- */}
//       <div className="text-center py-16 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences.
//         </p>
//       </div>

//       {/* ================= MOBILE ================= */}
//       {view === "mobile" && (
//         <div className="pb-16">
//           <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="snap-center shrink-0 w-full px-6"
//               >
//                 <MobileCard project={project} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ================= TABLET ================= */}
//       {view === "tablet" && (
//         <div className="pb-20 flex justify-center">
//           <TabletCard project={projects[active]} />
//         </div>
//       )}

//       {/* ================= DESKTOP ================= */}
//       {view === "desktop" && (
//         <div className="h-[80vh] flex items-center justify-center">
//           <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//             {projects.map((project, index) => {
//               const diff =
//                 (index - active + projects.length) % projects.length;

//               if (diff > 1 && diff < projects.length - 1) return null;

//               const position =
//                 diff === 0 ? "center" : diff === 1 ? "right" : "left";

//               return (
//                 <WheelCard
//                   key={project.id}
//                   project={project}
//                   position={position}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// /* ---------------- MOBILE CARD ---------------- */

// function MobileCard({ project }: { project: Project }) {
//   return (
//     <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
//       <img src={project.image} className="h-52 w-full object-cover" />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-2">{project.description}</p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- TABLET CARD ---------------- */

// function TabletCard({ project }: { project: Project }) {
//   return (
//     <div className="w-[380px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
//       <img src={project.image} className="h-56 w-full object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-3">{project.description}</p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- DESKTOP CARD ---------------- */

// function WheelCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- TYPES ---------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------------- DATA ---------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// type ViewMode = "mobile" | "tablet" | "desktop";

// /* ---------------- COMPONENT ---------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);
//   const [active, setActive] = useState(0);
//   const [view, setView] = useState<ViewMode>("mobile");

//   /* ---------- Breakpoints ---------- */
//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth >= 1024) setView("desktop");
//       else if (window.innerWidth >= 768) setView("tablet");
//       else setView("mobile");
//     };

//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   /* ---------- Wheel rotation (tablet + desktop) ---------- */
//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   useEffect(() => {
//     if (view === "mobile") return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, [view]);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* ---------- Heading ---------- */}
//       <div className="text-center py-16 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
//           Explore a curated selection of immersive web experiences.
//         </p>
//       </div>

//       {/* ================= MOBILE ================= */}
//       {view === "mobile" && (
//         <div className="pb-16">
//           <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="snap-center shrink-0 w-full px-6"
//               >
//                 <MobileCard project={project} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ================= TABLET ================= */}
//       {view === "tablet" && (
//         <div className="pb-20 flex justify-center">
//           <TabletCard project={projects[active]} />
//         </div>
//       )}

//       {/* ================= DESKTOP ================= */}
//       {view === "desktop" && (
//         <div className="h-[80vh] flex items-center justify-center">
//           <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//             {projects.map((project, index) => {
//               const diff =
//                 (index - active + projects.length) % projects.length;

//               if (diff > 1 && diff < projects.length - 1) return null;

//               const position =
//                 diff === 0 ? "center" : diff === 1 ? "right" : "left";

//               return (
//                 <WheelCard
//                   key={project.id}
//                   project={project}
//                   position={position}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// /* ---------------- MOBILE CARD ---------------- */

// function MobileCard({ project }: { project: Project }) {
//   return (
//     <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
//       <img src={project.image} className="h-52 w-full object-cover" />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-2">{project.description}</p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- TABLET CARD ---------------- */

// function TabletCard({ project }: { project: Project }) {
//   return (
//     <div className="w-[420px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-700">
//       <img src={project.image} className="h-56 w-full object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-3">{project.description}</p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- DESKTOP CARD ---------------- */

// function WheelCard({
//   project,
//   position,
// }: {
//   project: Project;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",

//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",

//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",

//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- DATA ---------------- */

// const projects = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront.",
//     image: "/projects/nexus.jpg",
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure Web3 crypto wallet.",
//     image: "/projects/wallet.jpg",
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Analytics-driven dashboard.",
//     image: "/projects/dashboard.jpg",
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content platform.",
//     image: "/projects/ai.jpg",
//   },
// ];

// type View = "mobile" | "tablet" | "desktop";

// /* ---------------- COMPONENT ---------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);

//   const [active, setActive] = useState(0);
//   const [view, setView] = useState<View>("mobile");

//   /* ---------- Breakpoints ---------- */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setView("desktop");
//       else if (window.innerWidth >= 768) setView("tablet");
//       else setView("mobile");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ---------- Rotate ---------- */
//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setActive((prev) => (prev + dir + projects.length) % projects.length);

//     setTimeout(() => {
//       lockRef.current = false;
//     }, 700);
//   };

//   /* ---------- Wheel (DESKTOP ONLY) ---------- */
//   useEffect(() => {
//     if (view !== "desktop") return;

//     const el = sectionRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, [view]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-[#0b061a] text-white overflow-hidden"
//     >
//       {/* ---------- Header ---------- */}
//       <div className="text-center py-16">
//         <h2 className="text-4xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-2 text-gray-400 text-sm">
//           Scroll or navigate to explore my work
//         </p>
//       </div>

//       {/* ---------- MOBILE + TABLET ---------- */}
//       {(view === "mobile" || view === "tablet") && (
//         <div className="relative flex justify-center pb-20">
//           <ArrowButton left onClick={() => rotate(-1)} />
//           <ArrowButton onClick={() => rotate(1)} />

//           <div className="w-[90%] max-w-[420px]">
//             <Card project={projects[active]} />
//           </div>
//         </div>
//       )}

//       {/* ---------- DESKTOP (WHEEL) ---------- */}
//       {view === "desktop" && (
//         <div className="h-[80vh] flex items-center justify-center">
//           <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
//             {projects.map((project, index) => {
//               const diff =
//                 (index - active + projects.length) % projects.length;

//               if (diff > 1 && diff < projects.length - 1) return null;

//               const pos =
//                 diff === 0 ? "center" : diff === 1 ? "right" : "left";

//               return (
//                 <WheelCard
//                   key={project.id}
//                   project={project}
//                   position={pos}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// /* ---------------- ARROW BUTTON ---------------- */

// function ArrowButton({
//   left,
//   onClick,
// }: {
//   left?: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={clsx(
//         "absolute top-1/2 -translate-y-1/2 z-20",
//         "bg-white/10 backdrop-blur-md border border-white/20",
//         "w-12 h-12 rounded-full flex items-center justify-center",
//         "hover:bg-white/20 transition",
//         left ? "left-4" : "right-4"
//       )}
//     >
//       {left ? "←" : "→"}
//     </button>
//   );
// }

// /* ---------------- CARD ---------------- */

// function Card({ project }: { project: any }) {
//   return (
//     <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-700">
//       <img src={project.image} className="h-56 w-full object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-400 mt-2">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- DESKTOP WHEEL CARD ---------------- */

// function WheelCard({
//   project,
//   position,
// }: {
//   project: any;
//   position: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
//         position === "center" &&
//           "z-30 scale-100 opacity-100 translate-x-0",
//         position === "left" &&
//           "-translate-x-[300px] scale-90 opacity-40 blur-sm z-10",
//         position === "right" &&
//           "translate-x-[300px] scale-90 opacity-40 blur-sm z-10"
//       )}
//     >
//       <img
//         src={project.image}
//         className="h-[150px] w-full object-cover rounded-t-3xl"
//       />
//       <div className="p-5">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------------- TYPES ---------------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------------- DATA ---------------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// /* ---------------- COMPONENT ---------------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);

//   const [active, setActive] = useState(0);
//   const [direction, setDirection] = useState(1);

//   /* ---------- ROTATION ---------- */

//   const rotate = (dir: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setDirection(dir);
//     setActive((p) => (p + dir + projects.length) % projects.length);

//     setTimeout(() => (lockRef.current = false), 600);
//   };

//   /* ---------- DESKTOP WHEEL ---------- */

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       if (window.innerWidth < 1024) return;

//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white py-24 overflow-hidden"
//     >
//       {/* ---------- HEADING ---------- */}
//       <div className="text-center mb-16 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
//           Curated immersive experiences built with Next.js & modern UI systems.
//         </p>
//       </div>

//       {/* ---------- MOBILE + TABLET ---------- */}
//       <div className="lg:hidden relative flex items-center justify-center px-4">
//         <Arrow left onClick={() => rotate(-1)} />
//         <Arrow onClick={() => rotate(1)} />

//         <div className="relative w-full max-w-[420px] h-[420px]">
//           <div
//             key={active}
//             className="absolute inset-0 transition-all duration-500 ease-out"
//             style={{
//               opacity: 0,
//               transform: `translateX(${direction > 0 ? "40px" : "-40px"}) scale(0.96)`,
//               animation: "cardIn 0.5s ease-out forwards",
//             }}
//           >
//             <Card project={projects[active]} />
//           </div>
//         </div>
//       </div>

//       {/* ---------- DESKTOP CAROUSEL ---------- */}
//       <div className="hidden lg:flex relative h-[420px] max-w-6xl mx-auto items-center justify-center">
//         {projects.map((project, i) => {
//           const diff = (i - active + projects.length) % projects.length;
//           if (diff > 1 && diff < projects.length - 1) return null;

//           const pos = diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return <DesktopCard key={project.id} project={project} pos={pos} />;
//         })}
//       </div>
//     </section>
//   );
// }

// /* ---------------- DESKTOP CARD ---------------- */

// function DesktopCard({
//   project,
//   pos,
// }: {
//   project: Project;
//   pos: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
//         pos === "center" && "z-30 scale-100 opacity-100",
//         pos === "left" && "-translate-x-[300px] scale-90 opacity-40 blur-sm",
//         pos === "right" && "translate-x-[300px] scale-90 opacity-40 blur-sm"
//       )}
//     >
//       <Card project={project} />
//     </div>
//   );
// }

// /* ---------------- SHARED CARD ---------------- */

// function Card({ project }: { project: Project }) {
//   return (
//     <div className="w-full h-full rounded-3xl overflow-hidden">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover"
//       />
//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
//         <p className="text-xs text-gray-400 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap my-4">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------- ARROWS ---------------- */

// function Arrow({
//   left,
//   onClick,
// }: {
//   left?: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={clsx(
//         "absolute z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20",
//         "flex items-center justify-center transition",
//         left ? "left-0" : "right-0"
//       )}
//     >
//       {left ? "‹" : "›"}
//     </button>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";

// /* ---------- TYPES ---------- */

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
// };

// /* ---------- DATA ---------- */

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Nexus E-Commerce",
//     description: "A high-performance 3D storefront with real-time inventory.",
//     image: "/projects/nexus.jpg",
//     tech: ["Next.js", "Three.js"],
//   },
//   {
//     id: 2,
//     title: "Ether Wallet",
//     description: "Secure crypto wallet interface with Web3 integrations.",
//     image: "/projects/wallet.jpg",
//     tech: ["Next.js", "Web3"],
//   },
//   {
//     id: 3,
//     title: "Unity Dashboard",
//     description: "Data-driven dashboard with interactive visualizations.",
//     image: "/projects/dashboard.jpg",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 4,
//     title: "AI Studio",
//     description: "AI-powered content generation and workflow platform.",
//     image: "/projects/ai.jpg",
//     tech: ["Next.js", "AI"],
//   },
// ];

// /* ---------- COMPONENT ---------- */

// export default function FeaturedProjects() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const lockRef = useRef(false);

//   const [active, setActive] = useState(0);
//   const [direction, setDirection] = useState<1 | -1>(1);

//   /* ---------- ROTATE ---------- */

//   const rotate = (dir: 1 | -1) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     setDirection(dir);
//     setActive((p) => (p + dir + projects.length) % projects.length);

//     setTimeout(() => (lockRef.current = false), 500);
//   };

//   /* ---------- DESKTOP WHEEL ---------- */

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const onWheel = (e: WheelEvent) => {
//       if (window.innerWidth < 1024) return;

//       e.preventDefault();
//       rotate(e.deltaY > 0 ? 1 : -1);
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#0b061a] text-white py-24 overflow-hidden"
//     >
//       {/* ---------- HEADING ---------- */}
//       <div className="text-center mb-14 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold">
//           Featured <span className="text-purple-500 italic">Projects</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
//           Curated immersive experiences built with modern web technologies.
//         </p>
//       </div>

//       {/* =====================================================
//           MOBILE + TABLET (single card + arrows)
//       ===================================================== */}
//       <div className="lg:hidden relative flex items-center justify-center px-4">
//         <Arrow left onClick={() => rotate(-1)} />
//         <Arrow onClick={() => rotate(1)} />

//         <div className="relative w-full max-w-[380px]">
//           <div
//             key={active}
//             className={clsx(
//               "transition-all duration-500 ease-out",
//               direction === 1
//                 ? "translate-x-6 opacity-0"
//                 : "-translate-x-6 opacity-0",
//               "animate-in"
//             )}
//           >
//             <div className="translate-x-0 opacity-100 transition-all duration-500">
//               <Card project={projects[active]} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           DESKTOP (wheel cylindrical carousel)
//       ===================================================== */}
//       <div className="hidden lg:flex relative h-[420px] max-w-6xl mx-auto items-center justify-center">
//         {projects.map((project, i) => {
//           const diff = (i - active + projects.length) % projects.length;
//           if (diff > 1 && diff < projects.length - 1) return null;

//           const pos = diff === 0 ? "center" : diff === 1 ? "right" : "left";

//           return (
//             <DesktopCard key={project.id} project={project} pos={pos} />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// /* ---------- DESKTOP CARD ---------- */

// function DesktopCard({
//   project,
//   pos,
// }: {
//   project: Project;
//   pos: "left" | "center" | "right";
// }) {
//   return (
//     <div
//       className={clsx(
//         "absolute transition-all duration-700 ease-out",
//         "w-[260px] h-[360px] rounded-3xl",
//         "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
//         pos === "center" && "z-30 scale-100 opacity-100",
//         pos === "left" && "-translate-x-[300px] scale-90 opacity-40 blur-sm",
//         pos === "right" && "translate-x-[300px] scale-90 opacity-40 blur-sm"
//       )}
//     >
//       <Card project={project} />
//     </div>
//   );
// }

// /* ---------- SHARED CARD ---------- */

// function Card({ project }: { project: Project }) {
//   return (
//     <div className="w-full h-[360px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-[150px] w-full object-cover"
//       />
//       <div className="p-5 flex flex-col h-[210px]">
//         <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
//         <p className="text-xs text-gray-400 flex-grow">
//           {project.description}
//         </p>

//         <div className="flex gap-2 flex-wrap my-4">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
//           View Details ↗
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------- ARROWS ---------- */

// function Arrow({
//   left,
//   onClick,
// }: {
//   left?: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={clsx(
//         "absolute z-20 w-10 h-10 rounded-full",
//         "bg-white/10 hover:bg-white/20 transition",
//         "flex items-center justify-center text-xl",
//         left ? "left-2" : "right-2"
//       )}
//     >
//       {left ? "‹" : "›"}
//     </button>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

/* ---------- TYPES ---------- */
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
};

/* ---------- DATA ---------- */
const projects: Project[] = [
  {
    id: 1,
    title: "Nexus E-Commerce",
    description: "A high-performance 3D storefront with real-time inventory.",
    image: "/projects/nexus.jpg",
    tech: ["Next.js", "Three.js"],
  },
  {
    id: 2,
    title: "Ether Wallet",
    description: "Secure crypto wallet interface with Web3 integrations.",
    image: "/projects/wallet.jpg",
    tech: ["Next.js", "Web3"],
  },
  {
    id: 3,
    title: "Unity Dashboard",
    description: "Data-driven dashboard with interactive visualizations.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "Tailwind"],
  },
  {
    id: 4,
    title: "AI Studio",
    description: "AI-powered content generation and workflow platform.",
    image: "/projects/ai.jpg",
    tech: ["Next.js", "AI"],
  },
];

/* ---------- COMPONENT ---------- */
export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const rotate = (dir: 1 | -1) => {
    if (lockRef.current) return;
    lockRef.current = true;

    setDirection(dir);
    setActive((p) => (p + dir + projects.length) % projects.length);

    setTimeout(() => (lockRef.current = false), 450);
  };

  /* ---------- DESKTOP WHEEL ---------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      e.preventDefault();
      rotate(e.deltaY > 0 ? 1 : -1);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0b061a] text-white py-24 overflow-hidden"
    >
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Featured <span className="text-purple-500 italic">Projects</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
          Curated immersive experiences built with modern web technologies.
        </p>
      </div>

      {/* =====================================================
          MOBILE + TABLET (single card + arrows)
      ===================================================== */}
      <div className="lg:hidden relative flex items-center justify-center px-4 ">
        <Arrow left onClick={() => rotate(-1)} />
        <Arrow onClick={() => rotate(1)} />

        <div className="relative w-full max-w-[380px] overflow-hidden ">
          <div
            key={active}
            className={clsx(
              "transition-transform duration-500 ease-out " ,
            //   direction === 1 ? "translate-x-8" : "-translate-x-8"
            )}
          >
            <div className="translate-x-0">
              <Card project={projects[active]} />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP (wheel cylindrical carousel)
      ===================================================== */}
      <div className="hidden lg:flex relative h-[420px] max-w-6xl mx-auto items-center justify-center">
        {projects.map((project, i) => {
          const diff = (i - active + projects.length) % projects.length;
          if (diff > 1 && diff < projects.length - 1) return null;

          const pos = diff === 0 ? "center" : diff === 1 ? "right" : "left";

          return (
            <DesktopCard key={project.id} project={project} pos={pos} />
          );
        })}
      </div>
    </section>
  );
}

/* ---------- DESKTOP CARD ---------- */
function DesktopCard({
  project,
  pos,
}: {
  project: Project;
  pos: "left" | "center" | "right";
}) {
  return (
    <div
      className={clsx(
        "absolute transition-all duration-700 ease-out",
        "w-[260px] h-[360px] rounded-3xl",
        "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
        pos === "center" && "z-30 scale-100 opacity-100",
        pos === "left" && "-translate-x-[300px] scale-90 opacity-100 blur-[1.5px]",
        pos === "right" && "translate-x-[300px] scale-90 opacity-100 blur-[1.5px]"
      )}
    >
      <Card project={project} />
    </div>
  );
}

/* ---------- CARD ---------- */
function Card({ project }: { project: Project }) {
  return (
    <div className="w-full h-[360px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10">
      <img
        src={project.image}
        alt={project.title}
        className="h-[150px] w-full object-cover"
      />
      <div className="p-5 flex flex-col h-[210px]">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-xs text-gray-400 flex-grow">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap my-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] rounded-full bg-purple-500/10 text-purple-400"
            >
              {t}
            </span>
          ))}
        </div>

        <button className="w-full py-2 text-sm rounded-xl bg-white/10 hover:bg-white/20 transition">
          View Details ↗
        </button>
      </div>
    </div>
  );
}

/* ---------- ARROWS ---------- */
function Arrow({
  left,
  onClick,
}: {
  left?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "absolute z-20 w-10 h-10 rounded-full",
        "bg-white/10 hover:bg-white/20 transition",
        "flex items-center justify-center text-xl",
        left ? "left-2" : "right-2"
      )}
    >
      {left ? "‹" : "›"}
    </button>
  );
}