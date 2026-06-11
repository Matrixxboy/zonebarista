import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import FormulaExplainer from './pages/FormulaExplainer';
import Explainers from './pages/Explainers';
import KnowledgeBase from './pages/KnowledgeBase';
import LearningPaths from './pages/LearningPaths';
import Developer from './pages/Developer';
import LabSOPs from './pages/LabSOPs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Recipes from './pages/Recipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/formulas/:id" element={<FormulaExplainer />} />
          <Route path="/explainers" element={<Explainers />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/knowledge-base/:id" element={<KnowledgeBase />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/lab-sops" element={<LabSOPs />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
