
import React from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut
} from '@clerk/nextjs';
import { Home } from "~/components/Home";

const SigningPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-green-800 text-white py-6 w-full text-center shadow-md">
        <h1 className="text-4xl font-extrabold">Welcome to E-Biology Academy</h1>
        <p className="text-lg mt-2">Your gateway to a world of knowledge in biology</p>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <SignedOut>
          <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
            <Home />
            <p className="text-lg mb-6 mt-4">Please sign in to continue</p>
            <div
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out"
            >
              <SignInButton/>
            </div>
          </div>
        </SignedOut>
      </main>
    </div>
  );
}

export default SigningPage;
