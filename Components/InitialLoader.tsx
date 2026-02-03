// "use client";
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function SpaceLoader() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // --- Three.js Setup ---
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create Starfield
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 6000;
//     const posArray = new Float32Array(starCount * 3);

//     for (let i = 0; i < starCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 10;
//     }

//     starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     const starMaterial = new THREE.PointsMaterial({ size: 0.007, color: 0xffffff });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);
//     camera.position.z = 1;

//     // Animation: Warp speed effect (moving toward camera)
//     const animate = () => {
//       requestAnimationFrame(animate);
//       stars.rotation.y += 0.001;
//       stars.position.z += 0.005; // Move stars toward user
//       if(stars.position.z > 1) stars.position.z = 0; // Reset for infinite loop
//       renderer.render(scene, camera);
//     };
//     animate();

//     // --- Timer Logic ---
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 2500); // 2.5 seconds

//     // Cleanup
//     return () => {
//       clearTimeout(timer);
//       renderer.dispose();
//       if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out">
//       <div ref={containerRef} className="absolute inset-0" />
//       <div className="relative z-10 text-white font-mono tracking-[0.5em] animate-pulse">
//         PREPARING JUMP...
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function SpaceLoader() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isFadingOut, setIsFadingOut] = useState(false); // Controls the opacity
//   const [shouldRender, setShouldRender] = useState(true); // Controls the unmounting

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 6000;
//     const posArray = new Float32Array(starCount * 3);
//     for (let i = 0; i < starCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 10;
//     starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     const starMaterial = new THREE.PointsMaterial({ size: 0.007, color: 0xffffff });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);
//     camera.position.z = 1;

//     const animate = () => {
//       if (!shouldRender) return; // Stop calculating if gone
//       requestAnimationFrame(animate);
//       stars.rotation.y += 0.001;
//       stars.position.z += 0.005;
//       if(stars.position.z > 1) stars.position.z = 0;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // --- The Smooth Exit Logic ---
//     const timer = setTimeout(() => {
//       setIsFadingOut(true); // Step 1: Start the CSS fade out

//       // Step 2: Wait for CSS transition (1000ms) to finish before unmounting
//       setTimeout(() => {
//         setShouldRender(false);
//       }, 1000); 
//     }, 2500); 

//     return () => {
//       clearTimeout(timer);
//       renderer.dispose();
//       // Use optional chaining for safer cleanup
//       containerRef.current?.removeChild(renderer.domElement);
//     };
//   }, [shouldRender]);

//   if (!shouldRender) return null;

//   return (
//     <div 
//       className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
//         isFadingOut ? 'opacity-0' : 'opacity-100'
//       }`}
//     >
//       <div ref={containerRef} className="absolute inset-0" />
//       <div className="relative z-10 text-white font-mono tracking-[0.5em] animate-pulse">
//         PREPARING JUMP...
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function SpaceLoader() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isFadingOut, setIsFadingOut] = useState(false);
//   const [shouldRender, setShouldRender] = useState(true);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // --- Orbital Starfield Logic ---
//     const starCount = 3000;
//     const starGeometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(starCount * 3);
//     const orbitData = new Float32Array(starCount * 3); // [radius, angle, speed]

//     for (let i = 0; i < starCount; i++) {
//       const i3 = i * 3;
//       const radius = Math.random() * 5 + 1; // Distance from center
//       const angle = Math.random() * Math.PI * 2; // Starting position in the circle
//       const speed = (Math.random() * 0.002) + 0.001; // How fast this star orbits

//       positions[i3] = Math.cos(angle) * radius;
//       positions[i3 + 1] = (Math.random() - 0.5) * 2; // Slight vertical spread
//       positions[i3 + 2] = Math.sin(angle) * radius;

//       orbitData[i3] = radius;
//       orbitData[i3 + 1] = angle;
//       orbitData[i3 + 2] = speed;
//     }

//     starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     const starMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff, transparent: true, opacity: 0.8 });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     camera.position.set(0, 3, 5); // View from a slight angle to see the "disk"
//     camera.lookAt(0, 0, 0);

//     const animate = () => {
//       if (!shouldRender) return;
//       requestAnimationFrame(animate);

//       const posAttr = starGeometry.attributes.position;

//       for (let i = 0; i < starCount; i++) {
//         const i3 = i * 3;
//         // Update the angle stored in our orbitData
//         orbitData[i3 + 1] += orbitData[i3 + 2]; 

//         // Apply circular motion: x = cos(angle) * r, z = sin(angle) * r
//         posAttr.array[i3] = Math.cos(orbitData[i3 + 1]) * orbitData[i3];
//         posAttr.array[i3 + 2] = Math.sin(orbitData[i3 + 1]) * orbitData[i3];
//       }

