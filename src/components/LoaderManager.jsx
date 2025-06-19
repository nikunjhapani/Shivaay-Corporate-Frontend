"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGlobalLoading } from "../app/context/GlobalLoadingContext";

export default function LoaderManager() {
  const pathname = usePathname();
  const { setIsLoading } = useGlobalLoading();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200); 

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
