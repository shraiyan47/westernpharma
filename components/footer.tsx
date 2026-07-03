import Link from 'next/link'
import Image from 'next/image'
import { Mail, Share2 } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image src="/logo.png" alt="Western Pharma" width={140} height={50} className="h-24 w-auto mb-4" />
            <p className="text-white/80 text-sm">Medicine Whole Seller & Commission Agent</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-white/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-white/70 hover:text-accent transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/70">
                <span className="font-medium text-white">Phone:</span> <a href="tel:01711980987" className="hover:text-accent transition-colors">01711-980987</a>
              </p>
              <p className="text-white/70">
                <span className="font-medium text-white">Email:</span>{' '}
                <a href="mailto:info@westernpharma.net" className="hover:text-accent transition-colors">
                  info@westernpharma.net
                </a>
              </p>
              <p className="text-white/70">
                <span className="font-medium text-white">City:</span> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-accent hover:text-white transition-all rounded-full p-2"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5 text-[#12355B] hover:text-[#0E9F6E]" />
              </a>
              <a
                href="mailto:info@westernpharma.net"
                className="bg-white text-primary hover:bg-accent hover:text-white transition-all rounded-full p-2"
                aria-label="Email"
              >
                <MdEmail className="h-5 w-5 text-[#12355B] hover:text-[#0E9F6E]" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Western Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
