"use client";

import Image from "next/image";

interface RocketProps {
  size?: number;
}

export default function Rocket({ size = 64 }: RocketProps) {
  return (
    <Image
      src="/assets/images/rocket.png"
      alt="Rocket"
      width={size}
      height={size}
      className="rocket-image"
      priority
    />
  );
}
