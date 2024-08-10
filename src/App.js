import Header from './components/Header';
import PlantAnalyze from './pages/PlantAnalyze';
import './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import FarmerGuide from './pages/FarmerGuide';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/PlantAnalyze" element={<PlantAnalyze />} />
          <Route path="/FarmerGuide" element={<FarmerGuide />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
