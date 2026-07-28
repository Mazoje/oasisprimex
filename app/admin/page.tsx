"use client";

import { useState } from "react";

interface Signup {
  id: string;
  email: string;
  created_at: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid password");
        setLoading(false);
        return;
      }

      setSignups(data.signups);
      setAuthenticated(true);
    } catch (err) {
      setError("Failed to fetch records.");
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Email,Joined At"]
        .concat(signups.map((s) => `${s.id},${s.email},${s.created_at}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `oasisprimex_waitlist_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-[#050911] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold">OasisPrimeX Admin</h1>
            <p className="text-sm text-slate-400">Waitlist Management Dashboard</p>
          </div>
          {authenticated && (
            <button
              onClick={exportCSV}
              className="px-4 py-2 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition"
            >
              Export CSV
            </button>
          )}
        </header>

        {!authenticated ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4 pt-12">
            <h2 className="text-lg font-semibold text-center">Admin Authentication</h2>
            <input
              type="password"
              placeholder="Enter Admin Passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0a101d] border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            {error && <p className="text-sm text-red-400 text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Access Dashboard"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm text-slate-400">
              <span>Total Registrations: <strong className="text-cyan-400">{signups.length}</strong></span>
            </div>

            <div className="border border-slate-800 rounded-xl overflow-hidden bg-[#0a101d]">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900/60 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">Email</th>
                    <th className="p-4">Joined Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {signups.map((signup) => (
                    <tr key={signup.id} className="hover:bg-slate-900/30">
                      <td className="p-4 font-mono text-cyan-300">{signup.email}</td>
                      <td className="p-4 text-slate-400">
                        {new Date(signup.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}