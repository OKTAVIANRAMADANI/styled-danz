"use client";
import styled from "styled-components";
import {
  FaHome,
  FaBed,
  FaConciergeBell,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";

const variantStyles = {
  dark: {
    background: "#1a1a1a",
    color: "#fff",
    hover: "rgba(255,255,255,0.1)",
    title: "Admin Panel",
  },
  light: {
    background: "#58ec4bff",
    color: "#000",
    hover: "#e0e0e0",
    title: "Main Navigation",
  },
  colorful: {
    background: "linear-gradient(160deg, #6610f2, #0dcaf0, #20c997)",
    color: "#fff",
    hover: "rgba(255,255,255,0.25)",
    title: "Resort Menu",
  },
};

const SidebarBase = styled.aside`
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: ${({ variant }) =>
    variant === "light" ? "center" : "flex-start"};
  gap: ${({ variant }) => (variant === "colorful" ? "0.8rem" : "0.5rem")};
  padding: ${({ variant }) =>
    variant === "light" ? "1rem 0.5rem" : "1.2rem"};
  border-radius: ${({ variant }) =>
    variant === "colorful" ? "20px" : "0"};
  box-shadow: ${({ variant }) =>
    variant === "colorful"
      ? "0 4px 25px rgba(0,0,0,0.25)"
      : "none"};
  width: ${({ variant }) =>
    variant === "light" ? "80px" : "240px"};
  min-height: 100vh;
  background: ${({ variant }) => variantStyles[variant].background};
  color: ${({ variant }) => variantStyles[variant].color};
  position: sticky;
  top: 0;
`;

const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: ${({ variant }) =>
    variant === "colorful" ? "1.3rem" : "1.1rem"};
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: ${({ variant }) =>
    variant === "colorful" ? "1px" : "0"};
  ${({ variant }) =>
    variant === "light" &&
    `
    display: none;
  `}
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  border-radius: ${({ variant }) =>
    variant === "colorful" ? "12px" : "8px"};
  padding: ${({ variant }) =>
    variant === "light" ? "0.8rem" : "0.8rem 1rem"};
  gap: ${({ variant }) => (variant === "light" ? "0" : "12px")};
  justify-content: ${({ variant }) =>
    variant === "light" ? "center" : "flex-start"};
  transition: all 0.3s ease;
  font-size: 15px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ variant }) => variantStyles[variant].hover};
    transform: ${({ variant }) =>
      variant === "colorful"
        ? "translateX(5px) scale(1.05)"
        : "translateX(5px)"};
    box-shadow: ${({ variant }) =>
      variant === "colorful"
        ? "0 0 12px rgba(255,255,255,0.4)"
        : "none"};
  }

  svg {
    font-size: ${({ variant }) =>
      variant === "colorful" ? "22px" : "18px"};
    ${({ variant }) =>
      variant === "colorful" &&
      `
      background: rgba(255,255,255,0.2);
      padding: 8px;
      border-radius: 50%;
    `}
  }

  span {
    ${({ variant }) =>
      variant === "light" &&
      `
      display: none;
    `}
    ${({ variant }) =>
      variant === "colorful" &&
      `
      font-weight: 500;
      letter-spacing: 0.5px;
    `}
  }
`;

export default function SidebarVariant({ variant = "dark", onSelect }) {
  const items = [
    { name: "Header", icon: <FaHome /> },
    { name: "Card", icon: <FaBed /> },
    { name: "Button", icon: <FaConciergeBell /> },
    { name: "Footer", icon: <FaInfoCircle /> },
    { name: "Sidebar", icon: <FaUser /> },
  ];

  return (
    <SidebarBase variant={variant}>
      <Title variant={variant}>{variantStyles[variant].title}</Title>
      {items.map((item) => (
        <Item
          key={item.name}
          variant={variant}
          onClick={() => onSelect?.(item.name.toLowerCase())}
        >
          {item.icon}
          <span>{item.name}</span>
        </Item>
      ))}
    </SidebarBase>
  );
}
