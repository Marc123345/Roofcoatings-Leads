"use client";
import Image from "next/image";

export default function USMap({ activeState, onStateClick }: { activeState: string; onStateClick?: (id: string) => void }) {
  return (
    <div className="relative w-full aspect-[16/10]">
      <Image
        src="https://ik.imagekit.io/qcvroy8xpd/downloads/MapChart_Map.png?updatedAt=1761831899793"
        alt="RoofCoat Leads service areas across the United States"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
