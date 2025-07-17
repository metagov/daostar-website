"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HandImage() {
  const pathname = usePathname();
  
  // Only show on home page
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="hand-container">
      <Image
        src="/img/hand_final.png"
        alt="Hand holding digital sphere"
        width={600}
        height={600}
        className="hand-image"
        priority
      />
    </div>
  );
}