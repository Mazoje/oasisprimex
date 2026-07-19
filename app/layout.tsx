// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SecurityProvider } from "@/context/SecurityContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OasisPrimeX | Secure Payment Architecture",
  description: "Next-generation cryptographic infrastructure for modern payment processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-[#030712] text-zinc-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-zinc-950 flex flex-col relative`}>
        
        {/* GLOBAL BACKGROUND MASK */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-[#030712] bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <SecurityProvider>
          {/* STATIC HEADER ACCESSIBLE BY ALL PAGES */}
          <header className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-[#030712]/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
              <a href="/" className="flex items-center gap-x-2">
                <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
                <span className="font-mono text-sm font-bold tracking-wider text-white">OasisPrimeX</span>
              </a>
              
              <nav className="hidden md:flex items-center gap-x-8 text-xs font-semibold tracking-wide text-zinc-400">
                <a href="/infrastructure" className="text-white hover:text-cyan-400 transition-colors">Infrastructure</a>
                <a href="/swipex-secure" className="text-white hover:text-cyan-400 transition-colors">SwipeX Secure</a>
                <a href="/developers" className="text-white hover:text-cyan-400 transition-colors">Developers</a>
                <a href="/company" className="text-white hover:text-cyan-400 transition-colors">Company</a>
              </nav>

              <div className="flex items-center gap-x-4">
                <a href="/sign-in" className="hidden sm:block text-xs font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors">Sign In</a>
                <a 
                  href="/docs" 
                  className="bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white font-medium text-xs rounded-lg px-4 py-1.5 transition-colors"
                >
                  View API Docs
                </a>
              </div>
            </div>
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