"use client";

import React from "react";
import BallCanvas from "./Balls";
// import { Backend, frontend, tools } from "../utils/portfolioData";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import StarsCanvas from "./StarBackground";



export default function SkillSection  ({ title, data }: { title: string; data: any[] }){
  return (
    <div className="flex flex-col items-center my-6 ">
       <div className="hidden lg:block">
  {/* <StarsCanvas /> */}
</div>
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromLeft(0.6)}
            className="
              text-[22px]
              tracking-widest
              text-gray-400
              text-center
              mb-6
              font-medium
              Welcome-box
            "
          >
            <span className="px-4 py-2 Welcome-text text-[20px] font-bold">
              {title}
            </span>
          </motion.div>
        )}
      </InView>

      {/* Icons Grid */}
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="
              w-full
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-6
              place-items-center
            "
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[120px] flex flex-col items-center gap-3 z-200"
              >
                <div className="w-[100px] h-[100px] cursor-grab">
                  {/* <BallCanvas icon={item.image} /> */}
                  <div className=" tilt-card border flex justify-center py-5 bg-blue-50 border-rounded rounded-4xl">
                  <img src={item.image} alt="" width={50} height={50} className="border"/>

                  </div>
                </div>

                <p className="text-sm text-center text-white Skill-heading px-2 py-1.5 cursor-text">
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </InView>
    </div>
  );
};