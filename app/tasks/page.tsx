"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/app/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { FaTasks } from "react-icons/fa";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Tasks() {
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(`/login`);
    } else {
      const q = query(
        collection(db, `users/${user.uid}/tasks`),
        orderBy(`createdAt`, `desc`)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const taskList: Task[] = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Task)
        );
        setTasks(taskList);
      });
      return unsubscribe;
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 flex items-center">
            <FaTasks className="mr-4" />
            My Tasks
          </h1>
        </header>

        <main className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {isFormVisible ? "Hide Form" : "Add New Task"}
            </button>
          </div>

          {isFormVisible && (
            <div className="mb-8">
              <TaskForm userId={user.uid} />
            </div>
          )}

          <TaskList tasks={tasks} userId={user.uid} />
        </main>
      </div>
    </div>
  );
}
