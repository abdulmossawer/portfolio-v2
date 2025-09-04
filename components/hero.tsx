"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, MapPin } from "lucide-react";
import {
  RiTwitterXLine,
} from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-6 md:py-10">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-2"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Abdul Mossawer
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Data Analyst
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:mossawer786@gmail.com">mossawer786@gmail.com</a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Raniganj, India</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base">
            I’m a Data Analyst with a strong foundation in
            <span className="font-semibold text-[#e2e2e2]"> SQL</span>,
            <span className="font-semibold text-yellow-400"> Python</span>,
            <span className="font-semibold text-green-400"> Excel</span>, and
            <span className="font-semibold text-[#FFB903]"> Power BI</span>. I
            specialize in uncovering patterns, creating interactive dashboards,
            and solving real-world problems through data. My projects showcase
            how I use{" "}
            <span className="font-semibold text-orange-400">
              data storytelling
            </span>
            to drive actionable insights and improve decision-making.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link href="/ABDUL MOSSAWERCV.pdf" target="_blank" download>
              <Button size="sm" className="text-xs sm:text-sm">
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
              </Button>
            </Link>
            <Link href="https://github.com/abdulmossawer" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link href="https://x.com/AMossawerdev" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <RiTwitterXLine className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/analystmossawer/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center h-48 md:h-auto"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Grid with floating tech stacks */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
              {/* Top Left - SQL Logo */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-4xl "
                >
                  <DiMsqlServer />
                </motion.div>
              </motion.div>

              {/* Top Right - Python */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <div className="text-4xl text-yellow-500">
                  <FaPython />
                </div>
              </motion.div>

              {/* Bottom Left - PowerBi */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-4xl text-green-600"
                >
                  <Image
                    src="/powerbi.png" // place file in /public
                    alt="Power BI"
                    width={50}
                    height={40}
                    className="rounded-md"
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Right - Excel */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(49, 130, 206, 0.1)",
                    "0 0 0 10px rgba(49, 130, 206, 0.1)",
                    "0 0 0 0px rgba(49, 130, 206, 0.1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="text-4xl text-green-500">
                  <FaFileExcel />
                </div>
              </motion.div>
            </div>

            {/* Floating tech badges around the grid */}
            <motion.div
              className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SQL
            </motion.div>

            <motion.div
              className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                y: [0, 5, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              Excel
            </motion.div>

            <motion.div
              className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                x: [0, 5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Python
            </motion.div>

            <motion.div
              className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                x: [0, -5, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              Power BI
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
