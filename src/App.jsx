import { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import SplashScreen from './components/SplashScreen';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:id" element={<CaseStudy />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      )}
    </>
  );
}

export default App;