//       posAttr.needsUpdate = true; // Tell Three.js the points moved
//       stars.rotation.y += 0.0005; // Gentle global rotation
//       renderer.render(scene, camera);
//     };
//     animate();

//     const timer = setTimeout(() => {
//       setIsFadingOut(true);
//       setTimeout(() => setShouldRender(false), 1000);
//     }, 2500);

//     return () => {
//       clearTimeout(timer);
//       renderer.dispose();
//       containerRef.current?.removeChild(renderer.domElement);
//     };
//   }, [shouldRender]);

//   if (!shouldRender) return null;

//   return (
//     <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
//       <div ref={containerRef} className="absolute inset-0" />
//       <div className="relative z-10 text-white font-mono tracking-[0.5em] animate-pulse pointer-events-none">
//         ESTABLISHING ORBIT...
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function SpaceLoader() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isFadingOut, setIsFadingOut] = useState(false);
//   const [shouldRender, setShouldRender] = useState(true);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // 1. Static Star Background (Your original stars)
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 4000;
//     const starPos = new Float32Array(starCount * 3);
//     for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 20;
//     starGeometry.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
//     const starMaterial = new THREE.PointsMaterial({ size: 0.01, color: 0xffffff });
//     scene.add(new THREE.Points(starGeometry, starMaterial));

//     // 2. Solar System Center (The Sun)
//     const sunGeom = new THREE.SphereGeometry(0.4, 32, 32);
//     const sunMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
//     const sun = new THREE.Mesh(sunGeom, sunMat);
//     scene.add(sun);

//     // 3. Create Orbits and Planets
//     const orbits: THREE.Group[] = [];
//     const orbitRadii = [1.5, 2.5, 3.8, 5.2]; // Distances from sun

//     orbitRadii.forEach((radius, index) => {
//       const orbitGroup = new THREE.Group();

//       // The Visible Path (The Ring)
//       const pathGeom = new THREE.RingGeometry(radius, radius + 0.02, 64);
//       const pathMat = new THREE.MeshBasicMaterial({ color: 0x444444, side: THREE.DoubleSide });
//       const path = new THREE.Mesh(pathGeom, pathMat);
//       path.rotation.x = Math.PI / 2; // Lay it flat
//       orbitGroup.add(path);

//       // The Planet
//       const planetGeom = new THREE.SphereGeometry(0.15, 16, 16);
//       const planetMat = new THREE.MeshStandardMaterial({ color: `hsl(${index * 40}, 70%, 50%)` });
//       const planet = new THREE.Mesh(planetGeom, planetMat);
//       planet.position.x = radius; // Position planet on the ring
//       orbitGroup.add(planet);

//       scene.add(orbitGroup);
//       orbits.push(orbitGroup);
//     });

//     // Lighting for planets
//     const light = new THREE.PointLight(0xffffff, 2, 100);
//     scene.add(light);
//     scene.add(new THREE.AmbientLight(0x404040));

//     camera.position.set(0, 5, 8);
//     camera.lookAt(0, 0, 0);

//     const animate = () => {
//       if (!shouldRender) return;
//       requestAnimationFrame(animate);

//       // Rotate each orbit group at different speeds
//       orbits.forEach((orbit, i) => {
//         orbit.rotation.y += 0.01 / (i + 1);
//       });

//       sun.rotation.y += 0.005;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Timer Logic
//     const timer = setTimeout(() => {
//       setIsFadingOut(true);
//       setTimeout(() => setShouldRender(false), 1000);
//     }, 25000);

//     return () => {
//       clearTimeout(timer);
//       renderer.dispose();
//       containerRef.current?.removeChild(renderer.domElement);
//     };
//   }, [shouldRender]);

//   if (!shouldRender) return null;

//   return (
//     <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
//       <div ref={containerRef} className="absolute inset-0" />
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <h2 className="text-white font-mono tracking-widest animate-pulse z-10">SYNCHRONIZING ORBITS...</h2>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function SpaceLoader() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isFadingOut, setIsFadingOut] = useState(false);
//     const [shouldRender, setShouldRender] = useState(true);

//     useEffect(() => {
//         if (!containerRef.current) return;

//         // --- Scene Setup ---
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setPixelRatio(window.devicePixelRatio);
//         containerRef.current.appendChild(renderer.domElement);

