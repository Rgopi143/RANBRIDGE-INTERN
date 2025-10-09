import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  color: white;
  padding: 50px 20px;
  margin-top: 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
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
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  color: #667eea;
  text-decoration: none;
  margin: 0 15px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(102, 126, 234, 0.1);
  
  &:hover {
    color: #764ba2;
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
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
