import React from "react";
import BallCanvas from "./Balls";
import {Backend} from "../utils/portfolioData"
import { div } from "framer-motion/client";

const Skills = () => {
  return (
    <div className="h-[100vh] border  cursor-pointer relative z-[120] ">
      {/* <BallCanvas icon="/logo.png"></BallCanvas> */}




      <div>
      {Backend?.map((item,index)=>(
        <div key={index}>
          <div>
            <BallCanvas icon={item?.image}></BallCanvas>
          </div>
          <div>
             {item?.name} 
          </div>
        </div>
      ))}  
      </div>
      
    </div>
  );
};

export default Skills;