//         // 1. Static Star Background
//         const starGeometry = new THREE.BufferGeometry();
//         const starCount = 4000;
//         const starPos = new Float32Array(starCount * 3);
//         for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 30;
//         starGeometry.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
//         const starMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff });
//         scene.add(new THREE.Points(starGeometry, starMaterial));

//         // 2. The Sun (Center)
//         const sunGeom = new THREE.SphereGeometry(2, 64, 64);
//         const sunMat = new THREE.MeshStandardMaterial({
//             color: 0xffaa00,
//             emissive: 0xff6600,
//             emissiveIntensity: 2,
//         });
//         const sun = new THREE.Mesh(sunGeom, sunMat);
//         scene.add(sun);

//         // 3. Orbits and Planets
//         const orbits: THREE.Group[] = [];
//         const orbitRadii = [1.8, 3.2, 5.0, 6.8]; // Spaced out for Jupiter's size

//         orbitRadii.forEach((radius, index) => {
//             const orbitGroup = new THREE.Group();
//             const isJupiter = index === 1; // Defining the second planet as Jupiter

//             // The Orbit Path Ring
//             const pathGeom = new THREE.RingGeometry(radius, radius + 0.015, 64);
//             const pathMat = new THREE.MeshBasicMaterial({
//                 color: 0xffffff,
//                 transparent: true,
//                 opacity: 0.15,
//                 side: THREE.DoubleSide
//             });
//             const path = new THREE.Mesh(pathGeom, pathMat);
//             path.rotation.x = Math.PI / 2;
//             orbitGroup.add(path);

//             // The Planet Mesh
//             const size = isJupiter ? 0.45 : 0.18; // Jupiter is noticeably larger
//             const planetGeom = new THREE.SphereGeometry(size, 32, 32);

//             let planetMat;
//             if (isJupiter) {
//                 // Jupiter Color Palette (Banded Beige/Orange)
//                 planetMat = new THREE.MeshStandardMaterial({ color: 0xd3a675, roughness: 0.7 });
//             } else {
//                 planetMat = new THREE.MeshStandardMaterial({
//                     color: new THREE.Color().setHSL(index * 0.2, 0.5, 0.5)
//                 });
//             }

//             const planet = new THREE.Mesh(planetGeom, planetMat);
//             planet.position.x = radius;
//             orbitGroup.add(planet);

//             // Add Rings only to Jupiter
//             if (isJupiter) {
//                 const ringGeom = new THREE.RingGeometry(0.6, 0.9, 64);
//                 const ringMat = new THREE.MeshBasicMaterial({
//                     color: 0x9a8362,
//                     side: THREE.DoubleSide,
//                     transparent: true,
//                     opacity: 0.4
//                 });
//                 const jupiterRings = new THREE.Mesh(ringGeom, ringMat);
//                 jupiterRings.position.x = radius;
//                 jupiterRings.rotation.x = Math.PI / 2.5; // Tilted rings
//                 orbitGroup.add(jupiterRings);
//             }

//             scene.add(orbitGroup);
//             orbits.push(orbitGroup);
//         });

//         // --- Lighting ---
//         const sunLight = new THREE.PointLight(0xffffff, 3, 20);
//         sunLight.position.set(0, 0, 0);
//         scene.add(sunLight);
//         scene.add(new THREE.AmbientLight(0x333333));

//         camera.position.set(0, 6, 10);
//         camera.lookAt(0, 0, 0);

//         // --- Animation Loop ---
//         let frameId: number;
//         const animate = () => {
//             if (!shouldRender) return;
//             frameId = requestAnimationFrame(animate);

//             // Individual orbital speeds (inner planets move faster)
//             orbits.forEach((orbit, i) => {
//                 orbit.rotation.y += 0.008 / (i + 1);
//             });

//             sun.rotation.y += 0.002;
//             renderer.render(scene, camera);
//         };
//         animate();

//         // --- Resize Handler ---
//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener('resize', handleResize);

//         // --- Exit Logic ---
//         const timer = setTimeout(() => {
//             setIsFadingOut(true);
//             setTimeout(() => setShouldRender(false), 1000); // Wait for fade duration
//         }, 25000); // 2.5 second display time

//         // --- Cleanup ---
//         return () => {
//             cancelAnimationFrame(frameId);
//             window.removeEventListener('resize', handleResize);
//             clearTimeout(timer);
//             renderer.dispose();
//             containerRef.current?.removeChild(renderer.domElement);
//         };
//     }, [shouldRender]);

//     if (!shouldRender) return null;

//     return (
//         <div
//             className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'
//                 }`}
//         >
//             <div ref={containerRef} className="absolute inset-0" />

