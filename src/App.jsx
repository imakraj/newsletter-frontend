import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/Signature-Light.svg'
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/shared/AppHeader.jsx'
import AppFooter from './components/shared/AppFooter.jsx'

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  return (
    <div className='bg-slate-800'>
      <Router>
      <AppHeader />
      <Suspense fallback={""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <AppFooter />
      </Router>
    </div>
  )
}

export default App
