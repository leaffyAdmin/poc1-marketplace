'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { Search, ShoppingBag, User, ChevronDown, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();
  
  const cartItemsCount = items.length;

  const navigation = [
    { name: 'PLANTS', href: '/plants' },
    { name: 'POTS', href: '/pots' },
    { name: 'LOOKBOOK', href: '/lookbook' },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Leaffy @ earth"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              {/* Locations Dropdown */}
              <button className="hidden md:flex items-center text-gray-700 hover:text-green-600">
                <span className="text-sm font-medium">LOCATIONS</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* User Account */}
              <Link href="/account" className="text-gray-700 hover:text-green-600">
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <Link href="/cart" className="text-gray-700 hover:text-green-600 relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="absolute top-16 inset-x-0 bg-white border-b border-gray-200 p-4 z-40">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for plants..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        navigation={navigation}
      />
    </>
  );
};

export default Header; 