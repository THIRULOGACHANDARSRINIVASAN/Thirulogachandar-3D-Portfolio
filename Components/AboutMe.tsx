import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromBottom, slideInFromRight, slideInFromTop } from "@/utils/motion";
import StarsCanvas from "./StarBackground";

const AboutMe = () => {
    return (
        // <div className="border relative">
        //   {/* <div className="w-full  md:flex items-start justify-center absolute top-[1px]">
        //     <video
        //       loop
        //       muted
        //       autoPlay
        //       playsInline
        //       preload="false"
        //       className="h-full"
        //       src="/vid1 (5).mp4"
        //     />
        //   </div> */}
        //   <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
        //             <InView triggerOnce={false}>
        //                 {({ inView, ref }) => (

        //                     <motion.div
        //                         ref={ref}
        //                         initial="hidden"
        //                         animate={inView ? "visible" : "hidden"}
        //                         variants={slideInFromTop}
        //                         className="text-[40px] pt-[5rem] pb-3 md:p-0 font-bold text-center text-gray-200 z-50"
        //                     >
        //                         About
        //                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        //                             {" "}
        //                             Me{" "}
        //                         </span>
        //                     </motion.div>
        //                 )}
        //             </InView>
        //         </div>
        //   <div>
        //     {/* <div
        //       className="p-[4px] rounded-full 
        //          bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400
        //          w-[14rem] flex justify-center"
        //     >
        //       <div
        //         className="w-[13rem] h-[13rem] rounded-full bg-black 
        //               relative overflow-hidden"
        //       >
        //         <Image
        //           src="/logo2.png"
        //           alt="logo"
        //           fill
        //           className="object-contain"
        //         />
        //       </div>
        //     </div> */}


        //   </div>
        //   <div>
        //     <p>
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        //       suscipit maxime doloribus pariatur quaerat dolore, quis numquam
        //       debitis officiis voluptas, totam modi saepe omnis, accusamus amet
        //       quidem placeat iste dolorum error corrupti! Nemo molestiae consequatur
        //       alias quae adipisci earum optio veritatis explicabo reprehenderit
        //       soluta sed eligendi, voluptas dolores illo, eos vitae. Praesentium
        //       repellat sunt quos exercitationem dolorem eligendi officiis hic! Unde
        //       autem, veritatis blanditiis ea totam, ratione harum molestiae,
        //       recusandae mollitia saepe accusantium dolore. In mollitia, recusandae
        //       consectetur odio reiciendis rerum magni quae similique molestiae atque
        //       esse rem, aliquam sed earum labore eos dolores ratione. Maiores, ipsam
        //       dolor! Praesentium, labore. Totam delectus deserunt culpa voluptatibus
        //       facilis expedita perferendis consequuntur accusamus. Deleniti
        //       doloribus minus, sunt numquam praesentium dignissimos iure dolorum
        //       perferendis, vitae soluta est. Quidem perspiciatis mollitia dolore
        //       reiciendis eveniet laborum.
        //     </p>
        //   </div>
        //   <div></div>
        // </div>

        <section
            id="about"
            className=" flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full z-[110] "
        >
            <StarsCanvas></StarsCanvas>
            <div className="md:absolute w-auto h-auto md:top-[0px] z-[50]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (

                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.6)}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200  inter-body"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto ">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500  hover:shadow-[0_0_30px_10px_rgba(99,102,241,0.8)] z-999 cursor-pointer"
                        >
                            <img src="/logo2.png" alt="profile" width={250} className="z-[110]" />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                THIRULOGACHANDAR
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] border w-[90%] md:w-3/4 py-[8px] z-[20] brder mb-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[16px] w-full text-justify">
                                MERN Stack Developer with 2 years of experience in building and optimizing scalable web applications using MongoDB,
                                Express.js, React.js, and Node.js. Strong problem-solving skills with hands-on experience delivering high-performance,
                                maintainable solutions and improving user experience. Passionate about continuous learning and contributing to
                                impactful, production-ready software. Seeking a full-stack developer role in a growth-oriented team.
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="absolute z-[20] bottom-[-4rem] md:bottom-[10px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Turning Ideas into Reliable Software
                </div>
            </div>

            <div className="  w-full hidden lg:flex items-start justify-center absolute -top-33.75 -z-10 lg:-top-11 xl:-top-12.5">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full z-[-100] "
                    src="/blackhole.webm"
                />
            </div>
        </section>
    );
};

export default AboutMe;
