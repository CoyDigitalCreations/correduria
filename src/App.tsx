import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Locations from './components/Locations';
import Clients from './components/Clients';
import Contact from './components/Contact';
import AvisoPrivacidad from './aviso/aviso';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Locations />
      <Clients />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/aviso" element={
          <Layout>
            <AvisoPrivacidad />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;