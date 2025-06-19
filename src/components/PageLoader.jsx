"use client";
import { useGlobalLoading } from "../app/context/GlobalLoadingContext";
export default function PageLoader() {
  const { isLoading } = useGlobalLoading();
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}