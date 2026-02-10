// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow } from "swiper/modules";
// import {ProjectCard} from "./ProjectCard";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

// interface CardItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const cards: CardItem[] = [
//   {
//     id: 1,
//     title: "Project One",
//     description: "React + Node.js",
//     image: "/projects/p1.jpg",
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     description: "Next.js App",
//     image: "/projects/p2.jpg",
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     description: "Full Stack",
//     image: "/projects/p3.jpg",
//   },
//   {
//     id: 4,
//     title: "Project Four",
//     description: "UI/UX Design",
//     image: "/projects/p4.jpg",
//   },
// ];

// export default function CircularCarousel() {
//   return (
//     <div style={{ width: "100%", padding: "60px 0" }}>
//       <Swiper
//         modules={[EffectCoverflow]}
//         effect="coverflow"
//         grabCursor
//         centeredSlides
//         slidesPerView="auto"
//         loop
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 150,
//           modifier: 2.5,
//           slideShadows: false,
//         }}
//       >
//         {cards.map((card) => (
//           <SwiperSlide
//             key={card.id}
//             style={{ width: "280px" }}
//           >
//             <ProjectCard {...card} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import ProjectCard from "./ProjectCard";

// interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// const projects: Project[] = [
//   {
//     title: "Galaxy App",
//     description: "3D portfolio project",
//     image: "/projects/p1.jpg",
//   },
//   {
//     title: "Nebula UI",
//     description: "Modern UI system",
//     image: "/projects/p2.jpg",
//   },
//   {
//     title: "Orbit Tracker",
//     description: "Map based tracking app",
//     image: "/projects/p3.jpg",
//   },
//   {
//     title: "Star Commerce",
//     description: "E-commerce platform",
//     image: "/projects/p4.jpg",
//   },
// ];

// export default function ProjectsCarousel() {
//   return (
//     <div className="relative w-full max-w-6xl mx-auto select-none">
//       <Swiper
//         modules={[Navigation, EffectCoverflow]}
//         effect="coverflow"
//         centeredSlides
//         grabCursor
//         loop
//         slidesPerView={1.2}
//         navigation
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 80,
//           depth: 220,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1.5,
//           },
//           1024: {
//             slidesPerView: 3,
//             coverflowEffect: {
//               rotate: 0,
//               stretch: 140,
//               depth: 320,
//               modifier: 1,
//             },
//           },
//         }}
//         className="py-12"
//       >
//         {projects.map((project, index) => (
//           <SwiperSlide key={index}>
//             <ProjectCard {...project} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Galaxy Portfolio",
//     description: "3D immersive portfolio experience",
//     image: "/projects/p1.jpg",
//   },
//   {
//     id: 2,
//     title: "E-Commerce App",
//     description: "Full-stack shopping platform",
//     image: "/projects/p2.jpg",
//   },
//   {
//     id: 3,
//     title: "Admin Dashboard",
//     description: "Role-based analytics system",
//     image: "/projects/p3.jpg",
//   },
//   {
//     id: 4,
//     title: "Mobile Tracker",
//     description: "Realtime location tracking",
//     image: "/projects/p4.jpg",
//   },
// ];

// export default function ProjectsCarousel() {
//   return (
//     <section className="w-full py-16 relative">
//       <Swiper
//         modules={[Navigation]}
//         slidesPerView="auto"
//         centeredSlides
//         spaceBetween={40}
//         navigation
//         grabCursor
//         className="w-full"
//       >
//         {projects.map((project) => (
//           <SwiperSlide
//             key={project.id}
//             className="flex justify-center"
//             style={{ width: "auto" }}
//           >
//             <ProjectCard project={project} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// /* =========================
//    PROJECT CARD
// ========================= */
// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div
//       className="
//         bg-slate-900
//         text-white
//         rounded-2xl
//         overflow-hidden
//         border border-slate-800
//         shadow-xl

//         w-[220px]
//         sm:w-[240px]
//         md:w-[260px]
//         lg:w-[280px]
//         xl:w-[300px]

//         transition-transform duration-300
//         hover:scale-[1.04]
//       "
//     >
//       {/* IMAGE */}
//       <div className="h-[160px] w-full overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold mb-1">
//           {project.title}
//         </h3>
//         <p className="text-sm text-slate-400">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }






"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "3D Portfolio",
    description: "Immersive galaxy-based portfolio",
    image: "/projects/portfolio.jpg"
  },
  {
    title: "E-commerce",
    description: "Full MERN stack platform",
    image: "/projects/ecommerce.jpg"
  },
  {
    title: "Tracker",
    description: "Realtime location tracking",
    image: "/projects/tracker.jpg"
  },
  {
    title: "Admin Panel",
    description: "Role-based dashboards",
    image: "/projects/admin.jpg"
  }
];

export default function ProjectsCarousel() {
  return (
    <section className="relative w-full py-20">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        grabCursor
        slidesPerView="auto"
        loop
        coverflowEffect={{
          rotate: 30,     // Y-axis tilt
          stretch: 0,
          depth: 180,     // circular depth
          modifier: 1,
          slideShadows: false
        }}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="project-slide"
          >
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
