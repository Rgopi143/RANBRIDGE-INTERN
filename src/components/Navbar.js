import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(25px);
  border-bottom: 1px solid rgba(255, 107, 107, 0.2);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  ${props => props.scrolled && `
    background: rgba(15, 15, 35, 0.95);
    backdrop-filter: blur(30px);
    box-shadow: 0 8px 40px rgba(255, 107, 107, 0.15);
    border-bottom: 1px solid rgba(78, 205, 196, 0.3);
  `}
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavLogo = styled.a`
  color: white;
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
  
  ${props => props.scrolled && `
    background: linear-gradient(45deg, #feca57, #ff9ff3, #54a0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(254, 202, 87, 0.4);
  `}
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 107, 107, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.2);
  
  ${props => props.scrolled && `
    border-color: rgba(78, 205, 196, 0.6);
    box-shadow: 0 0 25px rgba(78, 205, 196, 0.3);
  `}
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    border-color: rgba(69, 183, 209, 0.8);
    box-shadow: 0 0 30px rgba(69, 183, 209, 0.4);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: #e0e6ed;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(15px);
  cursor: pointer;
  border: 1px solid rgba(255, 107, 107, 0.2);
  
  ${props => props.scrolled && `
    color: #ffffff;
    background: rgba(78, 205, 196, 0.15);
    border: 1px solid rgba(78, 205, 196, 0.3);
  `}
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(78, 205, 196, 0.2));
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
    border: 1px solid rgba(255, 107, 107, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    navigate(`/${section === 'home' ? '' : section}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContainer>
        <NavLogo scrolled={scrolled} onClick={() => handleNavigation('home')}>
          <LogoImage 
            scrolled={scrolled}
            src="https://ik.imagekit.io/76tcs71lul/WhatsApp%20Image%202025-08-15%20at%2000.57.11_4a5a3a25.jpg?updatedAt=1755200143946" 
            alt="RANBRIDGE Logo" 
          />
          <span>RANBRIDGE SERVICES</span>
        </NavLogo>
        <NavLinks>
          <NavLink scrolled={scrolled} onClick={() => handleNavigation('home')}>
            <i className="fas fa-home"></i> Home
          </NavLink>
          <NavLink scrolled={scrolled} onClick={() => handleNavigation('privacy')}>
            <i className="fas fa-shield-alt"></i> Privacy Policy
          </NavLink>
          <NavLink scrolled={scrolled} onClick={() => handleNavigation('terms')}>
            <i className="fas fa-file-contract"></i> Terms of Service
          </NavLink>
        </NavLinks>
      </NavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
