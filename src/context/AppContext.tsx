import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CategoryId, QuoteBasketItem, QuoteRequest, BrandingMethodId, UseCaseId } from '../types';
import { PRODUCTS, INITIAL_QUOTE_REQUESTS } from '../data/mockData';

export type TabType = 
  | 'home'
  | 'showroom'
  | 'builder'
  | 'services'
  | 'at-work'
  | 'catalogues'
  | 'about'
  | 'quote'
  | 'contact'
  | 'admin';

interface FilterState {
  categoryId: CategoryId | 'all';
  searchQuery: string;
  customization: 'all' | 'customizable' | 'ready-made';
  useCase: UseCaseId | 'all';
  brandingMethod: BrandingMethodId | 'all';
}

interface AppContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  
  quoteBasket: QuoteBasketItem[];
  addToQuoteBasket: (item: QuoteBasketItem) => void;
  removeFromQuoteBasket: (index: number) => void;
  clearQuoteBasket: () => void;
  
  quoteRequests: QuoteRequest[];
  submitQuoteRequest: (requestData: Omit<QuoteRequest, 'id' | 'referenceNumber' | 'createdAt' | 'status'>) => QuoteRequest;
  updateQuoteStatus: (id: string, status: QuoteRequest['status'], adminNotes?: string) => void;
  
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (auth: boolean) => void;

  // Visualizer custom state
  customLogoUrl: string | null;
  setCustomLogoUrl: (url: string | null) => void;
  logoScale: number;
  setLogoScale: (scale: number) => void;
  logoPos: { x: number; y: number };
  setLogoPos: (pos: { x: number; y: number }) => void;

  // Image Lightbox preview state
  previewImageUrl: string | null;
  setPreviewImageUrl: (url: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ak_grup_products');
    return saved ? JSON.parse(saved) : PRODUCTS;
  });
  
  const [filters, setFilters] = useState<FilterState>({
    categoryId: 'all',
    searchQuery: '',
    customization: 'all',
    useCase: 'all',
    brandingMethod: 'all',
  });
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteBasket, setQuoteBasket] = useState<QuoteBasketItem[]>(() => {
    const saved = localStorage.getItem('ak_grup_basket');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('ak_grup_quotes');
    return saved ? JSON.parse(saved) : INITIAL_QUOTE_REQUESTS;
  });
  
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('ak_grup_admin_auth') === 'true';
  });

  // Global visualizer state for real-time logo placement preview
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [logoScale, setLogoScale] = useState<number>(0.8);
  const [logoPos, setLogoPos] = useState<{ x: number; y: number }>({ x: 50, y: 45 });
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('ak_grup_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('ak_grup_basket', JSON.stringify(quoteBasket));
  }, [quoteBasket]);

  useEffect(() => {
    localStorage.setItem('ak_grup_quotes', JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  useEffect(() => {
    localStorage.setItem('ak_grup_admin_auth', isAdminAuthenticated.toString());
  }, [isAdminAuthenticated]);

  const resetFilters = () => {
    setFilters({
      categoryId: 'all',
      searchQuery: '',
      customization: 'all',
      useCase: 'all',
      brandingMethod: 'all',
    });
  };

  const addToQuoteBasket = (item: QuoteBasketItem) => {
    setQuoteBasket((prev: QuoteBasketItem[]) => [...prev, item]);
  };

  const removeFromQuoteBasket = (index: number) => {
    setQuoteBasket((prev: QuoteBasketItem[]) => prev.filter((_: QuoteBasketItem, i: number) => i !== index));
  };

  const clearQuoteBasket = () => {
    setQuoteBasket([]);
  };

  const submitQuoteRequest = (requestData: Omit<QuoteRequest, 'id' | 'referenceNumber' | 'createdAt' | 'status'>) => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRequest: QuoteRequest = {
      ...requestData,
      id: `quote-${Date.now()}`,
      referenceNumber: `AK-2026-${randomNum}`,
      createdAt: new Date().toISOString(),
      status: 'NEW',
    };

    setQuoteRequests((prev: QuoteRequest[]) => [newRequest, ...prev]);
    return newRequest;
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status'], adminNotes?: string) => {
    setQuoteRequests((prev: QuoteRequest[]) =>
      prev.map((q: QuoteRequest) => (q.id === id ? { ...q, status, ...(adminNotes !== undefined ? { adminNotes } : {}) } : q))
    );
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        products,
        setProducts,
        filters,
        setFilters,
        resetFilters,
        selectedProduct,
        setSelectedProduct,
        quoteBasket,
        addToQuoteBasket,
        removeFromQuoteBasket,
        clearQuoteBasket,
        quoteRequests,
        submitQuoteRequest,
        updateQuoteStatus,
        isAdminAuthenticated,
        setIsAdminAuthenticated,
        customLogoUrl,
        setCustomLogoUrl,
        logoScale,
        setLogoScale,
        logoPos,
        setLogoPos,
        previewImageUrl,
        setPreviewImageUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
