import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { EXPERIENCES } from "../utils/portfolioData";
import { SectionWrapper } from "../hoc";
import { styles } from "../utils/portfolioData";
import { textVariant, slideInFromLeft, slideInFromRight } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
  elementId: number;
};

// Experience Card
const ExperienceCard = ({ experience, elementId }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={'/logo.png'}
          alt={experience.company_name}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    }
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={
        elementId % 2 === 0
          ? slideInFromRight(0.5)
          : slideInFromLeft(0.5)
      }
      className="w-full"
    >
      {/* Title */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Experience Points */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

    </motion.div>
  </VerticalTimelineElement>
);

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="work" >
      <>
        {/* Title */}
        <motion.div variants={textVariant()} className="border cursor-pointer">
          <p className={styles.sectionSubText}>My Work So Far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} elementId={i} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
