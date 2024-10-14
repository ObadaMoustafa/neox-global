import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './i18n.js';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
