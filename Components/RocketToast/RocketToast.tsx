"use client";

import { motion } from "framer-motion";
import Rocket from "./Rocket";
import ClothBanner from "./ClothBanner";
import { RocketToastProps } from "./rocket-toast.types";
import "./rocket-toast.css";

export default function RocketToast({
  message,
  duration = 50000,
}: RocketToastProps) {
  return (
    <motion.div
      className="rocket-toast-wrapper"
      initial={{ x: "100vw", y: -20 }}
      animate={{ x: "-120vw" }}
      transition={{
        duration: duration / 1000,
        ease: "linear",
      }}
    >
      <Rocket />
      <ClothBanner message={message} />
    </motion.div>
  );
}
