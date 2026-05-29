import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import Explainers from './pages/Explainers';
import KnowledgeBase from './pages/KnowledgeBase';
import LearningPaths from './pages/LearningPaths';
import Developer from './pages/Developer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/explainers" element={<Explainers />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
