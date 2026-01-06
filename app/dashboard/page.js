"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeaderVariant from "../components/HeaderVariant";
import CardVariant from "../components/CardVariant";
import ButtonVariant from "../components/ButtonVariant";
import FooterVariant from "../components/FooterVariant";
import SidebarVariant from "../components/SidebarVariant";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #1e1b4b, #0f172a);
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 260px;
  padding: 0 4rem;
  min-height: 100vh;
  position: relative;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--light);
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: 1rem;
`;

const ControlPanel = styled.div`
  background: rgba(30, 41, 59, 0.5);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid var(--glass-border);
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;

  label {
    color: var(--gray);
    font-size: 0.9rem;
  }

  input, select {
    background: #0f172a;
    border: 1px solid var(--glass-border);
    color: var(--light);
    padding: 0.6rem;
    border-radius: 6px;
    outline: none;
    
    &:focus {
      border-color: var(--primary);
    }
  }
`;

/* Usage Viewer Component */
const UsageViewer = ({ componentName, selfClosing = false, customProps = {} }) => {
    const [selectedVariant, setSelectedVariant] = useState("dark");
    const [copied, setCopied] = useState(false);

    // Filter out empty props
    const validProps = Object.entries(customProps)
        .filter(([_, value]) => value && value !== "")
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");

    const propsString = validProps ? ` ${validProps}` : "";

    // Generate code based on selection
    const generateCode = () => {
        if (selfClosing) {
            return `<${componentName} variant="${selectedVariant}"${propsString} />`;
        }
        return `<${componentName} variant="${selectedVariant}"${propsString}>\n  Content goes here...\n</${componentName}>`;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ marginTop: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <h3 style={{ color: "var(--primary)", margin: 0 }}>Cara Penggunaan</h3>

                <div style={{ position: 'relative' }}>
                    <select
                        value={selectedVariant}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        style={{
                            appearance: "none",
                            background: "rgba(30, 41, 59, 0.5)",
                            border: "1px solid var(--primary)",
                            color: "var(--light)",
                            padding: "0.5rem 2rem 0.5rem 1rem",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                            outline: "none"
                        }}
                    >
                        <option value="dark">Varian Gelap (Dark)</option>
                        <option value="light">Varian Terang (Light)</option>
                        <option value="colorful">Varian Berwarna (Colorful)</option>
                    </select>
                    <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '0.8rem', color: 'var(--gray)' }}>
                        ▼
                    </span>
                </div>
            </div>

            <div style={{ position: "relative" }}>
                <div
                    style={{
                        background: "#0f172a",
                        padding: "1.5rem",
                        borderRadius: "12px",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        color: "#cbd5e1",
                        whiteSpace: "pre-wrap",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                    }}
                >
                    {generateCode()}
                </div>
                <button
                    onClick={copyToClipboard}
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "rgba(255,255,255,0.1)",
                        color: copied ? "#22c55e" : "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "0.4rem 0.8rem",
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                >
                    {copied ? "Disalin!" : "Salin"}
                </button>
            </div>
        </div>
    );
};

function DashboardContent() {
    const searchParams = useSearchParams();
    const [activeComponent, setActiveComponent] = useState("header");

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setActiveComponent(tab);
        }
    }, [searchParams]);

    const renderComponent = () => {
        switch (activeComponent) {
            case "header":
                return (
                    <>
                        <SectionTitle>Varian Header</SectionTitle>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <HeaderVariant variant="dark">Dashboard</HeaderVariant>
                            <HeaderVariant variant="light">Dashboard</HeaderVariant>
                            <HeaderVariant variant="colorful">Dashboard</HeaderVariant>
                        </div>
                        <UsageViewer componentName="HeaderVariant" />
                    </>
                );

            case "card":
                return (
                    <>
                        <SectionTitle>Varian Kartu (Card)</SectionTitle>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                            <CardVariant variant="dark" />
                            <CardVariant variant="light" />
                            <CardVariant variant="colorful" />
                        </div>

                        <UsageViewer
                            componentName="CardVariant"
                            selfClosing
                        />
                    </>
                );

            case "button":
                return (
                    <>
                        <SectionTitle>Varian Tombol (Button)</SectionTitle>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <ButtonVariant variant="dark" />
                            <ButtonVariant variant="light" />
                            <ButtonVariant variant="colorful" />
                        </div>
                        <UsageViewer
                            componentName="ButtonVariant"
                            selfClosing
                        />
                    </>
                );

            case "footer":
                return (
                    <>
                        <SectionTitle>Varian Footer</SectionTitle>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <FooterVariant variant="dark" />
                            <FooterVariant variant="light" />
                            <FooterVariant variant="colorful" />
                        </div>
                        <UsageViewer componentName="FooterVariant" selfClosing />
                    </>
                );

            case "sidebar":
                return (
                    <>
                        <SectionTitle>Varian Sidebar</SectionTitle>
                        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                            {["dark", "light", "colorful"].map((v) => (
                                <div key={v} style={{
                                    width: v === "light" ? 100 : 260,
                                    height: 300,
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    border: "1px solid var(--glass-border)"
                                }}>
                                    <div style={{ height: "100%", overflowY: "auto", position: 'relative' }}>
                                        <SidebarVariant variant={v} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <UsageViewer componentName="SidebarVariant" selfClosing />
                    </>
                );

            default:
                return <div>Select a component</div>;
        }
    };

    return (
        <Layout>
            <Sidebar activeItem={activeComponent} onSelect={setActiveComponent} />
            <MainContent>
                <Header />
                <ContentWrapper>
                    {renderComponent()}
                </ContentWrapper>
            </MainContent>
        </Layout>
    );
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DashboardContent />
        </Suspense>
    );
}
