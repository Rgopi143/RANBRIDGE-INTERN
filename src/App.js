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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #764ba2, #667eea);
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
