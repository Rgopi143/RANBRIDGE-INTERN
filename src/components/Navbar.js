import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  
  ${props => props.scrolled && `
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  
  ${props => props.scrolled && `
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  ${props => props.scrolled && `
    border-color: rgba(102, 126, 234, 0.3);
  `}
  
  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  
  ${props => props.scrolled && `
    color: #333;
    background: rgba(102, 126, 234, 0.1);
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
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
