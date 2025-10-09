import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import CourseSection from './CourseSection';

const HomeContainer = styled.section`
  padding: 80px 20px;
  text-align: center;
  position: relative;
`;

const ServicesTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease;
  
  span {
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ServicesSubtitle = styled.p`
  max-width: 700px;
  margin: 0 auto 60px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 400;
  animation: fadeInUp 1s ease 0.2s both;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 1s ease 0.4s both;
`;

const services = [
  {
    id: 'web-dev',
    title: 'Web Development Intern',
    description: 'Work on real-world web development projects using modern technologies and frameworks.',
    icon: 'fas fa-laptop-code',
    imageClass: 'web-dev-image',
    courses: [
      'HTML, CSS, and JavaScript Fundamentals',
      'Responsive Web Design',
      'React.js for Beginners',
      'Advanced MERN Stack Projects'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Build scalable server-side applications and APIs for businesses and startups.',
    icon: 'fas fa-server',
    imageClass: 'backend-image',
    courses: [
      'Node.js and Express.js Essentials',
      'Database Design with MongoDB & MySQL',
      'RESTful API Development',
      'Authentication & Authorization'
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development Intern',
    description: 'Gain comprehensive experience in both frontend and backend development workflows.',
    icon: 'fas fa-cogs',
    imageClass: 'fullstack-image',
    courses: [
      'Frontend with React.js',
      'Backend with Node.js',
      'API Integration',
      'Deployment & Hosting'
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design Intern',
    description: 'Create user-friendly and visually appealing interfaces for modern applications.',
    icon: 'fas fa-palette',
    imageClass: 'uiux-image',
    courses: [
      'UI Design Fundamentals',
      'UX Research & Wireframing',
      'Prototyping with Figma',
      'Design Systems & Accessibility'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Develop responsive and interactive web applications for various platforms.',
    icon: 'fas fa-globe',
    imageClass: 'frontend-image',
    courses: [
      'HTML & CSS Advanced Techniques',
      'JavaScript ES6+ Concepts',
      'React & Next.js',
      'Performance Optimization'
    ]
  }
];

const Home = ({ setCurrentSection }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShowCourses = (serviceId) => {
    setSelectedCourse(serviceId);
  };

  const handleCloseCourses = () => {
    setSelectedCourse(null);
  };

  return (
    <HomeContainer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ServicesTitle>
          Our <span>Services</span>
        </ServicesTitle>
        <ServicesSubtitle>
          Internship and development opportunities to build your career and skills in the tech industry.
        </ServicesSubtitle>
      </motion.div>

      <ServicesContainer>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <ServiceCard
              service={service}
              onShowCourses={handleShowCourses}
            />
          </motion.div>
        ))}
      </ServicesContainer>

      {selectedCourse && (
        <CourseSection
          service={services.find(s => s.id === selectedCourse)}
          onClose={handleCloseCourses}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
