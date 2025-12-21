import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TermsContainer = styled.section`
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

const Terms = ({ setCurrentSection }) => {
  React.useEffect(() => {
    setCurrentSection('terms');
  }, [setCurrentSection]);

  return (
    <TermsContainer>
      <PolicyHeader>
        <PolicyTitle>
          <i className="fas fa-file-contract"></i> Terms of Service
        </PolicyTitle>
      </PolicyHeader>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PolicyText>
          Welcome to RANBRIDGE Services! These Terms of Service govern your use of our website and services.
        </PolicyText>

        <SectionTitle>
          <i className="fas fa-check-circle"></i> 1. Acceptance of Terms
        </SectionTitle>
        <PolicyText>
          By using our website, you agree to comply with and be bound by these terms.
        </PolicyText>

        <SectionTitle>
          <i className="fas fa-handshake"></i> 2. Use of Services
        </SectionTitle>
        <PolicyText>
          You may use our services for lawful purposes only. Any misuse of our services is prohibited.
        </PolicyText>

        <SectionTitle>
          <i className="fas fa-copyright"></i> 3. Intellectual Property
        </SectionTitle>
        <PolicyText>
          All content, trademarks, and data are owned by RANBRIDGE Services Private Limited unless otherwise stated.
        </PolicyText>

        <SectionTitle>
          <i className="fas fa-edit"></i> 4. Changes to Terms
        </SectionTitle>
        <PolicyText>
          We reserve the right to update or modify these terms at any time without prior notice.
        </PolicyText>

        <SectionTitle>
          <i className="fas fa-envelope"></i> 5. Contact
        </SectionTitle>
        <PolicyText>
          If you have any questions, please contact us at{' '}
          <PolicyLink href="mailto:ranbridgeserviceprivatelimited@gmail.com">
            ranbridgeserviceprivatelimited@gmail.com
          </PolicyLink>.
        </PolicyText>
      </motion.div>
    </TermsContainer>
  );
};

export default Terms;
