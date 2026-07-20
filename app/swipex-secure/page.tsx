// app/swipex-secure/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SwipexSecurePage() {
  return (
    <div className="flex-1 pb-24 pt-16">
      
      {/* SECTION 1: HERO OUTLINE */}
      <section className="relative px-6 lg:px-8 border-b border-zinc-900/40 pb-16">
        <div className="absolute top-0 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-indigo-500/[0.02] blur-[100px]" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest">Active Authorization</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-white leading-none">
              SwipeX Secure Protocol
            </h1>
            <p className="mt-6 text-sm text-zinc-400 max-w-xl leading-7">
            Replace vulnerable and outdated approval methods. SwipeX Secure builds encryption and verification directly into the transaction data, bypassing unreliable SMS text networks entirely.
              </p>
            <div className="mt-8 flex gap-x-4">
              <Button size="sm" className="bg-indigo-600 text-white hover:bg-indigo-500 font-medium text-xs rounded-lg px-4">
                Deploy Sandbox Token
              </Button>
            </div>
          </div>

          {/* Interactive Cryptographic Status Card */}
          <div className="border border-zinc-800/80 bg-zinc-950 p-6 rounded-2xl relative overflow-hidden max-w-md w-full ml-auto">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="font-mono text-[9px] uppercase tracking-wider text-indigo-400 font-bold">Payload Security Assertions</span>
              <span className="text-[10px] font-mono text-zinc-600">v2.4-AES</span>
            </div>
            <div className="mt-4 space-y-3 font-mono text-[11px]">
              <div className="flex justify-between border-b border-zinc-900/40 pb-1">
                <span className="text-zinc-500">SIGNING_ALGO</span>
                <span className="text-zinc-300">Ed25519-PH</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900/40 pb-1">
                <span className="text-zinc-500">SESSION_INTEGRITY</span>
                <span className="text-emerald-400 font-bold">VERIFIED</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900/40 pb-1">
                <span className="text-zinc-500">REPLAY_PROTECTION</span>
                <span className="text-cyan-400">ACTIVE (NONCE-BOUND)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARCHITECTURE FEATURES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xl font-bold text-white tracking-wide">Defensive Authentication Vectors</h2>
          <p className="text-xs text-zinc-500 mt-2">Engineered to secure multi-party exchange states against interception.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Hardware-Attested Keys", desc: "Generates unique transaction keys locked inside your phone's secure chip, completely blocking common phishing scams." },
            { title: "Dynamic Payload Mutation", desc: "Constantly changes the data code for every single request mid-transit. If someone tries to intercept your transaction, the stolen data becomes completely useless within milliseconds." },
            { title: "Deterministic Risk Engine", desc: "Tracks transaction speeds and checks device details to block fraud attempts instantly before a payment can even begin." }
          ].map((feat, i) => (
            <Card key={i} className="border-zinc-800/80 bg-zinc-950 text-zinc-100 relative group overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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

      {/* SECTION 3: STEP-BY-STEP DECOUPLED AUTHORIZATION TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="border border-zinc-800/50 bg-gradient-to-b from-zinc-950 to-[#030712] rounded-2xl p-8 lg:p-12">
          <h3 className="text-lg font-bold text-white tracking-wide text-center">How SwipeX Secure Prevents Takeovers</h3>
          <p className="text-xs text-zinc-500 text-center mt-2 max-w-xl mx-auto">A secure validation workflow that processes payments independently across networks.</p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", name: "Token Generation", detail: "The app creates a temporary, unique code for your transaction tied directly to your specific device." },
              { step: "02", name: "Secure Connection", detail: "The transaction data routes through private, protected servers to verify your digital signature without ever exposing your sensitive details." },
              { step: "03", name: "Device Check", detail: "Your device confirms ownership by signing a quick security challenge using its built-in, private security keys." },
              { step: "04", name: "Instant Settlement", detail: "The verified transaction completes successfully and saves securely inside the main database." }
            ].map((phase, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 text-indigo-400 font-mono font-bold flex items-center justify-center text-sm shadow-md mb-4 group-hover:border-indigo-500/40 group-hover:text-white transition-colors">
                  {phase.step}
                </div>
                <h4 className="text-xs font-bold text-zinc-200 tracking-wide">{phase.name}</h4>
                <p className="text-[11px] text-zinc-500 leading-5 mt-2 max-w-[200px]">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}