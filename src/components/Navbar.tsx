import React, { useState, ReactNode } from 'react'
import Link from 'next/link'

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link href={href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200">
    {children}
  </Link>
)

interface DropdownItemProps {
  href: string;
  children: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => (
  <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 rounded-md transition-colors duration-200">
    {children}
  </Link>
)

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, setIsOpen, title, items }) => (
  <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
    <button
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 focus:outline-none"
    >
      {title}
    </button>
    {isOpen && (
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10">
        {items.map((item: string, index: number) => (
          <DropdownItem key={index} href={`/${title.toLowerCase()}/${item.toLowerCase().replace(' ', '-')}`}>
            {item}
          </DropdownItem>
        ))}
      </div>
    )}
  </div>
)

const Navbar: React.FC = () => {
  const [coursesOpen, setCoursesOpen] = useState<boolean>(false)
  const [notesOpen, setNotesOpen] = useState<boolean>(false)

  return (
    <nav className='py-4 px-4 md:px-8 lg:px-16 bg-green-800 text-white shadow-lg'>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-4">
        <NavItem href="/">Home</NavItem>
        
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
        
        <NavItem href="/testpapers">Test Papers</NavItem>
        <NavItem href="/questions">Questions</NavItem>
      </div>
    </nav>
  )
}

export default Navbar