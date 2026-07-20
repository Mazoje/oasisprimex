// app/developers/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DevelopersPage() {
  return (
    <div className="flex-1 pb-24 pt-16">
      
      {/* SECTION 1: HERO & API QUICK START */}
      <section className="relative px-6 lg:px-8 border-b border-zinc-900/40 pb-16">
        <div className="absolute top-0 right-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-emerald-500/[0.02] blur-[100px]" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest">Documentation Core</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-white leading-none">
              Developer Sandbox
            </h1>
            <p className="mt-6 text-sm text-zinc-400 leading-7">
              Integrate Next-Gen transactional defenses with minimal overhead. The OasisPrimeX SDK collection exposes powerful cryptographic constructs via direct HTTP endpoints.
            </p>
            <div className="mt-8 flex gap-x-4">
              <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-500 font-medium text-xs rounded-lg px-4">
                Generate Sandbox Credentials
              </Button>
            </div>
          </div>

          {/* Right API Code Preview */}
          <div className="lg:col-span-3 border border-zinc-800/80 bg-zinc-950 rounded-2xl p-5 shadow-2xl overflow-hidden relative group max-w-2xl w-full">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">POST /v1/payloads/seal</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-600">TypeScript / Next.js</span>
            </div>
            
            <pre className="font-mono text-[11px] text-zinc-300 overflow-x-auto p-2 bg-[#02050b] rounded-xl border border-zinc-900/60 leading-5">
{`import { OasisClient } from "@oasisprimex/sdk";

const oasis = new OasisClient({ apiKey: process.env.OPX_SECRET_KEY });

const securePayload = await oasis.payloads.seal({
  transactionId: "tx_77x_9841",
  amount: 250000,
  currency: "NGN",
  routingNode: "NODE-PRIMARY-ZULU",
  hardwareSignature: "ed25519_sig_991ab..."
});`}
            </pre>
          </div>

        </div>
      </section>

      {/* SECTION 2: ARCHITECTURE PROTOCOLS & ENVIRONMENTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xl font-bold text-white tracking-wide">Programmatic Tooling Matrix</h2>
          <p className="text-xs text-zinc-500 mt-2">SDK libraries built to mirror enterprise platform environments seamlessly.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Native Edge Wrappers", desc: "Lightweight plugins crafted explicitly for Next.js Middleware, Cloudflare Workers, and Vercel Edge networks to resolve tokens before computing layouts." },
            { title: "Webhook Telemetry Streams", desc: "Receive real-time alerts for every transaction change. Every alert comes with a secure digital signature to guarantee it arrives safely without being tampered with." },
            { title: "Automated Replay Protection", desc: "Automatically checks unique, one-time security codes for every network request. This stops attackers from copying or repeating your old transactions, keeping your integration completely safe out of the box." }
          ].map((feat, i) => (
            <Card key={i} className="border-zinc-800/80 bg-zinc-950 text-zinc-100 relative group overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <CardHeader>
                <CardTitle className="text-sm font-bold text-white">{feat.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs leading-5 text-zinc-400">
                {feat.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: SYSTEM PARAMETERS REFERENCE TABLE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="border border-zinc-800/50 bg-zinc-950 rounded-2xl p-6 lg:p-8">
          <h3 className="text-sm font-bold text-white tracking-wide mb-6 font-mono text-cyan-400 uppercase">[Core HTTP Reference Statuses]</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-zinc-900 text-zinc-500 text-[10px] uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Status Code</th>
                  <th className="pb-3 font-semibold">System Meaning</th>
                  <th className="pb-3 font-semibold">Automated Trigger Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/40 text-zinc-300">
                <tr>
                  <td className="py-4 text-emerald-400 font-bold">201 SEALED</td>
                  <td className="py-4">Cryptographic flight payload signature matches hardware matrix target.</td>
                  <td className="py-4 text-zinc-500">Forward settlement execution pipeline downstream.</td>
                </tr>
                <tr>
                  <td className="py-4 text-amber-400 font-bold">403 CHALLENGE</td>
                  <td className="py-4">Cellular telemetry logs suggest route drift or carrier spoof markers.</td>
                  <td className="py-4 text-zinc-500">Intercept transmission flight; drop SMS fallback validation hook.</td>
                </tr>
                <tr>
                  <td className="py-4 text-red-400 font-bold">422 REPLAY_DETECTED</td>
                  <td className="py-4">Temporal network nonce matches previous system flight log index.</td>
                  <td className="py-4 text-zinc-500">Blacklist authorization session token; trigger emergency alerts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}