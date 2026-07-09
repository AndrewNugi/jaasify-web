import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1C3462] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              JaaSify
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              An engineering practice building software infrastructure for the continent and beyond.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/jaasify-technology-group-limited-131195376" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><FaLinkedinIn size={16} /></a>
              <a href="https://x.com/Jaasify" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><FaXTwitter size={16} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/#services" className="text-sm text-white/70 hover:text-white transition-colors">CIO as a Service</Link></li>
              <li><Link href="/#services" className="text-sm text-white/70 hover:text-white transition-colors">Software Engineering</Link></li>
              <li><Link href="/#services" className="text-sm text-white/70 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="/#services" className="text-sm text-white/70 hover:text-white transition-colors">AI Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Industries</h4>
            <ul className="space-y-2.5">
              <li><Link href="/industries/banking" className="text-sm text-white/70 hover:text-white transition-colors">Banking</Link></li>
              <li><Link href="/industries/insurance" className="text-sm text-white/70 hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/industries/cyber-security" className="text-sm text-white/70 hover:text-white transition-colors">Cyber Security</Link></li>
              <li><Link href="/industries/techco" className="text-sm text-white/70 hover:text-white transition-colors">TechCo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:info@jaasify.com" className="text-sm text-white/70 hover:text-white transition-colors">info@jaasify.com</a></li>
              <li><a href="tel:+254713666622" className="text-sm text-white/70 hover:text-white transition-colors">+254 713 666 622</a></li>
              <li><Link href="/contact" className="text-sm text-[#39BFE1] hover:text-white transition-colors">Send a message →</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} JaaSify Technologies — Registered NBO, KE</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
