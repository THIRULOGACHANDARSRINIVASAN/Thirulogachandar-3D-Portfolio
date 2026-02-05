// import { useState } from "react";
// import RocketToast from "../Components/RocketToast/RocketToast";

// export const useRocketToast = () => {
//   const [toast, setToast] = useState<{
//     message: string;
//     duration: number;
//   } | null>(null);

//   const showToast = (message: string, duration = 5000) => {
//     setToast({ message, duration });
//     setTimeout(() => setToast(null), duration);
//   };

//   const ToastComponent = toast ? (
//     <RocketToast message={toast.message} duration={toast.duration} />
//   ) : null;

//   return { showToast, ToastComponent };
// };



// import { useState } from "react";
// import RocketToast from "../Components/RocketToast/RocketToast";
// import React from "react";

// export const useRocketToast = () => {
//   const [toast, setToast] = useState<{
//     message: string;
//     duration: number;
//   } | null>(null);

//   const showToast = (message: string, duration = 5000) => {
//     setToast({ message, duration });
//     setTimeout(() => setToast(null), duration);
//   };

//   const ToastComponent: React.ReactNode = toast ? (
//     <RocketToast
//       message={toast.message}
//       duration={toast.duration}
//     />
//   ) : null;

//   return { showToast, ToastComponent };
// };




// "use client";

// import { useContext } from "react";
// import { ToastContext } from "../providers/RocketToastProvider";

// export const useRocketToast = () => {
//   const context = useContext(ToastContext);

//   if (!context) {
//     throw new Error(
//       "useRocketToast must be used within RocketToastProvider"
//     );
//   }

//   return context;
// };




"use client";

import { useContext } from "react";
import { ToastContext } from "../providers/RocketToastProvider";

export const useRocketToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useRocketToast must be used within RocketToastProvider"
    );
  }

  return context;
};
