import React from 'react';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Home } from '~/components/Home';

const SigningPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="bg-green-800 text-white py-6 w-full text-center shadow-md flex items-center justify-between px-4">
        <div className="flex-1">
          <h1 className="text-4xl  pl-24 font-extrabold md:text-5xl">Welcome to E-Biology Academy</h1>
          <p className="text-lg mt-2 pl-24 md:text-xl">Your gateway to a world of knowledge in biology</p>
        </div>
        <div className="flex items-center pr-20">
          <SignedOut>
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out"
            >
              <SignInButton />
            </button>
          </SignedOut>
          <SignedIn>
            <p className="ml-4 text-lg">Welcome back!</p>
          </SignedIn>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Home />
        <SignedOut>
          <p className="text-lg mb-6 mt-4 text-gray-700">Please sign in to continue</p>
        </SignedOut>
      </main>
    </div>
  );
};

export default SigningPage;
