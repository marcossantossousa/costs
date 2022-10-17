import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/Projects" element={<Projects />}>Projects</Route>
          <Route path="/company" element={<Company />}>Empresa</Route>
          <Route path="/contact" element={<Contact />}>Contato</Route>
          <Route path="/newproject" element={<NewProject />}>Novo Projeto</Route>
        </Routes>
      </Container>
      <Footer />


    </BrowserRouter>

  );
}

export default App;
