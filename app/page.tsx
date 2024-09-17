"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Lock, Rocket } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <div
      className={`min-h-screen bg-[#FAFAFA] text-gray-900 ${inter.className}`}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Simplify your tasks,
              <br />
              amplify your productivity
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              TaskMaster helps you manage daily tasks effortlessly. Stay
              organized and accomplish more with our intuitive tool.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              <Link href="/signup" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              "Create and organize tasks easily",
              "Track progress with a single click",
              "Access your tasks from anywhere",
              "Collaborate with team members",
              "Secure authentication system",
              "Intuitive and responsive interface",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Why TaskMaster?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-500" />,
                  title: "Effortless Management",
                  description:
                    "Quickly add, update, and complete tasks with our intuitive interface.",
                  color: "bg-yellow-50",
                },
                {
                  icon: <Lock className="w-8 h-8 text-blue-500" />,
                  title: "Secure & Accessible",
                  description:
                    "Your tasks are protected and available wherever you go.",
                  color: "bg-blue-50",
                },
                {
                  icon: <Rocket className="w-8 h-8 text-green-500" />,
                  title: "Instant Start",
                  description:
                    "Sign up in seconds and begin organizing your tasks right away.",
                  color: "bg-green-50",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-semibold ml-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.main>
      </div>

      <footer className="mt-20 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © 2024 TaskMaster. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
