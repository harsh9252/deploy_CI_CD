import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on every route change
function ScrollToTop() {
  if (typeof ScrollRestoration !== 'undefined') return null;
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNav />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/shop"    element={<Shop />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all → Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// Simple scroll-to-top component using react-router v6
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
