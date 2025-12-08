"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Activity, Brain, Heart, Stethoscope, Microscope, Baby, Bone, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment options.",
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    title: "Neurology",
    description: "Expert care for conditions affecting the brain, spine, and nervous system.",
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
    title: "General Medicine",
    description: "Primary care services for patients of all ages.",
  },
  {
    icon: <Microscope className="h-6 w-6 text-blue-500" />,
    title: "Laboratory",
    description: "State-of-the-art diagnostic testing and analysis.",
  },
  {
    icon: <Baby className="h-6 w-6 text-pink-500" />,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
  },
  {
    icon: <Bone className="h-6 w-6 text-amber-500" />,
    title: "Orthopedics",
    description: "Treatment for conditions affecting bones, joints, ligaments, and muscles.",
  },
  {
    icon: <Eye className="h-6 w-6 text-cyan-500" />,
    title: "Ophthalmology",
    description: "Comprehensive eye care and vision services.",
  },
  {
    icon: <Activity className="h-6 w-6 text-green-500" />,
    title: "Emergency Care",
    description: "24/7 emergency medical services for critical conditions.",
  },
]

export default function ServicesSection() {
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
    <section className="w-full py-12 md:py-24 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a wide range of medical services to meet all your healthcare needs.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full bg-gray-100 p-3">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-500">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
