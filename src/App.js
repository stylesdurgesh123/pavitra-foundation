import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from './pages/ScrollTop';

// Lazy Load Pages
const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Education = React.lazy(() => import('./pages/Education'));
const Health = React.lazy(() => import('./pages/Health'));
const Environment = React.lazy(() => import('./pages/Environment'));
const FreeLegalAid = React.lazy(() => import('./pages/FreeLegalAid'));
const Volunteer = React.lazy(() => import('./pages/Volunteer'));
const Joinngo = React.lazy(() => import('./pages/Joinngo'));
const Individualmember = React.lazy(() => import('./pages/Individualmember'));
const DonatePage = React.lazy(() => import('./pages/DonatePage'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/health" element={<Health />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/Freelegalaid" element={<FreeLegalAid />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/joinngo" element={<Joinngo />} />
            <Route path="/individualmember" element={<Individualmember />} />
            <Route path="/donate" element={<DonatePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

