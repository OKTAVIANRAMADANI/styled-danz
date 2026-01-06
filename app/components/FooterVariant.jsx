"use client";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const variantStyles = {
  dark: { background: "#1a1a1a", color: "#fff" },
  light: { background: "#c96b6bff", color: "#000" },
  colorful: { background: "#0dcaf0", color: "#fff" },
};

const Footer = styled.footer`
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  font-family: sans-serif;
  ${({ variant }) => variant && variantStyles[variant]}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: 180px;
`;

const Title = styled.h4`
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const Text = styled.p`
  margin: 0.4rem 0;
  font-size: 14px;
  opacity: 0.9;
`;

const Social = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  a {
    color: inherit;
    font-size: 1.2rem;
    transition: opacity 0.3s;
  }
  a:hover {
    opacity: 0.7;
  }
`;

const Bottom = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 14px;
  opacity: 0.8;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
`;

export default function FooterVariant({ variant = "dark" }) {
  switch (variant) {
    case "dark":
      return (
        <Footer variant="dark">
          <Row>
            <Column>
              <Title>Hotel Paradise</Title>
              <Text>Experience luxury and comfort like never before.</Text>
              <Social>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
              </Social>
            </Column>
            <Column>
              <Title>Quick Links</Title>
              <Text>Rooms</Text>
              <Text>Facilities</Text>
              <Text>Contact</Text>
            </Column>
            <Column>
              <Title>Contact Us</Title>
              <Text>Jl. Sunset Road No.88, Bali</Text>
              <Text>+62 812 3456 7890</Text>
              <Text>info@hotelparadise.com</Text>
            </Column>
          </Row>
          <Bottom>© 2025 Hotel Paradise. All rights reserved.</Bottom>
        </Footer>
      );

    case "light":
      return (
        <Footer variant="light">
          <Row>
            <Column>
              <Title>About Us</Title>
              <Text>
                Hotel Paradise menghadirkan kenyamanan dan ketenangan dengan pelayanan terbaik untuk setiap tamu.
              </Text>
            </Column>
            <Column>
              <Title>Get in Touch</Title>
              <Text>📍 Bali, Indonesia</Text>
              <Text>📞 (021) 9876-5432</Text>
              <Text>✉️ support@hotelparadise.com</Text>
            </Column>
          </Row>
          <Bottom>© 2025 Hotel Paradise | Designed with care</Bottom>
        </Footer>
      );

    case "colorful":
      return (
        <Footer variant="colorful">
          <Row style={{ alignItems: "center", textAlign: "center", flexDirection: "column" }}>
            <Title>Stay with Us — Feel the Difference!</Title>
            <Text>Join our loyalty program & enjoy exclusive deals every month.</Text>
            <button
              style={{
                background: "#fff",
                color: "#0dcaf0",
                border: "none",
                padding: "0.7rem 1.5rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Join Now
            </button>
          </Row>
          <Bottom>© 2025 Hotel Paradise | Paradise Moments Await</Bottom>
        </Footer>
      );

    default:
      return <Footer variant="dark">© 2025 Hotel Paradise</Footer>;
  }
}
