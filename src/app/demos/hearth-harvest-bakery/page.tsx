'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock menu items
const menuCategories = [
  {
    id: 1,
    name: "Artisan Breads",
    icon: "🍞",
    items: [
      { name: "Sourdough Boule", price: "$7.50", dietary: ["vegan"], description: "Classic tangy sourdough with crispy crust" },
      { name: "Rosemary Focaccia", price: "$6.00", dietary: ["vegan"], description: "Herb-infused Italian flatbread" },
      { name: "Honey Wheat Loaf", price: "$8.00", dietary: [], description: "Soft whole wheat with local honey" },
      { name: "Cinnamon Raisin", price: "$7.00", dietary: ["vegan"], description: "Swirled with cinnamon, studded with raisins" }
    ]
  },
  {
    id: 2,
    name: "Pastries & Sweets",
    icon: "🥐",
    items: [
      { name: "Butter Croissant", price: "$4.50", dietary: [], description: "Flaky, buttery, French perfection" },
      { name: "Almond Croissant", price: "$5.50", dietary: [], description: "Filled with almond cream, topped with slivered almonds" },
      { name: "Blueberry Scone", price: "$4.00", dietary: [], description: "Tender scone bursting with fresh blueberries" },
      { name: "Chocolate Chip Cookie", price: "$3.50", dietary: ["gf"], description: "Chewy gluten-free chocolate chip cookie" }
    ]
  },
  {
    id: 3,
    name: "Coffee & Drinks",
    icon: "☕",
    items: [
      { name: "Drip Coffee", price: "$3.50", dietary: ["vegan"], description: "Local roast, bold and smooth" },
      { name: "Cappuccino", price: "$4.50", dietary: [], description: "Espresso with steamed milk foam" },
      { name: "Lavender Latte", price: "$5.50", dietary: [], description: "House specialty with lavender syrup" },
      { name: "Chai Tea", price: "$4.00", dietary: ["vegan"], description: "Spiced chai with oat milk" }
    ]
  },
  {
    id: 4,
    name: "Daily Specials",
    icon: "⭐",
    items: [
      { name: "Seasonal Fruit Tart", price: "$6.00", dietary: [], description: "Chef's choice seasonal fruit on pastry cream" },
      { name: "Quiche Lorraine", price: "$8.50", dietary: [], description: "Savory egg pie with bacon and cheese" },
      { name: "Pumpkin Spice Muffin", price: "$4.50", dietary: [], description: "Fall favorite with cream cheese frosting" }
    ]
  }
];

// Mock Instagram feed
const instagramPosts = [
  { id: 1, image: "🥖", caption: "Fresh sourdough just out of the oven!" },
  { id: 2, image: "☕", caption: "Latte art Sunday vibes" },
  { id: 3, image: "🥐", caption: "Croissant perfection" },
  { id: 4, image: "🍰", caption: "Today's special: Lemon tart" },
  { id: 5, image: "🌾", caption: "Farm-fresh ingredients" },
  { id: 6, image: "💐", caption: "Cozy corner for your morning coffee" }
];

