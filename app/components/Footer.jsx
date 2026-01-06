"use client";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const FooterContainer = styled.footer`
  margin-top: 6rem;
  padding-top: 3rem;
  border-top: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray);
  padding-bottom: 2rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    font-size: 1.2rem;
    color: var(--gray);
    transition: color 0.3s;
    
    &:hover {
      color: var(--light);
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-size: 0.9rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Copyright>&copy; 2025 Nexus Inc. All rights reserved.</Copyright>

            <Links>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Status</a>
            </Links>

            <Socials>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaDiscord /></a>
            </Socials>
        </FooterContainer>
    );
}
