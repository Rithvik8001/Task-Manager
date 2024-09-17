"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  const router = useRouter();

  const myTasks = () => {
    router.push("/tasks");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
          Welcome Back!
        </h1>
        <p className="text-lg mb-6 text-gray-600">You are now logged in.</p>
        <button
          onClick={myTasks}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          View My Tasks
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
