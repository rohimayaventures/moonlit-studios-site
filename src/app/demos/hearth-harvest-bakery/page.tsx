'use client';

import { useState, useEffect } from 'react';
import {
  Croissant, Coffee, Wheat, Star, Clock, MapPin, Phone, Mail,
  ShoppingBag, Plus, Minus, X, ChefHat, TrendingUp, Users, Timer,
  Flame, Leaf, AlertTriangle, Check, Sparkles, Heart, Instagram,
  Facebook, ExternalLink, Wifi, Dog, CreditCard, Sun, ChevronRight
} from 'lucide-react';

// Types
type StockStatus = 'In Stock' | 'Low Stock' | 'Sold Out';
type Allergen = 'Gluten' | 'Dairy' | 'Nuts' | 'Eggs' | 'Soy';
type Dietary = 'Vegan' | 'Vegetarian' | 'GF Available';
type Category = 'pastries' | 'breads' | 'drinks' | 'specials';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  tags: string[];
  allergens: Allergen[];
  dietary: Dietary[];
  stock: StockStatus;
  pairsWith?: string[];
  size?: string;
  sizes?: string;
  available?: string;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
}

// Initial menu data with enhanced properties
const initialMenu: MenuItem[] = [
  // Pastries
  { id: 'p1', name: 'Classic Croissant', description: 'Buttery, flaky layers with a golden crust', price: 4.50, category: 'pastries', tags: ['bestseller'], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', pairsWith: ['Cappuccino', 'Drip Coffee'] },
  { id: 'p2', name: 'Pain au Chocolat', description: 'Croissant dough wrapped around dark chocolate batons', price: 5.00, category: 'pastries', tags: [], allergens: ['Gluten', 'Dairy', 'Eggs', 'Soy'], dietary: ['Vegetarian'], stock: 'In Stock', pairsWith: ['Latte', 'Hot Chocolate'] },
  { id: 'p3', name: 'Almond Croissant', description: 'Filled with almond cream, topped with sliced almonds', price: 5.50, category: 'pastries', tags: ['bestseller'], allergens: ['Gluten', 'Dairy', 'Eggs', 'Nuts'], dietary: ['Vegetarian'], stock: 'Low Stock', pairsWith: ['Cortado', 'Espresso'] },
  { id: 'p4', name: 'Morning Bun', description: 'Orange-scented pastry rolled in cinnamon sugar', price: 4.75, category: 'pastries', tags: [], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', pairsWith: ['Drip Coffee'] },
  { id: 'p5', name: 'Apple Turnover', description: 'Spiced apple filling in buttery puff pastry', price: 5.25, category: 'pastries', tags: ['seasonal'], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', pairsWith: ['Matcha Latte'] },
  { id: 'p6', name: 'Kouign-Amann', description: 'Caramelized Breton pastry with crispy layers', price: 5.75, category: 'pastries', tags: [], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', pairsWith: ['Espresso'] },
  { id: 'p7', name: 'Blueberry Danish', description: 'Cream cheese filling with fresh blueberries', price: 5.00, category: 'pastries', tags: [], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', pairsWith: ['Latte'] },
  { id: 'p8', name: 'Vegan Chocolate Muffin', description: 'Rich chocolate with coconut oil and oat flour', price: 4.50, category: 'pastries', tags: ['new'], allergens: [], dietary: ['Vegan', 'GF Available'], stock: 'In Stock', pairsWith: ['Matcha Latte'] },

  // Breads
  { id: 'b1', name: 'Sourdough Boule', description: 'Naturally leavened with 24-hour fermentation', price: 8.00, category: 'breads', tags: ['bestseller'], allergens: ['Gluten'], dietary: ['Vegan'], stock: 'In Stock', size: 'Large' },
  { id: 'b2', name: 'Sourdough Batard', description: 'Oblong loaf, perfect for sandwiches', price: 7.00, category: 'breads', tags: [], allergens: ['Gluten'], dietary: ['Vegan'], stock: 'In Stock', size: 'Medium' },
  { id: 'b3', name: 'Multigrain Loaf', description: 'Oats, flax, sunflower seeds, and honey', price: 8.50, category: 'breads', tags: [], allergens: ['Gluten'], dietary: ['Vegetarian'], stock: 'Low Stock', size: 'Large' },
  { id: 'b4', name: 'Olive Rosemary Focaccia', description: 'Italian flatbread with Kalamata olives', price: 9.00, category: 'breads', tags: ['seasonal'], allergens: ['Gluten'], dietary: ['Vegan'], stock: 'In Stock', size: 'Half Sheet' },
  { id: 'b5', name: 'French Baguette', description: 'Crispy crust, soft interior, classic shape', price: 4.00, category: 'breads', tags: [], allergens: ['Gluten'], dietary: ['Vegan'], stock: 'In Stock', size: 'Standard' },
  { id: 'b6', name: 'Ciabatta', description: 'Italian bread with large, airy holes', price: 5.50, category: 'breads', tags: [], allergens: ['Gluten'], dietary: ['Vegan'], stock: 'In Stock', size: 'Medium' },
  { id: 'b7', name: 'Cinnamon Raisin Swirl', description: 'Sweet bread perfect for toasting', price: 7.50, category: 'breads', tags: [], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', size: 'Large' },
  { id: 'b8', name: 'Everything Bagels', description: 'Hand-rolled, boiled, and baked fresh daily', price: 2.50, category: 'breads', tags: ['bestseller'], allergens: ['Gluten'], dietary: ['Vegan'], stock: 'In Stock', size: 'Each' },

  // Drinks
  { id: 'd1', name: 'Drip Coffee', description: 'Locally roasted, medium roast blend', price: 3.00, category: 'drinks', tags: [], allergens: [], dietary: ['Vegan'], stock: 'In Stock', sizes: 'S/M/L' },
  { id: 'd2', name: 'Espresso', description: 'Double shot, rich and smooth', price: 3.50, category: 'drinks', tags: [], allergens: [], dietary: ['Vegan'], stock: 'In Stock', sizes: 'Single/Double' },
  { id: 'd3', name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 4.50, category: 'drinks', tags: ['bestseller'], allergens: ['Dairy'], dietary: ['Vegetarian'], stock: 'In Stock', sizes: 'S/M/L' },
  { id: 'd4', name: 'Latte', description: 'Espresso with silky steamed milk', price: 5.00, category: 'drinks', tags: [], allergens: ['Dairy'], dietary: ['Vegetarian'], stock: 'In Stock', sizes: 'S/M/L' },
  { id: 'd5', name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: 4.00, category: 'drinks', tags: [], allergens: ['Dairy'], dietary: ['Vegetarian'], stock: 'In Stock', sizes: 'Standard' },
  { id: 'd6', name: 'Matcha Latte', description: 'Ceremonial grade matcha with oat milk', price: 5.50, category: 'drinks', tags: [], allergens: [], dietary: ['Vegan'], stock: 'In Stock', sizes: 'S/M/L' },
  { id: 'd7', name: 'Hot Chocolate', description: 'Belgian chocolate with steamed milk', price: 4.50, category: 'drinks', tags: [], allergens: ['Dairy'], dietary: ['Vegetarian'], stock: 'In Stock', sizes: 'S/M/L' },
  { id: 'd8', name: 'Fresh Orange Juice', description: 'Squeezed to order', price: 5.00, category: 'drinks', tags: [], allergens: [], dietary: ['Vegan'], stock: 'In Stock', sizes: 'Standard' },

  // Specials
  { id: 's1', name: 'Pumpkin Spice Scone', description: 'Seasonal favorite with maple glaze', price: 4.75, category: 'specials', tags: ['limited'], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'Low Stock', available: 'Through December' },
  { id: 's2', name: 'Gingerbread Loaf', description: 'Warm spices with cream cheese frosting', price: 8.00, category: 'specials', tags: ['limited'], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', available: 'Through December' },
  { id: 's3', name: 'Cranberry Orange Muffin', description: 'Tart cranberries with citrus zest', price: 4.25, category: 'specials', tags: ['new'], allergens: ['Gluten', 'Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', available: 'While supplies last' },
  { id: 's4', name: 'Eggnog Latte', description: 'Espresso with house-made eggnog', price: 6.00, category: 'specials', tags: ['limited'], allergens: ['Dairy', 'Eggs'], dietary: ['Vegetarian'], stock: 'In Stock', available: 'December only' },
];

const menuCategories = [
  { id: 'pastries' as Category, name: 'Pastries', icon: Croissant },
  { id: 'breads' as Category, name: 'Artisan Breads', icon: Wheat },
  { id: 'drinks' as Category, name: 'Coffee & Drinks', icon: Coffee },
  { id: 'specials' as Category, name: "Today's Specials", icon: Star },
];

const allergensList: Allergen[] = ['Gluten', 'Dairy', 'Nuts', 'Eggs', 'Soy'];

// Instagram posts data
const instagramPosts = [
  { id: 1, image: 'Fresh sourdough coming out of the oven', likes: 234, caption: 'Morning magic at the bakery. Fresh sourdough coming out of the oven.' },
  { id: 2, image: 'Croissant stack with butter visible', likes: 412, caption: '48 hours of lamination for that perfect flake.' },
  { id: 3, image: 'Latte art heart', likes: 189, caption: 'Start your morning right.' },
  { id: 4, image: 'Seasonal pastry display', likes: 356, caption: 'Holiday specials are here! Limited time only.' },
  { id: 5, image: 'Baker shaping bread', likes: 278, caption: 'Handcrafted with love, every single day.' },
  { id: 6, image: 'Fresh baguettes in basket', likes: 198, caption: 'Baguettes fresh from the oven at 7am and 2pm daily.' },
];

// Business hours for Open/Closed logic
const businessHours = {
  0: { open: 8, close: 15 },  // Sunday
  1: { open: 7, close: 16 },  // Monday
  2: { open: 7, close: 16 },  // Tuesday
  3: { open: 7, close: 16 },  // Wednesday
  4: { open: 7, close: 16 },  // Thursday
  5: { open: 7, close: 16 },  // Friday
  6: { open: 7, close: 17 },  // Saturday
};

export default function HearthHarvestBakery() {
  const [activeCategory, setActiveCategory] = useState<Category>('pastries');
  const [activeTab, setActiveTab] = useState<'menu' | 'about' | 'gallery'>('menu');
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedAllergens, setSelectedAllergens] = useState<Allergen[]>([]);
  const [showVeganOnly, setShowVeganOnly] = useState(false);
  const [managerMode, setManagerMode] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextBakeTime, setNextBakeTime] = useState('');

  // Check if bakery is open based on current time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      setCurrentTime(now);
      const day = now.getDay() as keyof typeof businessHours;
      const hour = now.getHours();
      const hours = businessHours[day];
      setIsOpen(hour >= hours.open && hour < hours.close);

      // Calculate next bake time
      if (hour < 7) {
        setNextBakeTime('7:00 AM - Sourdough & Baguettes');
      } else if (hour < 14) {
        setNextBakeTime('2:00 PM - Fresh Baguettes');
      } else {
        setNextBakeTime('Tomorrow 7:00 AM');
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Toggle stock status (Manager Mode)
  const toggleStock = (id: string) => {
    setMenu(current => current.map(item => {
      if (item.id === id) {
        const nextStatus: StockStatus =
          item.stock === 'In Stock' ? 'Low Stock' :
          item.stock === 'Low Stock' ? 'Sold Out' : 'In Stock';
        return { ...item, stock: nextStatus };
      }
      return item;
    }));
  };

  // Filter menu based on category, allergens, and dietary preferences
  const getFilteredMenu = () => {
    return menu.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const passesAllergenFilter = selectedAllergens.length === 0 ||
        !item.allergens.some(a => selectedAllergens.includes(a));
      const passesVeganFilter = !showVeganOnly || item.dietary.includes('Vegan');
      return matchesCategory && passesAllergenFilter && passesVeganFilter;
    });
  };

  // Cart functions
  const addToCart = (item: MenuItem) => {
    if (item.stock === 'Sold Out') return;
    setCart(current => {
      const existing = current.find(c => c.item.id === item.id);
      if (existing) {
        return current.map(c => c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...current, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(current => current.filter(c => c.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(current => current.map(c => {
      if (c.item.id === itemId) {
        const newQty = c.quantity + delta;
        return newQty > 0 ? { ...c, quantity: newQty } : c;
      }
      return c;
    }).filter(c => c.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  // Get pairing suggestions for items in cart
  const getPairingSuggestions = () => {
    const pairings = new Set<string>();
    cart.forEach(({ item }) => {
      item.pairsWith?.forEach(p => pairings.add(p));
    });
    return menu.filter(item =>
      pairings.has(item.name) && !cart.find(c => c.item.id === item.id) && item.stock !== 'Sold Out'
    ).slice(0, 3);
  };

  // Manager dashboard stats
  const getStats = () => {
    const inStock = menu.filter(i => i.stock === 'In Stock').length;
    const lowStock = menu.filter(i => i.stock === 'Low Stock').length;
    const soldOut = menu.filter(i => i.stock === 'Sold Out').length;
    return { inStock, lowStock, soldOut, total: menu.length };
  };

  const stats = getStats();
  const filteredMenu = getFilteredMenu();
  const pairingSuggestions = getPairingSuggestions();

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <span className="font-serif font-semibold text-amber-900 text-lg">Hearth & Harvest</span>
                <span className="hidden sm:block text-xs text-amber-600">Artisan Bakery & Cafe</span>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                isOpen
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                {isOpen ? 'Open Now' : 'Closed'}
              </div>

              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'menu'
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  Menu
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'about'
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  Visit Us
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'gallery'
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  Gallery
                </button>
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-amber-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-800 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex gap-1 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('menu')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'menu' ? 'bg-amber-100 text-amber-900' : 'text-amber-700'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'about' ? 'bg-amber-100 text-amber-900' : 'text-amber-700'
              }`}
            >
              Visit Us
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'gallery' ? 'bg-amber-100 text-amber-900' : 'text-amber-700'
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Background (no external image dependency) */}
      <section className="relative bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-amber-700 text-sm font-medium tracking-wide uppercase mb-2">Est. 2019 · Boulder, Colorado</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-amber-950 mb-4">
            Baked fresh. Crafted with care.
          </h1>
          <p className="text-lg text-amber-800 mb-6 max-w-2xl mx-auto">
            Artisan breads and pastries made from scratch every morning using locally-sourced ingredients
            and time-honored techniques.
          </p>

          {/* Next Bake Timer */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8">
            <Timer className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-800">
              <span className="font-medium">Next fresh batch:</span> {nextBakeTime}
            </span>
          </div>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-amber-800">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Open 7am - 4pm Daily</span>
            </div>
            <div className="flex items-center gap-2 text-amber-800">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span>2847 Pearl St, Boulder</span>
            </div>
            <div className="flex items-center gap-2 text-amber-800">
              <Phone className="w-5 h-5 text-amber-600" />
              <span>(303) 555-0142</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <div className="bg-amber-800 text-amber-100 py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            <span>Locally Sourced</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span>Family Owned</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4" />
            <span>Artisan Crafted</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Baked Fresh Daily</span>
          </div>
        </div>
      </div>

      {/* Manager Mode Toggle */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <button
          onClick={() => setManagerMode(!managerMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            managerMode
              ? 'bg-amber-800 text-white'
              : 'bg-white border border-amber-200 text-amber-700 hover:border-amber-400'
          }`}
        >
          <ChefHat className="w-4 h-4" />
          Manager Mode {managerMode ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Manager Dashboard */}
      {managerMode && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-xl p-6 text-white">
            <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Operations Dashboard
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-amber-200 text-xs uppercase tracking-wide">In Stock</p>
                <p className="text-2xl font-bold">{stats.inStock}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-amber-200 text-xs uppercase tracking-wide">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-300">{stats.lowStock}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-amber-200 text-xs uppercase tracking-wide">Sold Out</p>
                <p className="text-2xl font-bold text-red-300">{stats.soldOut}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-amber-200 text-xs uppercase tracking-wide">Next Bake</p>
                <p className="text-lg font-bold">{nextBakeTime.split(' - ')[0]}</p>
              </div>
            </div>
            <p className="mt-4 text-amber-200 text-sm flex items-center gap-2">
              <Users className="w-4 h-4" />
              Click any menu item&apos;s stock badge to cycle status
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <div>
            {/* Sticky Filter Bar */}
            <div className="sticky top-16 z-40 bg-amber-50 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 border-b border-amber-200">
              {/* Category Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                {menuCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === category.id
                          ? 'bg-amber-800 text-white'
                          : 'bg-white text-amber-800 border border-amber-200 hover:border-amber-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>

              {/* Dietary Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-amber-600 font-medium uppercase tracking-wide">Filters:</span>

                {/* Vegan Toggle */}
                <button
                  onClick={() => setShowVeganOnly(!showVeganOnly)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    showVeganOnly
                      ? 'bg-green-600 text-white'
                      : 'bg-white border border-amber-200 text-amber-700 hover:border-green-400'
                  }`}
                >
                  <Leaf className="w-3 h-3" />
                  Vegan
                </button>

                {/* Allergen Exclusions */}
                {allergensList.map(allergen => (
                  <button
                    key={allergen}
                    onClick={() => {
                      setSelectedAllergens(current =>
                        current.includes(allergen)
                          ? current.filter(a => a !== allergen)
                          : [...current, allergen]
                      );
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedAllergens.includes(allergen)
                        ? 'bg-red-100 text-red-800 border border-red-300'
                        : 'bg-white border border-amber-200 text-amber-700 hover:border-amber-400'
                    }`}
                  >
                    <AlertTriangle className={`w-3 h-3 ${selectedAllergens.includes(allergen) ? 'text-red-600' : ''}`} />
                    No {allergen}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {filteredMenu.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border border-amber-100 p-5 transition-all hover:shadow-md ${
                    item.stock === 'Sold Out' ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-serif font-semibold text-amber-950">{item.name}</h3>
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                              tag === 'bestseller' ? 'bg-amber-100 text-amber-700' :
                              tag === 'seasonal' ? 'bg-orange-100 text-orange-700' :
                              tag === 'limited' ? 'bg-red-100 text-red-700' :
                              tag === 'new' ? 'bg-green-100 text-green-700' :
                              'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                        {/* Stock Status Badge */}
                        <button
                          onClick={() => managerMode && toggleStock(item.id)}
                          className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded flex items-center gap-1 ${
                            item.stock === 'In Stock' ? 'bg-green-100 text-green-700' :
                            item.stock === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          } ${managerMode ? 'cursor-pointer hover:ring-2 ring-amber-400' : ''}`}
                        >
                          {item.stock === 'In Stock' && <Check className="w-3 h-3" />}
                          {item.stock === 'Low Stock' && <AlertTriangle className="w-3 h-3" />}
                          {item.stock}
                        </button>
                      </div>
                      <p className="text-sm text-amber-700 mb-2">{item.description}</p>

                      {/* Dietary badges */}
                      {item.dietary.length > 0 && (
                        <div className="flex gap-1 mb-2">
                          {item.dietary.map(d => (
                            <span key={d} className="text-[9px] px-1.5 py-0.5 bg-green-50 text-green-700 rounded">
                              {d}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.size && <p className="text-xs text-amber-500">{item.size}</p>}
                      {item.sizes && <p className="text-xs text-amber-500">{item.sizes}</p>}
                      {item.available && <p className="text-xs text-amber-600 font-medium">{item.available}</p>}
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className="text-lg font-semibold text-amber-900">${item.price.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(item)}
                        disabled={item.stock === 'Sold Out'}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          item.stock === 'Sold Out'
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-amber-800 text-white hover:bg-amber-900'
                        }`}
                      >
                        <Plus className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMenu.length === 0 && (
              <div className="text-center py-12">
                <AlertTriangle className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                <p className="text-amber-700">No items match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedAllergens([]);
                    setShowVeganOnly(false);
                  }}
                  className="mt-4 text-amber-800 underline text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Menu Footer Note */}
            <div className="mt-8 p-4 bg-amber-100/50 rounded-lg border border-amber-200 text-center">
              <p className="text-sm text-amber-800">
                All items made fresh daily. Availability may vary. Please inform us of any allergies.
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Gluten-free and vegan options available upon request.
              </p>
            </div>
          </div>
        )}

        {/* About/Visit Tab */}
        {activeTab === 'about' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Info */}
            <div className="space-y-6">
              {/* Our Philosophy */}
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h2 className="font-serif text-xl font-semibold text-amber-950 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-amber-600" />
                  Our Philosophy
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-900">Slow Fermentation</h4>
                      <p className="text-sm text-amber-700">Our sourdough rests for 24+ hours, developing complex flavors and easier digestibility.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Leaf className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-900">Local Ingredients</h4>
                      <p className="text-sm text-amber-700">Colorado wheat, local dairy, and seasonal produce from Front Range farms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Flame className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-900">Wood-Fired Oven</h4>
                      <p className="text-sm text-amber-700">Our stone hearth oven creates the perfect crust every time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h2 className="font-serif text-xl font-semibold text-amber-950 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  Hours
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-amber-50">
                    <span className="text-amber-700">Monday - Friday</span>
                    <span className="font-medium text-amber-950">7:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-amber-50">
                    <span className="text-amber-700">Saturday</span>
                    <span className="font-medium text-amber-950">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-amber-50">
                    <span className="text-amber-700">Sunday</span>
                    <span className="font-medium text-amber-950">8:00 AM - 3:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <span className="font-semibold">Fresh bread times:</span> Sourdough at 7am, Baguettes at 7am & 2pm
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h2 className="font-serif text-xl font-semibold text-amber-950 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  Location
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-amber-950">Hearth & Harvest Bakery</p>
                    <p className="text-amber-700">2847 Pearl Street</p>
                    <p className="text-amber-700">Boulder, CO 80301</p>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <Phone className="w-4 h-4" />
                    <span>(303) 555-0142</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <Mail className="w-4 h-4" />
                    <span>hello@hearthandharvest.com</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 text-center text-sm font-medium bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href="tel:+13035550142"
                    className="flex-1 py-2.5 text-center text-sm font-medium border border-amber-300 text-amber-800 rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </div>

              {/* Our Story */}
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h2 className="font-serif text-xl font-semibold text-amber-950 mb-4">Our Story</h2>
                <div className="space-y-3 text-amber-800 text-sm leading-relaxed">
                  <p>
                    Hearth & Harvest started with a simple belief: great bread takes time. Founded in 2019 by
                    husband-and-wife team Marcus and Elena Chen, our bakery honors the slow craft of artisan baking.
                  </p>
                  <p>
                    Every loaf begins with our house-cultivated sourdough starter, &quot;Nonna,&quot; now over five years old.
                    We source flour from Colorado wheat farms and butter from local dairies.
                  </p>
                  <p>
                    From our wood-fired oven to your table, we bake with intention—because the best things in life
                    are worth waiting for.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Map & Features */}
            <div className="space-y-6">
              {/* Simulated Map */}
              <div className="bg-white rounded-xl border border-amber-100 overflow-hidden">
                <div className="aspect-[4/3] bg-amber-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-800 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-amber-900 font-semibold">2847 Pearl Street</p>
                        <p className="text-amber-700 text-sm">Boulder, CO 80301</p>
                      </div>
                    </div>
                    {/* Simulated streets */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/3 left-0 right-0 h-px bg-amber-800"></div>
                      <div className="absolute top-2/3 left-0 right-0 h-px bg-amber-800"></div>
                      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-amber-800"></div>
                      <div className="absolute left-2/3 top-0 bottom-0 w-px bg-amber-800"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-amber-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-amber-700">Pearl Street Mall area</span>
                    <span className="text-amber-600">Free 2-hour parking nearby</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <Wifi className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium text-amber-950">Free WiFi</p>
                </div>
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <Sun className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium text-amber-950">Outdoor Seating</p>
                </div>
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <Dog className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium text-amber-950">Dog Friendly Patio</p>
                </div>
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium text-amber-950">Cards & Cash</p>
                </div>
              </div>

              {/* Special Orders CTA */}
              <div className="bg-amber-800 rounded-xl p-6 text-white">
                <h3 className="font-serif font-semibold text-lg mb-2">Custom Orders & Catering</h3>
                <p className="text-amber-100 text-sm mb-4">
                  Planning an event? We offer custom cakes, bread baskets, and pastry platters for
                  weddings, corporate events, and special occasions.
                </p>
                <button className="w-full py-2.5 bg-white text-amber-900 font-medium rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Inquire About Catering
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-semibold text-amber-950 mb-2">Fresh From Our Kitchen</h2>
              <p className="text-amber-700">Follow along @hearthandharvest</p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative aspect-square bg-amber-100 rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <p className="text-amber-800/60 text-sm text-center font-medium">{post.image}</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-amber-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <div className="text-center text-white">
                      <div className="flex items-center justify-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Heart className="w-5 h-5" fill="currentColor" />
                          <span className="font-medium">{post.likes}</span>
                        </div>
                      </div>
                      <p className="text-sm text-amber-100 line-clamp-3">{post.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Follow @hearthandharvest
              </a>
            </div>

            {/* Recent Updates */}
            <div className="mt-12 p-6 bg-white rounded-xl border border-amber-100">
              <h3 className="font-serif font-semibold text-amber-950 mb-4">What&apos;s Baking This Week</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 pb-3 border-b border-amber-50">
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="text-amber-900 font-medium">Holiday Stollen is back!</p>
                    <p className="text-sm text-amber-600">Traditional German fruit bread, available through December 24th.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-amber-50">
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="text-amber-900 font-medium">New Winter Menu Items</p>
                    <p className="text-sm text-amber-600">Try our pumpkin spice scones and gingerbread loaf.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="text-amber-900 font-medium">Extended Weekend Hours</p>
                    <p className="text-sm text-amber-600">Now open until 5pm on Saturdays through the holidays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col">
            {/* Cart Header */}
            <div className="flex items-center justify-between p-4 border-b border-amber-100">
              <h2 className="font-serif text-lg font-semibold text-amber-950 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Your Order
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-amber-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-amber-800" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-12 h-12 text-amber-200 mx-auto mb-4" />
                  <p className="text-amber-700">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-amber-800 underline text-sm"
                  >
                    Continue browsing
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(({ item, quantity }) => (
                    <div key={item.id} className="flex gap-4 p-3 bg-amber-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-amber-900">{item.name}</h4>
                        <p className="text-sm text-amber-600">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-white border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors"
                        >
                          <Minus className="w-3 h-3 text-amber-800" />
                        </button>
                        <span className="w-8 text-center font-medium text-amber-900">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-white border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors"
                        >
                          <Plus className="w-3 h-3 text-amber-800" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Pairing Suggestions */}
                  {pairingSuggestions.length > 0 && (
                    <div className="mt-6 p-4 bg-amber-100/50 rounded-lg">
                      <h4 className="text-sm font-medium text-amber-800 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Pairs well with your order
                      </h4>
                      <div className="space-y-2">
                        {pairingSuggestions.map(item => (
                          <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded-lg">
                            <div>
                              <p className="text-sm font-medium text-amber-900">{item.name}</p>
                              <p className="text-xs text-amber-600">${item.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={() => addToCart(item)}
                              className="px-3 py-1 bg-amber-800 text-white text-xs rounded-lg hover:bg-amber-900 transition-colors"
                            >
                              + Add
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t border-amber-100 p-4 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="font-medium text-amber-800">Subtotal</span>
                  <span className="font-semibold text-amber-900">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-amber-600 text-center">
                  Taxes calculated at checkout
                </p>
                <button className="w-full py-3 bg-amber-800 text-white font-medium rounded-lg hover:bg-amber-900 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2 text-amber-800 text-sm hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-amber-800" />
                </div>
                <span className="font-serif font-semibold">Hearth & Harvest</span>
              </div>
              <p className="text-sm text-amber-200">
                Artisan breads and pastries, baked fresh every morning in Boulder, Colorado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Hours</h4>
              <div className="space-y-1 text-sm text-amber-200">
                <p>Mon-Fri: 7am - 4pm</p>
                <p>Saturday: 7am - 5pm</p>
                <p>Sunday: 8am - 3pm</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-1 text-sm text-amber-200">
                <p>2847 Pearl Street</p>
                <p>Boulder, CO 80301</p>
                <p>(303) 555-0142</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-amber-300">
            <p>© 2024 Hearth & Harvest Bakery. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>

          {/* Demo Attribution */}
          <div className="mt-6 pt-4 border-t border-amber-800/50 text-center">
            <p className="text-xs text-amber-400">
              Demo built for Moonlit Studios Health Tech Portfolio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
