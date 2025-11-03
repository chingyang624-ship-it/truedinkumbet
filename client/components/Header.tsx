import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Slots", href: "/slots" },
    { name: "Live Casino", href: "/live-casino" },
    { name: "Esports", href: "https://truedinkumbet.com/RFSEOTDK" },
    { name: "Sports", href: "/sports" },
    { name: "Fishing", href: "/fishing" },
  ];

  return (
    <header className="bg-white">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full z-50 px-5 shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <div className="flex flex-wrap items-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden py-1 px-3"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Faab8ae3ab44140c694b79fb3807fab65?format=webp"
              alt="Menu"
              className="w-6 h-6"
            />
          </button>

          {/* Logo */}
          <a href="/" className="flex-1 md:flex-[0.25] py-1 px-2 mr-2">
            <img
              alt="Truedinkumbet"
              width="110"
              height="50"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F4dfa7c46dbc1480caa7368c3233e05a7%2Ff1962e1f3aa94494a3e4dd6698ee54f7"
              className="w-[150px] h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-[0.75] text-left">
            <ul className="flex gap-3 z-10 relative">
              {navItems.map((item) => (
                <li key={item.name} className="inline-block">
                  <a
                    href={item.href}
                    {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="font-medium text-gray-800 hover:text-gray-600 transition-colors leading-[52px]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="inline-block relative group">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-medium text-gray-800 hover:text-gray-600 transition-colors leading-[52px] flex items-center gap-1"
                >
                  Blog
                  <span className="text-xs">▼</span>
                </a>
                <ul className="absolute hidden group-hover:block bg-white top-full left-0 w-48 p-4 shadow-lg rounded-lg z-50 mt-0">
                  <li>
                    <a
                      href="/crypto-casino"
                      className="font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 transition-colors text-sm block px-3 py-2 rounded"
                    >
                      Crypto casino
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex flex-[0.25] gap-4 text-right py-2 px-2">
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
        </div>
      </div>

      {/* Mobile Side Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg overflow-y-auto pt-20">
            <nav className="p-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="block font-medium text-gray-800 hover:text-orange-500 transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#blog"
                    className="block font-medium text-gray-800 hover:text-orange-500 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <a
                        href="/crypto-casino"
                        className="block text-sm text-gray-600 hover:text-orange-500 transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Crypto casino
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="border-t border-gray-200 p-6 space-y-3">
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="block text-center py-2 text-gray-800 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="https://truedinkumbet.com/RFSEOTDK"
                className="block text-center py-2 text-white font-bold bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}


    </header>
  );
}
