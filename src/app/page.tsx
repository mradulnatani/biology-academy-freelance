"use client"
import Link from "next/link";
import Home from "~/components/Home"
import Navbar from "~/components/Navbar"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-100 text-black">
      <Navbar/>
      <Home/>
    </main>
  );
}
