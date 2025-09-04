"use client";

import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaFileExcel } from "react-icons/fa";
import Image from "next/image";

const skillCategories = [
  {
    title: "Programming & Data Analysis",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
      {
        name: "Pandas",
        icon: <SiPandas className="text-black dark:text-white" />,
      },
      { name: "Matplotlib", icon: <Image
            src="/Matplotlib.png" // place file in /public
            alt="Power BI"
            width={35}
            height={40}
            className="rounded-md"
          /> },
      { name: "Seaborn", icon: <Image
            src="/seaborn.png" // place file in /public
            alt="Power BI"
            width={35}
            height={40}
            className="rounded-md"
          /> },
    ],
  },
  {
    title: "Databases & SQL",
    skills: [
      { name: "SQL Server", icon: <DiMsqlServer className="text-white-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#00ED64]" /> },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      {
        name: "Power BI",
        icon: (
          <Image
            src="/powerbi.png" // place file in /public
            alt="Power BI"
            width={35}
            height={40}
            className="rounded-md"
          />
        ),
      },
      {
        name: "MS Excel",
        icon: <FaFileExcel className="text-green text-green-400" />,
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "GitHub",
        icon: <FaGithub className="text-black dark:text-white" />,
      },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Figma", icon: <IoLogoFigma className="text-purple-600" /> },
      { name: "JP Notebook", icon: <Image
            src="/jp.png" // place file in /public
            alt="Power BI"
            width={35}
            height={40}
            className="rounded-md"
          /> },
    ],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I've worked with throughout my projects and
          experience
        </motion.p>

        <motion.div
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <motion.h3
                className="text-xl font-semibold mb-4"
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
