"use client";
import styled from "styled-components";

// Default items if not provided
const DEFAULT_MENU_DARK = [
  { label: "Beranda", href: "#" },
  { label: "Kamar", href: "#" },
  { label: "Kontak", href: "#" },
];

const DEFAULT_MENU_LIGHT = [
  { label: "Beranda", href: "#" },
  { label: "Fasilitas", href: "#" },
  { label: "Booking", href: "#" },
];

const DEFAULT_MENU_COLORFUL = [
  { label: "Jelajahi", href: "#" },
  { label: "Galeri", href: "#" },
  { label: "Tentang", href: "#" },
];

const variantStyles = {
  dark: { background: "#1a1a1a", color: "#fff" },
  light: { background: "#bb7e7eff", color: "#000" },
  colorful: { background: "#0dcaf0", color: "#fff" },
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-family: sans-serif;
  margin-bottom: 1.5rem;
  ${({ variant }) => variant && variantStyles[variant]};
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

const SearchBox = styled.input`
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 14px;
  ${({ variant }) =>
    variant === "light"
      ? "background:#fff; color:#000; border:1px solid #ccc;"
      : "background:rgba(255,255,255,0.2); color:#fff;"}
`;

const ActionButton = styled.button`
  background: white;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

export default function HeaderVariant({
  variant = "dark",
  logo,
  children,
  menuItems,
  buttonText,
  onButtonClick
}) {
  const displayLogo = logo || children;

  // Render helper for Nav links
  const renderNav = (defaultItems) => {
    const items = menuItems || defaultItems;
    return (
      <Nav>
        {items.map((item, idx) => (
          <Link key={idx} href={item.href}>{item.label}</Link>
        ))}
      </Nav>
    );
  };

  return (
    <>
      {variant === "dark" && (
        <Header variant="dark">
          <Logo>{displayLogo || "Dashboard"}</Logo>
          {renderNav(DEFAULT_MENU_DARK)}
          {buttonText ? (
            <ActionButton onClick={onButtonClick}>{buttonText}</ActionButton>
          ) : (
            <SearchBox variant="dark" placeholder="Cari..." />
          )}
        </Header>
      )}

      {variant === "light" && (
        <Header variant="light">
          {buttonText ? (
            <ActionButton onClick={onButtonClick}>{buttonText}</ActionButton>
          ) : (
            <SearchBox variant="light" placeholder="Cari di sini..." />
          )}
          <Logo>{displayLogo || "Dashboard"}</Logo>
          {renderNav(DEFAULT_MENU_LIGHT)}
        </Header>
      )}

      {variant === "colorful" && (
        <Header variant="colorful">
          <Logo>{displayLogo || "Dashboard"}</Logo>
          {buttonText ? (
            <ActionButton onClick={onButtonClick}>{buttonText}</ActionButton>
          ) : (
            <SearchBox variant="colorful" placeholder="Temukan kamar..." />
          )}
          {renderNav(DEFAULT_MENU_COLORFUL)}
        </Header>
      )}

      {/* Fallback or other variants can use a generic structure if needed, 
           but for now we stick to the 3 main ones to preserve shape. */}
      {!["dark", "light", "colorful"].includes(variant) && (
        <Header variant="dark">
          <Logo>{displayLogo || "Brand"}</Logo>
          {renderNav(DEFAULT_MENU_DARK)}
        </Header>
      )}
    </>
  );
}
