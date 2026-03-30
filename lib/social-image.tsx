import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "./site-config";

/* eslint-disable @next/next/no-img-element */

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

async function getPhotoDataUrl() {
  const photoBuffer = await readFile(
    join(process.cwd(), "public", "carlos-photo.jpg"),
  );

  return `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;
}

export async function createSocialImage() {
  const photoSrc = await getPhotoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          padding: "52px",
          background:
            "radial-gradient(circle at top left, rgba(228,140,97,0.18), transparent 30%), radial-gradient(circle at top right, rgba(120,148,136,0.14), transparent 24%), linear-gradient(180deg, #101513 0%, #0d1110 45%, #0b0f0e 100%)",
          color: "#f3efe4",
          fontFamily:
            '"Avenir Next", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "72%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#e48c61",
              }}
            >
              {siteConfig.location}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 72,
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: "780px",
                  fontSize: 34,
                  lineHeight: 1.22,
                  color: "rgba(243,239,228,0.92)",
                }}
              >
                {siteConfig.title} building business software, integrations, and
                customer-facing products.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {[
              "15+ Years Experience",
              "Internal Platforms",
              "API Integrations",
              "Product & Platform Engineering",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(243,239,228,0.12)",
                  background: "rgba(24,31,28,0.9)",
                  fontSize: 21,
                  color: "rgba(243,239,228,0.9)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 238,
              height: 238,
              borderRadius: "999px",
              overflow: "hidden",
              border: "8px solid rgba(243,239,228,0.1)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
              background: "rgba(24,31,28,1)",
            }}
          >
            <img
              src={photoSrc}
              alt={siteConfig.name}
              width={238}
              height={238}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
