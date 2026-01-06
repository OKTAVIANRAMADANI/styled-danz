"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Installation from "./components/Installation";
import Footer from "./components/Footer";

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
`;

export default function Page() {
  const router = useRouter();

  const scrollToInstall = () => {
    const element = document.getElementById("install");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSidebarSelect = (item) => {
    switch (item) {
      case "home":
        // Already on home, maybe scroll to top?
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case "install": // Custom handling for installation link if added to Sidebar logic later
        scrollToInstall();
        break;
      case "header":
      case "card":
      case "button":
      case "footer":
      case "sidebar":
        // Navigate to dashboard with tab param
        router.push(`/dashboard?tab=${item}`);
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Sidebar activeItem="home" onSelect={handleSidebarSelect} />
      <MainContent>
        <Header />
        <ContentWrapper>
          <Hero onGetStarted={() => router.push('/dashboard')} />
          <Installation />
          <Footer />
        </ContentWrapper>
      </MainContent>
    </Layout>
  );
}