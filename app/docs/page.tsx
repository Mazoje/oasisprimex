// app/docs/page.tsx
export default function DocsPage() {
  return (
    <div className="flex-1 pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fade-in">
          
          {/* Left Column: Documentation Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">API Reference</span>
              <h1 className="text-3xl font-extrabold text-white mt-2 tracking-tight">Core Integration Guide</h1>
              <p className="text-sm text-zinc-400 mt-4 leading-6">
                Use our modern HTTP endpoints to submit payloads securely. All communication requires a valid bearer token generated inside your secure hardware enclaves.
              </p>
            </div>

            {/* Endpoint 1 */}
            <div className="border border-zinc-900 bg-zinc-950/40 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-x-3">
                <span className="bg-emerald-950/60 text-emerald-400 text-[10px] font-mono font-bold px-2 py-1 rounded border border-emerald-900/30">POST</span>
                <span className="font-mono text-sm text-zinc-200">/v1/auth/session</span>
              </div>
              <p className="text-xs text-zinc-400">Initializes an isolated routing sequence channel between local device keys and regional carrier matrices.</p>
              
              <div className="pt-2">
                <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Request Parameters</h4>
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-zinc-900 text-zinc-600 text-[10px]">
                      <th className="pb-2">Field</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900/40 text-zinc-400">
                    <tr>
                      <td className="py-2 font-semibold text-zinc-300">client_token</td>
                      <td className="py-2 text-cyan-400">string</td>
                      <td className="py-2 text-zinc-500">Your unique active sandbox key.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-zinc-300">node_target</td>
                      <td className="py-2 text-cyan-400">string</td>
                      <td className="py-2 text-zinc-500">Target fallback region cluster.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Code Playgrounds */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="border border-zinc-800 bg-zinc-950 rounded-xl p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <span className="font-mono text-[10px] text-zinc-400 uppercase">Request Example</span>
                <span className="text-[10px] font-mono text-zinc-600">cURL</span>
              </div>
              <pre className="font-mono text-[11px] text-cyan-400 overflow-x-auto p-3 bg-[#02050b] rounded-lg border border-zinc-900 leading-5 whitespace-pre-wrap">
{`curl -X POST https://api.oasisprime.xyz/v1/auth/session \\
  -H "Authorization: Bearer opx_live_77x" \\
  -H "Content-Type: application/json" \\
  -d '{
    "node_target": "NODE-PRIMARY-ZULU"
  }'`}
              </pre>
            </div>

            <div className="border border-zinc-800 bg-zinc-950 rounded-xl p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <span className="font-mono text-[10px] text-zinc-400 uppercase">Response Schema</span>
                <span className="text-[10px] font-mono text-zinc-600">201 Created</span>
              </div>
              <pre className="font-mono text-[11px] text-zinc-400 overflow-x-auto p-3 bg-[#02050b] rounded-lg border border-zinc-900 leading-5">
{`{
  "status": "SEALED",
  "channel_id": "ch_9921_x8",
  "latency_overhead": "12ms",
  "integrity_checked": true
}`}
              </pre>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}