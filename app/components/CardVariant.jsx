    "use client";
    import styled from "styled-components";

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

      ${({ variant }) =>
        variant &&
        `
          background: ${variantStyles[variant].background};
          color: ${variantStyles[variant].color};
        `}

      &:hover {
        transform: scale(1.03);
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
      width: 480px;
      border: 1px solid #ddd;
    `;

    const LightImage = styled.img`
      width: 50%;
      height: 180px;
      object-fit: cover;
    `;

    const LightContent = styled.div`
      padding: 1rem 1.4rem;
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

    export default function CardVariant({ variant = "dark" }) {
      let roomData = {};

      switch (variant) {
        case "dark":
          roomData = {
            title: "Luxury Suite",
            description: "Spacious suite with ocean view and king-size bed.",
            image:
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            price: "$250/night",
            rating: "⭐ 4.9",
          };
          break;
        case "light":
          roomData = {
            title: "Deluxe Room",
            description: "Modern bright room with balcony and private bathroom.",
            image:
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            price: "$180/night",
            rating: "⭐ 4.7",
          };
          break;
        case "colorful":
          roomData = {
            title: "Family Room",
            description: "Perfect for family holidays — big, cozy, and elegant.",
            image:
              "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
            price: "$320/night",
            rating: "⭐ 4.8",
          };
          break;
      }

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {variant === "dark" && (
            <Card variant="dark">
              <DarkLayout>
                <DarkImage src={roomData.image} alt={roomData.title} />
                <DarkContent>
                  <DarkTitle>{roomData.title}</DarkTitle>
                  <DarkText>{roomData.description}</DarkText>
                  <Info>
                    <span>{roomData.price}</span>
                    <span>{roomData.rating}</span>
                  </Info>
                </DarkContent>
              </DarkLayout>
            </Card>
          )}

          {variant === "light" && (
            <Card variant="light">
              <LightLayout>
                <LightImage src={roomData.image} alt={roomData.title} />
                <LightContent>
                  <h3 style={{ marginBottom: "0.4rem" }}>{roomData.title}</h3>
                  <p style={{ marginBottom: "0.8rem", opacity: 0.8 }}>
                    {roomData.description}
                  </p>
                  <Info>
                    <span>{roomData.price}</span>
                    <span>{roomData.rating}</span>
                  </Info>
                </LightContent>
              </LightLayout>
            </Card>
          )}

          {variant === "colorful" && (
            <Card variant="colorful">
              <ColorfulLayout>
                <ColorfulImage src={roomData.image} alt={roomData.title} />
                <ColorfulText>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem" }}>{roomData.title}</h3>
                    <p style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                      {roomData.description}
                    </p>
                  </div>
                  <Info>
                    <span>{roomData.price}</span>
                    <span>{roomData.rating}</span>
                  </Info>
                </ColorfulText>
              </ColorfulLayout>
            </Card>
          )}
        </div>
      );
    }
