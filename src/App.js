import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackgroundAnimation from './components/BackgroundAnimation';
import Particles from './components/Particles';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
    min-height: 100vh;
    color: #e0e6ed;
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
    z-index: -2;
    pointer-events: none;
  }

  /* Enhanced Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 15, 35, 0.8);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    background-size: 300% 300%;
    border-radius: 6px;
    animation: gradientShift 3s ease infinite;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #ff5252, #26a69a, #2196f3, #66bb6a, #ffa726);
    background-size: 300% 300%;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Enhanced text selection */
  ::selection {
    background: rgba(255, 107, 107, 0.3);
    color: #ffffff;
  }

  ::-moz-selection {
    background: rgba(255, 107, 107, 0.3);
    color: #ffffff;
  }
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <BackgroundAnimation />
        <Particles />
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home setCurrentSection={setCurrentSection} />} />
            <Route path="/privacy" element={<Privacy setCurrentSection={setCurrentSection} />} />
            <Route path="/terms" element={<Terms setCurrentSection={setCurrentSection} />} />
          </Routes>
        </MainContent>
        <Footer setCurrentSection={setCurrentSection} />
      </AppContainer>
    </Router>
  );
}

export default App;
