"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({ children }) {
  // Create QueryClient only once
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