//             {/* Loading Text Overlay */}
//             <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
//                 <h2 className="text-white font-mono text-xl tracking-[0.6em] animate-pulse">
//                     INITIALIZING SYSTEM
//                 </h2>
//                 <div className="w-48 h-[2px] bg-white/20 overflow-hidden">
//                     <div className="w-full h-full bg-yellow-500 origin-left animate-loading-bar" />
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes loading-bar {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }
//         .animate-loading-bar {
//           animation: loading-bar 2.5s linear forwards;
//         }
//       `}</style>
//         </div>
//     );
// }



// "use client";
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function SpaceLoader() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isFadingOut, setIsFadingOut] = useState(false);
//   const [shouldRender, setShouldRender] = useState(true);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // --- Scene Setup ---
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     containerRef.current.appendChild(renderer.domElement);

//     // 1. Static Star Background
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 4000;
//     const starPos = new Float32Array(starCount * 3);
//     for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 30;
//     starGeometry.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
//     const starMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff });
//     scene.add(new THREE.Points(starGeometry, starMaterial));

//     // 2. The Sun (Center)
//     const sunGeom = new THREE.SphereGeometry(0.5, 32, 32);
//     const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd44 });
//     const sun = new THREE.Mesh(sunGeom, sunMat);
//     scene.add(sun);

//     // 3. Orbits and Planets
//     const orbits: THREE.Group[] = [];
//     const orbitRadii = [1.8, 3.2, 5.0, 6.8]; // Spaced out for Jupiter's size

//     orbitRadii.forEach((radius, index) => {
//       const orbitGroup = new THREE.Group();
//       const isJupiter = index === 1; // Defining the second planet as Jupiter

//       // The Orbit Path Ring
//       const pathGeom = new THREE.RingGeometry(radius, radius + 0.015, 64);
//       const pathMat = new THREE.MeshBasicMaterial({ 
//         color: 0xffffff, 
//         transparent: true, 
//         opacity: 0.15, 
//         side: THREE.DoubleSide 
//       });
//       const path = new THREE.Mesh(pathGeom, pathMat);
//       path.rotation.x = Math.PI / 2;
//       orbitGroup.add(path);

//       // The Planet Mesh
//       const size = isJupiter ? 0.45 : 0.18; // Jupiter is noticeably larger
//       const planetGeom = new THREE.SphereGeometry(size, 32, 32);

//       let planetMat;
//       if (isJupiter) {
//         // Jupiter Color Palette (Banded Beige/Orange)
//         planetMat = new THREE.MeshStandardMaterial({ color: 0xd3a675, roughness: 0.7 });
//       } else {
//         planetMat = new THREE.MeshStandardMaterial({ 
//           color: new THREE.Color().setHSL(index * 0.2, 0.5, 0.5) 
//         });
//       }

//       const planet = new THREE.Mesh(planetGeom, planetMat);
//       planet.position.x = radius;
//       orbitGroup.add(planet);

//       // Add Rings only to Jupiter
//       if (isJupiter) {
//         const ringGeom = new THREE.RingGeometry(0.6, 0.9, 64);
//         const ringMat = new THREE.MeshBasicMaterial({ 
//           color: 0x9a8362, 
//           side: THREE.DoubleSide, 
//           transparent: true, 
//           opacity: 0.4 
//         });
//         const jupiterRings = new THREE.Mesh(ringGeom, ringMat);
//         jupiterRings.position.x = radius;
//         jupiterRings.rotation.x = Math.PI / 2.5; // Tilted rings
//         orbitGroup.add(jupiterRings);
//       }

//       scene.add(orbitGroup);
//       orbits.push(orbitGroup);
//     });

//     // --- Lighting ---
//     const sunLight = new THREE.PointLight(0xffffff, 3, 20);
//     sunLight.position.set(0, 0, 0);
//     scene.add(sunLight);
//     scene.add(new THREE.AmbientLight(0x333333));

//     camera.position.set(0, 6, 10);
//     camera.lookAt(0, 0, 0);

//     // --- Animation Loop ---
//     let frameId: number;
//     const animate = () => {
//       if (!shouldRender) return;
//       frameId = requestAnimationFrame(animate);

//       // Individual orbital speeds (inner planets move faster)
//       orbits.forEach((orbit, i) => {
//         orbit.rotation.y += 0.008 / (i + 1);
//       });

//       sun.rotation.y += 0.002;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // --- Resize Handler ---
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     // --- Exit Logic ---
//     const timer = setTimeout(() => {
//       setIsFadingOut(true);
//       setTimeout(() => setShouldRender(false), 1000); // Wait for fade duration
//     }, 2500); // 2.5 second display time

