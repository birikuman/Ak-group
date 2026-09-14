import type { Category, Product, ProjectCaseStudy, AfricanLocation, QuoteRequest } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'corporate-apparel',
    name: 'Corporate Apparel',
    iconName: 'Shirt',
    description: 'Premium custom shirts, polos, jackets, safety wear, and uniforms tailored for staff and campaigns.',
    sampleItems: 'T-shirts, polo shirts, jackets, uniforms, vests',
    image: '/images/Amrod-Digital-Catalogue-Web-Page-2026-THE-GOLF-COLLECTION.webp',
    isBrochureOriginal: true
  },
  {
    id: 'pens-stationery',
    name: 'Pens & Stationery',
    iconName: 'PenTool',
    description: 'Elegant metal pens, leather notebooks, presentation folders, and diaries engineered for business executives.',
    sampleItems: 'Pens, notebooks, folders, diaries, desk organizers',
    image: '/images/category-pens-stationery.jpg',
    isBrochureOriginal: true
  },
  {
    id: 'drinkware',
    name: 'Drinkware',
    iconName: 'Coffee',
    description: 'Insulated stainless steel tumblers, ceramic mugs, thermal flasks, and eco-friendly bamboo bottles.',
    sampleItems: 'Mugs, bottles, tumblers, flasks, eco cups',
    image: '/images/i14 - wafa.avif',
    isBrochureOriginal: true
  },
  {
    id: 'bags',
    name: 'Bags',
    iconName: 'ShoppingBag',
    description: 'Durable executive backpacks, canvas tote bags, laptop sleeves, and travel duffels with subtle branding.',
    sampleItems: 'Backpacks, tote bags, laptop bags, duffels',
    image: '/images/category-bags.jpg',
    isBrochureOriginal: true
  },
  {
    id: 'headwear',
    name: 'Headwear',
    iconName: 'Crown',
    description: 'High-density embroidered caps, bucket hats, sun visors, and promotional beanies for field teams and marketing.',
    sampleItems: 'Caps, hats, beanies, visors',
    image: '/images/category-headwear.jpg',
    isBrochureOriginal: true
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    iconName: 'Gift',
    description: 'Curated executive gift boxes containing power banks, thermal mugs, leather notebooks, and luxury pens.',
    sampleItems: 'Executive boxes, welcome packs, holiday hampers',
    image: '/images/category-gift-sets.jpg',
    isBrochureOriginal: true
  },
  {
    id: 'vehicle-branding',
    name: 'Vehicle Branding',
    iconName: 'Truck',
    description: 'Turn company fleets, vans, and sedans into mobile high-impact advertising platforms across African highways.',
    sampleItems: 'Full wraps, partial wraps, fleet decals, magnetic signs',
    image: '/images/product-vehicle-1.jpeg',
    isBrochureOriginal: false
  },
  {
    id: 'corporate-branding',
    name: 'Corporate Branding',
    iconName: 'Building2',
    description: 'Office environment graphics, 3D acrylic wall signs, reception banners, and architectural window vinyls.',
    sampleItems: '3D logos, wall vinyls, directional signage, flags',
    image: '/images/category-corporate-branding.jpg',
    isBrochureOriginal: false
  },
  {
    id: 'event-branding',
    name: 'Event Branding',
    iconName: 'Tent',
    description: 'Pop-up canopy tents, pull-up banners, teardrop flags, stage backdrops, and trade show exhibition booths.',
    sampleItems: 'Canopies, teardrop flags, backdrops, lanyards',
    image: '/images/category-event-branding.jpg',
    isBrochureOriginal: false
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-polo-01',
    name: 'Premium Corporate Cotton Polo Shirt',
    categoryId: 'corporate-apparel',
    description: '220 GSM heavyweight combed cotton polo featuring reinforced collar, ribbed cuffs, and precision logo embroidery.',
    longDescription: 'Engineered for durability and comfort in African climate conditions. Ideal for corporate uniforms, staff apparel, and client activations. Features double-stitched seams and color-fast reactivity.',
    image: '/images/product-polo-1.webp',
    galleryImages: [
      '/images/product-polo-1.webp',
      '/images/product-polo-2.jpg',
      '/images/product-polo-3.webp'
    ],
    availableColors: ['#0B2545', '#D71920', '#FFFFFF', '#1E293B', '#15803D', '#1E40AF'],
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    material: '100% Combed Cotton Piqué (220 GSM)',
    brandingMethods: ['embroidery', 'screen-printing', 'heat-transfer'],
    minimumQuantity: 50,
    estimatedProductionDays: 7,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'staff', 'events'],
    status: 'active',
    specifications: {
      'Weight': '220 GSM Piqué',
      'Fit': 'Regular Corporate Fit',
      'Washing': 'Machine washable at 40°C',
      'Origin': 'Sourced via Prime Supplier Outlets'
    }
  },
  {
    id: 'prod-golf-2026',
    name: 'The 2026 Golf Apparel & Accessories Collection',
    categoryId: 'corporate-apparel',
    description: 'Bespoke corporate golf shirts, moisture-wicking polos, golf caps, and tournament gift sets.',
    longDescription: 'Curated for corporate golf days, VIP client tournaments, and executive sports branding across Africa.',
    image: '/images/Amrod-Digital-Catalogue-Web-Page-2026-THE-GOLF-COLLECTION.webp',
    galleryImages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-THE-GOLF-COLLECTION.webp',
      '/images/product-polo-1.jpg'
    ],
    availableColors: ['#0B2545', '#15803D', '#FFFFFF', '#1E293B'],
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    material: 'Technical Moisture-Wicking Poly-Spandex Blend',
    brandingMethods: ['embroidery', 'heat-transfer'],
    minimumQuantity: 30,
    estimatedProductionDays: 7,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'events', 'gifts'],
    status: 'active',
    specifications: {
      'Fabric': 'Breathable UV-Protect Poly Blend',
      'Style': 'Executive Golf Tournament Fit'
    }
  },
  {
    id: 'prod-flask-02',
    name: 'Executive Vacuum Insulated Thermal Flask (750ml)',
    categoryId: 'drinkware',
    description: 'Double-wall food grade 304 stainless steel tumbler keeping beverages cold for 24h or hot for 12h.',
    longDescription: 'Features a matte powder coat finish with laser engraving precision that exposes the metallic steel beneath for a subtle luxury look.',
    image: '/images/product-flask-1.jpg',
    galleryImages: [
      '/images/product-flask-1.jpg',
      '/images/product-flask-2.jpg',
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-DRINKWARE.webp'
    ],
    availableColors: ['#0B2545', '#1E293B', '#D71920', '#FFFFFF', '#64748B'],
    material: '304 Stainless Steel (BPA Free)',
    brandingMethods: ['laser-engraving', 'screen-printing'],
    minimumQuantity: 30,
    estimatedProductionDays: 5,
    featured: true,
    isNew: false,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'gifts', 'marketing'],
    status: 'active',
    specifications: {
      'Capacity': '750 ml',
      'Insulation': 'Double-Wall Vacuum',
      'Coating': 'Anti-Scratch Matte Powder Coating'
    }
  },
  {
    id: 'prod-kooshty-2026',
    name: 'Kooshty Premium Drinkware & Lifestyle Collection',
    categoryId: 'drinkware',
    description: 'Vibrant insulated stainless steel bottles, glass coffee cups, and neoprene sleeve tumblers.',
    longDescription: 'High-visibility corporate lifestyle drinkware designed for modern eco-conscious African brands.',
    image: '/images/Brand-Web-Banners-2026-Kooshty.jpg',
    galleryImages: [
      '/images/Brand-Web-Banners-2026-Kooshty.jpg',
      '/images/product-flask-1.jpg'
    ],
    availableColors: ['#D71920', '#0B2545', '#15803D', '#B45309'],
    material: 'Borosilicate Glass & Stainless Steel',
    brandingMethods: ['screen-printing', 'laser-engraving'],
    minimumQuantity: 50,
    estimatedProductionDays: 5,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate', 'marketing'],
    status: 'active',
    specifications: {
      'Brand': 'Kooshty Original',
      'Eco Rating': '100% Reusable & BPA Free'
    }
  },
  {
    id: 'prod-pen-set-03',
    name: 'Executive Metal Pen & Leather Journal Gift Set',
    categoryId: 'pens-stationery',
    description: 'Weighted twist-action rollerball metal pen paired with an A5 hardbound PU leather notebook with ribbon marker.',
    longDescription: 'Delivered in a custom printed magnetic gift box with foam inlay. Perfect for C-suite gifts, AGMs, and VIP delegates.',
    image: '/images/product-pen-1.jpg',
    galleryImages: [
      '/images/product-pen-1.jpg',
      '/images/product-pen-2.jpg',
      '/images/Brand-Web Banners-2026-Diaries.jpg'
    ],
    availableColors: ['#0B2545', '#1E293B', '#B45309', '#D71920'],
    material: 'PU Leather & Solid Brass Alloy Pen',
    brandingMethods: ['embossing', 'laser-engraving', 'screen-printing'],
    minimumQuantity: 25,
    estimatedProductionDays: 6,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'gifts'],
    status: 'active',
    specifications: {
      'Journal Size': 'A5 (192 Lined Ivory Pages)',
      'Pen Ink': 'German Document Black Gel Ink (0.7mm)',
      'Box': 'Rigid Gift Box with Custom Sleeve'
    }
  },
  {
    id: 'prod-diaries-2026',
    name: '2026 Executive Diaries & Leather Planners Collection',
    categoryId: 'pens-stationery',
    description: 'Hardcover & soft-touch PU leather daily management diaries, desk organizers, and executive notebooks.',
    longDescription: 'Debossed or foil-stamped with your corporate logo. Essential annual corporate gifting item for executives across Africa.',
    image: '/images/Brand-Web Banners-2026-Diaries.jpg',
    galleryImages: [
      '/images/Brand-Web Banners-2026-Diaries.jpg',
      '/images/category-pens-stationery.jpg'
    ],
    availableColors: ['#0B2545', '#1E293B', '#B45309', '#D71920'],
    material: 'Thermo PU Leather Cover with Gold/Silver Edge Foil',
    brandingMethods: ['embossing', 'foil-stamping'],
    minimumQuantity: 50,
    estimatedProductionDays: 6,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'gifts', 'staff'],
    status: 'active',
    specifications: {
      'Format': 'Day-per-Page & Week-to-View Layouts',
      'Year': '2026 Edition'
    }
  },
  {
    id: 'prod-bag-04',
    name: 'Executive Anti-Theft Water-Resistant Laptop Backpack',
    categoryId: 'bags',
    description: 'Ergonomic 15.6" laptop backpack featuring hidden anti-theft zips, USB charging port, and padded airflow back straps.',
    longDescription: 'Designed for business travelers and mobile workforces across regional markets. Custom subtle metal badge or embroidered front emblem.',
    image: '/images/product-backpack-1.jpg',
    galleryImages: [
      '/images/product-backpack-1.jpg',
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-HOPPLA.webp'
    ],
    availableColors: ['#0B2545', '#1E293B', '#475569'],
    material: '1680D High-Density Nylon & Oxford Polyester',
    brandingMethods: ['embroidery', 'screen-printing', 'laser-engraving'],
    minimumQuantity: 20,
    estimatedProductionDays: 8,
    featured: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'staff', 'gifts'],
    status: 'active',
    specifications: {
      'Capacity': '24 Liters',
      'Laptop Compartment': 'Fits up to 15.6 Inch Laptops',
      'Waterproofing': 'Hydrophobic Surface Finish'
    }
  },
  {
    id: 'prod-hoppla-bags',
    name: 'Hoppla Custom Branded Canvas & Luggage Collection',
    categoryId: 'bags',
    description: 'Full-colour sublimated neoprene totes, duffel bags, cosmetic pouches, and executive backpacks.',
    longDescription: 'Heavy-duty vibrant all-over printed soft goods manufactured for corporate campaigns and staff onboarding packs.',
    image: '/images/Amrod-Digital-Catalogue-Web-Page-2026-HOPPLA.webp',
    galleryImages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-HOPPLA.webp',
      '/images/category-bags.jpg'
    ],
    availableColors: ['#0B2545', '#D71920', '#FFFFFF', '#15803D'],
    material: 'Sublimated Neoprene & Heavy Canvas',
    brandingMethods: ['full-custom', 'heat-transfer'],
    minimumQuantity: 30,
    estimatedProductionDays: 8,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'marketing', 'staff'],
    status: 'active',
    specifications: {
      'Brand': 'Hoppla Original',
      'Print': 'Full-Colour High Definition Edge-to-Edge Sublimation'
    }
  },
  {
    id: 'prod-cap-05',
    name: 'High-Density 3D Embroidered Heavy Cotton Cap',
    categoryId: 'headwear',
    description: 'Structured 6-panel cap made from heavy brushed cotton with pre-curved peak and metal strap buckle.',
    longDescription: 'High-density 3D embroidery brings corporate logos to life with raised dimensionality and vivid colors.',
    image: '/images/product-cap-1.jpg',
    galleryImages: [
      '/images/product-cap-1.jpg',
      '/images/category-headwear.jpg'
    ],
    availableColors: ['#0B2545', '#D71920', '#FFFFFF', '#000000', '#15803D'],
    material: '100% Heavy Brushed Cotton Twill',
    brandingMethods: ['embroidery', 'screen-printing'],
    minimumQuantity: 50,
    estimatedProductionDays: 5,
    featured: false,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['events', 'marketing', 'staff'],
    status: 'active',
    specifications: {
      'Structure': 'Structured 6-Panel with eyelets',
      'Closure': 'Brass Metal Embossed Buckle'
    }
  },
  {
    id: 'prod-giftbox-06',
    name: 'VIP Pan-African Executive Gift Box Set',
    categoryId: 'gift-sets',
    description: 'Luxury corporate box containing 10,000mAh wireless power bank, thermal mug, metallic pen, and 64GB USB drive.',
    longDescription: 'Curated for executive gifts, client appreciation, and high-level corporate summits across Rwanda, South Africa, and regional hubs.',
    image: '/images/product-giftset-1.jpg',
    galleryImages: [
      '/images/product-giftset-1.jpg',
      '/images/Amrod-Digital-Catalogue-Web-Page 2026-SERENDIPIO.webp',
      '/images/Amrod-Digital-Catalogue-Web-Page 2026-ANDY CARTWRIGHT.webp'
    ],
    availableColors: ['#0B2545', '#1E293B', '#D71920'],
    material: 'Composite Leather & Premium Aluminum Hardware',
    brandingMethods: ['laser-engraving', 'embossing', 'screen-printing'],
    minimumQuantity: 15,
    estimatedProductionDays: 10,
    featured: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate'],
    status: 'active',
    specifications: {
      'Includes': '10k Power Bank + Thermal Tumbler + Pen + USB 64GB',
      'Packaging': 'Custom Foil-Stamped Satin Lined Box'
    }
  },
  {
    id: 'prod-serendio-collection',
    name: 'Serendio Executive Luxury Gift Collection',
    categoryId: 'gift-sets',
    description: 'Sophisticated corporate hampers containing high-end executive accessories and metallic desk items.',
    longDescription: 'Designed exclusively for C-suite executive gifting, board meetings, and high-value client retention.',
    image: '/images/Amrod-Digital-Catalogue-Web-Page 2026-SERENDIPIO.webp',
    galleryImages: [
      '/images/Amrod-Digital-Catalogue-Web-Page 2026-SERENDIPIO.webp',
      '/images/product-giftset-1.jpg'
    ],
    availableColors: ['#0B2545', '#1E293B', '#B45309'],
    material: 'Anodized Aluminum & Genuine Leather',
    brandingMethods: ['laser-engraving', 'embossing'],
    minimumQuantity: 10,
    estimatedProductionDays: 10,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate'],
    status: 'active',
    specifications: {
      'Brand': 'Serendio Luxury Collection',
      'Packaging': 'Custom Wooden & Satin Gift Presentation Box'
    }
  },
  {
    id: 'prod-andy-cartwright',
    name: 'Andy Cartwright Designer Executive Gifts',
    categoryId: 'gift-sets',
    description: 'Architectural designer giftware blending artistic African heritage elements with modern metallic elegance.',
    longDescription: 'Award-winning designer corporate gifts that create a memorable, lasting impression.',
    image: '/images/Amrod-Digital-Catalogue-Web-Page 2026-ANDY CARTWRIGHT.webp',
    galleryImages: [
      '/images/Amrod-Digital-Catalogue-Web-Page 2026-ANDY CARTWRIGHT.webp'
    ],
    availableColors: ['#0B2545', '#1E293B', '#B45309'],
    material: 'Solid Alloy, Silicone & Brushed Chrome',
    brandingMethods: ['laser-engraving'],
    minimumQuantity: 15,
    estimatedProductionDays: 8,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate'],
    status: 'active',
    specifications: {
      'Designer': 'Andy Cartwright Original',
      'Finish': 'Polished Chrome & Matte Accents'
    }
  },
  {
    id: 'prod-okiyo-collection',
    name: 'Okiyo Eco-Friendly Bamboo & Natural Gift Collection',
    categoryId: 'gift-sets',
    description: 'Eco-conscious corporate hampers made from sustainable bamboo, cork, recycled wheat straw, and organic cotton.',
    longDescription: 'Align your corporate brand with sustainability. Perfect for ESG initiatives and green corporate summits.',
    image: '/images/Brand-Web-Banners-2026-Okiyo.jpg',
    galleryImages: [
      '/images/Brand-Web-Banners-2026-Okiyo.jpg',
      '/images/Brand-Web-Banners-2026-Okiyo (1).jpg'
    ],
    availableColors: ['#15803D', '#B45309', '#0B2545'],
    material: 'Natural Bamboo, Cork & Recycled Cotton',
    brandingMethods: ['laser-engraving', 'screen-printing'],
    minimumQuantity: 25,
    estimatedProductionDays: 6,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate', 'marketing'],
    status: 'active',
    specifications: {
      'Brand': 'Okiyo Eco Line',
      'Sustainability': '100% Biodegradable & Recycled Materials'
    }
  },
  {
    id: 'prod-swiss-cougar',
    name: 'Swiss Cougar Smart Tech & Audio Corporate Gift Set',
    categoryId: 'gift-sets',
    description: 'High-performance Bluetooth ANC headphones, wireless charging pads, and multi-port power banks.',
    longDescription: 'Cutting-edge corporate technology accessories engineered for modern enterprise productivity.',
    image: '/images/AmrodDigitalCatalogueWebPage2026-SWISSCOUGAR.webp',
    galleryImages: [
      '/images/AmrodDigitalCatalogueWebPage2026-SWISSCOUGAR.webp'
    ],
    availableColors: ['#0B2545', '#1E293B', '#D71920'],
    material: 'Soft-Touch Matte ABS & Aluminum Accent',
    brandingMethods: ['laser-engraving', 'screen-printing'],
    minimumQuantity: 20,
    estimatedProductionDays: 7,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate', 'staff'],
    status: 'active',
    specifications: {
      'Brand': 'Swiss Cougar Tech',
      'Connectivity': 'Bluetooth 5.3 & Quick Charge Type-C'
    }
  },
  {
    id: 'prod-custom-packaging',
    name: 'Bespoke Rigid Gift Boxes & Custom Presentation Packaging',
    categoryId: 'gift-sets',
    description: 'Tailor-made magnetic presentation boxes, foil-stamped sleeves, and custom cut EVA foam inserts.',
    longDescription: 'Turn any product into a high-end luxury gift experience with customized branded packaging.',
    image: '/images/Amrod-Digital-Catalogue-Web-Page-2026-CUSTOM-PACKAGING.webp',
    galleryImages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-CUSTOM-PACKAGING.webp'
    ],
    availableColors: ['#0B2545', '#1E293B', '#D71920', '#B45309'],
    material: '1200 GSM Rigid Board with Textured Specialty Paper',
    brandingMethods: ['foil-stamping', 'embossing', 'screen-printing'],
    minimumQuantity: 50,
    estimatedProductionDays: 8,
    featured: false,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate'],
    status: 'active',
    specifications: {
      'Construction': 'Magnetic Flap Closure with Satin Ribbon',
      'Inlay': 'Precision Laser-Cut High Density Foam'
    }
  },
  {
    id: 'prod-vehicle-07',
    name: 'Commercial Fleet Full Vinyl Vehicle Wrap',
    categoryId: 'vehicle-branding',
    description: 'Cast vinyl full or partial vehicle wrap with UV anti-laminate protection for delivery fleets, SUVs, and vans.',
    longDescription: 'Transforms company vehicles into 24/7 mobile billboards. High-resolution latex print with bubble-free installation warranty across East & Southern Africa.',
    image: '/images/product-vehicle-1.jpeg',
    galleryImages: [
      '/images/product-vehicle-1.jpeg',
      '/images/service-vehicle.jpeg'
    ],
    availableColors: ['#0B2545', '#D71920', '#FFFFFF', '#15803D'],
    material: '3M / Avery Dennison Premium Cast Vinyl + Gloss Laminate',
    brandingMethods: ['full-custom', 'heat-transfer'],
    minimumQuantity: 1,
    estimatedProductionDays: 3,
    featured: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['marketing', 'corporate'],
    status: 'active',
    specifications: {
      'Durability': '5+ Year Outdoor Weatherproof Guarantee',
      'Finish': 'High-Gloss or Matte UV Laminated'
    }
  },
  {
    id: 'prod-signage-08',
    name: 'Architectural 3D Acrylic & LED Corporate Wall Logo',
    categoryId: 'corporate-branding',
    description: 'Precision laser-cut 3D acrylic logo letters with optional halo LED illumination for reception desks and headquarters.',
    longDescription: 'Elevates office interiors with high-end architectural branding. Custom fabricated to match brand guidelines exactly.',
    image: '/images/product-wall-1.jpg',
    galleryImages: [
      '/images/product-wall-1.jpg',
      '/images/category-corporate-branding.jpg'
    ],
    availableColors: ['#0B2545', '#D71920', '#FFFFFF', '#B45309'],
    material: 'Cast Acrylic, Brushed Stainless Steel, Low-Voltage LED',
    brandingMethods: ['full-custom', 'laser-engraving'],
    minimumQuantity: 1,
    estimatedProductionDays: 7,
    featured: false,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate'],
    status: 'active',
    specifications: {
      'Depth': '10mm - 50mm Standoff 3D Profile',
      'Illumination': 'Optional 6500K Cool White or RGB LED'
    }
  },
  {
    id: 'prod-event-09',
    name: 'Heavy-Duty Branded Pop-Up Event Canopy Tent (3x3m)',
    categoryId: 'event-branding',
    description: 'Commercial grade aluminum frame pop-up gazebo tent with full custom dye-sublimated canopy and backwall.',
    longDescription: 'Waterproof, flame-retardant UV fabric canopy engineered for rugged outdoor events, brand activations, and trade expos.',
    image: '/images/product-canopy-1.jpg',
    galleryImages: [
      '/images/product-canopy-1.jpg',
      '/images/category-event-branding.jpg'
    ],
    availableColors: ['#0B2545', '#D71920', '#FFFFFF'],
    material: '600D Heavy Polyester with Hexagonal Hex-Aluminum Legs',
    brandingMethods: ['screen-printing', 'full-custom'],
    minimumQuantity: 1,
    estimatedProductionDays: 5,
    featured: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['events', 'marketing'],
    status: 'active',
    specifications: {
      'Dimensions': '3m x 3m (Adjustable Height)',
      'Frame': '40mm Heavy-Duty Hexagonal Aluminum',
      'Transport': 'Includes Heavy-Duty Wheeled Carry Bag'
    }
  },
  {
    id: 'prod-lanyards-straps',
    name: 'Custom Conference Lanyards, Wristbands & ID Straps',
    categoryId: 'event-branding',
    description: 'High-density satin lanyards with safety breakaway clips, swivel hooks, and clear ID badge holders.',
    longDescription: 'Essential conference branding item for corporate summits, expos, and security access control.',
    image: '/images/Amrod-Digital-Catalogue-Web-Page-2026-LANYARDS-&-STRAPS.webp',
    galleryImages: [
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-LANYARDS-&-STRAPS.webp'
    ],
    availableColors: ['#0B2545', '#D71920', '#15803D', '#FFFFFF'],
    material: 'Heavy-Duty Woven Polyester & Satin Finish',
    brandingMethods: ['screen-printing', 'heat-transfer'],
    minimumQuantity: 100,
    estimatedProductionDays: 4,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['events', 'corporate', 'staff'],
    status: 'active',
    specifications: {
      'Width': '15mm / 20mm / 25mm Widths',
      'Safety': 'Includes Quick-Release Neck Breakaway'
    }
  },
  {
    id: 'prod-colour-pop',
    name: 'Colour Pop Vibrant Promotional Campaign Collection',
    categoryId: 'pens-stationery',
    description: 'Vibrant neon pens, pop-up notebooks, power banks, and event giveaway items in matching brand colors.',
    longDescription: 'High-impact color coordinated merchandise packs designed to stand out at trade shows and brand activations.',
    image: '/images/AmrodDigitalCatalogueWebPage2026-THECOLOURPOPCOLLECTION.webp',
    galleryImages: [
      '/images/AmrodDigitalCatalogueWebPage2026-THECOLOURPOPCOLLECTION.webp',
      '/images/Amrod-Digital-Catalogue-Web-Page-2026-PROMOTIONAL-PRODUCTS.webp'
    ],
    availableColors: ['#D71920', '#15803D', '#0B2545', '#B45309'],
    material: 'High-Impact ABS & Soft Touch Finish',
    brandingMethods: ['screen-printing'],
    minimumQuantity: 100,
    estimatedProductionDays: 4,
    featured: false,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['marketing', 'events'],
    status: 'active',
    specifications: {
      'Theme': 'Color-Matched Corporate Sets',
      'Packaging': 'Matching Translucent Pouch'
    }
  },
  {
    id: 'prod-milestone-collection',
    name: 'Milestone Corporate Recognition & Anniversary Collection',
    categoryId: 'gift-sets',
    description: 'Prestige corporate awards, long-service trophies, laser-engraved glass plagues, and milestone commemorative gifts.',
    longDescription: 'Honor employee achievements, executive retirements, and corporate anniversaries with timeless prestige gifts.',
    image: '/images/AmrodDigitalCatalogueWebPage2026-THEMILESTONECOLLECTION.webp',
    galleryImages: [
      '/images/AmrodDigitalCatalogueWebPage2026-THEMILESTONECOLLECTION.webp'
    ],
    availableColors: ['#0B2545', '#B45309', '#1E293B'],
    material: 'Optical Crystal, Solid Brass & Hardwood',
    brandingMethods: ['laser-engraving', 'foil-stamping'],
    minimumQuantity: 5,
    estimatedProductionDays: 7,
    featured: true,
    isNew: true,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['gifts', 'corporate'],
    status: 'active',
    specifications: {
      'Occasion': 'Years of Service & Company Milestones',
      'Presentation': 'Delivered in Velvet-Lined Rigid Gift Box'
    }
  },
  {
    id: 'prod-tshirt-10',
    name: 'Premium Custom Screen-Printed Staff T-Shirt',
    categoryId: 'corporate-apparel',
    description: '180 GSM 100% combed cotton crew neck t-shirt featuring reinforced neck tape and vivid multi-color screen printing.',
    longDescription: 'Durable staff uniform and marketing campaign tee engineered for comfort and long-wearing wash fastness.',
    image: '/images/product-tshirt-1.jpg',
    galleryImages: [
      '/images/product-tshirt-1.jpg'
    ],
    availableColors: ['#FFFFFF', '#0B2545', '#D71920', '#000000'],
    material: '100% Combed Cotton (180 GSM)',
    brandingMethods: ['screen-printing', 'heat-transfer'],
    minimumQuantity: 50,
    estimatedProductionDays: 5,
    featured: false,
    isCustomizable: true,
    priceType: 'Price available on quotation',
    useCases: ['corporate', 'staff', 'events'],
    status: 'active',
    specifications: {
      'Weight': '180 GSM Single Jersey',
      'Fit': 'Unisex Regular Fit'
    }
  }
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'case-01',
    title: 'Pan-African Fleet Branding for Regional Logistics Group',
    category: 'vehicle-branding',
    client: 'AK Regional Logistics Ltd',
    location: 'Kigali, Rwanda & Centurion, South Africa',
    year: '2026',
    summary: 'Transformed a fleet of 45 commercial transport trucks and delivery vans into high-visibility mobile brand assets using high-gloss UV cast vinyl wraps.',
    challenge: 'The client needed durable vehicle wraps capable of withstanding dust, UV exposure, and long-distance African transport routes without fading or peeling.',
    solution: 'Designed and applied 3M high-grade laminated cast vinyl wraps featuring vibrant company branding in green, white, and navy accents with precision panel matching.',
    results: 'Generated an estimated 2.5 million monthly brand impressions across East and Southern Africa highway corridors.',
    mainImage: '/images/product-vehicle-1.jpeg',
    beforeImage: '/images/casestudy-fleet-before.jpg',
    finishedImage: '/images/service-vehicle.jpeg',
    productsUsed: ['Commercial Fleet Vehicle Wrap', 'Reflective Safety Markings', 'Custom Decals']
  },
  {
    id: 'case-02',
    title: 'Banking Group Pan-African Staff Apparel Rollout',
    category: 'corporate-apparel',
    client: 'Apex Financial Holdings',
    location: 'Kigali, Nairobi, Kampala & Centurion',
    year: '2025',
    summary: 'Supplied 5,000+ embroidered polo shirts and softshell jackets across 4 countries with unified Pantone color accuracy.',
    challenge: 'Delivering consistent fabric dye matching and precision embroidery across multi-country branch networks on tight deadlines.',
    solution: 'Leveraged AK GROUP’s prime outlets partnership network to centralize quality control and manage cross-border distribution seamlessly.',
    results: '100% on-time delivery across all regional branch locations with zero defect returns.',
    mainImage: '/images/casestudy-mining-main.webp',
    finishedImage: '/images/product-polo-1.jpg',
    productsUsed: ['Premium Corporate Polo Shirt', 'Executive Softshell Jacket', 'Lanyards']
  },
  {
    id: 'case-03',
    title: 'Pan-African Energy Summit Activation',
    category: 'event-branding',
    client: 'African Energy Council',
    location: 'Kigali Convention Centre, Rwanda',
    year: '2026',
    summary: 'Full environmental event branding including pop-up canopies, 3D acrylic backdrop walls, VIP gift boxes, and delegate kits.',
    challenge: 'Rapid 72-hour turnaround for high-profile presidential summit.',
    solution: 'Deployed on-site team in Kigali for emergency fabrication, setup, and teardown support.',
    results: 'Commended by organizers for exceptional visual quality and executive gift presentation.',
    mainImage: '/images/casestudy-summit-main.jpg',
    finishedImage: '/images/product-canopy-1.jpg',
    productsUsed: ['Pop-Up Event Canopy Tent', 'VIP Executive Gift Box Set', '3D Wall Logo']
  }
];

