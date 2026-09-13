import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Showroom } from './components/Showroom';
import { BuildYourBrand } from './components/BuildYourBrand';
import { Services } from './components/Services';
import { AtWork } from './components/AtWork';
import { DigitalCatalogues } from './components/DigitalCatalogues';
import { AboutUs } from './components/AboutUs';
import { RequestQuote } from './components/RequestQuote';
import { Contact } from './components/Contact';
import { AdminDashboard } from './components/AdminDashboard';
import { ImageLightboxModal } from './components/ImageLightboxModal';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <main className="min-h-screen">
      {activeTab === 'home' && <Home />}
      {activeTab === 'showroom' && <Showroom />}
      {activeTab === 'builder' && <BuildYourBrand />}
      {activeTab === 'services' && <Services />}
      {activeTab === 'at-work' && <AtWork />}
      {activeTab === 'catalogues' && <DigitalCatalogues />}
      {activeTab === 'about' && <AboutUs />}
      {activeTab === 'quote' && <RequestQuote />}
      {activeTab === 'contact' && <Contact />}
      {activeTab === 'admin' && <AdminDashboard />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-500 selection:text-white">
        <Navbar />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
        <ImageLightboxModal />
      </div>
    </AppProvider>
  );
}

export default App;
