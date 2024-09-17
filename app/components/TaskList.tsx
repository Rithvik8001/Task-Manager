"use client";

import React from "react";
import TaskItem from "@/app/components/TaskItem";
import { motion } from "framer-motion";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  userId: string;
}

export default function TaskList({ tasks, userId }: TaskListProps) {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-md mx-auto mt-8 space-y-2"
    >
      {tasks.map((task, index) => (
        <motion.li
          key={task.id}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white shadow-sm rounded-md overflow-hidden"
        >
          <TaskItem taskItem={task} userId={userId} />
        </motion.li>
      ))}
      {tasks.length === 0 && (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 py-4"
        >
          No tasks yet. Add one to get started.
        </motion.li>
      )}
    </motion.ul>
  );
}
