import { ImageResponse } from "next/og";

/* Generated 1200x630 social card. Replaces the square portrait that was being
   advertised as 1.91:1 — platforms trust the declared size, so a square image
   previewed badly cropped on LinkedIn/WhatsApp/Twitter. */

export const alt = "Abdelrahman Rabie — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#00ff88";
const CYAN = "#00d4ff";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#04040a",
          backgroundImage:
            "radial-gradient(circle at 22% 18%, rgba(0,255,136,0.16) 0%, transparent 55%), radial-gradient(circle at 85% 88%, rgba(124,58,237,0.18) 0%, transparent 55%)",
          padding: "68px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: `1px solid rgba(0,255,136,0.3)`,
              backgroundColor: "rgba(0,255,136,0.06)",
              borderRadius: 6,
              padding: "9px 18px",
              color: ACCENT,
              fontSize: 22,
              letterSpacing: 3,
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 99,
                backgroundColor: ACCENT,
              }}
            />
            AVAILABLE FOR HIRE
          </div>
        </div>

        {/* name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#e8e8f2",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Abdelrahman Rabie
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 42,
              fontWeight: 600,
              color: ACCENT,
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 27,
              color: "#8888aa",
              lineHeight: 1.4,
            }}
          >
            MERN · Next.js · Salla Twilight themes — Cairo, Egypt
          </div>
        </div>

        {/* tech row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["React", "Next.js", "Node.js", "MongoDB", "Salla"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                border: "1px solid #1a1a2e",
                backgroundColor: "rgba(13,13,26,0.9)",
                borderRadius: 9,
                padding: "11px 22px",
                color: "#b0b0c8",
                fontSize: 25,
              }}
            >
              {t}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              color: CYAN,
              fontSize: 25,
            }}
          >
            {">_ rabie3"}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
