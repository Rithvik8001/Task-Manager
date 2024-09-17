"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth, googleProvider } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const emailResult = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const emailUser = emailResult.user;
      if (emailUser.email) {
        const isEmailAccountExist = await fetchSignInMethodsForEmail(
          auth,
          emailUser.email
        );
        if (isEmailAccountExist.length === 0) {
          setAlert(true);
          setTimeout(() => {
            setAlert(false), 5000;
          });
        } else {
          router.push("/tasks");
        }
      }
    } catch (error) {
      setError("Failed to log in. Please check your email and password.");
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (user.email) {
        const isAccountExist = await fetchSignInMethodsForEmail(
          auth,
          user.email
        );

        if (isAccountExist.length === 0) {
          setAlert(true);
          setTimeout(() => {
            setAlert(false), 5000;
          });
        } else {
          router.push(`/tasks`);
        }
      }
    } catch (error) {
      setError("Failed to log in with Google.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Alert variant="destructive">
              <AlertTitle>Account does not exist</AlertTitle>
              <AlertDescription>
                No account found for this Google account. Please sign up first.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <form onSubmit={handleEmailLogin}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full">
              Log In
            </Button>
            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Or</span>
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full mt-4"
              onClick={handleGoogleLogin}
            >
              Log in with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
