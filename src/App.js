
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/home/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
         

          
        </Route>
    </Routes>
  );
}

export default App;