import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(15, 15, 35, 0.9);
  backdrop-filter: blur(25px);
  color: #e0e6ed;
  padding: 50px 20px;
  margin-top: 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 2px solid rgba(255, 107, 107, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.5), rgba(78, 205, 196, 0.5), transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: auto;
  position: relative;
  z-index: 1;
`;

const FooterTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const FooterText = styled.p`
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
`;

const FooterLinks = styled.div`
  margin-top: 30px;
`;

const FooterLink = styled.a`
  color: #ff6b6b;
  text-decoration: none;
  margin: 0 15px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px 20px;
  border-radius: 25px;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  
  &:hover {
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-color: rgba(78, 205, 196, 0.4);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(78, 205, 196, 0.3);
  }
`;

const FooterDivider = styled.hr`
  margin: 30px 0;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
`;

const FooterCopyright = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
`;

const Footer = ({ setCurrentSection }) => {
  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>
          <i className="fas fa-code"></i> RANBRIDGE SERVICES PVT.LTD
        </FooterTitle>
        <FooterText>
          <i className="fas fa-rocket"></i> Building careers with technology, creativity, and innovation.
        </FooterText>
        <FooterText>
          <i className="fas fa-map-marker-alt"></i> Location: Narasaraopet, India
        </FooterText>
        <FooterText>
          <i className="fas fa-envelope"></i> Email: ranbridgeserviceprivatelimited@gmail.com
        </FooterText>
        <FooterLinks>
          <FooterLink onClick={() => handleNavigation('privacy')}>
            <i className="fas fa-shield-alt"></i> Privacy Policy
          </FooterLink>
          |
          <FooterLink onClick={() => handleNavigation('terms')}>
            <i className="fas fa-file-contract"></i> Terms of Service
          </FooterLink>
        </FooterLinks>
        <FooterDivider />
        <FooterCopyright>
          &copy; 2025 RANBRIDGE Services Private Limited. All rights reserved.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
