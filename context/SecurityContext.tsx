"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface SecurityLog {
  id: string;
  timestamp: string;
  event: string;
  latency: number;
  status: "PASS" | "WARN" | "FAIL";
}

interface SecurityContextType {
  isAuthenticated: boolean;
  clientToken: string | null;
  activeNode: string;
  networkLatency: number;
  securityLogs: SecurityLog[];
  initializeConsoleSession: () => Promise<void>;
  terminateConsoleSession: () => void;
  appendTelemetryLog: (log: Omit<SecurityLog, "id" | "timestamp">) => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

// THIS IS THE MISSING EXPORT:
export function SecurityProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [clientToken, setClientToken] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string>("NODE-PRIMARY-ZULU");
  const [networkLatency, setNetworkLatency] = useState<number>(12);
  const [securityLogs, setSecurityLogs] = useState<SecurityLog[]>([
    { id: "LOG-01", timestamp: "00:21:04", event: "Hardware token validation complete", latency: 12, status: "PASS" },
    { id: "LOG-02", timestamp: "00:21:02", event: "ECDSA Key exchange Handshake", latency: 15, status: "PASS" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkLatency((prev) => {
        const drift = Math.floor(Math.random() * 5) - 2;
        const nextValue = prev + drift;
        return nextValue > 4 ? (nextValue < 25 ? nextValue : 22) : 8;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const initializeConsoleSession = async () => {
    setIsAuthenticated(true);
    setClientToken("opx_live_pk_77x_" + Math.random().toString(16).substring(2, 10));
    appendTelemetryLog({
      event: "Developer Session Authorized via Dashboard Console",
      latency: 18,
      status: "PASS"
    });
  };

  const terminateConsoleSession = () => {
    setIsAuthenticated(false);
    setClientToken(null);
    appendTelemetryLog({
      event: "Session Revoked / Hardware Disconnect",
      latency: 9,
      status: "WARN"
    });
  };

  const appendTelemetryLog = (log: Omit<SecurityLog, "id" | "timestamp">) => {
    const time = new Date();
    const formattedTime = time.toTimeString().split(' ')[0];
    const newEntry: SecurityLog = {
      ...log,
      id: `LOG-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: formattedTime
    };
    setSecurityLogs((prev) => [newEntry, ...prev.slice(0, 9)]);
  };

  return (
    <SecurityContext.Provider
      value={{
        isAuthenticated,
        clientToken,
        activeNode,
        networkLatency,
        securityLogs,
        initializeConsoleSession,
        terminateConsoleSession,
        appendTelemetryLog,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
}

export function useSecurity() {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error("useSecurity must be utilized within a SecurityProvider structure.");
  }
  return context;
}