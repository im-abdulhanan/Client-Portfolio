import React from 'react';

export const WaylineMockup: React.FC = () => (
  <div className="relative h-full w-full bg-[#0d1527] p-5 text-white flex flex-col justify-between select-none">
    {/* Status Bar */}
    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs ca-mono">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-bold text-emerald-400">LIVE GPS TRANSIT</span>
      </div>
      <span className="opacity-60">LINE 04 • NORTHBOUND</span>
    </div>

    {/* Route visualization */}
    <div className="my-4 relative flex-1 flex flex-col justify-center">
      <div className="absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-emerald-400 rounded-full" />
      
      <div className="space-y-4 pl-12">
        <div className="relative">
          <span className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-[#0d1527] bg-white ring-2 ring-blue-400" />
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Origin</p>
          <p className="text-sm font-bold text-white">Central Market Station</p>
          <p className="text-xs text-white/50 ca-mono">Departed • 11:24 AM</p>
        </div>

        <div className="relative bg-white/10 p-3 rounded-lg border border-white/15 backdrop-blur-sm">
          <span className="absolute -left-[38px] top-4 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Next Stop</p>
              <p className="text-base font-extrabold text-white">Grand Terminal</p>
            </div>
            <div className="text-right">
              <span className="inline-block rounded-md bg-emerald-400/20 px-2 py-0.5 text-xs font-bold text-emerald-300 ca-mono">
                IN 2 MIN
              </span>
            </div>
          </div>
        </div>

        <div className="relative opacity-60">
          <span className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-[#0d1527] bg-white/40" />
          <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Final Destination</p>
          <p className="text-sm font-medium text-white">Harbor Science Park</p>
        </div>
      </div>
    </div>

    {/* Bottom summary pill */}
    <div className="flex items-center justify-between rounded-lg bg-blue-600/30 border border-blue-400/30 p-2.5 text-xs">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-md bg-blue-500 flex items-center justify-center font-bold text-[11px]">4</span>
        <span className="font-medium text-blue-100">Express Shuttle • Low Crowding</span>
      </div>
      <span className="ca-mono text-blue-200 font-bold">ON TIME</span>
    </div>
  </div>
);

export const TandemMockup: React.FC = () => (
  <div className="relative h-full w-full bg-[#1e1b2e] p-5 text-white flex flex-col justify-between select-none">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div>
        <p className="text-xs text-purple-300 font-medium">Trip to Kyoto & Tokyo</p>
        <p className="text-base font-extrabold text-white">Group Split Ledger</p>
      </div>
      <span className="rounded-full bg-purple-500/20 border border-purple-400/30 px-2.5 py-1 text-xs text-purple-200 font-bold ca-mono">
        4 MEMBERS
      </span>
    </div>

    {/* Balance Card */}
    <div className="my-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs text-purple-100 uppercase tracking-wider font-semibold">Your Balance</span>
          <p className="text-3xl font-black text-white mt-1">+$182.40</p>
        </div>
        <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white">
          YOU ARE OWED
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-purple-100/80">
        <span>3 settled</span>
        <span>•</span>
        <span>1 pending payment</span>
      </div>
    </div>

    {/* Feed Items */}
    <div className="space-y-2">
      <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5 border border-white/10 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">🍜</div>
          <div>
            <p className="font-bold text-white">Shinkansen Bento & Dinner</p>
            <p className="text-[11px] text-white/50">Paid by Robin • Split 4 ways</p>
          </div>
        </div>
        <span className="font-bold text-emerald-400 ca-mono">+$24.50</span>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-white/5 p-2.5 border border-white/10 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-blue-400/20 text-blue-300 flex items-center justify-center font-bold">🏨</div>
          <div>
            <p className="font-bold text-white">Ryokan Traditional Stay</p>
            <p className="text-[11px] text-white/50">Paid by Elena • Settled</p>
          </div>
        </div>
        <span className="font-bold text-white/60 ca-mono">-$120.00</span>
      </div>
    </div>
  </div>
);

export const ForgeMockup: React.FC = () => (
  <div className="relative h-full w-full bg-[#18181b] p-5 text-white flex flex-col justify-between select-none">
    {/* Console Tab Bar */}
    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-xs ca-mono text-zinc-400 font-semibold">forge-cli / onboarding.ts</span>
      </div>
      <span className="text-[11px] ca-mono text-yellow-400 font-bold bg-yellow-400/10 px-2 py-0.5 rounded">
        DEV SANDBOX #48
      </span>
    </div>

    {/* Onboarding Checklist Box */}
    <div className="my-3 space-y-2 text-xs ca-mono">
      <div className="flex items-center gap-2 rounded bg-zinc-900 p-2 border border-zinc-800 text-emerald-400">
        <span>[✓]</span>
        <span className="text-zinc-200">1. Clone & provision cloud container</span>
        <span className="ml-auto text-[10px] text-zinc-500">0.4s</span>
      </div>
      <div className="flex items-center gap-2 rounded bg-zinc-900 p-2 border border-zinc-800 text-emerald-400">
        <span>[✓]</span>
        <span className="text-zinc-200">2. Sync staging secrets & API keys</span>
        <span className="ml-auto text-[10px] text-zinc-500">1.1s</span>
      </div>
      <div className="flex items-center gap-2 rounded bg-yellow-400/10 p-2 border border-yellow-400/30 text-yellow-300">
        <span className="animate-pulse">[▶]</span>
        <span className="font-bold text-yellow-200">3. Run test suite & verify local build</span>
        <span className="ml-auto text-[10px] font-bold text-yellow-400">RUNNING...</span>
      </div>
    </div>

    {/* Terminal prompt */}
    <div className="rounded bg-black/50 p-2.5 text-[11px] ca-mono text-zinc-300 border border-zinc-800">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400 font-bold">$</span>
        <span>forge ready --user=robin --team=frontend</span>
      </div>
      <p className="mt-1 text-emerald-400/90 font-medium">✓ Ready to ship your first commit in 3 minutes!</p>
    </div>
  </div>
);

export const VoltMockup: React.FC = () => (
  <div className="relative h-full w-full bg-[#141b2d] p-5 text-white flex flex-col justify-between select-none">
    {/* Top Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div>
        <p className="text-xs text-pink-300 font-semibold uppercase tracking-wider">Home Micro-Grid</p>
        <p className="text-base font-black text-white">4.8 kW Generating Now</p>
      </div>
      <div className="h-8 w-8 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center font-bold text-pink-300">
        ⚡
      </div>
    </div>

    {/* Gauge Ring & Stats */}
    <div className="my-3 grid grid-cols-2 gap-3">
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center flex flex-col justify-center">
        <span className="text-3xl font-black text-emerald-400 ca-mono">88%</span>
        <span className="text-[11px] text-white/60 font-semibold mt-1">Solar Self-Sufficiency</span>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center flex flex-col justify-center">
        <span className="text-3xl font-black text-pink-400 ca-mono">$42.80</span>
        <span className="text-[11px] text-white/60 font-semibold mt-1">Saved This Cycle</span>
      </div>
    </div>

    {/* Energy Flow Card */}
    <div className="rounded-lg bg-pink-600/20 border border-pink-500/30 p-2.5 flex items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-pink-100 font-medium">Sending 1.4 kW excess back to grid</span>
      </div>
      <span className="ca-mono font-bold text-emerald-300">+CREDIT</span>
    </div>
  </div>
);
