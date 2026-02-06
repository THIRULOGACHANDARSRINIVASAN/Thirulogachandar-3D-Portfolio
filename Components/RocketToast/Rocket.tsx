// "use client";

// import Image from "next/image";

// interface RocketProps {
//   size?: number;
// }

// export default function Rocket({ size = 64 }: RocketProps) {
//   return (
//     <Image
//       src="/rocket.png"
//       alt="Rocket"
//       width={size}
//       height={size}
//       className="rocket-image w-full h-full"
//       priority
//     />
//   );
// }



"use client";

import Image from "next/image";

interface RocketProps {
  size?: number;
}

export default function Rocket({ size = 64 }: RocketProps) {
  return (
    <div
      className="relative flex items-center"
      style={{ width: size, height: size }}
    >
      
      {/* 🚀 Rocket */}
      <Image
        src="/rocket.png"
        alt="Rocket"
        width={size}
        height={size}
        className="rocket-image relative z-10"
        priority
      />
      {/* 🔥 Fire Thrust */}
      <div className="rocket-fire">
        <div className="rocket-fire-inner" />
      </div>
    </div>
  );
}
