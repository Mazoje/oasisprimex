"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMsg("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050911] text-white flex flex-col justify-center items-center px-6 py-24">
      <div className="max-w-xl text-center space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/50 rounded-full">
          Early Access
        </span>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Be first to experience the future of secure transactions.
        </h1>

        <p className="text-slate-400 text-lg max-w-lg mx-auto">
          Join our exclusive waitlist for early developer access, priority onboarding, and release updates.
        </p>

        {submitted ? (
          <div className="p-4 bg-cyan-950/40 border border-cyan-800/50 rounded-xl text-cyan-300 font-medium">
            ✨ You&apos;re on the list! Check your inbox for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-[#0a101d] border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}

        {errorMsg && (
          <p className="text-sm text-red-400 font-medium">{errorMsg}</p>
        )}

        {/* Subtext with discreet inline Admin Portal link */}
        <p className="text-xs text-slate-500">
          No spam. Unsubscribe at any time.{" "}
          <a 
            href="/admin" 
            className="hover:text-slate-400 transition-colors duration-150 underline decoration-slate-700 underline-offset-4 ml-1"
          >
            Admin Portal
          </a>
        </p>
      </div>
    </main>
  );
}