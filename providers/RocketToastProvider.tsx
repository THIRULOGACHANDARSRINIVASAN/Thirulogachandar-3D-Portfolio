// "use client";

// import React, { createContext, useContext, useState } from "react";
// import RocketToast from "../Components/RocketToast/RocketToast";

// type ToastContextType = {
//   showToast: (message: string, duration?: number) => void;
// };

// const ToastContext = createContext<ToastContextType | null>(null);

// export function RocketToastProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [toast, setToast] = useState<{
//     message: string;
//     duration: number;
//   } | null>(null);

//   const showToast = (message: string, duration = 5000) => {
//     setToast({ message, duration });
//     setTimeout(() => setToast(null), duration);
//   };

//   return (
//     <ToastContext.Provider value={{ showToast }}>
//       {children}
//       {toast && (
//         <RocketToast
//           message={toast.message}
//           duration={toast.duration}
//         />
//       )}
//     </ToastContext.Provider>
//   );
// }

// export const useRocketToast = () => {
//   const ctx = useContext(ToastContext);
//   if (!ctx) {
//     throw new Error(
//       "useRocketToast must be used within RocketToastProvider"
//     );
//   }
//   return ctx;
// };




// "use client";

// import React, { createContext, useContext, useState } from "react";
// import RocketToast from "../Components/RocketToast/RocketToast"

// type ToastContextType = {
//   showToast: (message: string, duration?: number) => void;
// };

// const ToastContext = createContext<ToastContextType | null>(null);

// export function RocketToastProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [toast, setToast] = useState<{
//     message: string;
//     duration: number;
//   } | null>(null);

//   const showToast = (message: string, duration = 5000) => {
//     setToast({ message, duration });
//     setTimeout(() => setToast(null), duration);
//   };

//   return (
//     <ToastContext.Provider value={{ showToast }}>
//       {children}
//       {toast && (
//         <RocketToast
//           message={toast.message}
//           duration={toast.duration}
//         />
//       )}
//     </ToastContext.Provider>
//   );
// }

// export const useRocketToast = () => {
//   const ctx = useContext(ToastContext);
//   if (!ctx) {
//     throw new Error(
//       "useRocketToast must be used within RocketToastProvider"
//     );
//   }
//   return ctx;
// };




"use client";

import React, { createContext, useState } from "react";
import RocketToast from "../Components/RocketToast/RocketToast"

export type ToastContextType = {
  showToast: (message: string, duration?: number) => void;
};

// ✅ EXPORT CONTEXT
export const ToastContext = createContext<ToastContextType | null>(null);

export function RocketToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toast, setToast] = useState<{
    message: string;
    duration: number;
  } | null>(null);

  const showToast = (message: string, duration = 200) => {
    setToast({ message, duration });

    // clear after duration
    setTimeout(() => setToast(null), duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <RocketToast
          message={toast.message}
          duration={toast.duration}
        />
      )}
    </ToastContext.Provider>
  );
}
