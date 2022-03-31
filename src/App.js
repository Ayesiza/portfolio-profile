
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';

import Layout from './components/Layout';
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />

        </Route>
    </Routes>
  );
}

export default App;
