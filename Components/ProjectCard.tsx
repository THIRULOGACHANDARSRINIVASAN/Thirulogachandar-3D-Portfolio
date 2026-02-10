// "use client";

// import { Html } from "@react-three/drei";
// import * as THREE from "three";

// export interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// const geometry = new THREE.PlaneGeometry(2.8, 1.7);
// const material = new THREE.MeshBasicMaterial({
//   transparent: true,
//   opacity: 0,
// });

// export default function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <group>
//       {/* Invisible plane (only for positioning) */}
//       <mesh geometry={geometry} material={material} />

//       {/* Card UI */}
//       <Html
//         transform
//         center
//         distanceFactor={1.5}
//         position={[0, 0, 0.01]}
//         style={{ pointerEvents: "none" }}
//       >
//         <div
//           className="w-[280px] rounded-xl bg-zinc-900/90 text-white backdrop-blur-md"
//           style={{
//             userSelect: "none",
//             WebkitUserSelect: "none",
//           }}
//         >
//           {/* Image */}
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-36 object-cover rounded-t-xl"
//             draggable={false}
//           />

//           {/* Content */}
//           <div className="p-4">
//             <h3 className="text-lg font-semibold mb-1">
//               {project.title}
//             </h3>
//             <p className="text-sm text-zinc-300">
//               {project.description}
//             </p>
//           </div>
//         </div>
//       </Html>
//     </group>
//   );
// }




// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
// }

// export function ProjectCard({
//   title,
//   description,
//   image,
// }: ProjectCardProps) {
//   return (
//     <div
//       style={{
//         background: "#0f172a",
//         borderRadius: "16px",
//         overflow: "hidden",
//         boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//       }}
//     >
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: "100%",
//           height: "180px",
//           objectFit: "cover",
//         }}
//       />
//       <div style={{ padding: "16px", color: "#fff" }}>
//         <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
//         <p style={{ margin: 0, opacity: 0.8 }}>{description}</p>
//       </div>
//     </div>
//   );
// }




// interface Props {
//   title: string;
//   description: string;
//   image: string;
// }

// export default function ProjectCard({ title, description, image }: Props) {
//   return (
//     <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-800">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-44 object-cover pointer-events-none"
//         draggable={false}
//       />

//       <div className="p-4 text-white">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-sm text-slate-400 mt-1">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }



// interface Props {
//   title: string;
//   description: string;
//   image: string;
// }

// export default function ProjectCard({ title, description, image }: Props) {
//   return (
//     <div
//       className="
//         bg-slate-900
//         rounded-xl
//         overflow-hidden
//         border border-slate-800
//         shadow-xl
//         transition-transform duration-300
//         hover:scale-[1.03]
//       "
//     >
//       {/* IMAGE */}
//       <div className="relative w-full h-36 sm:h-40 md:h-44 lg:h-48">
//         <img
//           src={image}
//           alt={title}
//           draggable={false}
//           className="
//             w-full h-full
//             object-cover
//             pointer-events-none
//           "
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="p-3 sm:p-4 md:p-5">
//         <h3
//           className="
//             text-sm sm:text-base md:text-lg
//             font-semibold
//             text-white
//             truncate
//           "
//           title={title}
//         >
//           {title}
//         </h3>

//         <p
//           className="
//             mt-1
//             text-xs sm:text-sm
//             text-slate-400
//             line-clamp-2
//             md:line-clamp-3
//           "
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }









import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  image
}: ProjectCardProps) {
  return (
    <div
      className="
        bg-slate-900
        rounded-xl
        overflow-hidden
        border border-slate-800
        shadow-xl

        /* RESPONSIVE WIDTH */
        w-[220px]       /* mobile */
        sm:w-[240px]    /* small screens */
        md:w-[260px]    /* tablets */
        lg:w-[280px]    /* desktop */
        xl:w-[300px]    /* large screens */

        transition-transform duration-300
        hover:scale-[1.03]
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4">
        <h3
          className="
            text-white
            font-semibold
            text-sm sm:text-base md:text-lg
            truncate
          "
        >
          {title}
        </h3>

        <p
          className="
            text-slate-400
            text-xs sm:text-sm
            mt-1
            line-clamp-2
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
