import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Forte Pilates — Creative Pilates in Los Angeles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), "public/logoWithBrand.jpg"));
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F0E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background geometric circles */}
        <div style={{ position: "absolute", top: -140, right: -140, width: 560, height: 560, borderRadius: "50%", border: "1.5px solid rgba(61,43,31,0.10)", display: "flex" }} />
        <div style={{ position: "absolute", top: -70, right: -70, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.22)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -120, left: -120, width: 440, height: 440, borderRadius: "50%", border: "1.5px solid rgba(61,43,31,0.08)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -50, left: -50, width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.18)", display: "flex" }} />

        {/* Scattered dots */}
        {[
          { top: 70,  left: 160, size: 4 },
          { top: 150, left: 340, size: 3 },
          { top: 55,  left: 560, size: 5 },
          { top: 190, left: 720, size: 3 },
          { top: 490, left: 920, size: 4 },
          { top: 550, left: 760, size: 3 },
          { top: 370, left: 180, size: 3 },
          { top: 430, left: 440, size: 4 },
          { top: 300, left: 1060, size: 3 },
          { top: 100, left: 980, size: 4 },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: "rgba(201,169,110,0.5)",
              display: "flex",
            }}
          />
        ))}

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Forte Pilates"
          style={{
            width: 340,
            height: 340,
            objectFit: "contain",
            zIndex: 10,
          }}
        />

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 40, height: 1, background: "#C9A96E", display: "flex" }} />
          <div
            style={{
              fontSize: 18,
              color: "#7A6A5A",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "serif",
              display: "flex",
            }}
          >
            Creative Pilates · Los Angeles
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
