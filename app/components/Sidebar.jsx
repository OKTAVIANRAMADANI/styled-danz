"use client";
import styled from "styled-components";
import { FaHome, FaBox, FaDownload, FaCog, FaSignOutAlt, FaRocket, FaLayerGroup, FaCreditCard, FaHandPointer, FaColumns, FaInfoCircle } from "react-icons/fa";

const Container = styled.aside`
  width: 260px;
  height: 100vh;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-right: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  color: var(--light);
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({ $isActive }) => ($isActive ? 'var(--primary)' : 'var(--gray)')};
  background: ${({ $isActive }) => ($isActive ? 'rgba(79, 70, 229, 0.1)' : 'transparent')};
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: rgba(79, 70, 229, 0.1);
    color: var(--primary);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SectionLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--gray);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  letter-spacing: 1px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient);
  background-image: url('https://i.pravatar.cc/150?img=12');
  background-size: cover;
  border: 2px solid var(--primary);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  h4 {
    font-size: 0.9rem;
    color: var(--light);
  }
  
  span {
    font-size: 0.75rem;
    color: var(--gray);
  }
`;

export default function Sidebar({ activeItem, onSelect }) {
    const handleSelect = (item) => {
        if (onSelect) {
            onSelect(item);
        }
    };

    return (
        <Container>
            <LogoContainer>
                <LogoIcon><FaRocket /></LogoIcon>
                <LogoText>DANNZZ</LogoText>
            </LogoContainer>

            <Nav>
                <NavItem $isActive={activeItem === "home"} onClick={() => window.location.href = "/"}>
                    <FaHome /> Home
                </NavItem>

                <SectionLabel>Components</SectionLabel>

                <NavItem $isActive={activeItem === "header"} onClick={() => handleSelect("header")}>
                    <FaLayerGroup /> Header
                </NavItem>
                <NavItem $isActive={activeItem === "card"} onClick={() => handleSelect("card")}>
                    <FaCreditCard /> Card
                </NavItem>
                <NavItem $isActive={activeItem === "button"} onClick={() => handleSelect("button")}>
                    <FaHandPointer /> Button
                </NavItem>
                <NavItem $isActive={activeItem === "sidebar"} onClick={() => handleSelect("sidebar")}>
                    <FaColumns /> Sidebar
                </NavItem>
                <NavItem $isActive={activeItem === "footer"} onClick={() => handleSelect("footer")}>
                    <FaInfoCircle /> Footer
                </NavItem>
            </Nav>

            <UserProfile>
                <Avatar />
                <UserInfo>
                    <h4>Dannzz Bjir lah</h4>
                    <span>Pro Member</span>
                </UserInfo>
                <FaSignOutAlt style={{ marginLeft: 'auto', cursor: 'pointer', color: 'var(--gray)' }} />
            </UserProfile>
        </Container>
    );
}
