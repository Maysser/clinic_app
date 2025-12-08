"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Calendar, ClipboardList, FileText, Lock, User } from "lucide-react"
import Link from "next/link";

export default function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Patient Portal</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your medical records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Button variant="link" className="px-0 text-xs text-teal-600">
                        Forgot password?
                      </Button>
                    </div>
                    <Input id="password" required type="password" />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Sign In
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Button variant="link" className="px-0 text-teal-600">
                  Register
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <motion.div
        className="flex flex-col space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
          <p className="text-gray-500">Manage your health records and appointments</p>
        </div>
        <Tabs defaultValue="dashboard">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Upcoming Appointment</CardTitle>
                    <Calendar className="w-4 h-4 text-teal-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <p className="font-medium">Dr. Yasser Salhi</p>
                      <p className="text-gray-500">Cardiology</p>
                      <p className="text-gray-500">May 25, 2025 - 10:30 AM</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Reschedule
                    </Button>
                    <Button variant='valid' size="sm" className="w-full">
                      <Link href="/payment">
                        Pay
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Recent Test Results</CardTitle>
                    <ClipboardList className="w-4 h-4 text-teal-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <p className="font-medium">Blood Work Analysis</p>
                      <p className="text-gray-500">Completed on May 15, 2025</p>
                      <p className="text-green-600 font-medium">Results: Normal</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Health Metrics</CardTitle>
                    <Activity className="w-4 h-4 text-teal-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-500">Blood Pressure:</p>
                        <p>120/80 mmHg</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500">Heart Rate:</p>
                        <p>72 bpm</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500">Weight:</p>
                        <p>165 lbs</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Update Metrics
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="appointments" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>View and manage your upcoming and past appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-teal-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Upcoming Appointments</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Yasser Salhi - Cardiology</p>
                          <p className="text-sm text-gray-500">May 25, 2025 - 10:30 AM</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="valid" size="sm" asChild>
                            <Link href="/payment">
                              Pay 
                            </Link> 
                          </Button>    
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="destructive" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Foulen El Fouleni - Neurology</p>
                          <p className="text-sm text-gray-500">June 10, 2025 - 2:00 PM</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="valid" size="sm" asChild>
                            <Link href="/payment">
                              Pay
                            </Link> 
                          </Button>                          
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="destructive" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Past Appointments</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Aziz Boudriga - orthopedic surgeon</p>
                          <p className="text-sm text-gray-500">April 15, 2025 - 11:00 AM</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Dr. Ilyes Manssori - Tbib Sidi Chikh</p>
                          <p className="text-sm text-gray-500">March 22, 2025 - 9:30 AM</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Schedule New Appointment</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="records" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Medical Records</CardTitle>
                <CardDescription>Access your complete medical history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Annual Physical Examination</p>
                        <p className="text-sm text-gray-500">January 15, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Blood Work Analysis</p>
                        <p className="text-sm text-gray-500">May 15, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Cardiology Consultation</p>
                        <p className="text-sm text-gray-500">April 15, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Vaccination Record</p>
                        <p className="text-sm text-gray-500">February 10, 2025</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="prescriptions" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Prescriptions</CardTitle>
                <CardDescription>View and manage your current and past prescriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-teal-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Current Prescriptions</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-medium">Lisinopril 10mg</p>
                          <Button variant="outline" size="sm">
                            Refill
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500">Take once daily</p>
                        <p className="text-sm text-gray-500">Prescribed by: Dr. Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Refills remaining: 2</p>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-medium">Atorvastatin 20mg</p>
                          <Button variant="outline" size="sm">
                            Refill
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500">Take once daily at bedtime</p>
                        <p className="text-sm text-gray-500">Prescribed by: Dr. Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Refills remaining: 3</p>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <h3 className="font-medium">Past Prescriptions</h3>
                    </div>
                    <div className="divide-y">
                      <div className="p-4">
                        <p className="font-medium">Amoxicillin 500mg</p>
                        <p className="text-sm text-gray-500">Take three times daily for 10 days</p>
                        <p className="text-sm text-gray-500">Prescribed by: Dr. Michael Williams</p>
                        <p className="text-sm text-gray-500">Completed: March 15, 2025</p>
                      </div>
                      <div className="p-4">
                        <p className="font-medium">Prednisone 10mg</p>
                        <p className="text-sm text-gray-500">Tapering dose as directed</p>
                        <p className="text-sm text-gray-500">Prescribed by: Dr. Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Completed: February 5, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profile" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Manage your personal information and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-teal-600" />
                      Personal Information
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" defaultValue="01/15/1980" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main St, Anytown, USA 12345" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <Lock className="h-4 w-4 text-teal-600" />
                      Security
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-teal-600 hover:bg-teal-700">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
