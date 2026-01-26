"use client";

import Image from "next/image";
import NameAnimation from "../Components/NameAnimation";
import PositionAnimation from "@/Components/PositionAnimation";
import HeroPage from "@/Components/HeroPage";
import AboutMe from "@/Components/AboutMe";
import { useState } from "react";
import Skills from "@/Components/Skills";
export default function Home() {
  const [showLogo, setShowLogo] = useState(false);
  return (
    <div className="relative z-[10] border glass-background">
      <HeroPage />
      <AboutMe />
      <Skills></Skills>
      <div className="h-[100vh]"></div>

      
    </div>
  );
}

//  <div className="border h-[100vh]">
//         <div className=" w-full lg:w-1/2 border h-full flex flex-col justify-center items-center">
//           {/* <NameAnimation></NameAnimation> */}
//           {/* <PositionAnimation></PositionAnimation> */}
//           {/* <div style={{ position: "relative", marginTop: "2rem" }} className="border w-full">
//             <HeroLogo show={showLogo} />
//           </div> */}
//           <NameAnimation onComplete={() => setShowPosition(true)} />
//           <PositionAnimation show={showPosition} onComplete={() => setShowLogo(true)}/>
//         </div>
//         <div className="hidden lg:w-1/2"></div>
//       </div>
