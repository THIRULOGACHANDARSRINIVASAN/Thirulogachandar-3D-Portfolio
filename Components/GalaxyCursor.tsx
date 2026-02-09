// "use client";

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const GalaxyCursor: React.FC = () => {
//   // Define types for the refs
//   const container = useRef<HTMLDivElement>(null);
//   const starRef = useRef<HTMLDivElement>(null);
//   const nebulaRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // Check if refs are mounted before animating
//     if (!starRef.current || !nebulaRef.current) return;

//     // 1. Move the elements to follow the mouse
//     const moveCursor = (e: MouseEvent) => {
//       gsap.to(starRef.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0,
//       });
//       gsap.to(nebulaRef.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.6,
//         ease: "power2.out",
//       });
//     };

//     // 2. Click animation (Supernova)
//     const handleDown = () => {
//       gsap.to(nebulaRef.current, { 
//         scale: 2, 
//         opacity: 0.5, 
//         duration: 0.2,
//         overwrite: "auto" 
//       });
//     };
    
//     const handleUp = () => {
//       gsap.to(nebulaRef.current, { 
//         scale: 1, 
//         opacity: 1, 
//         duration: 0.5,
//         overwrite: "auto" 
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mousedown", handleDown);
//     window.addEventListener("mouseup", handleUp);

//     // Cleanup listeners on unmount
//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mousedown", handleDown);
//       window.removeEventListener("mouseup", handleUp);
//     };
//   }, { scope: container });

//   return (
//     <div ref={container} className="pointer-events-none fixed inset-0 z-[9999]">
//       {/* Central Star */}
//       <div
//         ref={starRef}
//         className="fixed h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_#fff,0_0_30px_#fff]"
//       />
//       {/* Outer Nebula Ring */}
//       <div
//         ref={nebulaRef}
//         className="fixed h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
//       />
//     </div>
//   );
// };

// export default GalaxyCursor;




"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GalaxyCursor: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!starRef.current || !nebulaRef.current || !orbitRef.current) return;

    // 1. Permanent Rotation for the Star and Orbit
    gsap.to(starRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
    });

    gsap.to(orbitRef.current, {
      rotation: -360,
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    // 2. Follow Mouse Logic
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // The Star (Instant)
      gsap.to(starRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      // The Nebula (Slight Lag)
      gsap.to(nebulaRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.8,
        ease: "power3.out",
      });

      // The Orbiting Moon (Heavy Lag/Gravity effect)
      gsap.to(orbitRef.current, {
        x: clientX,
        y: clientY,
        duration: 1.2,
        ease: "expo.out",
      });
    };

    // 3. Click Interactions
    const handleDown = () => {
      gsap.to(nebulaRef.current, {
        scale: 1.5,
        borderColor: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        duration: 0.2,
      });
      gsap.to(starRef.current, { scale: 0.5, duration: 0.2 });
    };

    const handleUp = () => {
      gsap.to(nebulaRef.current, {
        scale: 1,
        borderColor: "rgba(6, 182, 212, 0.5)",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        duration: 0.5,
      });
      gsap.to(starRef.current, { scale: 1, duration: 0.5 });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, { scope: container });

  return (
    <div ref={container} className="pointer-events-none fixed inset-0 z-[9] mix-blend-screen">
      
      {/* 1. Main Twinkling Star */}
      <div
        ref={starRef}
        className="fixed -translate-x-1/2 -translate-y-1/2 text-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_8px_#fff]">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* 2. Outer Nebula Ring */}
      <div
        ref={nebulaRef}
        className="fixed h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
      />

      {/* 3. Orbiting Satellite Moon */}
      <div ref={orbitRef} className="fixed h-20 w-20 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
      </div>

    </div>
  );
};

export default GalaxyCursor;