export const AFRICAN_LOCATIONS: AfricanLocation[] = [
  {
    id: 'rwanda-kigali',
    country: 'Rwanda',
    city: 'Kigali',
    entityName: 'AK GROUP LIMITED',
    isHeadquarters: true,
    address: 'KN 3 Rd, Gikondo Industrial Zone, Kigali',
    phone: '+250 788 000 111',
    email: 'kigali@aksanti-branding.com',
    coordinates: { x: 62, y: 55 },
    servicesAvailable: ['3D Embroidery', 'Screen Printing', 'Vehicle Fleet Wrapping', 'Event Canopies', 'Pan-African Logistics']
  },
  {
    id: 'drc-goma',
    country: 'DR Congo',
    city: 'Goma',
    entityName: 'AK GROUP SARL',
    isHeadquarters: false,
    address: 'Avenue du 20 Mai, Quartier les Volcans, Goma',
    phone: '+243 999 000 222',
    email: 'goma@aksanti-branding.com',
    coordinates: { x: 60, y: 53 },
    servicesAvailable: ['Corporate Apparel', 'Custom Stationery', 'Vehicle Branding', 'Corporate Gifts']
  },
  {
    id: 'drc-kinshasa',
    country: 'DR Congo',
    city: 'Kinshasa',
    entityName: 'AK GROUP SARL',
    isHeadquarters: false,
    address: 'Boulevard du 30 Juin, Gombe, Kinshasa',
    phone: '+243 810 000 333',
    email: 'kinshasa@aksanti-branding.com',
    coordinates: { x: 48, y: 56 },
    servicesAvailable: ['VIP Executive Gift Boxes', 'Large Scale Event Branding', 'Corporate Apparel']
  },
  {
    id: 'drc-lubumbashi',
    country: 'DR Congo',
    city: 'Lubumbashi',
    entityName: 'AK GROUP SARL',
    isHeadquarters: false,
    address: 'Avenue Mobutu, Centre Ville, Lubumbashi',
    phone: '+243 970 000 444',
    email: 'lubumbashi@aksanti-branding.com',
    coordinates: { x: 58, y: 66 },
    servicesAvailable: ['Mining Safety Workwear', 'Heavy Duty Fleet Wrapping', 'Promotional Items']
  },
  {
    id: 'uganda-kampala',
    country: 'Uganda',
    city: 'Kampala',
    entityName: 'AK GROUP UGANDA LTD',
    isHeadquarters: false,
    address: 'Industrial Area, 7th Street, Kampala',
    phone: '+256 700 000 555',
    email: 'kampala@aksanti-branding.com',
    coordinates: { x: 65, y: 50 },
    servicesAvailable: ['Screen Printing', 'Embroidery', 'Drinkware & Pens', 'Trade Show Booths']
  },
  {
    id: 'kenya-nairobi',
    country: 'Kenya',
    city: 'Nairobi',
    entityName: 'AK GROUP KENYA LTD',
    isHeadquarters: false,
    address: 'Mombasa Road, Industrial Area, Nairobi',
    phone: '+254 700 000 666',
    email: 'nairobi@aksanti-branding.com',
    coordinates: { x: 69, y: 52 },
    servicesAvailable: ['Regional Hub Logistics', 'Bulk Corporate Apparel', 'Executive Gift Sets']
  },
  {
    id: 'sa-centurion',
    country: 'South Africa',
    city: 'Centurion',
    entityName: 'AK GROUP SA (PTY) LTD',
    isHeadquarters: false,
    address: 'Highveld Techno Park, Centurion, Gauteng',
    phone: '+27 12 000 7777',
    email: 'centurion@aksanti-branding.com',
    coordinates: { x: 58, y: 82 },
    servicesAvailable: ['Southern Africa Distribution', 'High Precision Laser Engraving', '3M Certified Vehicle Wrapping']
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [];
export const INITIAL_QUOTE_REQUESTS = INITIAL_QUOTES;
