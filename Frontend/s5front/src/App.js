import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Routes
import Dashboard from './pages/Dashboard';
import Relatorios from './pages/Relatorios';
import Configuracoes from './pages/Configuracoes';
import Suporte from './pages/Suporte';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/relatorios">Relatorios</Link></li>
            <li><Link to="/config">Configuracoes</Link></li>
            <li><Link to="/suporte">Suporte</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/relatorios" element={<Relatorios />}></Route>
          <Route path="/config" element={<Configuracoes />}></Route>
          <Route path="/suporte" element={<Suporte />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