export default function HearthHarvestBakery() {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {/* Hero Section - Mobile Responsive */}
      <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
        <div className="inline-block p-3 sm:p-4 rounded-full bg-gradient-to-br from-amber-400/20 to-green-400/20 mb-4 sm:mb-6">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pearlWhite mb-4">
          Hearth & Harvest Bakery
        </h1>
        <p className="text-base sm:text-lg text-moonlightSilver/80 max-w-3xl mx-auto mb-2">
          Farm-fresh ingredients, handcrafted with love, served with a smile
        </p>
        <p className="text-xs sm:text-sm text-moonlightSilver/60 italic">
          Westminster, CO • Open Daily 7am - 6pm
        </p>

        {/* Quick Links - Mobile Responsive */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <a href="#menu" className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 transition-colors">
            <span>📋</span>
            <span>View Menu</span>
          </a>
          <a href="#location" className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-300 hover:bg-green-500/30 transition-colors">
            <span>📍</span>
            <span>Location & Hours</span>
          </a>
          <a href="#instagram" className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 hover:bg-pink-500/30 transition-colors">
            <span>📸</span>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Menu Section - Mobile Responsive */}
      <div id="menu" className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
          Our Menu
        </h2>

        {/* Category Tabs - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                selectedCategory.id === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                  : 'bg-midnight/40 border border-moonlightSilver/20 text-moonlightSilver/80 hover:border-amber-500/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {selectedCategory.items.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-900/20 to-midnight/60 hover:border-amber-500/60 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-moonlightSilver/80">
                    {item.description}
                  </p>
                </div>
                <span className="text-lg sm:text-xl font-bold text-amber-300 ml-3">
                  {item.price}
                </span>
              </div>

              {/* Dietary Tags - Mobile Responsive */}
              {item.dietary.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.dietary.includes('vegan') && (
                    <span className="px-2 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-300 text-[0.65rem] sm:text-xs font-semibold">
                      🌱 Vegan
                    </span>
                  )}
                  {item.dietary.includes('gf') && (
                    <span className="px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[0.65rem] sm:text-xs font-semibold">
                      GF
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Daily Specials Badge */}
        {selectedCategory.id === 4 && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-center">
            <p className="text-sm sm:text-base text-amber-200">
              ⭐ <strong>Daily Specials</strong> change based on what's fresh and seasonal! Follow us on Instagram for updates.
            </p>
          </div>
        )}
      </div>

      {/* Location & Hours - Mobile Responsive Grid */}
      <div id="location" className="mb-12 sm:mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Google Maps Placeholder */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-400/30 bg-gradient-to-br from-green-900/20 to-midnight/60">
          <h3 className="text-xl sm:text-2xl font-bold text-pearlWhite mb-4">Find Us</h3>

          {/* Map Placeholder - Mobile Responsive */}
          <div className="aspect-video bg-midnight/60 rounded-xl border border-moonlightSilver/20 flex items-center justify-center mb-4">
            <div className="text-center p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">📍</span>
              </div>
              <p className="text-sm sm:text-base text-moonlightSilver/80 mb-2">
                <strong>Google Maps Integration</strong>
              </p>
              <p className="text-xs text-moonlightSilver/60">
                Set up Google Maps API to display interactive map
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2 text-sm sm:text-base">
            <p className="font-semibold text-pearlWhite">Hearth & Harvest Bakery</p>
            <p className="text-moonlightSilver/80">456 Main Street</p>
            <p className="text-moonlightSilver/80">Westminster, CO 80031</p>
            <a href="tel:7205551234" className="inline-block text-green-300 hover:text-green-200 transition-colors">
              (720) 555-1234
            </a>
          </div>
        </div>

        {/* Hours & Info */}
        <div className="space-y-6">
          {/* Hours */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-midnight/60">
            <h3 className="text-xl sm:text-2xl font-bold text-pearlWhite mb-4">Hours</h3>

            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="text-moonlightSilver/70">Monday - Friday</span>
                <span className="font-semibold text-pearlWhite">7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-moonlightSilver/70">Saturday</span>
                <span className="font-semibold text-pearlWhite">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-moonlightSilver/70">Sunday</span>
                <span className="font-semibold text-pearlWhite">8:00 AM - 2:00 PM</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-moonlightSilver/10">
              <p className="text-xs sm:text-sm text-moonlightSilver/70 italic">
                ⏰ Fresh bread comes out of the oven at 8am, 11am, and 2pm daily
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-pink-400/30 bg-gradient-to-br from-pink-900/20 to-midnight/60">
            <h3 className="text-xl sm:text-2xl font-bold text-pearlWhite mb-4">Get In Touch</h3>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">📧</span>
                <a href="mailto:hello@hearthandharvest.com" className="text-pink-300 hover:text-pink-200 transition-colors">
                  hello@hearthandharvest.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">📸</span>
                <a href="#instagram" className="text-pink-300 hover:text-pink-200 transition-colors">
                  @hearthandharvest
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">🎂</span>
                <span className="text-moonlightSilver/80">Custom orders available!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed - Mobile Responsive */}
      <div id="instagram" className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite text-center mb-6 sm:mb-8">
          Follow Us on Instagram
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square rounded-xl border-2 border-pink-400/30 bg-gradient-to-br from-pink-900/20 to-midnight/60 hover:border-pink-400/60 transition-colors cursor-pointer overflow-hidden group"
            >
              <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl group-hover:scale-110 transition-transform">
                {post.image}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all"
          >
            View Full Gallery on Instagram →
          </a>
        </div>
      </div>

      {/* Feature Highlights - Mobile Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div className="p-6 rounded-xl border-2 border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🌾</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Farm-Fresh Ingredients</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            We source locally whenever possible. Fresh flour from Colorado mills, seasonal fruits from nearby farms.
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-green-400/30 bg-gradient-to-br from-green-900/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">📸</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Instagram Integration</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Live Instagram feed keeps content fresh without manual updates. Show off daily specials and latte art!
          </p>
        </div>

        <div className="p-6 rounded-xl border-2 border-pink-400/30 bg-gradient-to-br from-pink-900/20 to-midnight/40">
          <span className="text-3xl sm:text-4xl mb-3 block">🗺️</span>
          <h3 className="text-base sm:text-lg font-bold text-pearlWhite mb-2">Google Maps Integration</h3>
          <p className="text-xs sm:text-sm text-moonlightSilver/80">
            Make it easy for customers to find you. Embedded map with directions and real-time business hours.
          </p>
        </div>
      </div>

      {/* Final CTA - Mobile Responsive */}
      <div className="p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 via-green-400/5 to-midnight/20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pearlWhite mb-4">
          Build Your Bakery or Cafe Website
        </h2>
        <p className="text-sm sm:text-base text-moonlightSilver/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          This demo showcases features perfect for local food businesses: menu display, Google Maps integration,
          Instagram feed, and warm, inviting design that feels like home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/get-quote"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-amber-500/50 hover:scale-105 transition-all text-center"
          >
            Get Your Custom Site →
          </Link>
          <Link
            href="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-amber-400/40 text-amber-300 font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-amber-400/10 transition-all text-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
