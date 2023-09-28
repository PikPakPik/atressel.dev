import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects projects={[]} />
      <Footer />
    </>
  );
}

export default App; 
