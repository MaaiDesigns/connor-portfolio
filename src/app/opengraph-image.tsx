import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Connor O'Hearn — Systems Architect & AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f5e6d3 0%, #f7ecdc 35%, #faf0e2 60%, #faf8f5 100%)",
          color: "#2d2a26",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8b6f4e",
          }}
        >
          Systems Architect · AI Builder · Founder
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Connor O&apos;Hearn
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#2d2a26",
              opacity: 0.78,
              fontStyle: "italic",
            }}
          >
            I architect systems that{" "}
            <span style={{ color: "#b87333", marginLeft: 12 }}>compound.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#8b6f4e",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span>2555 Ventures LLC</span>
          <span>Savannah, GA</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
