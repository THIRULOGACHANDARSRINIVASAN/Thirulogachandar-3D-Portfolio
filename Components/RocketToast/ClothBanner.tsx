"use client";

import { motion } from "framer-motion";

interface ClothBannerProps {
  message: string;
}

export default function ClothBanner({ message }: ClothBannerProps) {
  return (
    <motion.div
      className="cloth-banner"
      animate={{ y: [0, -3, 3, -2, 2, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {message}
    </motion.div>
  );
}
