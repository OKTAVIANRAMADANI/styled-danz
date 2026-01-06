"use client";
import styled from "styled-components";

// Default styles for variants
const variantStyles = {
  dark: {
    background: "#1a1a1a",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
  colorful: {
    background: "linear-gradient(135deg, #0dcaf0, #6610f2)",
    color: "#fff",
  },
};

/* Base container */
const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  /* Custom Color Override or Default Variant Style */
  ${({ variant, $customColor }) => {
    if ($customColor) {
      return `
        background: ${$customColor};
        color: #fff; /* Assume white text for custom backgrounds */
      `;
    }
    return variant && `
        background: ${variantStyles[variant].background};
        color: ${variantStyles[variant].color};
    `;
  }}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

/* ====== VARIANT DARK: vertical layout ====== */
const DarkLayout = styled.div`
  width: 320px;
`;

const DarkImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DarkContent = styled.div`
  padding: 1.2rem;
`;

const DarkTitle = styled.h3`
  margin: 0 0 0.4rem;
  font-size: 1.3rem;
`;

const DarkText = styled.p`
  margin: 0 0 0.8rem;
  opacity: 0.85;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ====== VARIANT LIGHT: horizontal layout ====== */
const LightLayout = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.05);
  overflow: hidden;
`;

const LightImage = styled.img`
  width: 45%;
  height: 200px;
  object-fit: cover;
`;

const LightContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* ====== VARIANT COLORFUL: overlay text ====== */
const ColorfulLayout = styled.div`
  width: 340px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

const ColorfulImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  filter: brightness(70%);
`;

const ColorfulText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default function CardVariant({
  variant = "dark",
  title,
  description,
  price,
  rating,
  image,
  customColor
}) {

  // 1. Initial Defaults Based on Variant
  let baseData = {};

  switch (variant) {
    case "dark":
      baseData = {
        title: "Suite Mewah",
        description: "Suite luas dengan pemandangan laut dan tempat tidur king-size.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        price: "Rp 3.500.000/malam",
        rating: "⭐ 4.9",
      };
      break;
    case "light":
      baseData = {
        title: "Kamar Deluxe",
        description: "Kamar modern yang terang dengan balkon dan kamar mandi pribadi.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        price: "Rp 2.500.000/malam",
        rating: "⭐ 4.7",
      };
      break;
    case "colorful":
      baseData = {
        title: "Kamar Keluarga",
        description: "Sempurna untuk liburan keluarga — besar, nyaman, dan elegan.",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
        price: "Rp 4.500.000/malam",
        rating: "⭐ 4.8",
      };
      break;
    default:
      baseData = {
        title: "Judul Kartu",
        description: "Deskripsi singkat tentang layanan.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        price: "Rp 0",
        rating: "⭐ 5.0"
      };
  }

  // 2. Override with custom props ONLY if they are provided (not empty strings)
  const displayData = {
    title: title || baseData.title,
    description: description || baseData.description,
    image: image || baseData.image,
    price: price || baseData.price,
    rating: rating || baseData.rating
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      {variant === "dark" && (
        <Card variant="dark" $customColor={customColor}>
          <DarkLayout>
            <DarkImage src={displayData.image} alt={displayData.title} />
            <DarkContent>
              <DarkTitle>{displayData.title}</DarkTitle>
              <DarkText>{displayData.description}</DarkText>
              <Info>
                <span style={{ fontWeight: 'bold', color: '#ffc107' }}>{displayData.price}</span>
                <span>{displayData.rating}</span>
              </Info>
            </DarkContent>
          </DarkLayout>
        </Card>
      )}

      {variant === "light" && (
        <Card variant="light" $customColor={customColor}>
          <LightLayout>
            <LightImage src={displayData.image} alt={displayData.title} />
            <LightContent>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.4rem", color: "#333" }}>{displayData.title}</h3>
              <p style={{ marginBottom: "1rem", opacity: 0.7, lineHeight: "1.6" }}>
                {displayData.description}
              </p>
              <Info>
                <span style={{ color: "var(--primary)", fontWeight: "600", fontSize: "1.1rem" }}>{displayData.price}</span>
                <span style={{ background: "#f1f5f9", padding: "0.2rem 0.6rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "bold" }}>{displayData.rating}</span>
              </Info>
            </LightContent>
          </LightLayout>
        </Card>
      )}

      {variant === "colorful" && (
        <Card variant="colorful" $customColor={customColor}>
          <ColorfulLayout>
            <ColorfulImage src={displayData.image} alt={displayData.title} />
            <ColorfulText>
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>{displayData.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                  {displayData.description}
                </p>
              </div>
              <Info>
                <span style={{ fontWeight: "bold" }}>{displayData.price}</span>
                <span>{displayData.rating}</span>
              </Info>
            </ColorfulText>
          </ColorfulLayout>
        </Card>
      )}
    </div>
  );
}
