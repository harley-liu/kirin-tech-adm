import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { CartProvider } from './hooks/useCart';
import { supabaseConfigError } from './lib/supabase';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StorePage from './pages/StorePage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white">
          {supabaseConfigError && (
            <div className="bg-red-600 text-white text-sm px-4 py-3 flex items-center gap-2 justify-center text-center">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{supabaseConfigError}</span>
            </div>
          )}
          <Header />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />              
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
