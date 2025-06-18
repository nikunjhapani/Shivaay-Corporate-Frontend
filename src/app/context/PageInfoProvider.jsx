// components/PageName.tsx
"use client";

import { usePathname } from "next/navigation";

export default function PageName() {
  const pathname = usePathname();
  const name = pathname === "/" ? "home" : pathname.split("/").pop();
  return name;
}
