"use client";

import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../components/ui/card";
import { motion } from "framer-motion";

export default function Tasks() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Your Tasks
      </motion.h1>
      <motion.ul
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[1, 2, 3].map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Example Task {item}</CardTitle>
                <CardDescription>
                  This is a placeholder task description
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline">Mark as Complete</Button>
              </CardFooter>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button>Add New Task</Button>
      </motion.div>
    </div>
  );
}
