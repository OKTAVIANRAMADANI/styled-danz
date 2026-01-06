"use client";
import styled from "styled-components";

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

export default function HeaderVariant({ variant = "dark", children }) {
  return (
    <>
      {variant === "dark" && (
        <Header variant="dark">
          <Logo>{children}</Logo>
          <Nav>
            <Link href="#">Home</Link>
            <Link href="#">Rooms</Link>
            <Link href="#">Contact</Link>
          </Nav>
          <SearchBox variant="dark" placeholder="Search..." />
        </Header>
      )}

      {variant === "light" && (
        <Header variant="light">
          <SearchBox variant="light" placeholder="Search here..." />
          <Logo>{children}</Logo>
          <Nav>
            <Link href="#">Home</Link>
            <Link href="#">Facilities</Link>
            <Link href="#">Booking</Link>
          </Nav>
        </Header>
      )}

      {variant === "colorful" && (
        <Header variant="colorful">
          <Logo>{children}</Logo>
          <SearchBox variant="colorful" placeholder="Find a room..." />
          <Nav>
            <Link href="#">Discover</Link>
            <Link href="#">Gallery</Link>
            <Link href="#">About</Link>
          </Nav>
        </Header>
      )}
    </>
  );
}
