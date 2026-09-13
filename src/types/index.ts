export type CategoryId = 
  | 'corporate-apparel'
  | 'pens-stationery'
  | 'drinkware'
  | 'bags'
  | 'headwear'
  | 'gift-sets'
  | 'corporate-branding'
  | 'vehicle-branding'
  | 'event-branding';

export type BrandingMethodId = 
  | 'embroidery'
  | 'screen-printing'
  | 'heat-transfer'
  | 'laser-engraving'
  | 'embossing'
  | 'foil-stamping'
  | 'full-custom';

export type UseCaseId = 
  | 'corporate'
  | 'events'
  | 'marketing'
  | 'staff'
  | 'gifts';

export interface Category {
  id: CategoryId;
  name: string;
  iconName: string;
  description: string;
  sampleItems: string;
  image: string;
  isBrochureOriginal: boolean; // First 6 categories are brochure originals, last 3 website additions
}

export interface Product {
  id: string;
  name: string;
  categoryId: CategoryId;
  description: string;
  longDescription?: string;
  image: string;
  galleryImages: string[];
  availableColors: string[]; // Hex codes or names
  availableSizes?: string[];
  material: string;
  brandingMethods: BrandingMethodId[];
  minimumQuantity: number;
  estimatedProductionDays: number;
  featured: boolean;
  isNew?: boolean;
  isCustomizable: boolean;
  priceType: 'Price available on quotation';
  useCases: UseCaseId[];
  specifications: Record<string, string>;
  status: 'active' | 'draft' | 'archived';
}

export interface QuoteBasketItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  selectedBrandingMethod: BrandingMethodId;
  logoFileUrl?: string; // Data URL or uploaded file preview
  additionalNotes?: string;
}

export interface QuoteRequest {
  id: string;
  referenceNumber: string;
  createdAt: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  requiredDate: string;
  deliveryLocation: string;
  preferredBrandingMethod: string;
  message: string;
  logoFileUrl?: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    color?: string;
    brandingMethod: string;
  }[];
  status: 'NEW' | 'UNDER REVIEW' | 'QUOTATION SENT' | 'NEGOTIATING' | 'APPROVED' | 'COMPLETED' | 'CANCELLED';
  adminNotes?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: CategoryId | 'fleet-branding';
  client: string;
  location: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  mainImage: string;
  beforeImage?: string;
  designImage?: string;
  finishedImage: string;
  productsUsed: string[];
}

export interface AfricanLocation {
  id: string;
  country: string;
  city: string;
  entityName: string;
  isHeadquarters: boolean;
  address: string;
  phone: string;
  email: string;
  coordinates?: { x: number; y: number }; // SVG Map % coordinates
  description?: string;
  servicesAvailable?: string[];
}
