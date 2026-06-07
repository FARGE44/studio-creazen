import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Studio Creazen — Ateliers créatifs du monde · Montréal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "Georgia, serif",
          background: "#F5E6C8",
        }}
      >
        {/* Left — beige */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 64px",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#D4A84B",
              marginBottom: 36,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            Montréal · Studio créatif nomade
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              color: "#1A1814",
              marginBottom: 28,
              fontWeight: 400,
            }}
          >
            Studio
            <br />
            Creazen
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#5C4F3D",
              maxWidth: 420,
              marginBottom: 48,
            }}
          >
            Ateliers créatifs inspirés des traditions du monde entier — pour allumer quelque chose en vous.
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Kintsugi", "Sumi-e", "Mandala", "Zellige", "Encres"].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#2B6C8E",
                  border: "1px solid #C5DDE9",
                  borderRadius: 24,
                  padding: "6px 16px",
                  background: "rgba(255,255,255,0.6)",
                  fontFamily: "sans-serif",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* URL */}
          <div
            style={{
              marginTop: "auto",
              fontSize: 15,
              letterSpacing: "0.08em",
              color: "#9B8B77",
              fontFamily: "sans-serif",
            }}
          >
            studiocreazen.com
          </div>
        </div>

        {/* Right — blue */}
        <div
          style={{
            width: 400,
            background: "#2B6C8E",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
              top: -100,
              right: -100,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              bottom: -60,
              left: -60,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              top: 60,
              left: 40,
            }}
          />

          {/* Gold accent line */}
          <div
            style={{
              width: 40,
              height: 2,
              background: "#D4A84B",
              marginBottom: 32,
            }}
          />

          {/* Cultures list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
            }}
          >
            {["Japon", "Maroc", "Brésil", "Inde", "Mexique", "France"].map((c) => (
              <div
                key={c}
                style={{
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "sans-serif",
                  fontWeight: 300,
                }}
              >
                {c}
              </div>
            ))}
          </div>

          {/* Gold accent line */}
          <div
            style={{
              width: 40,
              height: 2,
              background: "#D4A84B",
              marginTop: 32,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
