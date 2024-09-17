import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  taskItem: Task;
  userId: string;
}

const TaskItem = ({ taskItem, userId }: TaskItemProps) => {
  const toggleTask = async () => {
    await updateDoc(doc(db, `users/${userId}/tasks/${taskItem.id}`), {
      completed: !taskItem.completed,
    });
  };

  const deleteTask = async () => {
    await deleteDoc(doc(db, `users/${userId}/tasks/${taskItem.id}`));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="mb-3"
    >
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200">
        <div className="flex items-center space-x-3 flex-grow">
          <Checkbox
            checked={taskItem.completed}
            onCheckedChange={toggleTask}
            className="border-gray-300"
          />
          <span
            className={`text-base ${
              taskItem.completed
                ? "line-through text-gray-400"
                : "text-gray-700"
            }`}
          >
            {taskItem.title}
          </span>
        </div>
        <button
          onClick={deleteTask}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default TaskItem;
