// // import { Socials } from "@/constants";
// import Image from "next/image";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="w-screen z-1000 md:w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 m-0 max-w-[1855px] items-center rounded-full">
//       <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px] ">
//         <a
//           href="#home"
//           className="h-auto w-auto flex flex-row items-center [perspective:1000px] spin-y"
//           style={{ perspective: "1000px" }}
//         >
//           <Image
//             src="/logo.svg"
//             alt="logo"
//             width={50}
//             height={50}
//             className=".  w-19"
//           />

//           <span className=" cinzel-font font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl ">
//             Thirulogachandar
//           </span>
//         </a>

//         <div className="hidden w-3/6 lg:w-1/3 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
//           <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//             <a href="#about" className=".">
//               About me
//             </a>
//             <a href="#skills" className=".">
//               Skills
//             </a>
//             <a href="#projects" className=".">
//               Projects
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-row gap-5 text-white">
//           {/* {Socials.map((social) => (
//                         <a
//                             href={social.link}
//                             key={social.name}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <Image
//                                 src={social.src}
//                                 alt={social.name}
//                                 key={social.name}
//                                 width={24}
//                                 height={24}
// 								className=". hover:animate-spin"
//                             />
//                         </a>
//                     ))} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* NAVBAR */}
//       <div className="w-screen fixed top-0 h-[65px] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10 rounded-none md:rounded-full">
//         <div className="w-full h-full flex items-center justify-between max-w-[1855px] mx-auto">

//           {/* LOGO */}
//           <a href="#home" className="flex items-center">
//             <Image src="/logo.svg" alt="logo" width={50} height={50} />
//             <span className="cinzel-font font-bold ml-3 text-gray-300 text-xl md:text-lg">
//               Thirulogachandar
//             </span>
//           </a>

//           {/* DESKTOP NAV (unchanged) */}
//           <div className="hidden md:flex w-3/6 lg:w-1/3">
//             <div className="flex w-full justify-between border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
//               <a href="#about">About me</a>
//               <a href="#skills">Skills</a>
//               <a href="#projects">Projects</a>
//             </div>
//           </div>

//           {/* HAMBURGER (only when nav is hidden) */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU (appears only when needed) */}
//       {open && (
//         <div className="fixed top-[70px] left-0 w-full z-[999] md:hidden">
//           <div className="mx-4 bg-[#030014] border border-[#7042f861] rounded-2xl shadow-xl p-6 text-gray-200 flex flex-col gap-4 text-center">
//             <a onClick={() => setOpen(false)} href="#about">About me</a>
//             <a onClick={() => setOpen(false)} href="#skills">Skills</a>
//             <a onClick={() => setOpen(false)} href="#projects">Projects</a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;




// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // Prevent background scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* NAVBAR */}
//       <div className="w-screen fixed top-0 h-[65px] z-50 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-6 md:px-10 rounded-none md:rounded-full">
//         <div className="w-full h-full flex items-center justify-between max-w-[1855px] mx-auto">

//           {/* LOGO */}
//           <a
//             href="#home"
//             className="flex items-center gap-3 [perspective:1000px]"
//           >
//             <Image
//               src="/logo.svg"
//               alt="logo"
//               width={50}
//               height={50}
//               priority
//             />
//             <span className="cinzel-font font-bold text-gray-300 text-xl md:text-lg">
//               Thirulogachandar
//             </span>
//           </a>

//           {/* DESKTOP NAV (UNCHANGED) */}
//           <div className="hidden md:flex w-3/6 lg:w-1/3">
//             <div className="flex w-full justify-between border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
//               {["About me", "Skills", "Projects"].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(" ", "")}`}
//                   className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* HAMBURGER (ONLY WHEN DESKTOP NAV HIDDEN) */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-white z-50"
//             aria-label="Toggle menu"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="fixed top-[75px] left-0 w-full z-50 md:hidden">
//           <div className="mx-4 border border-[#7042f861] bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 rounded-2xl p-6 text-gray-200 flex flex-col gap-4 text-center">
//             {["About me", "Skills", "Projects"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(" ", "")}`}
//                 onClick={() => setOpen(false)}
//                 className="relative py-2 hover:text-white transition after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-purple-400 hover:after:w-1/2 after:transition-all"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;




// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* NAVBAR */}
//       <div className="fixed top-0 w-screen h-[65px] z-10000 pointer-events-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-6 md:px-10 rounded-none md:rounded-full">
//         <div className="w-full h-full flex items-center justify-between max-w-[1855px] mx-auto">

//           {/* LOGO */}
//           <a href="#home" className="flex items-center gap-3  [perspective:1000px] spin-y">
//             <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
//             <span className="cinzel-font font-bold text-gray-300 text-xl md:text-lg">
//               Thirulogachandar
//             </span>
//           </a>

//           {/* DESKTOP NAV */}
//           <div className="hidden md:flex w-3/6 lg:w-1/3 pointer-events-auto">
//             <div className="flex w-full justify-between border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
//               {["About me", "Skills", "Projects"].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(" ", "")}`}
//                   className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* HAMBURGER */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-white pointer-events-auto"
//             aria-label="Toggle menu"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>

//           <div className="hidden md:block md:w-1 border">

//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="fixed top-[75px] left-0 w-full z-5000 md:hidden pointer-events-auto">
//           <div className="mx-4 border border-[#7042f861] bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 rounded-2xl p-6 text-gray-200 flex flex-col gap-4 text-center">
//             {["About me", "Skills", "Projects"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(" ", "")}`}
//                 onClick={() => setOpen(false)}
//                 className="hover:text-white transition"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;





"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 w-screen h-[65px] z-[1000] pointer-events-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-6 md:px-10 rounded-none md:rounded-full">
        <div className="w-full h-full flex items-center justify-between max-w-[1855px] mx-auto">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3 [perspective:1000px] spin-y"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              priority
            />
            <span className="cinzel-font font-bold text-gray-300 text-xl md:text-lg">
              Thirulogachandar
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex w-3/6 lg:w-1/3 pointer-events-auto">
            <div className="flex w-full justify-between border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
              {["About me", "Skills", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white pointer-events-auto transition-transform duration-300"
            aria-label="Toggle menu"
          >
            <span className={open ? "rotate-90 inline-block" : "inline-block"}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </span>
          </button>

          <div className="hidden md:block">

          </div>
        </div>
      </div>

      {/* MOBILE MENU (SMOOTH TRANSITION) */}
      <div
        className={`
          fixed top-[75px] left-0 w-full md:hidden z-[5000]
          transition-all duration-600 ease-in-out
          ${open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-x-3 scale-95 pointer-events-none"}
        `}
      >
        <div className="mx-4 border border-[#7042f861] bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 rounded-2xl p-6 text-gray-200 flex flex-col gap-4 text-center">
          {["About me", "Skills", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

