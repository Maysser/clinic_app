"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Building, HeartPulse, Users } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-6 w-6 text-teal-600" />,
    value: "50,000+",
    label: "Patients Treated",
    description: "Annually across all our facilities",
  },
  {
    icon: <Building className="h-6 w-6 text-teal-600" />,
    value: "12",
    label: "Specialized Departments",
    description: "Covering all major medical fields",
  },
  {
    icon: <Award className="h-6 w-6 text-teal-600" />,
    value: "200+",
    label: "Expert Doctors",
    description: "Board-certified specialists",
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-teal-600" />,
    value: "98%",
    label: "Patient Satisfaction",
    description: "Based on post-treatment surveys",
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 bg-teal-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <div className="rounded-full bg-teal-100 p-3 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-teal-700">{stat.value}</h3>
              <p className="font-medium text-gray-900 mt-1">{stat.label}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
