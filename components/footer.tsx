import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                  <path
                    d="M2 12H5.5L7.5 8L10.5 16L12.5 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 12H18L20 8L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">SalhiMedical</span>
            </Link>
            <p className="text-sm mb-4">
              Providing innovative healthcare solutions with a focus on patient comfort and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-sm hover:text-teal-400 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-sm hover:text-teal-400 transition-colors">
                  LOG IN
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/departments/cardiology" className="text-sm hover:text-teal-400 transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/departments/neurology" className="text-sm hover:text-teal-400 transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/departments/orthopedics" className="text-sm hover:text-teal-400 transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/departments/pediatrics" className="text-sm hover:text-teal-400 transition-colors">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="/departments/ophthalmology" className="text-sm hover:text-teal-400 transition-colors">
                  Ophthalmology
                </Link>
              </li>
              <li>
                <Link href="/departments/general-medicine" className="text-sm hover:text-teal-400 transition-colors">
                  General Medicine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-teal-500 shrink-0 mt-0.5" />
                <span className="text-sm">123 Healthcare Avenue, Medical District, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-500 shrink-0" />
                <span className="text-sm">+216 55 123 457</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-500 shrink-0" />
                <span className="text-sm">info@salhimedical-hospital.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Salhi Medical Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
