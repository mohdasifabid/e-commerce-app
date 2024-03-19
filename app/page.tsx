"use client";
import { useRouter } from "next/navigation";
import InterestPage from "./categories/page";
import useAuth from "./lib/useAuth";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/categories");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return <main className="flex min-h-screen min-w-screen bg-white"></main>;
}
