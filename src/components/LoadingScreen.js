import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f0f23, #1a1a2e, #16213e, #0f3460, #533483);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(69, 183, 209, 0.2) 0%, transparent 50%);
  }
  
  ${props => props.fadeOut && `
    animation: ${fadeOut} 0.5s ease forwards;
    pointer-events: none;
  `}
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 107, 107, 0.3);
  border-top: 4px solid #ff6b6b;
  border-right: 4px solid #4ecdc4;
  border-bottom: 4px solid #45b7d1;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
  position: relative;
  z-index: 1;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default LoadingScreen;
