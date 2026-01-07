"use client";
import styled from "styled-components";
import { FaSearch, FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: transparent;
  width: 100%;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: var(--panel-bg);
  border: 1px solid var(--glass-border);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  width: 400px;
  backdrop-filter: blur(10px);

  input {
    background: transparent;
    border: none;
    color: var(--foreground);
    margin-left: 1rem;
    width: 100%;
    outline: none;
    font-family: inherit;

    &::placeholder {
      color: var(--gray);
    }
  }

  svg {
    color: var(--gray);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconButton = styled.button`
  background: var(--panel-bg);
  border: 1px solid var(--glass-border);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default function Header() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // Default to dark
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark ? 'dark' : 'light';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <HeaderContainer>
            <SearchBar>
                <FaSearch />
                <input type="text" placeholder="Cari sesuatu..." />
            </SearchBar>

            <Actions>
                <IconButton onClick={toggleTheme} title="Ganti Tema">
                    {isDark ? <FaSun /> : <FaMoon />}
                </IconButton>
                <IconButton>
                    <FaBell />
                </IconButton>
                <Button>Upgrade Pro</Button>
            </Actions>
        </HeaderContainer>
    );
}
