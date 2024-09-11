"use client"
import Link from "next/link";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import {Home} from "~/components/Home"
import Navbar from "~/components/Navbar"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-100 text-black">
      <SignedOut><SignInButton/><Home/></SignedOut>
      <SignedIn>
      <Navbar/>
      <Home/>
      </SignedIn>
    </main>
  );
}
