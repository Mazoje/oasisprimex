// app/infrastructure/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfrastructurePage() {
  return (
    <div className="flex-1 pb-24 pt-16">
      
      {/* SECTION 1: HERO OUTLINE */}
      <section className="relative px-6 lg:px-8 border-b border-zinc-900/40 pb-16">
        <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.02] blur-[100px]" />
        
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Core Network</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
            Distributed Telemetry Engine
          </h1>
          <p className="mt-6 text-sm text-zinc-400 max-w-2xl leading-7">
           A highly reliable, multi-region clearing network built to process secure payment data across unstable mobile networks in under 15ms. OasisPrimeX separates your data verification from regional server dependencies.
            </p>
        </div>
      </section>

      {/* SECTION 2: TOPOLOGY GRID METRICS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { metric: "99.999%", label: "Core Uptime", detail: "Multi-region fallback clustering protects execution state pools dynamically." },
            { metric: "12ms", label: "Edge Latency", detail: "Localized termination centers bypass standard carrier network congestion loops." },
            { metric: "Zero", label: "Single Points of Failure", detail: "Fully mesh-routed topology guarantees continuous cryptographic signature mapping." }
          ].map((item, i) => (
            <div key={i} className="border border-zinc-800/80 bg-zinc-950 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-px h-8 bg-cyan-500/40" />
              <div className="text-3xl font-mono font-bold text-white tracking-tight">{item.metric}</div>
              <div className="text-[10px] font-bold text-cyan-400 mt-1 uppercase tracking-wider">{item.label}</div>
              <p className="text-xs text-zinc-500 mt-4 leading-5">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SYSTEM ARCHITECTURE LOGS & MODULE DETAILS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Block: Deep Technical Architecture */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Infrastructure Operations Matrix</h3>
            <p className="text-xs text-zinc-400 leading-6">
              Unlike classical middleware engines that poll downstream carrier configurations synchronously, the Oasis Prime Telemetry array isolates payload authorization paths using localized HSM hardware modules.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-zinc-800 bg-zinc-950 text-zinc-100">
                <CardHeader><CardTitle className="text-xs font-bold text-white uppercase tracking-wider">HSM Core Isolation</CardTitle></CardHeader>
                <CardContent className="text-xs text-zinc-400 leading-5">Private key validation arrays execution protocols strictly outside memory layers prone to hardware injection vectors.</CardContent>
              </Card>
              <Card className="border-zinc-800 bg-zinc-950 text-zinc-100">
                <CardHeader><CardTitle className="text-xs font-bold text-white uppercase tracking-wider">Volatile Routing Optimization</CardTitle></CardHeader>
                <CardContent className="text-xs text-zinc-400 leading-5">Proprietary logic paths swap data lines automatically when local cellular systems run out of bandwidth headroom.</CardContent>
              </Card>
            </div>
          </div>

          {/* Right Block: Dynamic Status Terminal Panel */}
          <div className="border border-zinc-800/80 bg-zinc-950 rounded-xl p-5 flex flex-col justify-between h-fit">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold">Node Telemetry status</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              </div>
              <ul className="mt-4 space-y-3 font-mono text-[10px] text-zinc-500">
                <li className="flex justify-between"><span>[ZULU-NODE-01]</span><span className="text-zinc-300">ONLINE</span></li>
                <li className="flex justify-between"><span>[YANKEE-NODE-02]</span><span className="text-zinc-300">ONLINE</span></li>
                <li className="flex justify-between"><span>[LEDGER-SYNC-01]</span><span className="text-emerald-400 font-bold">COMPLIANT</span></li>
                <li className="flex justify-between"><span>[HSM-ENCLAVE]</span><span className="text-cyan-400">SEALED</span></li>
              </ul>
            </div>
            <div className="mt-6 border-t border-zinc-900 pt-3 text-[9px] text-zinc-500 font-mono">
              System health verified according to standard enterprise service parameters.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}