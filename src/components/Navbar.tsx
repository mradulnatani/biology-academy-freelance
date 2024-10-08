import React, { useState, ReactNode, useRef } from 'react';
import Link from 'next/link';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link href={href} scroll={false} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200">
    {children}
  </Link>
);

interface DropdownItemProps {
  href: string;
  children: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => (
  <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 rounded-md transition-colors duration-200">
    {children}
  </Link>
);

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, setIsOpen, title, items }) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Add a small delay (200ms) before closing
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 focus:outline-none">
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10">
          {items.map((item: string, index: number) => (
            <DropdownItem
              key={index}
              href={item === "All Courses" ? "#course-cards" : `/${title.toLowerCase()}/${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </DropdownItem>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [coursesOpen, setCoursesOpen] = useState<boolean>(false);
  const [notesOpen, setNotesOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className='py-4 px-4 md:px-8 lg:px-16 bg-green-800 text-white shadow-lg fized'>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-center text-3xl font-bold text-white bg-green-950 h-10 w-10 rounded-full">BA</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-2 py-1 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <NavItem href="#home">Home</NavItem>
          <Dropdown
            isOpen={coursesOpen}
            setIsOpen={setCoursesOpen}
            title="Courses"
            items={["Botany", "Zoology", "Latest Notes", "All Courses"]}
          />
          <Dropdown
            isOpen={notesOpen}
            setIsOpen={setNotesOpen}
            title="Notes"
            items={["Recent Notes", "Popular Notes", "Create Note", "All Notes"]}
          />
          <NavItem href="#testpapers">Test Papers</NavItem>
          <NavItem href="#questions">Questions</NavItem>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-16 left-0 w-full bg-green-800 text-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
          <div className="flex flex-col items-center py-4 space-y-2">
            <NavItem href="#home">Home</NavItem>
            <Dropdown
              isOpen={coursesOpen}
              setIsOpen={setCoursesOpen}
              title="Courses"
              items={["Botany", "Zoology", "Latest Notes", "All Courses"]}
            />
            <Dropdown
              isOpen={notesOpen}
              setIsOpen={setNotesOpen}
              title="Notes"
              items={["Recent Notes", "Popular Notes", "Create Note", "All Notes"]}
            />
            <NavItem href="#testpapers">Test Papers</NavItem>
            <NavItem href="#questions">Questions</NavItem>
          </div>
        </div>

        <div className="ml-auto flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <NavItem href="/sign-in">
              <SignInButton>Sign In</SignInButton>
            </NavItem>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
