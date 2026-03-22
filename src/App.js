import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './animations.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home'; 
import EnstaArchive from './pages/EnstaArchive/Enstarchive';
import FirstSemester from './pages/1S1/premiere1';
import SecondSemester from './pages/1S2/premiere2';
import FirstSemester2 from './pages/2S1/desieme1';
import LastSemester from './pages/3S/troisieme';
import SubjectResources from './pages/Matiere/matiere';
import SubjectTemplate from './components/SubjectTemplate/SubjectTemplate';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import CodingHub from './pages/ACMCodingHub/CodingHub';
import ControlCenter from './pages/ControlCenter/ControlCenter';
import AIAssistant from './components/AIAssistant/AIAssistant';
import SplashScreen from './components/SplashScreen/SplashScreen';
import NotFound from './pages/NotFound/NotFound';
import { DarkModeProvider } from './context/DarkModeContext';
import './darkmode.css';

// Wrapper to handle page transition animations based on route change
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/enstaArchive" element={<EnstaArchive/>} />
        <Route path="/premiere1" element={<FirstSemester/>} />
        <Route path="/premiere2" element={<SecondSemester/>} />
        <Route path="/desieme1" element={<FirstSemester2/>} />
        <Route path="/troisieme" element={<LastSemester/>} />
        <Route path="/matiere" element={<SubjectResources/>} />
        <Route path="/matiere/:courseId" element={<SubjectTemplate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/codinghub" element={
          <ProtectedRoute>
            <CodingHub />
          </ProtectedRoute>
        } />
        <Route path="/control-center" element={
          <ProtectedRoute>
            {localStorage.getItem('acm_role') === 'admin' ? (
              <ControlCenter />
            ) : (
              <NotFound />
            )}
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <DarkModeProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <Router>
          <div className="app-container">
            <Navbar />
            <AnimatedRoutes />
            <AIAssistant />
          </div>
        </Router>
      )}
    </DarkModeProvider>
  );
}

export default App;