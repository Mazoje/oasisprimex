// app/company/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompanyPage() {
  return (
    <div className="flex-1 pb-24 pt-16">
      
      {/* SECTION 1: HERO & MISSION */}
      <section className="relative px-6 lg:px-8 border-b border-zinc-900/40 pb-16">
        <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.015] blur-[100px]" />
        
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold bg-gradient-to-r from-zinc-400 to-zinc-200 bg-clip-text text-transparent uppercase tracking-widest">Corporate Profile</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
            Architecting Financial Trust
          </h1>
          <p className="mt-6 text-sm text-zinc-400 max-w-2xl leading-7">
           OasisPrimeX was founded by security researchers and infrastructure engineers. We build the core software that protects global payment networks, making sure every transaction goes exactly where it belongs safely and accurately.
             </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
  <button className="px-6 py-3 font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-500">
    Explore the Docs
  </button>
  <button className="px-6 py-3 font-medium text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-800">
    Contact Sales
  </button>
</div>
      </section>

      {/* SECTION 2: OPERATIONAL PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xl font-bold text-white tracking-wide">Core Operational Vectors</h2>
          <p className="text-xs text-zinc-500 mt-2">The engineering values that govern our architectural pipeline.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Mathematical Determinism", desc: "We secure every internal system with mathematically proven encryption, replacing unreliable manual checks with strict, automated security." },
            { title: "Zero Boundary Trust", desc: "We never assume any connection is safe. Security requirements change continuously, forcing every single network request to constantly prove its identity before moving forward." },
            { title: "Infrastructure Resilience", desc: "Instead of relying entirely on shared, generic cloud servers, we operate our own dedicated, highly secure physical hardware to guarantee maximum reliability and protection for your data." }
          ].map((principle, i) => (
            <Card key={i} className="border-zinc-800/80 bg-zinc-950 text-zinc-100 relative group overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-800 group-hover:bg-cyan-500/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <CardHeader>
                <CardTitle className="text-sm font-bold text-white">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs leading-5 text-zinc-400">
                {principle.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: SCALE & REGULATORY FOOTPRINT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">Global Compliance Infrastructure</h3>
            <p className="text-xs text-zinc-400 leading-6">
              OasisPrimeX maintains redundant system compliance registries across primary tier-1 financial sectors, interfacing safely with existing legacy clearance structures.
            </p>
            <div className="pt-2">
              <Button size="sm" className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 text-xs px-4">
                Review Audit Reports
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 border border-zinc-800/60 bg-gradient-to-b from-zinc-950 to-[#030712] rounded-xl p-6">
            <div className="grid grid-cols-2 gap-6 font-mono text-xs">
              <div className="border-b border-zinc-900 pb-4">
                <div className="text-[10px] text-zinc-500 uppercase">Operational Centers</div>
                <div className="text-zinc-200 mt-1 font-bold">London // Toronto // Singapore</div>
              </div>
              <div className="border-b border-zinc-900 pb-4">
                <div className="text-[10px] text-zinc-500 uppercase">System Audits</div>
                <div className="text-emerald-400 mt-1 font-bold">SOC2 Type II // PCI-DSS v4.0</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase">Settlement Clearance</div>
                <div className="text-zinc-200 mt-1 font-bold">FedNow // Instant SEPA // NIBSS</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase">Network Volume Capacity</div>
                <div className="text-cyan-400 mt-1 font-bold">100k+ sustained TPS</div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}