"use client";

import Link from "next/link";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          TaskMaster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-10 text-gray-600"
        >
          Organize your life, boost your productivity, and achieve your goals
          with our minimal task management tool.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg">
            <Link href="/signup">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
