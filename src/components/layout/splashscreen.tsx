// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function SplashScreen() {
//   return (
//     <section className="flex items-center justify-center h-screen bg-white">
//       <motion.div
//         className="flex items-center"
//         initial="initial"
//         animate="animate"
//         variants={{
//           initial: {},
//           animate: {
//             transition: {
//               staggerChildren: 0.4, // ✅ smooth stagger effect
//             },
//           },
//         }}
//       >
//         {/* Company Logo */}
//         <motion.div
//           variants={{
//             initial: { scale: 0, opacity: 0, x: 0 },
//             animate: { scale: 1, opacity: 1, x: -40 },
//           }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="w-20 h-20 relative"
//         >
//           <Image
//             src="/logo.jpg"
//             alt="Trinumics Logo"
//             fill
//             className="object-contain"
//           />
//         </motion.div>

//         {/* Company Name */}
//         <motion.h1
//           variants={{
//             initial: { opacity: 0, x: 30 },
//             animate: { opacity: 1, x: 0 },
//           }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="text-4xl font-bold text-gray-800 ml-2"
//         >
//           Trinumics
//         </motion.h1>
//       </motion.div>
//     </section>
//   );
// }
