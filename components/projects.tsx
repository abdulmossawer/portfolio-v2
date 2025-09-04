"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "",
    title: "City Traffic Accident Analysis Dashboard",
    description:
      "An interactive Power BI dashboard to analyze traffic accident data, trends, and hotspots for better road safety insights.",
    image: "/accident.png",
    tags: ["SQL", "Excel", "Power BI"],
    demoUrl: "https://www.linkedin.com/posts/analystmossawer_100daysofdataanalytics-dataanalytics-powerbi-activity-7368523101149519873-4p6g?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZSSy8BNBLV3DuzcVQAYGRQGwmD4o0DM28",
    githubUrl: "https://github.com/abdulmossawer/City_Traffic_Accident_Analysis_Dashboard",
    features: [
      "Peak accident times: Morning & evening rush hours.",
      "Weather factor: Accidents increase during rainfall.",
      "Vehicle type: Cars & two-wheelers most frequently involved.",
      "High-risk zones: Specific city junctions identified."
    ],
  },
  {
    logo: "",
    title: "Ola Ride Bookings Dashboard",
    description:
      "A data-driven dashboard analyzing ride booking patterns, cancellations, and customer behaviors to surface actionable insights and trends.",
    image: "/ola.png",
    tags: ["SQL", "Excel", "Power BI"],
    demoUrl: "https://www.linkedin.com/posts/analystmossawer_100daysofdataanalytics-powerbi-dataanalytics-activity-7365616584595267585-elO_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZSSy8BNBLV3DuzcVQAYGRQGwmD4o0DM28",
    githubUrl: "https://github.com/abdulmossawer/Ola_Ride_Bookings",
    features: [
      "Cleaned and preprocessed booking data (status, timing, distance, vehicle type)",
      "Aggregated metrics like total rides, cancellations, and average ride distance",
      "Visualized booking trends with time-series charts and ride status analysis",
      "Highlighted top vehicle types and reasons for cancellationss",
      "Interactive filters for dynamic exploration by time, vehicle type, and status"
    ],
  },
  {
    logo: "",
    title: "Fitness Dashboard – Power BI",
    description:
      "A Power BI dashboard to visualize and analyze key performance metrics (clients, memberships, trainers, financials), offering fitness centers actionable insights into their operations.",
    image: "fitness.png",
    tags: ["Excel", "Power BI"],
    demoUrl: "https://www.linkedin.com/posts/analystmossawer_100daysofdataanalytics-powerbi-dataanalytics-activity-7364174460272201730-d2WJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZSSy8BNBLV3DuzcVQAYGRQGwmD4o0DM28",
    githubUrl: "https://github.com/abdulmossawer/Fitness_Dashboard_In_PoweerBI",
    features: [
      "Client overview: total clients, active trainers, revenue & expenses",
      "Financial trends: monthly revenue, expenses, and profit",
      "Membership breakdown: status of Platinum, Gold, Silver memberships (active vs. expired)",
      "Individual client progress tracking",
      "Identified months with highest and lowest registrations",
      "Displays dashboard's last refresh timestamp for accuracy"
    ],
  },
  {
    logo: "",
    title: "Blinkit Sales Analysis",
    description:
      "Analyzed Blinkit’s item and outlet sales data using SQL to uncover performance trends and customer insights, aiding strategic business decisions.",
    image: "/blinkit.png",
    tags: ["SQL"],
    demoUrl: "https://www.linkedin.com/posts/analystmossawer_blinkit-sales-activity-7365986412837470209-jjTK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZSSy8BNBLV3DuzcVQAYGRQGwmD4o0DM28",
    githubUrl: "https://github.com/abdulmossawer/Blinkit_Sales_Analysis",
    features: [
      "Low Fat items contribute higher sales compared to Regular fat items.",
      "Snack Foods & Dairy are the top-performing categories.",
      "Medium outlet size generates the majority of sales (~45%).",
      "Sales are concentrated in Tier 3 locations, showing stronger local adoption.",
      "Supermarket Type1 outlets lead in sales, but Type2 outlets have higher avg. rating."
    ]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}