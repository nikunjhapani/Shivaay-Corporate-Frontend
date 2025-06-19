"use client";
import { createContext, useContext, useState, useCallback } from "react";

const GlobalLoadingContext = createContext();

export function GlobalLoadingProvider({ children }) {
  const [loadingCount, setLoadingCount] = useState(0);

  // Count-based loading
  const startLoading = useCallback(() => setLoadingCount((c) => c + 1), []);
  const stopLoading = useCallback(() => setLoadingCount((c) => Math.max(0, c - 1)), []);

  // Boolean setter for one-off cases
  const setIsLoading = useCallback((value) => {
    if (value) {
      setLoadingCount((c) => c + 1);
    } else {
      setLoadingCount((c) => Math.max(0, c - 1));
    }
  }, []);

  const isLoading = loadingCount > 0;

  return (
    <GlobalLoadingContext.Provider
      value={{ isLoading, startLoading, stopLoading, setIsLoading }}
    >
      {children}
    </GlobalLoadingContext.Provider>
  );
}

export function useGlobalLoading() {
  return useContext(GlobalLoadingContext);
}
