import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CourseSectionContainer = styled(motion.section)`
  display: block;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 50px;
  margin: 40px auto;
  max-width: 900px;
  text-align: left;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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

const CourseTitle = styled.h3`
  color: #667eea;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CourseItem = styled.li`
  margin: 15px 0;
  padding: 15px 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 10px;
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  }
`;

const CourseLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  transition: all 0.3s ease;
  
  &:hover {
    color: #764ba2;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(102, 126, 234, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #667eea;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: scale(1.1);
  }
`;

const CourseSection = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <CourseSectionContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <CloseButton onClick={onClose}>
        <i className="fas fa-times"></i>
      </CloseButton>
      
      <CourseTitle>
        <i className={service.icon}></i> {service.title} Courses
      </CourseTitle>
      
      <CourseList>
        {service.courses.map((course, index) => (
          <CourseItem key={index}>
            <CourseLink 
              href="https://docs.google.com/forms/d/e/1FAIpQLSevPmRNo0ecC7Nxbkhub3LO7-u8ErAYbaw7RzTaqSywG1RE7g/viewform?usp=sharing&ouid=117881194253842650752" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i> {course}
            </CourseLink>
          </CourseItem>
        ))}
      </CourseList>
    </CourseSectionContainer>
  );
};

export default CourseSection;
