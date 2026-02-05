"use client";

import Image from "next/image";
import NameAnimation from "../Components/NameAnimation";
import PositionAnimation from "@/Components/PositionAnimation";
import HeroPage from "@/Components/HeroPage";
import AboutMe from "@/Components/AboutMe";
import { useState } from "react";
import Skills from "@/Components/Skills";
import { Experience } from "@/Components/Experience";
import SpaceLoader from "@/Components/InitialLoader";


export default function Home() {
  const [showContent, setShowContent] = useState(true);
  return (
    <div className=" glass-background  bg-[#030014] main-container sm:w-full">
      {showContent ? (<SpaceLoader show={showContent} setShow={setShowContent}></SpaceLoader>) : (<>
        <HeroPage />
        <AboutMe />
        <Skills/>
        <Experience></Experience>

      </>)}

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