//     // --- Cleanup ---
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('resize', handleResize);
//       clearTimeout(timer);
//       renderer.dispose();
//       containerRef.current?.removeChild(renderer.domElement);
//     };
//   }, [shouldRender]);

//   if (!shouldRender) return null;

//   return (
//     <div 
//       className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
//         isFadingOut ? 'opacity-0' : 'opacity-100'
//       }`}
//     >
//       <div ref={containerRef} className="absolute inset-0" />

//       {/* Loading Text Overlay */}
//       <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
//         <h2 className="text-white font-mono text-xl tracking-[0.6em] animate-pulse">
//           INITIALIZING SYSTEM
//         </h2>
//         <div className="w-48 h-[2px] bg-white/20 overflow-hidden">
//           <div className="w-full h-full bg-yellow-500 origin-left animate-loading-bar" />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes loading-bar {
//           0% { transform: scaleX(0); }
//           100% { transform: scaleX(1); }
//         }
//         .animate-loading-bar {
//           animation: loading-bar 2.5s linear forwards;
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { Progress, Flex } from "antd"

// export default function SpaceLoader() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isFadingOut, setIsFadingOut] = useState(false);
//     const [shouldRender, setShouldRender] = useState(true);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         if (!containerRef.current) return;

//         // --- Scene Setup ---
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );

//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setPixelRatio(window.devicePixelRatio);
//         containerRef.current.appendChild(renderer.domElement);

//         // --- Stars ---
//         const starGeometry = new THREE.BufferGeometry();
//         const starCount = 2000;
//         const starPos = new Float32Array(starCount * 3);
//         for (let i = 0; i < starCount * 3; i++) {
//             starPos[i] = (Math.random() - 0.5) * 30;
//         }
//         starGeometry.setAttribute(
//             "position",
//             new THREE.BufferAttribute(starPos, 3)
//         );
//         const starMaterial = new THREE.PointsMaterial({
//             size: 0.015,
//             color: 0xffffff,
//         });
//         scene.add(new THREE.Points(starGeometry, starMaterial));

//         // =========================
//         // 🔥 REALISTIC SUN
//         // =========================

//         // Core
//         const sunGeom = new THREE.SphereGeometry(0.5, 64, 64);
//         const sunMat = new THREE.MeshStandardMaterial({
//             color: 0xffaa00,
//             emissive: 0xff5500,
//             emissiveIntensity: 3,
//             roughness: 0.4,
//         });
//         const sun = new THREE.Mesh(sunGeom, sunMat);
//         scene.add(sun);

//         // Glow halo
//         const glowGeom = new THREE.SphereGeometry(0.7, 64, 64);
//         const glowMat = new THREE.MeshBasicMaterial({
//             color: 0xffaa33,
//             transparent: true,
//             opacity: 0.35,
//             blending: THREE.AdditiveBlending,
//         });
//         const glow = new THREE.Mesh(glowGeom, glowMat);
//         scene.add(glow);

//         // Sun light
//         const sunLight = new THREE.PointLight(0xffcc88, 4, 30);
//         sunLight.position.set(0, 0, 0);
//         scene.add(sunLight);

//         // Ambient light
//         scene.add(new THREE.AmbientLight(0x222222));

//         // =========================
//         // 🌍 ORBITS & PLANETS
//         // =========================

//         const orbits: THREE.Group[] = [];
//         const orbitRadii = [1.8, 3.2, 5.0, 6.8];

//         orbitRadii.forEach((radius, index) => {
//             const orbitGroup = new THREE.Group();
//             const isJupiter = index === 1;

//             const pathGeom = new THREE.RingGeometry(radius, radius + 0.015, 64);
//             const pathMat = new THREE.MeshBasicMaterial({
//                 color: 0xffffff,
//                 transparent: true,
//                 opacity: 0.15,
//                 side: THREE.DoubleSide,
//             });
//             const path = new THREE.Mesh(pathGeom, pathMat);
//             path.rotation.x = Math.PI / 2;
//             orbitGroup.add(path);

//             const size = isJupiter ? 0.45 : 0.18;
//             const planetGeom = new THREE.SphereGeometry(size, 32, 32);

//             const planetMat = isJupiter
//                 ? new THREE.MeshStandardMaterial({
//                     color: 0xd3a675,
//                     roughness: 0.7,
//                 })
//                 : new THREE.MeshStandardMaterial({
//                     color: new THREE.Color().setHSL(index * 0.2, 0.5, 0.5),
//                 });

//             const planet = new THREE.Mesh(planetGeom, planetMat);
//             planet.position.x = radius;
//             orbitGroup.add(planet);

