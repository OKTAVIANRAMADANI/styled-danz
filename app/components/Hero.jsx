"use client";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link"; // Use Link for navigation

const HeroContainer = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Badge = styled.span`
  background: rgba(79, 70, 229, 0.1);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(79, 70, 229, 0.2);
`;

const Title = styled.h2`
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    background: linear-gradient(to right, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const Button = styled.button`
  background: var(--light);
  color: var(--dark);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: fit-content;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
  }
`;

export default function Hero({ onGetStarted }) {
    return (
        <HeroContainer>
            <Badge>v2.0 Kini Tersedia</Badge>
            <Title>
                Bangun lebih cepat dengan <br />
                <span>Alat Generasi Berikutnya</span>
            </Title>
            <Description>
                Rasakan masa depan pengembangan web. Fondasi yang kuat, fleksibel, dan modern
                untuk proyek besar Anda berikutnya.
            </Description>
            <Link href="/dashboard" passHref legacyBehavior>
                <Button as="a">
                    Mulai Sekarang <FaArrowRight />
                </Button>
            </Link>
        </HeroContainer>
    );
}
