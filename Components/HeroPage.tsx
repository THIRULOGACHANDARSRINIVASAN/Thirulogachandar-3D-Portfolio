import React, { useState } from "react";
import NameAnimation from "./NameAnimation";
import PositionAnimation from "./PositionAnimation";
import HeroLogo from "./HeroLogo";
import DownloadButton from "./DownloadButton";
import { InView } from "react-intersection-observer";

const HeroPage = () => {
  const [showPosition, setShowPosition] = useState(false);
  const [showLogo,setShowLogo] = useState(false)

  return (
    <div className=" flex flex-col h-[100vh]   bg-[#030015] z-999">
      <div className=" w-full h-full flex flex-col  justify-center items-center xl:w-1/2 ">
        <HeroLogo></HeroLogo>
        <NameAnimation onComplete={() => setShowPosition(true)}></NameAnimation>
        <PositionAnimation show={showPosition} onComplete={() => setShowLogo(true)}></PositionAnimation>
        <div className=" w-full flex justify-evenly h-[10%] items-center z-[120]  ">
          {/* <button className="border px-5 py-0 rounded-xl h-[50%] cursor-pointer" onClick={()=>{console.log("DFghjk")}}>donen</button> */}
          <DownloadButton show={showLogo}></DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