//             if (isJupiter) {
//                 const ringGeom = new THREE.RingGeometry(0.6, 0.9, 64);
//                 const ringMat = new THREE.MeshBasicMaterial({
//                     color: 0x9a8362,
//                     transparent: true,
//                     opacity: 0.4,
//                     side: THREE.DoubleSide,
//                 });
//                 const rings = new THREE.Mesh(ringGeom, ringMat);
//                 rings.position.x = radius;
//                 rings.rotation.x = Math.PI / 2.5;
//                 orbitGroup.add(rings);
//             }

//             scene.add(orbitGroup);
//             orbits.push(orbitGroup);
//         });

//         camera.position.set(0, 6, 10);
//         camera.lookAt(0, 0, 0);

//         // =========================
//         // 🎞️ ANIMATION LOOP
//         // =========================

//         let frameId: number;
//         const animate = () => {
//             if (!shouldRender) return;
//             frameId = requestAnimationFrame(animate);

//             orbits.forEach((orbit, i) => {
//                 orbit.rotation.y += 0.008 / (i + 1);
//             });

//             // 🔥 Sun heat pulse
//             const pulse = 2.8 + Math.sin(Date.now() * 0.004) * 0.5;
//             sunMat.emissiveIntensity = pulse;
//             glow.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.03);
//             sunLight.intensity = 3.5 + Math.sin(Date.now() * 0.005) * 0.5;

//             sun.rotation.y += 0.002;

//             renderer.render(scene, camera);
//         };
//         animate();

//         // --- Resize ---
//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener("resize", handleResize);

//         // --- Exit ---
//         const timer = setTimeout(() => {
//             setIsFadingOut(true);
//             setTimeout(() => setShouldRender(false), 1000);
//         }, 25000);

//         // --- Cleanup ---
//         return () => {
//             cancelAnimationFrame(frameId);
//             window.removeEventListener("resize", handleResize);
//             clearTimeout(timer);
//             renderer.dispose();
//             containerRef.current?.removeChild(renderer.domElement);
//         };
//     }, [shouldRender]);

//     if (!shouldRender) return null;

//     return (
//         <div
//             className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"
//                 }`}
//         >
//             <div className="absolute z-10 top-10 flex flex-col items-center gap-4 pointer-events-none">
//                 <h2 className="text-white font-mono text-xl tracking-[0.6em] animate-pulse">
//                     INITIALIZING SYSTEM
//                     <Progress percent={50} />

//                 </h2>
//                 {/* <div className="w-48 h-[2px]  overflow-hidden z-1000">hhhhhhhhhhhhhhhhh
//                     <Flex vertical gap="middle" className="border">
//                         <Flex vertical gap="small" style={{ width: 300 }}>
//                             <Progress percent={50} />
//                             <Progress percent={50} size="small" />
//                             <Progress percent={50} size={[300, 20]} />
//                         </Flex>

//                     </Flex>

//                 </div> */}
//             </div>
//             <div ref={containerRef} className=" absolute border inset-0" />


//             <style jsx>{`
//         @keyframes loading-bar {
//           from {
//             transform: scaleX(0);
//           }
//           to {
//             transform: scaleX(1);
//           }
//         }
//         .animate-loading-bar {
//           animation: loading-bar 2.5s linear forwards;
//         }
//       `}</style>
//         </div>
//     );
// }



// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { Progress } from "antd";

// export default function SpaceLoader({ setShow }: any) {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isFadingOut, setIsFadingOut] = useState(false);
//     const [shouldRender, setShouldRender] = useState(true);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         if (!containerRef.current) return;

//         setShow(true);
//         console.log("SpaceLoader starts");
//         // --- Scene Setup ---
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setPixelRatio(window.devicePixelRatio);
//         containerRef.current.appendChild(renderer.domElement);

//         // --- Stars ---
//         const starGeometry = new THREE.BufferGeometry();
//         const starCount = 2000;
//         const starPos = new Float32Array(starCount * 3);
//         for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 40;
//         starGeometry.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
//         const starMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff });
//         scene.add(new THREE.Points(starGeometry, starMaterial));

//         // --- Sun (Core & Glow) ---
//         const sunGeom = new THREE.SphereGeometry(0.5, 64, 64);
//         const sunMat = new THREE.MeshStandardMaterial({
//             color: 0xffaa00,
//             emissive: 0xff5500,
//             emissiveIntensity: 3,
//         });
//         const sun = new THREE.Mesh(sunGeom, sunMat);
//         scene.add(sun);

