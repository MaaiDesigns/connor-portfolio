"use client";

import Image from "next/image";

type Props = {
  type: "laptop" | "phone";
  src: string;
  alt: string;
};

export default function DeviceMockup({ type, src, alt }: Props) {
  if (type === "laptop") {
    return (
      <div className="w-full">
        <div
          className="relative rounded-t-xl pt-3 pb-3 px-3"
          style={{
            background: "linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 24px rgba(45,42,38,0.18)",
          }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1 w-12 h-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          />
          <div
            className="relative w-full overflow-hidden rounded-md"
            style={{ aspectRatio: "1440 / 900", backgroundColor: "#1a1a1a" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div
          className="relative mx-auto"
          style={{
            width: "112%",
            marginLeft: "-6%",
            height: "14px",
            background: "linear-gradient(180deg, #c8c8c8 0%, #a4a4a4 50%, #888 100%)",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            boxShadow: "0 6px 14px rgba(45,42,38,0.18)",
          }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 h-1.5 w-16 rounded-b-md"
            style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto" style={{ width: "180px" }}>
      <div
        className="relative p-1.5 rounded-[34px]"
        style={{
          background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 28px rgba(45,42,38,0.22)",
        }}
      >
        <div
          className="relative w-full overflow-hidden rounded-[28px]"
          style={{ aspectRatio: "390 / 844", backgroundColor: "#1a1a1a" }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 top-2 z-10 h-4 w-16 rounded-full"
            style={{ backgroundColor: "#0a0a0a" }}
          />
          <Image
            src={src}
            alt={alt}
            fill
            sizes="200px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
