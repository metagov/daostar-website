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
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-[999] pointer-events-none">
      <Image
        src="/img/hand_final.png"
        alt="Hand holding digital sphere"
        width={600}
        height={600}
        className="w-auto h-auto max-w-[250px] max-h-[250px] sm:max-w-[350px] sm:max-h-[350px] md:max-w-[450px] md:max-h-[450px] lg:max-w-[500px] lg:max-h-[500px] xl:max-w-[500px] xl:max-h-[500px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        priority
      />
    </div>
  );
}