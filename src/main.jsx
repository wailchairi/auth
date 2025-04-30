
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider } from './store/CategoryContext';
import { AuthProvider } from './store/AuthContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CategoryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CategoryProvider>
  </BrowserRouter>
)
