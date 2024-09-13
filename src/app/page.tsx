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
import Footer from "~/components/Footer";
import SigningPage from "~/components/SigningPage";
import {Home} from "~/components/Home"
import Navbar from "~/components/Navbar"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-700  text-black">
      <SignedOut><SigningPage/></SignedOut>
      <SignedIn>
      <Navbar/>
      <Home/>
      </SignedIn>
      <Footer/>
    </main>
  );
}
