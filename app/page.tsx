"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 ${inter.className}`}>
      <div className="container mx-auto px-4 py-16">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 leading-tight relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Simplify your tasks,
              </span>
              <br />
              <span className="relative z-10">
                amplify your productivity
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-yellow-300"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="text-xl mb-10 text-gray-600 max-w-2xl">
              TaskMaster helps you manage daily tasks effortlessly. Stay
              organized and accomplish more with our intuitive tool.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Link href="/signup" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                text: "Create and organize tasks easily",
              },
              {
                icon: <ArrowRight className="w-6 h-6 text-blue-500" />,
                text: "Track progress with a single click",
              },
              {
                icon: <Shield className="w-6 h-6 text-purple-500" />,
                text: "Secure authentication system",
              },
              {
                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                text: "Intuitive and responsive interface",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-white p-2 rounded-full shadow-sm">
                  {feature.icon}
                </div>
                <span className="text-gray-700 text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center relative inline-block">
              Why TaskMaster?
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-pink-300"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="currentColor" />
              </svg>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-10 h-10 text-green-500" />,
                  title: "Effortless Management",
                  description:
                    "Quickly add, update, and complete tasks with our intuitive interface.",
                },
                {
                  icon: <Shield className="w-10 h-10 text-purple-500" />,
                  title: "Secure & Accessible",
                  description:
                    "Your tasks are protected and available wherever you go.",
                },
                {
                  icon: <Zap className="w-10 h-10 text-yellow-500" />,
                  title: "Instant Start",
                  description:
                    "Sign up in seconds and begin organizing your tasks right away.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-50 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.main>
      </div>

      <footer className="mt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
          © 2024 TaskMaster. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
