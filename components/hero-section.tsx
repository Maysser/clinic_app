"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, HeartPulse, Shield } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Modern Healthcare</div>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Innovative Care for <span className="text-teal-600">Better Health</span>
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Experience healthcare reimagined with our team of dedicated professionals and cutting-edge technology.
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button className="bg-teal-600 hover:bg-teal-700">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-100">
                Our Services
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-1">
                <HeartPulse className="h-4 w-4 text-teal-600" />
                <span className="text-sm text-gray-500">Expert Care</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-teal-600" />
                <span className="text-sm text-gray-500">24/7 Service</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-teal-600" />
                <span className="text-sm text-gray-500">Trusted Professionals</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative lg:ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-r from-teal-200 to-cyan-200 blur-3xl opacity-20 absolute -top-20 -right-20"></div>
            <div className="relative z-20 overflow-hidden rounded-2xl border bg-white shadow-xl">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/sthetoscope.avif"
                  alt="A stethoscope"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">Expert Medical Staff</h3>
                <p className="text-sm opacity-90">Dedicated to providing the best care possible</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 z-10 rounded-lg border bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-500 p-1">
                  <HeartPulse className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">98% Patient Satisfaction</p>
                  <p className="text-xs text-gray-500">Based on 10,000+ reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
