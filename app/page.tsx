// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConsoleHeaderControl } from "@/components/ConsoleHeaderControl";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#030712]">
      
      {/* GLOBAL CYBER STRUCTURAL GRID MASK */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[#030712] bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      

      {/* SECTION 1: HERO (FORCED SPLIT LAYOUT WITH SIDE-BY-SIDE MOCKUP) */}
      <section className="relative flex min-h-[85vh] flex-col justify-center px-6 py-20 lg:px-8 overflow-hidden">
        
        {/* Subtle Ambient Glow Ring */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
        
        {/* The Core GRID Container - This forces the split */}
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 lg:items-center relative z-10">
          
          {/* Left Side: Core Text & Primary Actions */}
          <div className="flex flex-col text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white leading-[1.15]">
              The Security Layer for Africa’s Digital Economy
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-400 max-w-xl">
            OasisPrimeX builds intelligent, real-time financial infrastructure that eliminates payment fraud, upgrades traditional authentication workflows, and powers seamless digital commerce for banks, fintechs, and enterprises.  
            </p>     
            {/* Dual Gradient Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-500 text-zinc-950 hover:opacity-95 font-bold tracking-wide shadow-lg shadow-cyan-500/20 transition-all rounded-xl border-0 px-6">
                Request Access
              </Button>
              <Button size="lg" className="p-[1px] bg-gradient-to-r from-zinc-800 via-cyan-500/40 to-zinc-800 rounded-xl transition-all shadow-md group">
                <div className="bg-zinc-950 px-6 py-2.5 rounded-[11px] text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white font-medium text-sm transition-colors flex items-center h-full">
                  View Architecture Docs
                </div>
              </Button>
            </div>
            
            {/* Structural Badges */}
            <div className="mt-16 border-t border-zinc-900/60 pt-6 max-w-xl">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-zinc-500">
                <span className="flex items-center gap-x-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500/80" /> Bank-Grade Security</span>
                <span className="flex items-center gap-x-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500/80" /> PCI-DSS Compliant</span>
                <span className="flex items-center gap-x-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500/80" /> NDPR & GDPR Certified</span>
              </div>
            </div>
          </div>

          {/* Right Side: Sleek Dark-Mode Interface Mockup (Secure Transaction in Transit) */}
          <div className="mt-12 lg:mt-0 flex items-center justify-center lg:justify-end w-full lg:block hidden">
            <div className="w-full max-w-md aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 backdrop-blur-md p-5 shadow-2xl flex flex-col justify-between overflow-hidden relative group">
              
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/40 pb-3">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Live Transaction Flow</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-600">ID: #OPX-77X-SECURE</span>
              </div>

              {/* Transaction Flow Visualizer */}
              <div className="my-auto py-4 relative flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-between px-6 relative">
                  
                  {/* Bank Node */}
                  <div className="flex flex-col items-center gap-y-1 z-10">
                    <div className="h-10 w-10 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 shadow-lg">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="font-mono text-[8px] text-zinc-500">Core Bank</span>
                  </div>

                  {/* Pulsing Data Line */}
                  <div className="absolute inset-x-12 top-5 h-px bg-gradient-to-r from-zinc-800 via-cyan-500 to-zinc-800 flex items-center justify-center">
                    <div className="h-1.5 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-inline-travel" />
                  </div>

                  {/* Merchant Checkout Node */}
                  <div className="flex flex-col items-center gap-y-1 z-10">
                    <div className="h-10 w-10 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 shadow-lg">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span className="font-mono text-[8px] text-zinc-500">Checkout</span>
                  </div>
                </div>

                {/* Validation Status Box */}
                <div className="mt-6 w-4/5 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.02] p-3 text-center">
                  <p className="text-[11px] font-mono tracking-wide text-cyan-400">Payment Securely Processed</p>
                  <p className="text-[9px] font-mono text-zinc-500 mt-0.5">Bank connection verified and encrypted successfully.</p>
                </div>
              </div>

              {/* Footer Metrics */}
              <div className="flex items-center justify-between border-t border-zinc-800/40 pt-3 text-[10px] font-mono text-zinc-500">
                <span>RISK_INDEX: <span className="text-emerald-400 font-bold">PASS</span></span>
                <span className="text-zinc-400">Latency: <span className="text-cyan-400">12ms</span></span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE CORE FRICTION CHALLENGE */}
      <section className="relative border-t border-zinc-900/60 bg-gradient-to-b from-[#030712] via-[#090d16] to-[#030712] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-widest">Systemic Friction</h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">The Friction Holding Back African Fintech</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {[
                { title: "The Cost of OTP Friction", desc: "Traditional SMS one-time passwords often fail due to unreliable network delivery. This frustrates users, leading them to abandon their shopping carts and costing businesses sales.", color: "from-cyan-500/20" },
                { title: "Card Theft & Fraud Vectors", desc: "Hidden checkout vulnerabilities let attackers steal payment data mid-transit. This drains business revenue directly and destroys your customers' trust in your platform.", color: "from-indigo-500/20" },
                { title: "Stalled Integration Paths", desc: "Legacy payment networks are too complicated to set up and lack modern security features. This prevents millions of potential global users from successfully checking out.", color: "from-emerald-500/20" }
              ].map((item, index) => (
                <div key={index} className="relative rounded-xl border border-zinc-800/80 bg-zinc-950 p-8 transition-all hover:border-zinc-700 overflow-hidden group">
                  <div className={`absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-gradient-to-br ${item.color} to-transparent blur-xl`} />
                  <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-x-2 relative z-10">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" /> {item.title}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-zinc-400 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SWIPEX SECURE PIPELINE */}
      <section className="relative border-t border-zinc-900/60 bg-[#030712] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-400">
              Platform Layer
            </span>
            <p className="mt-4 text-3xl font-extrabold tracking-tight text-white bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Say Goodbye to OTPs. Meet SwipeX Secure.</p>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              SwipeX Secure replaces legacy network authorization architectures with an active, real-time cryptographic security loop embedded perfectly into native transaction payloads.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {[
                { title: "Intelligent Risk Scoring", text: "Every transaction is instantly analyzed for fraud, blocking high-risk or stolen card activity before the payment goes through.", grad: "from-cyan-500/10 via-transparent" },
                { title: "Zero-Friction Approvals", text: "Give users instant, secure approval prompts right on their devices, removing the need to wait for slow SMS text codes.", grad: "from-indigo-500/10 via-transparent" },
                { title: "Unified API Architecture", text: "Built to integrate easily into enterprise backends, physical checkout terminals, and online storefronts.", grad: "from-emerald-500/10 via-transparent" }
              ].map((card, i) => (
                <Card key={i} className="border-zinc-800/80 bg-zinc-950 text-zinc-100 overflow-hidden shadow-xl transition-all hover:border-zinc-700 relative group">
                  <div className={`absolute inset-0 bg-gradient-to-b ${card.grad} to-transparent opacity-40`} />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-sm font-bold text-white tracking-wide">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs leading-5 text-zinc-400 relative z-10">{card.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ECOSYSTEM VERTICALS */}
      <section className="border-t border-zinc-900/60 bg-gradient-to-b from-[#030712] to-[#090d16] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Scalability Verticals</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Built for Enterprise Scope Across Industries</p>
          </div>
          
          <Tabs defaultValue="banking" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-zinc-950 border border-zinc-800/60 p-1 rounded-xl">
              <TabsTrigger value="banking" className="text-xs data-[state=active]:bg-zinc-900 data-[state=active]:text-cyan-400 text-zinc-400 font-semibold transition-all">Banks & Fintechs</TabsTrigger>
              <TabsTrigger value="ecommerce" className="text-xs data-[state=active]:bg-zinc-900 data-[state=active]:text-cyan-400 text-zinc-400 font-semibold transition-all">E-Commerce</TabsTrigger>
              <TabsTrigger value="transit" className="text-xs data-[state=active]:bg-zinc-900 data-[state=active]:text-cyan-400 text-zinc-400 font-semibold transition-all">Mass Transit</TabsTrigger>
              <TabsTrigger value="government" className="text-xs data-[state=active]:bg-zinc-900 data-[state=active]:text-cyan-400 text-zinc-400 font-semibold transition-all">Government</TabsTrigger>
            </TabsList>
            
            <div className="mt-6 rounded-xl border border-zinc-800/60 bg-zinc-950 p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-b from-cyan-500/5 to-transparent blur-xl rounded-full" />
              <TabsContent value="banking" className="outline-none">
                <h3 className="text-base font-bold text-white tracking-wide">Commercial Banking & Digital Wallets</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-6">Reduce chargeback rates and keep your banking systems safe. Our security software integrates directly into your payment flows without slowing down transaction speeds.</p>
              </TabsContent>
              <TabsContent value="ecommerce" className="outline-none">
                <h3 className="text-base font-bold text-white tracking-wide">High-Volume Retail Modules</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-6">Optimize multi-merchant checkout conversion metrics. Maximize localized and global token conversions cleanly while preserving interface framework speeds.</p>
              </TabsContent>
              <TabsContent value="transit" className="outline-none">
                <h3 className="text-base font-bold text-white tracking-wide">High-Throughput Metro Architectures</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-6">Set up automated terminal processing built for ultra-fast checkouts. SwipeX handles both offline sync updates and real-time online transactions smoothly.</p>
              </TabsContent>
              <TabsContent value="government" className="outline-none">
                <h3 className="text-base font-bold text-white tracking-wide">Public Clearing Pipelines</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-6">Fortify public welfare distributions, local custom collections, and public sector disbursement loops with strict structural data validation protocols.</p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

       </div>
  );
}