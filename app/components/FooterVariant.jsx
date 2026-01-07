"use client";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const variantStyles = {
  dark: { background: "#1a1a1a", color: "#fff" },
  light: { background: "#ffffff", color: "#000", border: '1px solid #e2e8f0' },
  colorful: { background: "linear-gradient(135deg, #0dcaf0, #6610f2)", color: "#fff" },
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

const DefaultLinks = [
  { title: "Tautan Cepat", items: ["Kamar", "Fasilitas", "Kontak"] },
  { title: "Legal", items: ["Privasi", "Syarat"] }
];

export default function FooterVariant({
  variant = "dark",
  companyName = "Hotel Paradise",
  description,
  links = DefaultLinks,
  contactInfo,
  copyright,
  onJoinClick
}) {
  const currentYear = new Date().getFullYear();
  const defaultDesc = "Nikmati kemewahan dan kenyamanan yang belum pernah Anda rasakan sebelumnya.";
  const defaultContact = { address: "Jl. Sunset Road No.88, Bali", phone: "+62 812 3456 7890", email: "info@hotelparadise.com" };
  const displayContact = contactInfo || defaultContact;

  if (variant === "colorful") {
    return (
      <Footer variant="colorful">
        <Row style={{ alignItems: "center", textAlign: "center", flexDirection: "column" }}>
          <Title>Menginap Bersama Kami — Rasakan Bedanya!</Title>
          <Text>Bergabunglah dengan program loyalitas kami & nikmati penawaran eksklusif setiap bulan.</Text>
          <button
            onClick={onJoinClick}
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
            Gabung Sekarang
          </button>
        </Row>
        <Bottom>{copyright || `© ${currentYear} ${companyName} | Momen Surga Menanti`}</Bottom>
      </Footer>
    );
  }

  return (
    <Footer variant={variant}>
      <Row>
        <Column>
          <Title>{companyName}</Title>
          <Text>{description || defaultDesc}</Text>
          <Social>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </Social>
        </Column>

        {links.map((group, idx) => (
          <Column key={idx}>
            <Title>{group.title}</Title>
            {group.items.map((item, i) => (
              <Text key={i}>{item}</Text>
            ))}
          </Column>
        ))}

        <Column>
          <Title>Hubungi Kami</Title>
          <Text>{displayContact.address}</Text>
          <Text>{displayContact.phone}</Text>
          <Text>{displayContact.email}</Text>
        </Column>
      </Row>
      <Bottom>{copyright || `© ${currentYear} ${companyName}. Hak cipta dilindungi.`}</Bottom>
    </Footer>
  );
}
