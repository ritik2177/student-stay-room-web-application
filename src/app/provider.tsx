"use client";

import { SessionProvider } from "next-auth/react"; // ✅ correct

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
