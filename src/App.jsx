import { Outlet } from 'react-router-dom';
import Header from '@/components/main/Header';
import Footer from '@/components/main/Footer';

import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;