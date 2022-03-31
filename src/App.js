
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className='App'>
    <Routes>
     
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
