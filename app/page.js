"use client";
import { useState } from "react";
import SidebarVariant from "./components/SidebarVariant";
import HeaderVariant from "./components/HeaderVariant";
import CardVariant from "./components/CardVariant";
import ButtonVariant from "./components/ButtonVariant";
import FooterVariant from "./components/FooterVariant";

export default function Page() {
  const [active, setActive] = useState("header");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Kode berhasil disalin!");
  };

  const CodeBlock = ({ code }) => (
    <div
      style={{
        background: "#1a1a1a",
        color: "#ffffffff",
        padding: "1rem",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        position: "relative",
        marginTop: "1rem",
        whiteSpace: "pre-wrap",
      }}
    >
      <button
        onClick={() => copyToClipboard(code)}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "#00bcd4",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "0.3rem 0.6rem",
          cursor: "pointer",
          fontSize: "0.8rem",
        }}
      >
        Copy
      </button>
      <code>{code}</code>
    </div>
  );

  const renderComponent = () => {
    switch (active) {
      case "header":
        return (
          <>
            <h2>Header Variants</h2>
            <HeaderVariant variant="dark">Hotel Paradise</HeaderVariant>
            <HeaderVariant variant="light">Hotel Paradise</HeaderVariant>
            <HeaderVariant variant="colorful">Hotel Paradise</HeaderVariant>
            

            <h3 style={{ marginTop: "1.5rem" }}>Cara Menggunakan:</h3>
            <CodeBlock
              code={`<HeaderVariant variant="dark">Hotel Paradise</HeaderVariant>\n<HeaderVariant variant="light">Hotel Paradise</HeaderVariant>\n<HeaderVariant variant="colorful">Hotel Paradise</HeaderVariant>`}
            />
          </>
        );

      case "card":
        return (
          <>
            <h2>Card Variants</h2>
            <CardVariant variant="dark" />
            <CardVariant variant="light" />
            <CardVariant variant="colorful" />

            <h3 style={{ marginTop: "1.5rem" }}>Cara Menggunakan:</h3>
            <CodeBlock
              code={`<CardVariant variant="dark" />\n<CardVariant variant="light" />\n<CardVariant variant="colorful" />`}
            />
          </>
        );

      case "button":
        return (
          <>
            <h2>Button Variants</h2>
            <ButtonVariant variant="dark" />
            <ButtonVariant variant="light" />
            <ButtonVariant variant="colorful" />

            <h3 style={{ marginTop: "1.5rem" }}>Cara Menggunakan:</h3>
            <CodeBlock
              code={`<ButtonVariant variant="dark" />\n<ButtonVariant variant="light" />\n<ButtonVariant variant="colorful" />`}
            />
          </>
        );

      case "footer":
        return (
          <>
            <h2>Footer Variants</h2>
            <FooterVariant variant="dark" />
            <FooterVariant variant="light" />
            <FooterVariant variant="colorful" />

            <h3 style={{ marginTop: "1.5rem" }}>Cara Menggunakan:</h3>
            <CodeBlock
              code={`<FooterVariant variant="dark" />\n<FooterVariant variant="light" />\n<FooterVariant variant="colorful" />`}
            />
          </>
        );

      case "sidebar":
        return (
          <>
            <h2>Sidebar Variants (Preview)</h2>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              {["dark", "light", "colorful"].map((v) => (
                <div
                  key={v}
                  style={{
                    width: v === "light" ? 120 : 260,
                    height: 420,
                    overflow: "hidden",
                    borderRadius: 12,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    background: "#fff",
                  }}
                >
                  <div style={{ height: "100%", overflowY: "auto" }}>
                    <SidebarVariant variant={v} onSelect={() => {}} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: "1.5rem" }}>Cara Menggunakan:</h3>
            <CodeBlock
              code={`<SidebarVariant variant="dark" onSelect={() => {}} />\n<SidebarVariant variant="light" onSelect={() => {}} />\n<SidebarVariant variant="colorful" onSelect={() => {}} />`}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#f7f7f7",
        overflow: "hidden",
      }}
    >
      {/* Sidebar kiri */}
      <div
        style={{
          width: "240px",
          flexShrink: 0,
          background: "#fff",
          borderRight: "1px solid #e0e0e0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <SidebarVariant onSelect={setActive} />
      </div>

      {/* Area utama dengan jarak */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
          paddingLeft: "1.5rem", // ✅ jarak dari sidebar
        }}
      >
        {/* Header tetap di atas */}
        <div style={{ flexShrink: 0 }}>
          <HeaderVariant variant="light">Hotel Paradise</HeaderVariant>
        </div>

        {/* Konten utama bisa scroll */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "2rem 3rem",
            background: "#fafafa",
          }}
        >
          {renderComponent()}
        </main>

        {/* Footer tetap di bawah */}
        <div style={{ flexShrink: 0 }}>
          <FooterVariant variant="light" />
        </div>
      </div>
    </div>
  );
}