'use client';

import { useState } from 'react';

// Menu data
const menuCategories = [
  { id: 'pastries', name: 'Pastries', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'breads', name: 'Artisan Breads', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { id: 'drinks', name: 'Coffee & Drinks', icon: 'M17 14v6m-3-3h6M6 10h2a4 4 0 014 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1a4 4 0 014-4z' },
  { id: 'specials', name: "Today's Specials", icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
];

const menuItems = {
  pastries: [
    { name: 'Classic Croissant', description: 'Buttery, flaky layers with a golden crust', price: 4.50, tags: ['bestseller'] },
    { name: 'Pain au Chocolat', description: 'Croissant dough wrapped around dark chocolate batons', price: 5.00, tags: [] },
    { name: 'Almond Croissant', description: 'Filled with almond cream, topped with sliced almonds', price: 5.50, tags: ['bestseller'] },
    { name: 'Morning Bun', description: 'Orange-scented pastry rolled in cinnamon sugar', price: 4.75, tags: [] },
    { name: 'Apple Turnover', description: 'Spiced apple filling in buttery puff pastry', price: 5.25, tags: ['seasonal'] },
    { name: 'Kouign-Amann', description: 'Caramelized Breton pastry with crispy layers', price: 5.75, tags: [] },
    { name: 'Blueberry Danish', description: 'Cream cheese filling with fresh blueberries', price: 5.00, tags: [] },
    { name: 'Chocolate Hazelnut Twist', description: 'Braided pastry with Nutella and toasted hazelnuts', price: 5.50, tags: ['bestseller'] },
  ],
  breads: [
    { name: 'Sourdough Boule', description: 'Naturally leavened with 24-hour fermentation', price: 8.00, tags: ['bestseller'], size: 'Large' },
    { name: 'Sourdough Batard', description: 'Oblong loaf, perfect for sandwiches', price: 7.00, tags: [], size: 'Medium' },
    { name: 'Multigrain Loaf', description: 'Oats, flax, sunflower seeds, and honey', price: 8.50, tags: [], size: 'Large' },
    { name: 'Olive Rosemary Focaccia', description: 'Italian flatbread with Kalamata olives', price: 9.00, tags: ['seasonal'], size: 'Half Sheet' },
    { name: 'French Baguette', description: 'Crispy crust, soft interior, classic shape', price: 4.00, tags: [], size: 'Standard' },
    { name: 'Ciabatta', description: 'Italian bread with large, airy holes', price: 5.50, tags: [], size: 'Medium' },
    { name: 'Cinnamon Raisin Swirl', description: 'Sweet bread perfect for toasting', price: 7.50, tags: [], size: 'Large' },
    { name: 'Everything Bagels', description: 'Hand-rolled, boiled, and baked fresh daily', price: 2.50, tags: ['bestseller'], size: 'Each' },
  ],
  drinks: [
    { name: 'Drip Coffee', description: 'Locally roasted, medium roast blend', price: 3.00, tags: [], sizes: 'S/M/L' },
    { name: 'Espresso', description: 'Double shot, rich and smooth', price: 3.50, tags: [], sizes: 'Single/Double' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 4.50, tags: ['bestseller'], sizes: 'S/M/L' },
    { name: 'Latte', description: 'Espresso with silky steamed milk', price: 5.00, tags: [], sizes: 'S/M/L' },
    { name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: 4.00, tags: [], sizes: 'Standard' },
    { name: 'Matcha Latte', description: 'Ceremonial grade matcha with oat milk', price: 5.50, tags: [], sizes: 'S/M/L' },
    { name: 'Hot Chocolate', description: 'Belgian chocolate with steamed milk', price: 4.50, tags: [], sizes: 'S/M/L' },
    { name: 'Fresh Orange Juice', description: 'Squeezed to order', price: 5.00, tags: [], sizes: 'Standard' },
  ],
  specials: [
    { name: 'Pumpkin Spice Scone', description: 'Seasonal favorite with maple glaze', price: 4.75, tags: ['limited'], available: 'Through December' },
    { name: 'Gingerbread Loaf', description: 'Warm spices with cream cheese frosting', price: 8.00, tags: ['limited'], available: 'Through December' },
    { name: 'Cranberry Orange Muffin', description: 'Tart cranberries with citrus zest', price: 4.25, tags: ['new'], available: 'While supplies last' },
    { name: 'Eggnog Latte', description: 'Espresso with house-made eggnog', price: 6.00, tags: ['limited'], available: 'December only' },
  ],
};

// Instagram posts (simulated)
const instagramPosts = [
  { id: 1, image: 'Fresh sourdough coming out of the oven', likes: 234, caption: 'Morning magic at the bakery. Fresh sourdough coming out of the oven.' },
  { id: 2, image: 'Croissant stack with butter visible', likes: 412, caption: '48 hours of lamination for that perfect flake.' },
  { id: 3, image: 'Latte art heart', likes: 189, caption: 'Start your morning right.' },
  { id: 4, image: 'Seasonal pastry display', likes: 356, caption: 'Holiday specials are here! Limited time only.' },
  { id: 5, image: 'Baker shaping bread', likes: 278, caption: 'Handcrafted with love, every single day.' },
  { id: 6, image: 'Fresh baguettes in basket', likes: 198, caption: 'Baguettes fresh from the oven at 7am and 2pm daily.' },
];

export default function HearthHarvestBakery() {
  const [activeCategory, setActiveCategory] = useState('pastries');
  const [activeTab, setActiveTab] = useState<'menu' | 'about' | 'gallery'>('menu');

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-amber-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-amber-900 text-lg">Hearth & Harvest</span>
                <span className="hidden sm:block text-xs text-amber-600">Artisan Bakery & Cafe</span>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 text-sm font-medium tracking-wide uppercase mb-2">Est. 2019 · Boulder, Colorado</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-amber-950 mb-4">
            Baked fresh. Crafted with care.
          </h1>
          <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
            Artisan breads and pastries made from scratch every morning using locally-sourced ingredients
            and time-honored techniques.
          </p>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-amber-800">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Open 7am - 4pm Daily</span>
            </div>
            <div className="flex items-center gap-2 text-amber-800">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>2847 Pearl St, Boulder</span>
            </div>
            <div className="flex items-center gap-2 text-amber-800">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(303) 555-0142</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <div>
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-amber-200">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-amber-800 text-white'
                      : 'bg-white text-amber-800 border border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                  </svg>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-amber-100 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-amber-950">{item.name}</h3>
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
                      </div>
                      <p className="text-sm text-amber-700 mb-2">{item.description}</p>
                      {'size' in item && (
                        <p className="text-xs text-amber-500">{item.size}</p>
                      )}
                      {'sizes' in item && (
                        <p className="text-xs text-amber-500">{item.sizes}</p>
                      )}
                      {'available' in item && (
                        <p className="text-xs text-amber-600 font-medium">{item.available}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-amber-900">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
              {/* Hours */}
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h2 className="text-xl font-semibold text-amber-950 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
                <h2 className="text-xl font-semibold text-amber-950 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-amber-950">Hearth & Harvest Bakery</p>
                    <p className="text-amber-700">2847 Pearl Street</p>
                    <p className="text-amber-700">Boulder, CO 80301</p>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(303) 555-0142</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@hearthandharvest.com</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 text-center text-sm font-medium bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors"
                  >
                    Get Directions
                  </a>
                  <a
                    href="tel:+13035550142"
                    className="flex-1 py-2.5 text-center text-sm font-medium border border-amber-300 text-amber-800 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>

              {/* Our Story */}
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h2 className="text-xl font-semibold text-amber-950 mb-4">Our Story</h2>
                <div className="space-y-3 text-amber-800 text-sm leading-relaxed">
                  <p>
                    Hearth & Harvest started with a simple belief: great bread takes time. Founded in 2019 by
                    husband-and-wife team Marcus and Elena Chen, our bakery honors the slow craft of artisan baking.
                  </p>
                  <p>
                    Every loaf begins with our house-cultivated sourdough starter, "Nonna," now over five years old.
                    We source flour from Colorado wheat farms and butter from local dairies.
                  </p>
                  <p>
                    From our wood-fired oven to your table, we bake with intention—because the best things in life
                    are worth waiting for.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="space-y-6">
              {/* Google Map Embed */}
              <div className="bg-white rounded-xl border border-amber-100 overflow-hidden">
                <div className="aspect-[4/3] bg-amber-100 relative">
                  {/* Simulated Map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-800 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
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
                  <svg className="w-8 h-8 mx-auto mb-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  <p className="text-sm font-medium text-amber-950">Free WiFi</p>
                </div>
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <p className="text-sm font-medium text-amber-950">Outdoor Seating</p>
                </div>
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm font-medium text-amber-950">Dog Friendly Patio</p>
                </div>
                <div className="bg-white rounded-xl border border-amber-100 p-4 text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <p className="text-sm font-medium text-amber-950">Cards & Cash</p>
                </div>
              </div>

              {/* Special Orders */}
              <div className="bg-amber-800 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Custom Orders & Catering</h3>
                <p className="text-amber-100 text-sm mb-4">
                  Planning an event? We offer custom cakes, bread baskets, and pastry platters for
                  weddings, corporate events, and special occasions.
                </p>
                <button className="w-full py-2.5 bg-white text-amber-900 font-medium rounded-lg hover:bg-amber-50 transition-colors">
                  Inquire About Catering
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab - Instagram Feed */}
        {activeTab === 'gallery' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-amber-950 mb-2">Fresh From Our Kitchen</h2>
              <p className="text-amber-700">Follow along @hearthandharvest</p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative aspect-square bg-amber-100 rounded-xl overflow-hidden cursor-pointer"
                >
                  {/* Placeholder for image - gradient background */}
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
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @hearthandharvest
              </a>
            </div>

            {/* Recent Updates Section */}
            <div className="mt-12 p-6 bg-white rounded-xl border border-amber-100">
              <h3 className="font-semibold text-amber-950 mb-4">What's Baking This Week</h3>
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

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <span className="font-semibold">Hearth & Harvest</span>
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
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Yelp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
