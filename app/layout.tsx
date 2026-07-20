// app/layout.tsx
"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SecurityProvider } from "@/context/SecurityContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  // Added API Docs directly to the main navigation array
  const navigationLinks = [
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "SwipeX Secure", href: "/swipex-secure" },
    { label: "Developers", href: "/developers" },
    { label: "API Docs", href: "/docs" },
    { label: "Company", href: "/company" },
  ];

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-[#030712] text-zinc-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-zinc-950 flex flex-col relative`}>
        
        {/* GLOBAL BACKGROUND MASK */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-[#030712] bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <SecurityProvider>
          {/* STATIC HEADER ACCESSIBLE BY ALL PAGES */}
          <header className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-[#030712]/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
              
              {/* Logo */}
              <a href="/" className="flex items-center gap-x-2">
                <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
                <span className="font-mono text-sm font-bold tracking-wider text-white">OasisPrimeX</span>
              </a>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-x-8 text-xs font-semibold tracking-wide text-zinc-400">
                {navigationLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-white hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Action Buttons & Hamburger Toggle */}
              <div className="flex items-center gap-x-4">
                <a href="/sign-in" className="text-xs font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors">Sign In</a>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white md:hidden"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
              <div className="border-b border-zinc-900 bg-[#030712] px-6 py-4 md:hidden animate-fade-in">
                <nav className="flex flex-col gap-y-4 text-sm font-medium">
                  {navigationLinks.map((link) => (
                    <a 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-zinc-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </header>

          {/* PAGE CONTENT CONTAINER */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>

          {/* STATIC FOOTER ACCESSIBLE BY ALL PAGES */}
          <footer className="mt-auto border-t border-zinc-900/60 bg-[#030712] py-8 text-center text-xs text-zinc-600">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-y-4">
              <p>&copy; 2026 OasisPrimeX Infrastructure Technologies. All rights reserved.</p>
              <div className="flex gap-x-6 font-medium text-zinc-400/80">
                <a href="#" className="hover:text-cyan-400 transition-colors">Security Hub</a>
                <a href="/docs" className="hover:text-cyan-400 transition-colors">Developer Sandbox</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Regulatory Compliance</a>
              </div>
            </div>
          </footer>
        </SecurityProvider>

      </body>
    </html>
  );
}