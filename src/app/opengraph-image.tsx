import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Divy Koushik Mishra — Founding Engineer in Gurugram";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#ffffff",
          color: "#171717",
          fontFamily: "monospace",
          backgroundImage:
            "repeating-linear-gradient(315deg, #f4f4f5 0, #f4f4f5 1px, transparent 0, transparent 14px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#737373",
            }}
          >
            divykoushik.in
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 960,
            }}
          >
            Divy Koushik Mishra
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#171717",
              maxWidth: 960,
              marginTop: 8,
            }}
          >
            Founding Engineer in Gurugram
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#737373",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>React</span>
            <span>·</span>
            <span>Next.js</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>React Native</span>
          </div>
          <div style={{ color: "#171717", fontWeight: 600 }}>
            Available for freelance →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
