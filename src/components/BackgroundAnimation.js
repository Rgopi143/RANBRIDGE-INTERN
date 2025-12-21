import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff);
  background-size: 400% 400%;
  animation: ${gradientShift} 20s ease infinite;
  opacity: 0.1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(69, 183, 209, 0.1) 0%, transparent 50%);
    animation: ${gradientShift} 25s ease infinite reverse;
  }
`;

const BackgroundAnimation = () => {
  return <BackgroundContainer />;
};

export default BackgroundAnimation;
