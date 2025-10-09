import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyContainer = styled.section`
  max-width: 900px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInUp 0.6s ease;
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PolicyHeader = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: 15px;
  margin: -50px -50px 40px -50px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  }
`;

const PolicyTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 800;
  position: relative;
  z-index: 1;
`;

const PolicyContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  color: #667eea;
  margin-top: 40px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const PolicyText = styled.p`
  margin: 15px 0;
  color: #555;
  line-height: 1.6;
`;

const PolicyList = styled.ul`
  padding-left: 20px;
  margin: 15px 0;
`;

const PolicyListItem = styled.li`
  margin: 10px 0;
  color: #555;
`;

const PolicyLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;

const Privacy = ({ setCurrentSection }) => {
  React.useEffect(() => {
    setCurrentSection('privacy');
  }, [setCurrentSection]);

  return (
    <PrivacyContainer>
      <PolicyHeader>
        <PolicyTitle>
          <i className="fas fa-shield-alt"></i> Privacy Policy
        </PolicyTitle>
        <PolicyContent>
          <p>Effective Date: August 15, 2025</p>
        </PolicyContent>
      </PolicyHeader>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PolicyText>
          Your privacy is important to us. This Privacy Policy explains how <strong>RANBRIDGE Services Private Limited</strong> collects, uses, and protects your information.
        </PolicyText>

        <SectionTitle>
          <i className="fas fa-info-circle"></i> 1. Information We Collect
        </SectionTitle>
        <PolicyText>We may collect the following information when you interact with our website or services:</PolicyText>
        <PolicyList>
          <PolicyListItem>Personal details such as name, email address, and contact information.</PolicyListItem>
          <PolicyListItem>Information you provide through forms or course registrations.</PolicyListItem>
          <PolicyListItem>Technical information like IP address, browser type, and device details.</PolicyListItem>
        </PolicyList>

        <SectionTitle>
          <i className="fas fa-cogs"></i> 2. How We Use Your Information
        </SectionTitle>
        <PolicyText>We use your information for the following purposes:</PolicyText>
        <PolicyList>
          <PolicyListItem>To provide and improve our services.</PolicyListItem>
          <PolicyListItem>To process your internship or course registration.</PolicyListItem>
          <PolicyListItem>To send updates, notifications, or promotional materials (only if you opt-in).</PolicyListItem>
        </PolicyList>

        <SectionTitle>
          <i className="fas fa-share-alt"></i> 3. Information Sharing
        </SectionTitle>
        <PolicyText>We do not sell or rent your personal data to third parties. We may share information only when:</PolicyText>
        <PolicyList>
          <PolicyListItem>It is required by law.</PolicyListItem>
          <PolicyListItem>It is necessary to deliver our services.</PolicyListItem>
          <PolicyListItem>You have given explicit consent.</PolicyListItem>
        </PolicyList>

        <SectionTitle>
          <i className="fas fa-lock"></i> 4. Data Security
        </SectionTitle>
        <PolicyText>We use industry-standard security measures to protect your data. However, no method of transmission or storage is completely secure.</PolicyText>

        <SectionTitle>
          <i className="fas fa-user-check"></i> 5. Your Rights
        </SectionTitle>
        <PolicyText>You can request to access, correct, or delete your personal information by contacting us.</PolicyText>

        <SectionTitle>
          <i className="fas fa-edit"></i> 6. Changes to This Policy
        </SectionTitle>
        <PolicyText>We may update this Privacy Policy from time to time. Please review it periodically.</PolicyText>

        <SectionTitle>
          <i className="fas fa-envelope"></i> 7. Contact Us
        </SectionTitle>
        <PolicyText>
          If you have any questions, contact us at: <PolicyLink href="mailto:ranbridgeserviceprivatelimited@gmail.com">ranbridgeserviceprivatelimited@gmail.com</PolicyLink>
        </PolicyText>
      </motion.div>
    </PrivacyContainer>
  );
};

export default Privacy;
