import React from 'react';
import styled from 'styled-components';

const ServiceCardContainer = styled.div`
  background: rgba(15, 15, 35, 0.6);
  backdrop-filter: blur(25px);
  border: 2px solid rgba(255, 107, 107, 0.2);
  border-radius: 25px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    background-size: 300% 300%;
    border-radius: 25px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: gradientShift 3s ease infinite;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 25px 50px rgba(255, 107, 107, 0.3);
    border-color: rgba(78, 205, 196, 0.5);
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
    transition: all 0.4s ease;
  }
  
  ${props => props.$imageClass === 'web-dev-image' && `
    background-image: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'backend-image' && `
    background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'fullstack-image' && `
    background-image: url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'uiux-image' && `
    background-image: url('https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'frontend-image' && `
    background-image: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'aws-image' && `
    background-image: url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'ml-image' && `
    background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'dl-image' && `
    background-image: url('https://images.unsplash.com/photo-1534751516642-a1af1ef67d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'ds-image' && `
    background-image: url('https://images.unsplash.com/photo-1519648023493-d82b5f8d7a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'cyber-image' && `
    background-image: url('https://images.unsplash.com/photo-1484981184820-2e84ea0e2b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${props => props.$imageClass === 'robotics-image' && `
    background-image: url('https://images.unsplash.com/photo-1541534401786-9e3b1eea1a47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  `}
  
  ${ServiceCardContainer}:hover & {
    transform: scale(1.05);
    
    &::before {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    }
  }
`;

const ServiceIcon = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #feca57, #ff9ff3, #54a0ff);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  ${ServiceCardContainer}:hover & {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 15px 35px rgba(78, 205, 196, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  i {
    position: relative;
    z-index: 1;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(224, 230, 237, 0.9);
  margin-bottom: 25px;
  line-height: 1.7;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const ServiceButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 14px 35px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  
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
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(78, 205, 196, 0.4);
    background-position: 100% 0;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;

const ServiceCard = ({ service, onShowCourses }) => {
  return (
    <ServiceCardContainer onClick={() => onShowCourses(service.id)}>
      <ServiceImage $imageClass={service.imageClass} />
      <ServiceIcon>
        <i className={service.icon}></i>
      </ServiceIcon>
      <ServiceTitle>{service.title}</ServiceTitle>
      <ServiceDescription>{service.description}</ServiceDescription>
      <ServiceButton>
        <i className="fas fa-eye"></i> View Courses
      </ServiceButton>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
