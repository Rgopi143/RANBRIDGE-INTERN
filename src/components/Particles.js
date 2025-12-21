import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
`;

const Particles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(255, 107, 107, 0.4)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.animation = `float 6s ease-in-out infinite`;
        
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return <ParticlesContainer ref={containerRef} />;
};

export default Particles;
