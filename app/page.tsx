import { Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AppointmentForm from "@/components/appointment-form"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
                Book an Appointment
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Schedule Your Visit Today</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our online appointment system makes it easy to schedule a visit with our healthcare professionals.
                Choose your preferred doctor, date, and time.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
                <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-100">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Button>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-lg">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