//         const glowGeom = new THREE.SphereGeometry(0.7, 64, 64);
//         const glowMat = new THREE.MeshBasicMaterial({
//             color: 0xffaa33,
//             transparent: true,
//             opacity: 0.35,
//             blending: THREE.AdditiveBlending,
//         });
//         const glow = new THREE.Mesh(glowGeom, glowMat);
//         scene.add(glow);

//         const sunLight = new THREE.PointLight(0xffcc88, 4, 30);
//         scene.add(sunLight);
//         scene.add(new THREE.AmbientLight(0x222222));

//         // --- Orbits & Planets ---
//         const orbits: THREE.Group[] = [];
//         const orbitRadii = [1.8, 3.2, 5.0, 6.8];

//         orbitRadii.forEach((radius, index) => {
//             const orbitGroup = new THREE.Group();
//             const isJupiter = index === 1;

//             const pathGeom = new THREE.RingGeometry(radius, radius + 0.015, 64);
//             const pathMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15, side: THREE.DoubleSide });
//             const path = new THREE.Mesh(pathGeom, pathMat);
//             path.rotation.x = Math.PI / 2;
//             orbitGroup.add(path);

//             const size = isJupiter ? 0.45 : 0.18;
//             const planetGeom = new THREE.SphereGeometry(size, 32, 32);
//             const planetMat = new THREE.MeshStandardMaterial({
//                 color: isJupiter ? 0xd3a675 : new THREE.Color().setHSL(index * 0.2, 0.5, 0.5),
//                 roughness: 0.7,
//             });
//             const planet = new THREE.Mesh(planetGeom, planetMat);
//             planet.position.x = radius;
//             orbitGroup.add(planet);

//             if (isJupiter) {
//                 const ringGeom = new THREE.RingGeometry(0.6, 0.9, 64);
//                 const ringMat = new THREE.MeshBasicMaterial({ color: 0x9a8362, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
//                 const rings = new THREE.Mesh(ringGeom, ringMat);
//                 rings.position.x = radius;
//                 rings.rotation.x = Math.PI / 2.5;
//                 orbitGroup.add(rings);
//             }

//             scene.add(orbitGroup);
//             orbits.push(orbitGroup);
//         });

//         camera.position.set(0, 6, 10);
//         camera.lookAt(0, 0, 0);

//         // --- Animation Loop ---
//         let frameId: number;
//         const animate = () => {
//             if (!shouldRender) return;
//             frameId = requestAnimationFrame(animate);
//             orbits.forEach((orbit, i) => { orbit.rotation.y += 0.008 / (i + 1); });
//             const pulse = 2.8 + Math.sin(Date.now() * 0.004) * 0.5;
//             sunMat.emissiveIntensity = pulse;
//             glow.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.03);
//             sunLight.intensity = 3.5 + Math.sin(Date.now() * 0.005) * 0.5;
//             sun.rotation.y += 0.002;
//             renderer.render(scene, camera);
//         };
//         animate();

//         // --- Progress & Exit Logic ---
//         const totalDuration = 2500; // 25 seconds
//         const intervalTime = totalDuration / 100;

//         const progressInterval = setInterval(() => {
//             setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
//         }, intervalTime);

//         const exitTimer = setTimeout(() => {
//             setIsFadingOut(true);

//             setTimeout(() => { setShouldRender(false); setShow(false); }, 1000);
//             console.log("SpaceLoader starts");
//         }, totalDuration);

//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             cancelAnimationFrame(frameId);
//             window.removeEventListener("resize", handleResize);
//             clearInterval(progressInterval);
//             clearTimeout(exitTimer);
//             renderer.dispose();
//             containerRef.current?.removeChild(renderer.domElement);
//         };
//     }, [shouldRender]);

//     if (!shouldRender) return null;

//     return (
//         <div
//             className={` fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"
//                 }`}
//         >
//             {/* UI Overlay */}
//             <div className=" absolute top-7 z-10 flex flex-col items-center gap-2 pointer-events-none px-4 w-full max-w-md">
//                 <h2 className="text-white font-mono text-sm sm:text-lg tracking-[0.5em] animate-pulse mb-4">
//                     INITIALIZING SYSTEM
//                 </h2>

//                 <Progress
//                     percent={progress}
//                     strokeColor={{ '0%': '#ffaa00', '100%': '#ffcc88' }}
//                     railColor="rgba(255, 255, 255, 0.1)"
//                     format={(percent) => <span className="text-white font-mono">{percent}%</span>}
//                     // strokeWidth={10}
//                     size={{ height: 10 }}
//                 />
//             </div>
//             {/* Background 3D Scene */}
//             <div ref={containerRef} className=" inset-0" />


