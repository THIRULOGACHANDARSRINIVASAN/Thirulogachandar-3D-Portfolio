import React, { useState } from "react";
import NameAnimation from "./NameAnimation";
import PositionAnimation from "./PositionAnimation";
import HeroLogo from "./HeroLogo";
import DownloadButton from "./DownloadButton";
import { InView } from "react-intersection-observer";
import StarsCanvas from "./StarBackground";
import { useRocketToast } from "../hooks/useRocketToast";
const HeroPage = () => {
  const [showPosition, setShowPosition] = useState(false);
  const [showLogo,setShowLogo] = useState(false)
  const {showToast} = useRocketToast()

  return (
    <div className=" flex flex-col h-[100vh]  justify-center z-100 ">
      {/* <StarsCanvas/> */}
      <div className=" w-full h-1/1.5 flex flex-col justify-start  items-center md:justify-center pt-20  md:h-full">
        <HeroLogo></HeroLogo>
        <NameAnimation onComplete={() => setShowPosition(true)}></NameAnimation>
        <PositionAnimation  onComplete={() => setShowLogo(true)}></PositionAnimation>
        <div className=" w-full flex justify-evenly h-[10%] items-center z-[120]  ">
          <DownloadButton ></DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
