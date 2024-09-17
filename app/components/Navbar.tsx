"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[10vh] bg-white border-b border-gray-200 flex items-center"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-gray-800">
          TaskMaster
        </Link>
        <div className="space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