//         </div>
//     );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Progress } from "antd";

export default function SpaceLoader({ setShow }: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        setShow(true);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // --- Stars ---
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 40;
        starGeometry.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
        const starMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff });
        scene.add(new THREE.Points(starGeometry, starMaterial));

        // ==========================================
        // 🔥 REPLACING SUN GEOMETRY WITH GIF SPRITE
        // ==========================================
        const loader = new THREE.TextureLoader();
        // Replace '/sun-animation.gif' with your actual filename in the public folder
        const sunTexture = loader.load('/sun2.gif'); 
        
        const sunMaterial = new THREE.SpriteMaterial({ 
            map: sunTexture,
            transparent: true,
            blending: THREE.AdditiveBlending // Makes it look "glowy"
        });

        const sunSprite = new THREE.Sprite(sunMaterial);
        sunSprite.scale.set(1.8, 1.8, 1); // Adjust size to your liking
        scene.add(sunSprite);

        // Optional: Keep the light so planets are still illuminated
        const sunLight = new THREE.PointLight(0xffcc88, 4, 30);
        scene.add(sunLight);
        scene.add(new THREE.AmbientLight(0x222222));

        // --- Orbits & Planets ---
        const orbits: THREE.Group[] = [];
        const orbitRadii = [1.8, 3.2, 5.0, 6.8];

        orbitRadii.forEach((radius, index) => {
            const orbitGroup = new THREE.Group();
            const isJupiter = index === 1;

            const pathGeom = new THREE.RingGeometry(radius, radius + 0.015, 64);
            const pathMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15, side: THREE.DoubleSide });
            const path = new THREE.Mesh(pathGeom, pathMat);
            path.rotation.x = Math.PI / 2;
            orbitGroup.add(path);

            const size = isJupiter ? 0.45 : 0.18;
            const planetGeom = new THREE.SphereGeometry(size, 32, 32);
            const planetMat = new THREE.MeshStandardMaterial({
                color: isJupiter ? 0xd3a675 : new THREE.Color().setHSL(index * 0.2, 0.5, 0.5),
                roughness: 0.7,
            });
            const planet = new THREE.Mesh(planetGeom, planetMat);
            planet.position.x = radius;
            orbitGroup.add(planet);

            if (isJupiter) {
                const ringGeom = new THREE.RingGeometry(0.6, 0.9, 64);
                const ringMat = new THREE.MeshBasicMaterial({ color: 0x9a8362, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
                const rings = new THREE.Mesh(ringGeom, ringMat);
                rings.position.x = radius;
                rings.rotation.x = Math.PI / 2.5;
                orbitGroup.add(rings);
            }

            scene.add(orbitGroup);
            orbits.push(orbitGroup);
        });

        camera.position.set(0, 6, 10);
        camera.lookAt(0, 0, 0);

        // --- Animation Loop ---
        let frameId: number;
        const animate = () => {
            if (!shouldRender) return;
            frameId = requestAnimationFrame(animate);
            orbits.forEach((orbit, i) => { orbit.rotation.y += 0.008 / (i + 1); });
            
            // Pulse the GIF size slightly for more life
            // const pulse = 1 + Math.sin(Date.now() * 0.003) * 0.05;
            // sunSprite.scale.set(2 * pulse, 2 * pulse, 1);
            
            renderer.render(scene, camera);
        };
        animate();

        // --- Progress & Exit Logic ---
        const totalDuration = 5000; 
        const intervalTime = totalDuration / 100;

        const progressInterval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
        }, intervalTime);

        const exitTimer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => { setShouldRender(false); setShow(false); }, 1000);
        }, totalDuration);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            clearInterval(progressInterval);
            clearTimeout(exitTimer);
            renderer.dispose();
            containerRef.current?.removeChild(renderer.domElement);
        };
    }, [shouldRender]);

    if (!shouldRender) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
            <div className="absolute top-7 z-10 flex flex-col items-center gap-2 pointer-events-none px-4 w-full max-w-md">
                <h2 className="text-white font-mono text-sm sm:text-lg tracking-[0.5em] animate-pulse mb-4">
                    INITIALIZING SYSTEM
                </h2>
                <Progress
                    percent={progress}
                    strokeColor={{ '0%': '#ffaa00', '100%': '#ffcc88' }}
                    railColor="rgba(255, 255, 255, 0.1)"
                    format={(percent) => <span className="text-white font-mono">{percent}%</span>}
                    size={{ height: 10 }}
                />
            </div>
            <div ref={containerRef} className="absolute inset-0" />
        </div>
    );
}