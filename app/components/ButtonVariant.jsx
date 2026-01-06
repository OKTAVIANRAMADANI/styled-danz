"use client";
import styled from "styled-components";
import { FaArrowRight, FaCalendarAlt, FaStar } from "react-icons/fa";

const variantStyles = {
  dark: {
    background: "#1a1a1a",
    color: "#fff",
    hover: "#333",
  },
  light: {
    background: "#f9f9f9",
    color: "#000",
    border: "#ccc",
    hover: "#e6e6e6",
  },
  colorful: {
    background: "linear-gradient(135deg, #0dcaf0, #6610f2)",
    color: "#fff",
    hover: "linear-gradient(135deg, #0bb5d8, #520dc2)",
  },
};

/* Base button style */
const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.6rem;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-family: "Poppins", sans-serif;

  ${({ variant }) => {
    const s = variantStyles[variant];
    return `
      background: ${s.background};
      color: ${s.color};
      border: ${s.border ? `1px solid ${s.border}` : "none"};

      &:hover {
        background: ${s.hover};
        transform: translateY(-3px);
      }
    `;
  }}
`;

/* ===== Variants ===== */
const DarkButton = styled(ButtonBase)`
  svg {
    transition: transform 0.3s ease;
  }
  &:hover svg {
    transform: translateX(6px);
  }
`;

const LightButton = styled(ButtonBase)`
  background: ${({ variant }) => variantStyles.light.background};
  color: ${({ variant }) => variantStyles.light.color};
  border: 1px solid ${({ variant }) => variantStyles.light.border};
  &:hover {
    background: ${({ variant }) => variantStyles.light.hover};
  }
`;

const ColorfulButton = styled(ButtonBase)`
  background: ${({ variant }) => variantStyles.colorful.background};
  position: relative;
  overflow: hidden;
  svg {
    color: gold;
    animation: spin 3s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    background: ${({ variant }) => variantStyles.colorful.hover};
  }
`;

export default function ButtonVariant({ variant = "dark" }) {
  let label = "";
  let Icon = null;
  let ButtonType = ButtonBase;

  switch (variant) {
    case "dark":
      label = "Book Now";
      Icon = <FaArrowRight />;
      ButtonType = DarkButton;
      break;
    case "light":
      label = "Check Availability";
      Icon = <FaCalendarAlt />;
      ButtonType = LightButton;
      break;
    case "colorful":
      label = "Reserve Room";
      Icon = <FaStar />;
      ButtonType = ColorfulButton;
      break;
    default:
      label = "Book Now";
      Icon = <FaArrowRight />;
      ButtonType = DarkButton;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <ButtonType variant={variant}>
        {label} {Icon}
      </ButtonType>
    </div>
  );
}
