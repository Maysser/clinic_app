"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Brain,
  Heart,
  Stethoscope,
  Microscope,
  Baby,
  Bone,
  Eye,
  Pill,
  Scissors,
  SmileIcon as Tooth,
  TreesIcon as Lungs,
} from "lucide-react"

export default function ServicesPage() {
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

  const departments = {
    medical: [
      {
        icon: <Heart className="h-6 w-6 text-red-500" />,
        title: "Cardiology",
        description:
          "Comprehensive heart care with advanced diagnostic and treatment options for cardiovascular conditions.",
      },
      {
        icon: <Brain className="h-6 w-6 text-purple-500" />,
        title: "Neurology",
        description:
          "Expert care for conditions affecting the brain, spine, and nervous system with cutting-edge treatments.",
      },
      {
        icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
        title: "General Medicine",
        description:
          "Primary care services for patients of all ages, focusing on preventive care and overall wellness.",
      },
      {
        icon: <Lungs className="h-6 w-6 text-blue-500" />,
        title: "Pulmonology",
        description:
          "Specialized care for respiratory conditions and lung diseases with advanced breathing treatments.",
      },
    ],
    surgical: [
      {
        icon: <Scissors className="h-6 w-6 text-gray-500" />,
        title: "General Surgery",
        description:
          "A wide range of surgical procedures performed by highly skilled surgeons using minimally invasive techniques.",
      },
      {
        icon: <Bone className="h-6 w-6 text-amber-500" />,
        title: "Orthopedics",
        description:
          "Treatment for conditions affecting bones, joints, ligaments, and muscles, including joint replacements.",
      },
      {
        icon: <Eye className="h-6 w-6 text-cyan-500" />,
        title: "Ophthalmology",
        description:
          "Comprehensive eye care and vision services, including cataract surgery and laser vision correction.",
      },
      {
        icon: <Tooth className="h-6 w-6 text-blue-400" />,
        title: "Dental Surgery",
        description: "Advanced dental procedures including implants, extractions, and reconstructive dental surgery.",
      },
    ],
    diagnostic: [
      {
        icon: <Microscope className="h-6 w-6 text-blue-500" />,
        title: "Laboratory",
        description: "State-of-the-art diagnostic testing and analysis with quick and accurate results.",
      },
      {
        icon: <Activity className="h-6 w-6 text-green-500" />,
        title: "Radiology",
        description: "Advanced imaging services including X-ray, CT, MRI, and ultrasound with expert interpretation.",
      },
      {
        icon: <Heart className="h-6 w-6 text-pink-500" />,
        title: "Cardiac Diagnostics",
        description: "Comprehensive heart testing including ECG, stress tests, and echocardiograms.",
      },
      {
        icon: <Brain className="h-6 w-6 text-violet-500" />,
        title: "Neurological Testing",
        description:
          "Advanced diagnostics for brain and nervous system conditions including EEG and nerve conduction studies.",
      },
    ],
    specialized: [
      {
        icon: <Baby className="h-6 w-6 text-pink-500" />,
        title: "Pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents with a child-friendly approach.",
      },
      {
        icon: <Pill className="h-6 w-6 text-orange-500" />,
        title: "Pharmacy",
        description:
          "Full-service pharmacy with prescription medications, over-the-counter products, and medication counseling.",
      },
      {
        icon: <Activity className="h-6 w-6 text-green-500" />,
        title: "Emergency Care",
        description: "24/7 emergency medical services for critical conditions with rapid response times.",
      },
      {
        icon: <Heart className="h-6 w-6 text-red-400" />,
        title: "Rehabilitation",
        description: "Comprehensive rehabilitation services including physical, occupational, and speech therapy.",
      },
    ],
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Services</div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Comprehensive Healthcare Solutions
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We offer a wide range of medical services to meet all your healthcare needs with state-of-the-art facilities
          and expert care.
        </p>
      </div>

      <Tabs defaultValue="medical" className="w-full" ref={ref}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="medical">Medical</TabsTrigger>
          <TabsTrigger value="surgical">Surgical</TabsTrigger>
          <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
          <TabsTrigger value="specialized">Specialized</TabsTrigger>
        </TabsList>
        <TabsContent value="medical" className="pt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {departments.medical.map((service, index) => (
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
        </TabsContent>
        <TabsContent value="surgical" className="pt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {departments.surgical.map((service, index) => (
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
        </TabsContent>
        <TabsContent value="diagnostic" className="pt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {departments.diagnostic.map((service, index) => (
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
        </TabsContent>
        <TabsContent value="specialized" className="pt-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {departments.specialized.map((service, index) => (
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
        </TabsContent>
      </Tabs>

      <div className="mt-24 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 md:p-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
              Patient-Centered Care
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Commitment to Excellence</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At MediCare, we're committed to providing the highest quality healthcare with compassion and expertise.
              Our state-of-the-art facilities and dedicated team ensure you receive the best care possible.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Board-certified medical professionals</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>State-of-the-art medical equipment</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Personalized treatment plans</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>24/7 emergency care services</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/images/med_team3.jpg"
              alt="Medical team collaborating"
              className="rounded-xl object-cover w-full aspect-video shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-2">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium">Patient Satisfaction</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
