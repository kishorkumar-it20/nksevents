import './App.css';
import AboutPage from './pages/AboutPage';
import CorperatePage from './pages/CorperatePage';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NetworkPage from './pages/NetworkPage';
import EventDecorat from './pages/EventDecorat';
import CustomizationPage from './pages/CustomizationPage';  
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/corperate" element={<CorperatePage/>} />
        <Route path="/network" element={<NetworkPage/>} />
        <Route path="/eventdecorat" element={<EventDecorat/>} />
        <Route path="/customization" element={<CustomizationPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
