import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";

export const projectsData = [
  {
    id: 1,
    thumbnail: "assets/svg/ultraceuticshome.png",
    title: "ULTRACEUTICS INDIA PVT. LTD.  ",
    description: "Built a clean, fast, and SEO-optimized site for ULTRACEUTICS INDIA PVT. LTD..",
    live: "https://ultraceuticsindia.com/",
    tech: ["React.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: 2,
    thumbnail: "https://i.imgur.com/GzAhqVA.png",
    title: "Websolute - Agency Portfolio  ",
    description:"Developed a responsive portfolio for Websolute, showcasing our web development expertise..",
    live: "https://websolute.in/",
    tech: ["React.js"],
    featured: false,
  },
  
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      
    </Section>
  );
};

export default Projects;
