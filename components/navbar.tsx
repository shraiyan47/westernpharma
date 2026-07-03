'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Mail, Share2,  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0 flex items-center">
            <Image src="/Western Pharma logo.png" alt="Western Pharma Logo" width={140} height={50} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-primary hover:text-secondary transition-colors text-sm font-semibold relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
<h1 hidden>Western Pharma - Your Trusted Pharmaceutical Partner</h1>
          {/* Social Icons and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <FaFacebookF className="h-5 w-5 text-[#12355B] hover:text-[#0E9F6E]" />
              </a>
              <a href="mailto:info@westernpharma.net" className="text-primary hover:text-secondary transition-colors">
                <MdEmail className="h-5 w-5 text-[#12355B] hover:text-[#0E9F6E]" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-card"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border bg-card">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-primary hover:text-secondary hover:bg-muted rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-4 px-3 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <FaFacebookF className="h-5 w-5 text-[#12355B] hover:text-[#0E9F6E]" />
              </a>
              <a href="mailto:info@westernpharma.net" className="text-primary hover:text-secondary transition-colors">
                <MdEmail className="h-5 w-5 text-[#12355B] hover:text-[#0E9F6E]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
