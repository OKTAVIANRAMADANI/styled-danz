"use client";
import styled from "styled-components";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.3);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--light);
`;

const CodeBlock = styled.div`
  background: #000;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Courier New', monospace;
  color: #22c55e;
  border: 1px solid var(--glass-border);
`;

const Command = styled.span`
  font-size: 1.1rem;
`;

const CopyButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: var(--gray);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: var(--light);
  }
`;

export default function Installation() {
    const [copied, setCopied] = useState(false);
    const command = "npm install styled-danz";

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Container id="install">
            <Title>Instalasi Cepat</Title>
            <CodeBlock>
                <Command>$ {command}</Command>
                <CopyButton onClick={handleCopy}>
                    {copied ? <FaCheck style={{ color: '#22c55e' }} /> : <FaCopy />}
                </CopyButton>
            </CodeBlock>
        </Container>  
    );
}
