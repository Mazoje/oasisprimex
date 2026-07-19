// components/ConsoleHeaderControl.tsx
"use client";

import { useSecurity } from "@/context/SecurityContext";
import { Button } from "@/components/ui/button";

export function ConsoleHeaderControl() {
  const { isAuthenticated, initializeConsoleSession, terminateConsoleSession } = useSecurity();

  return (
    <div className="flex items-center gap-x-4">
      {isAuthenticated ? (
        <Button 
          size="sm" 
          variant="outline"
          onClick={terminateConsoleSession}
          className="border-zinc-800 bg-zinc-900 text-zinc-400 text-xs hover:bg-zinc-800 hover:text-white"
        >
          Hide API Docs
        </Button>
      ) : (
        <Button 
          size="sm" 
          onClick={initializeConsoleSession}
          className="bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white font-medium text-xs rounded-lg px-4"
        >
          View API Docs
        </Button>
      )}
    </div>
  );
}