import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Apply from './pages/Apply';
import CorporateInsurance from './pages/projects/CorporateInsurance';
import FinancialEducation from './pages/projects/FinancialEducation';
import JejuSpecial from './pages/projects/JejuSpecial';
import Regulations from './pages/protection/Regulations';
import Privacy from './pages/protection/Privacy';
import Certificate from './pages/protection/Certificate';
import ScrollToTopButton from './components/ScrollToTopButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/projects/corporate" element={<CorporateInsurance />} />
            <Route path="/projects/education" element={<FinancialEducation />} />
            <Route path="/projects/jeju" element={<JejuSpecial />} />
            <Route path="/protection/regulations" element={<Regulations />} />
            <Route path="/protection/privacy" element={<Privacy />} />
            <Route path="/protection/certificate" element={<Certificate />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}