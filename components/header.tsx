"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <HeartbeatLogo />
          <span className="text-xl font-bold">SalhiMedical</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                pathname === item.href ? "text-teal-600" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/patient-portal" className="text-sm font-medium text-gray-600 hover:text-teal-600">
            LOG IN
          </Link>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Phone className="mr-2 h-4 w-4" />
            Emergency: 198
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-4 border-b">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <HeartbeatLogo />
                  <span className="text-xl font-bold">MediCare</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-teal-600 ${
                      pathname === item.href ? "text-teal-600" : "text-gray-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 mb-4">Book Appointment</Button>
                <Button variant="outline" className="w-full">
                  Patient Portal
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function HeartbeatLogo() {
  return (
    <div className="relative w-8 h-8">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full text-teal-600"
      >
        <motion.path
          d="M2 12H5.5L7.5 8L10.5 16L12.5 12H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 1 }}
        />
        <motion.path
          d="M16 12H18L20 8L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            repeatDelay: 1,
            delay: 0.5,
          }}
        />
      </motion.svg>
    </div>
  )
}
