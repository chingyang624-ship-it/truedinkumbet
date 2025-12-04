"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Slots", href: "/slots" },
    { name: "Live Casino", href: "/live-casino" },
    { name: "Esports", href: "https://truedinkumbet.com/RFSEOTDK" },
    { name: "Sports", href: "/sports" },
    { name: "Fishing", href: "/fishing" },
    { name: "App Download", href: "/app-download" },
  ];

  const blogItems = [
    { name: "Casino Review", href: "/blog/category/casino-review" },
    { name: "Crypto casino", href: "/crypto-casino" },
    { name: "Reviews", href: "/reviews" },
    { name: "E-Wallet Casino", href: "/e-wallet-casino" },
  ];

  return (
    <header className="bg-white">
      <div
        className="fixed top-0 w-full z-50 px-4 sm:px-5 shadow-md"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      >
        <div className="flex flex-wrap items-center justify-between min-h-[60px]">
          <Link href="/" className="py-1 px-2">
            <img
              alt="Truedinkumbet"
              width="110"
              height="50"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7"
              className="w-[120px] sm:w-[150px] h-10 sm:h-12"
            />
          </Link>

          <nav className="hidden md:flex flex-1 text-left ml-4">
            <ul className="flex gap-3 z-10 relative">
              {navItems.map((item) => (
                <li key={item.name} className="inline-block">
                  <Link
                    href={item.href}
                    {...(item.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="font-medium text-gray-800 hover:text-gray-600 transition-colors leading-[52px] text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="inline-block relative group">
                <span className="font-medium text-gray-800 leading-[52px] flex items-center gap-1 cursor-default text-sm">
                  Blog
                  <span className="text-xs">▼</span>
                </span>
                <ul className="absolute hidden group-hover:block bg-white top-full left-0 w-48 p-4 shadow-lg rounded-lg z-50 mt-0">
                  {blogItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors text-sm block px-3 py-2 rounded"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex gap-4 text-right py-2 px-2">
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
            >
              Login
            </a>
            <a
              href="https://truedinkumbet.com/RFSEOTDK"
              className="inline-block text-sm font-bold text-white bg-orange-500 rounded-lg px-3 py-2 hover:bg-orange-600 transition-all animate-bounce"
            >
              Join Now
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  {...(item.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="py-3 px-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-2">
                <button className="w-full text-left py-2 px-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  Blog
                </button>
                <div className="bg-gray-50 flex flex-col">
                  {blogItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 px-6 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            <div className="border-t border-gray-200 p-4 flex gap-2">
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="flex-1 text-center py-2 text-gray-800 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Login
              </a>
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="flex-1 text-center py-2 text-white font-bold bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
