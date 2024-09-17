"use client";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "@/app/config/firebase";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface TaskFormProps {
  userId: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ userId }) => {
  const [newTask, setNewTask] = useState("");
  const [user] = useAuthState(auth);

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim() || !user) return;
    try {
      await addDoc(collection(db, `users/${userId}/tasks`), {
        title: newTask,
        completed: false,
        createdAt: new Date(),
      });
      setNewTask("");
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto mt-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={addTask} className="flex items-center space-x-2">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What do you need to do?"
          className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Button
          type="submit"
          className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add
        </Button>
      </form>
    </motion.div>
  );
};

export default TaskForm;
