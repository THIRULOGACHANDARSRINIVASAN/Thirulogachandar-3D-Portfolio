// import { useState, useEffect } from "react";
// import * as THREE from "three";
// import Comet from "./Comet";

// type Star = {
//   id: number;
//   start: THREE.Vector3;
//   end: THREE.Vector3;
// };

// export default function ShootingStars() {
//   const [stars, setStars] = useState<Star[]>([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const startX = THREE.MathUtils.randFloat(-1.5, 1.5);
//       const startY = THREE.MathUtils.randFloat(0.8, 1.5);

//       const endX = startX + THREE.MathUtils.randFloat(0.6, 1.2);
//       const endY = startY - THREE.MathUtils.randFloat(0.6, 1.2);

//       setStars((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           start: new THREE.Vector3(startX, startY, 0),
//           end: new THREE.Vector3(endX, endY, 0),
//         },
//       ]);
//     }, THREE.MathUtils.randInt(2500, 5000)); // 🌠 random frequency

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {stars.map((star) => (
//         <Comet
//           key={star.id}
//           start={star.start}
//           end={star.end}
//           onComplete={() =>
//             setStars((s) => s.filter((x) => x.id !== star.id))
//           }
//         />
//       ))}
//     </>
//   );
// }




import { useEffect, useState } from "react";
import * as THREE from "three";
import Comet from "./Comet";

type Star = {
  id: number;
  start: THREE.Vector3;
  end: THREE.Vector3;
};

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const startX = Math.random() * 2 - 1;
      const startY = Math.random() * 2 - 1;

      const start = new THREE.Vector3(startX, startY, 0);
      const end = new THREE.Vector3(
        startX + 0.6,
        startY - 0.6,
        0
      );

      setStars((prev) => [
        ...prev,
        {
          id: Date.now(),
          start,
          end,
        },
      ]);
    }, 2500); // random interval feel

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <Comet
          key={star.id}
          start={star.start}
          end={star.end}
          onComplete={() =>
            setStars((prev) => prev.filter((s) => s.id !== star.id))
          }
        />
      ))}
    </>
  );
}
